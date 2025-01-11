import * as Sentry from "@sentry/nestjs"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://db9b7583a19d32a3873dfa8ecc955a64@o4508389877088256.ingest.us.sentry.io/4508390118260736",
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
});