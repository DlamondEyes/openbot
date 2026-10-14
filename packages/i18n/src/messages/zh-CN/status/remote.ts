import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/remote";

export const messages = {
  // Status lines of remote desktop setup and remote connection recovery.
  "status.remote.setupMacOnly": "权限设置可在macOS上进行。",
  "status.remote.setupInstallHost": "安装远程桌面主机组件，然后再次检查。",
  "status.remote.setupUpdateRuntime": "更新远程桌面运行时以检查macOS权限。",
  "status.remote.setupCheckFailed": "Sunshine无法完成权限检查。检查主机会话，然后重试。",
  "status.remote.setupServiceFailed": "远程桌面服务无法启动。检查此macOS用户是否具有活动的GUI会话。",
  "status.remote.connectingSunshine": "正在通过 Sunshine 连接……",
  "status.remote.switchingMonitor": "切换共享显示器...",
  "status.remote.controlConnected": "已连接遥控器。",
  "status.remote.controlFailed": "远程控制失败。",
  "status.remote.stagePreferences": "正在加载本地聊天首选项：{reason}",
  "status.remote.stageConnection": "连接到桌面：{reason}",
  "status.remote.stageCompatibility": "检查桌面兼容性：{reason}",
  "status.remote.stageAgents": "加载智能体：{reason}",
  "status.remote.stageReads": "加载读取状态：{reason}",
  "status.remote.suspendedDetail": "连接前更新OpenBot移动版或桌面应用程序。\n{detail}",
  "status.remote.cooldownDetail": "{limit} 尝试后连接失败。在 {minutes}:{seconds} 中重试。\n{detail}",
  "status.remote.cooldown": "{limit} 尝试后连接失败。在 {minutes}:{seconds} 中重试。",
  "status.remote.connectionLostDetail": {
    one: "连接丢失。在 {count} 内重试。\n{detail}",
    other: "连接丢失。在 {count} 内重试。\n{detail}",
  },
  "status.remote.connectionLost": {
    one: "连接丢失。在 {count} 内重试。",
    other: "连接丢失。在 {count} 内重试。",
  },
  "status.remote.attemptFailedDetail": {
    one: "连接尝试失败。在 {count} 内重试。\n{detail}",
    other: "连接尝试失败。在 {count} 内重试。\n{detail}",
  },
  "status.remote.attemptFailed": {
    one: "连接尝试失败。在 {count} 内重试。",
    other: "连接尝试失败。在 {count} 内重试。",
  },
  "status.remote.reconnectingDetail": {
    one: "重新连接{attempt}/{count}\n{detail}",
    other: "重新连接{attempt}/{count}\n{detail}",
  },
  "status.remote.reconnecting": { one: "重新连接{attempt}/{count}", other: "重新连接{attempt}/{count}" },
} as const satisfies PartialTranslation<typeof source>;
