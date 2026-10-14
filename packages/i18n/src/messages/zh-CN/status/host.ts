import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  // Status lines of the WebRTC host.
  "status.host.registered": "注册了此OpenBot以进行WebRTC访问。",
  "status.host.identityUpdated": "服务器身份已更新。",
  "status.host.starting": "正在启动WebRTC主机...",
  "status.host.ready": "此OpenBot已准备好进行WebRTC连接。",
  "status.host.stopping": "将这个OpenBot设为私有……",
  "status.host.private": "此OpenBot是私有的。",
} as const satisfies PartialTranslation<typeof source>;
