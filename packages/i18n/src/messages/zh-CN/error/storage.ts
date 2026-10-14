import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/storage";

export const messages = {
  // Storage errors.
  "error.storage.unsupported": "此服务器不支持存储。",
  "error.storage.agentMissing": "智能体不存在。",
} as const satisfies PartialTranslation<typeof source>;
