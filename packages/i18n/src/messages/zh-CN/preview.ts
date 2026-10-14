import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/preview";

export const messages = {
  "preview.panel.label": "文件预览",
  "preview.panel.resize": "调整文件预览大小",
  "preview.panel.copy": "复制文件文本",
  "preview.panel.openExternally": "从外部打开文件",
  "preview.panel.download": "下载文件",
  "preview.panel.reveal": "在Finder中显示文件",
  "preview.panel.close": "关闭文件预览",
  "preview.panel.back": "返回",
  "preview.panel.rawMarkdown": "显示Markdown源",
  "preview.panel.rawHtml": "显示HTML源",
  "preview.panel.wrapLines": "换行长线",
  "preview.folder.empty": "此文件夹为空。",
  "preview.folder.truncated": "仅显示前 {limit} 项目。",
  "preview.truncated": "预览在 {limit} 个字符后被截断。",
  "preview.unavailable": "预览不可用。",
  "preview.unsupported.title": "预览不可用",
  "preview.unsupported.description": "此文件类型可以在其默认应用程序中打开。",
  "preview.unsupported.openExternally": "外部打开",
  "preview.spreadsheet.readFailed": "无法读取此电子表格。",
  "preview.spreadsheet.truncated": "预览仅限于前 {rows} 行和 {columns} 列。",
} as const satisfies PartialTranslation<typeof source>;
