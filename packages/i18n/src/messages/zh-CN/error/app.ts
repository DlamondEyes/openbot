import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/app";

export const messages = {
  // Errors from app, notification, and secret storage actions.
  "error.app.externalLinkProtocol": "只有HTTP(S) 链接可以在外部浏览器中打开。",
  "error.app.notificationsUnsupported": "此系统不支持桌面通知。",
  "error.app.notificationSettingsMissing": "该系统没有通知设置页面。",
  "error.app.notReady": "OpenBot未准备好。",
  "error.app.macSecureStorageUnavailable": "macOS安全存储不可用。",
  "error.app.secretStorageUnavailable": "系统机密存储不可用。",
  "error.app.remoteIdentityUnavailable": "远程主机身份不可用。",
  "error.app.iceServersMissing": "远程Signal尚未提供ICE服务器。",
  "error.app.finishLocalTest": "切换显示之前完成本地测试。",
} as const satisfies PartialTranslation<typeof source>;
