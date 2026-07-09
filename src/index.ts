import {logger} from './lib/logger';
import * as Sentry from '@sentry/cloudflare'

export default Sentry.withSentry(
	(env) => ({
		dsn: env.SENTRY_DSN,
		tracesSampleRate: 1.0,
	}),
	{
		async scheduled(event, env, ctx): Promise<void> {
			logger.info('worker woke up')
		},
	} satisfies ExportedHandler<Env>
);
