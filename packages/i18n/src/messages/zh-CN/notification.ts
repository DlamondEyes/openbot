import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/notification";

export const messages = {
  // Desktop notifications, raised by the main process while the window may be closed, and browser
  // notifications, raised by the web client while its tab is open.
  "notification.needsInput": "需要您的输入。",
  "notification.needsApproval": "需要您的批准。",
  "notification.needsBrowserStep": "需要您在浏览器中完成一个步骤。",
  "notification.needsApprovalFor": "需要您的批准：{action}",
  "notification.finished": "工作完成。",
  "notification.failed": "因错误而停止。",
  "notification.usageLimit.title": "{provider}账户已达到上限",
  "notification.usageLimit.body": {
    one: "{count} 智能体 等待。 OpenBot 稍后再试。",
    other: "{count} 智能体 等等。 OpenBot 稍后再试。",
  },
  "notification.usageLimit.bodyResets": {
    one: "{count} 智能体 等待。重置 {reset}。",
    other: "{count} 智能体 等等。重置 {reset}。",
  },
  "notification.test": "通知正在运行。",
  "notification.welcome": "OpenBot当智能体需要您时会在这里告诉您。",
  // The toast region in each window.
  "notification.toast.region": "通知",
  "notification.toast.close": "关闭通知",
} as const satisfies PartialTranslation<typeof source>;
