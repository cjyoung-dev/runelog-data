import { fetchPlayerData} from './runemetrics/client';
import {getDb} from './db/client';
import {playersTable} from './db/schema';
import logger from './lib/logger';

const debug = logger('index');

export default {
	async scheduled(event, env, ctx): Promise<void> {
		const db = await getDb(env.HYPERDRIVE);
		const players = await db.select().from(playersTable);

		for (const p of players) {
			try
			{
				debug(p);
				const data = await fetchPlayerData(p.name);
				debug(data);
			}
			catch(err)
			{
				debug(err);
			}
		}
	},
} satisfies ExportedHandler<Env>
