import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/attachment";

export const messages = {
  // Attachment and file preview errors.
  "error.attachment.notFound": "找不到附件。",
  "error.attachment.fileTooLarge": "文件超出100 MB限制。",
  "error.attachment.totalTooLarge": "附件超过250 MB的总限制。",
  "error.attachment.unavailable": "此文件不再可用。",
  "error.attachment.tooMany": "最多选择 {limit} 文件。",
  "error.attachment.mediaUnsupported": "此服务器不支持MP3或MOV附件。在主机上更新OpenBot并重试。",
  "error.attachment.emlUnsupported": "此服务器不支持EML附件。在主机上更新OpenBot并重试。",
  "error.attachment.previewTooLarge": "文件超出100 MB限制。",
} as const satisfies PartialTranslation<typeof source>;
