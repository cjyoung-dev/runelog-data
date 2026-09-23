import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres';

export async function getDb(hyperdriveBinding: Hyperdrive) {
	const client = postgres(hyperdriveBinding.connectionString, {
		max:5,
		fetch_types: false,
	});
	return drizzle(client);
}
