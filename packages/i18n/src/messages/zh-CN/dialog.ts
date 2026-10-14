import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/dialog";

export const messages = {
  // Native file pickers.
  "dialog.chooseSiteDirectory": "选择静态站点目录",
  "dialog.chooseSkill": "选择技能文件夹或ZIP",
  "dialog.filter.skillPackages": "技能包",
  "dialog.filter.images": "图像",
  "dialog.filter.supportedFiles": "支持的文件",
  "dialog.filter.attachment": "附件",
  "dialog.filter.zipArchive": "ZIP存档",
  "dialog.filter.jsonDocument": "JSON文档",
  "dialog.chooseAgentExport": "选择智能体导出",
  "dialog.filter.agentExports": "智能体出口",
  "dialog.saveExportSkill": "保存导出技能",
} as const satisfies PartialTranslation<typeof source>;
