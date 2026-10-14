import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/attachment";

export const messages = {
  "attachment.openFile": "打开文件",
  "attachment.preview": "预览{name}",
  "attachment.notFound": "找不到文件",
  "attachment.download": "下载{name}",
  "attachment.open": "打开{name}",
  "attachment.loadMedia": "播放{name}",
  "attachment.previewUnavailable": "预览不可用。",
  "attachment.error.preview": "无法预览 {name}。再试一次。",
  "attachment.error.download": "无法下载附件。再试一次。",
  "attachment.error.open": "无法打开或保存此附件。再试一次。",
  "attachment.error.openFile": "无法打开此文件。再试一次。",
  "attachment.error.fileFallback": "文件",
  "attachment.error.fileNotFound": "在此路径中找不到“{name}”。它可能已被移动或删除。",
  "attachment.error.previewFile": "无法预览“{name}”。再试一次。",
} as const satisfies PartialTranslation<typeof source>;
