import {runemetricsResponseSchema, type RunemetricsResponse} from '../validation/runemetrics';

export async function fetchPlayerData(username: string): Promise<RunemetricsResponse> {
	const result = await fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${encodeURIComponent(username)}&activities=20`);

	if(!result.ok) {
		throw new Error(`${result.status} ${result.statusText}`);
	}

	const data = await result.json();

	return runemetricsResponseSchema.parse(data);
}
