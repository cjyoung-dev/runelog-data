import pino from "pino";

export const logger = pino({
	level: "info",
	browser: {
		asObject: true,
		write: (logObject) => console.log(JSON.stringify(logObject)),
	},
});
