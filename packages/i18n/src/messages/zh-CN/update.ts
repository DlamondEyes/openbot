import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/update";

export const messages = {
  // The app update button in Settings, one label for each updater phase.
  "update.action.check": "检查更新",
  "update.action.checking": "正在检查更新...",
  "update.action.download": "下载更新",
  "update.action.downloading": "正在下载更新...",
  "update.action.restart": "重新启动以更新",
  "update.action.restarting": "正在重新启动...",
  "update.action.retryDownload": "重试下载",
  "update.managedByHost": "由主机管理",
  "update.upToDate": "最新",

  // The provider CLI update notification.
  "update.provider.update": "更新",
  "update.provider.upToDate": "{name} 已更新",
  "update.provider.checking": "检查 {name} 更新",
  "update.provider.available": "{name} 更新可用",
  "update.provider.updating": "更新 {name}",
  "update.provider.failed": "{name} 更新失败",
  "update.provider.settingUp": "设置",
  "update.provider.interrupted": "更新被中断。再试一次。",
  "update.provider.unknownVersion": "未知版本",
  "update.provider.remoteHost": "AI服务商CLI更新在托管它们的计算机上运行。",
  "update.provider.unavailable": "AI服务商更新不可用。",
  "update.provider.downloadsUnavailable": "AI服务商下载不可用。",
  "update.provider.startFailed": "更新无法开始。再试一次。",
  "update.provider.showDetails": "显示详细信息",
  "update.provider.hideDetails": "隐藏详细信息",

  // An update that an admin of this server asked for. {name} is the admin.
  "update.scheduled.title": "{name} 安排了OpenBot更新",
  // The same notice when "Install updates automatically" scheduled the restart.
  "update.scheduled.automaticTitle": "OpenBot安装更新",
  "update.scheduled.whenIdle": "OpenBot在智能体空闲时重新启动。",
  "update.scheduled.now": "OpenBot下载更新后将重新启动。",
  "update.scheduled.cancel": "取消更新",
  "update.scheduled.cancelFailed": "无法取消更新。",

  // A restart that the user of this computer asked for. It waits until no work runs.
  "update.idleRestart.relaunchTitle": "OpenBot在智能体空闲时重新启动",
  "update.idleRestart.updateTitle": "OpenBot在智能体空闲时安装更新",
  "update.idleRestart.description": "新的例程运行等待直到重新启动。",
  "update.idleRestart.waitingFor": "等待{reasons}。",
  "update.idleRestart.cancel": "取消重启",
  "update.idleRestart.cancelFailed": "无法取消重新启动。",
  "update.idleRestart.requestFailed": "无法安排重新启动。",
  "update.idleRestart.failedTitle": "OpenBot未重启",

  // The "What's new" dialog after an app update.
  "update.whatsNew.title": "OpenBot的新功能",
  "update.whatsNew.description": "该版本OpenBot的新功能和变化。",
  "update.whatsNew.version": "版本 {version}",
  "update.whatsNew.updatedFrom": "从 {from} 更新为 {to}",
  "update.whatsNew.group.added": "新",
  "update.whatsNew.group.changed": "改进",
  "update.whatsNew.group.fixed": "已修复",
  "update.whatsNew.notices": "更新后执行此操作",
  "update.whatsNew.showFixes": { one: "显示 {count} 修复", other: "显示 {count} 修复" },
  "update.whatsNew.hideFixes": "隐藏修复",
  "update.whatsNew.loading": "正在加载发行说明...",
  "update.whatsNew.failed.title": "发行说明未加载",
  "update.whatsNew.failed.body": "确保您在线并重试。完整的变更日志还显示了所有更改。",
  "update.whatsNew.empty.title": "此版本中没有新功能",
  "update.whatsNew.empty.body": "此版本没有可在此处显示的注释。完整的变更日志显示了所有更改。",
  "update.whatsNew.changelog": "完整变更日志",
  "update.whatsNew.done": "知道了",
} as const satisfies PartialTranslation<typeof source>;
