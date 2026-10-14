import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/agent";

export const messages = {
  "status.agent.claudeWriteOutside": "在智能体的工作区、共享文件夹和临时文件夹之外写入{path}。",
  "status.agent.contextCleared": "上下文已清除。新的聊天从这里开始。",
  "status.agent.marketplaceSuggested": "推荐了一个Marketplace应用程序：{app}。",
} as const satisfies PartialTranslation<typeof source>;
