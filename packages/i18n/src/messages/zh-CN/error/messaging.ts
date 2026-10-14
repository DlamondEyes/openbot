import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/messaging";

export const messages = {
  // Errors of a Slack workspace connection, which the host sends.
  "error.messaging.notConnected": "此Slack工作区未连接。",
  "error.messaging.unsupported": "此计算机无法连接到Slack。",
  "error.messaging.relayUnavailable": "OpenBot无法在此计算机上接收Slack事件。登录，为该计算机命名，然后重试。",
  // Errors of a Discord server connection, which the host sends.
  "error.messaging.discordNotConnected": "此Discord服务器未连接。",
  "error.messaging.discordUnsupported": "此计算机无法连接到Discord。",
  "error.messaging.discordRelayUnavailable": "OpenBot无法在此计算机上接收Discord事件。登录，为该计算机命名，然后重试。",
  // Errors of a Telegram chat connection, which the host sends.
  "error.messaging.telegramNotConnected": "此Telegram聊天未连接。",
  "error.messaging.telegramUnsupported": "此计算机无法连接到Telegram。",
  "error.messaging.telegramRelayUnavailable": "OpenBot无法访问此计算机上的Telegram。登录，为该计算机命名，然后重试。",
  // The agent gets this when a connected workspace has too many saved facts.
  "error.messaging.memoryLimit": "已连接的工作区最多可有 {limit} 条记忆。请先删除一条。",
} as const satisfies PartialTranslation<typeof source>;
