import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/messaging";

export const messages = {
  // What the user can do about a Slack workspace connection that stopped.
  "messaging.help.invalid_token": "Slack不再接受此工作区中的OpenBot。它可能已被卸载。再次连接工作区。",
  "messaging.help.secret_storage_unavailable": "OpenBot无法读取此计算机上保存的令牌。断开工作区，然后重新连接。",
  "messaging.help.relay_unavailable":
    "OpenBot无法在此计算机上接收Slack事件。登录，在服务器设置中为此计算机命名，并保持OpenBot打开。",
  // The same help for a Discord server connection.
  "messaging.discordHelp.invalid_token":
    "Discord在此Discord服务器中不再接受OpenBot。它可能已被删除。再次连接Discord服务器。",
  "messaging.discordHelp.secret_storage_unavailable":
    "OpenBot无法读取此计算机上保存的令牌。断开Discord服务器，然后重新连接。",
  "messaging.discordHelp.relay_unavailable":
    "OpenBot无法在此计算机上接收Discord事件。登录，在服务器设置中为此计算机命名，并保持OpenBot打开。",
} as const satisfies PartialTranslation<typeof source>;
