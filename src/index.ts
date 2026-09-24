import { fetchPlayerData} from './runemetrics/client';
import {getDb} from './db/client';
import { activitiesTable, playersTable } from './db/schema';
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
			debug('Error while running players query', err);
			return;
		}

		for (const p of players) {
			try {
				const data = await fetchPlayerData(p.name);

				const rows = data.activities.map(a => ({
					...a,
					playerId: p.id,
				}))

				const insert = await db
					.insert(activitiesTable)
					.values(rows)
					.onConflictDoNothing({target:[activitiesTable.playerId, activitiesTable.date, activitiesTable.text]})
					.returning();

				if (insert.length > 0) {
					for(const r of insert) {
						await env.ACTIVITY_QUEUE.send({...r, name: p.name});
					}
				}
			}
			catch(err) {
				debug(`Error while fetching ${p.name}`, err);
			}
		}
	}
} satisfies ExportedHandler<Env>
