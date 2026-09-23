import { fetchPlayerData} from './runemetrics/client';
import {getDb} from './db/client';
import {playersTable} from './db/schema';
import logger from './lib/logger';

const debug = logger('index');

export default {
	async scheduled(event, env, ctx): Promise<void> {
		const db = await getDb(env.HYPERDRIVE);

		let players;
		try {
			players = await db.select().from(playersTable);
		}
		catch (err) {
			debug('Error while running player query', err);
			return;
		}

		for (const p of players) {
			try {
				debug(p);
				const data = await fetchPlayerData(p.name);
				debug(data);
			}
			catch(err) {
				debug(`Error while fetching ${p.name}`, err);
			}
		}
	}
} satisfies ExportedHandler<Env>
