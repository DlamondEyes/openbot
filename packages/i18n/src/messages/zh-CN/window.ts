import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  // Native window titles.
  "window.localHostTitle": "OpenBot本地主机",
  "window.localClientTitle": "OpenBot本地客户端",
  "window.computerUsePermissionTitle": "打开计算机使用",
} as const satisfies PartialTranslation<typeof source>;
