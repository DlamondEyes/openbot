import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/sharedTable";

export const messages = {
  "sharedTable.title": "表格",
  "sharedTable.description": "智能体在任务之间保留什么，以及启动每组记录的智能体",
  "sharedTable.close": "关闭表格",
  "sharedTable.loading": "正在加载表格...",
  "sharedTable.empty": "尚无表格。当任务需要轮流之间的记录时，智能体会自行生成一个，并且每个智能体都可以使用它。",
  "sharedTable.loadFailed": "无法加载表。",
  "sharedTable.deleteFailed": "无法删除此内容。",
  "sharedTable.madeOutside": "在OpenBot之外制作·任何智能体都可以删除它",
  "sharedTable.keptBy": "由{name}保存",
  "sharedTable.keptByDeleted": "由不再存在的智能体保存",
  "sharedTable.deleteName": "删除{name}",
  "sharedTable.confirmDelete": "删除每个智能体的此项吗？记录无法恢复。",
  "sharedTable.notCounted": "未计算在内",
  "sharedTable.records": { one: "{count}记录", other: "{count} 记录" },
} as const satisfies PartialTranslation<typeof source>;
