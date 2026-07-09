import { z } from "zod";

export const playerSchema = z.object({
	name: z.string(),
});

export type Player = z.infer<typeof playerSchema>;

export const activitySchema = z.object({
	date: z.string().transform((d) => runemetricsDate(d)),
	details: z.string(),
	text: z.string()
});

export type Activity = z.infer<typeof activitySchema>;

export const runemetricsResponseSchema = playerSchema.extend({
	activities: z.array(activitySchema),
});

export type RunemetricsResponse = z.infer<typeof runemetricsResponseSchema>;

const runemetricsDate = (dateStr: string) => {

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const [date, time] = dateStr.split(' ');

	const [hours, minutes] = time.split(':');

	const [day, abbrevMonth, year] = date.split('-');
	const month = months.indexOf(abbrevMonth);

	if(month === -1){
		throw new Error("Invalid date");
	}

	return new Date(Date.UTC(Number(year), month, Number(day), Number(hours), Number(minutes)));
}
