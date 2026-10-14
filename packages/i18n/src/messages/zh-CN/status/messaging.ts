import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/messaging";

export const messages = {
  // Text that OpenBot posts in a Slack conversation. Slack users read it. It names no agent: in
  // Slack, every answer comes from OpenBot.
  "status.messaging.working": "正在努力……",
  "status.messaging.queued": "等待：OpenBot正在处理另一个请求。答案就在这里。",
  "status.messaging.busy": "等待的请求太多。稍后再试。",
  "status.messaging.failed": "OpenBot无法完成此请求。 OpenBot主机有详细信息。",
  "status.messaging.noAnswer": "OpenBot完成，没有书面答复。",
  "status.messaging.noAgent": "目前还没有智能体可以在这里回答。在OpenBot中添加Slack Orchestrator。",
  "status.messaging.delegated": "智能体正在处理它。答案就在这里。",
  "status.messaging.stopped": "已停止。",
  "status.messaging.stop": "停止",
  "status.messaging.approvalTitle": "OpenBot请求批准才能继续。",
  "status.messaging.approvalCommand": "运行命令",
  "status.messaging.approvalFileChange": "更改文件",
  "status.messaging.approvalPermissions": "获取更多权限",
  "status.messaging.approve": "批准",
  "status.messaging.deny": "拒绝",
  "status.messaging.approvedBy": "经{user}批准。",
  "status.messaging.deniedBy": "被{user}拒绝。",
  "status.messaging.answeredOnHost": "在OpenBot主机上回答。",
  "status.messaging.requestInactive": "该请求不再有效。",
  "status.messaging.onlyRequester": "只有{user}可以做到这一点。 OpenBot主机也可以应答。",
  "status.messaging.hostOnly": "只有OpenBot主机可以应答此请求。",
  "status.messaging.filesSkipped": "某些文件未发送：{names}。",
  // The name and title of the agent that OpenBot adds to answer in Slack. The user can rename it.
  "status.messaging.orchestratorName": "Slack Orchestrator",
  "status.messaging.orchestratorTitle": "在Slack中回答并询问团队",
  // The same texts for Discord. Discord users read the first one.
  "status.messaging.discordNoAgent": "目前还没有智能体可以在这里回答。在OpenBot中添加Discord Orchestrator。",
  "status.messaging.discordOrchestratorName": "Discord协调器",
  "status.messaging.discordOrchestratorTitle": "在Discord中回答并询问团队",
  // The sidebar section that OpenBot puts the Slack Orchestrator in. The user can rename it.
  "status.messaging.integrationsSection": "集成",
  // The page a development Slack install ends on.
  "status.messaging.signInReceived": "OpenBot收到了Slack安装。您可以关闭此选项卡。",
  "status.messaging.signInUnknown": "OpenBot未启动此Slack安装。在OpenBot中再次启动。",
  // Text that OpenBot posts in a Telegram chat, and the Telegram Orchestrator agent. Telegram users
  // read the posts. The user can rename the agent.
  "status.messaging.telegramNoAgent": "目前还没有智能体可以在这里回答。在OpenBot中添加Telegram Orchestrator。",
  "status.messaging.telegramLinked": "OpenBot已连接到此聊天。提及{bot}或回复OpenBot的消息询问智能体。",
  "status.messaging.telegramOrchestratorName": "电报协调器",
  "status.messaging.telegramOrchestratorTitle": "在Telegram中回答并询问团队",
} as const satisfies PartialTranslation<typeof source>;
