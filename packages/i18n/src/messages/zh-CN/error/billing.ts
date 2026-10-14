import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed": "服务器计划无法更改。刷新帐单并重试。",
  "error.billing.confirmMismatch": "键入服务器名称将其删除。",
  "error.billing.restartBusy": "服务器现在无法重新启动。请稍后重试。",
  "error.billing.planRequired": "本次服务器的计划结束。更新它以启动服务器。",
  // Billing errors that the desktop and web clients make.
  "error.billing.invalidRequest": "计费请求无效。",
  "error.billing.invalidResponse": "计费响应无效。",
  "error.billing.notStripePage": "计费页面不是Stripe页面。",
} as const satisfies PartialTranslation<typeof source>;
