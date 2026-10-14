import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  // The one native error box: the app could not start, so no renderer exists to show it.
  "startup.failedTitle": "OpenBot无法启动",
  "startup.failedBody": "{message}\n\n您的本地数据未被重置或覆盖。有关恢复步骤，请参阅故障排除指南。",
} as const satisfies PartialTranslation<typeof source>;
