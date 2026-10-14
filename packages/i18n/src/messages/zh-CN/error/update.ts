import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/update";

export const messages = {
  // Updater state the user reads.
  "error.update.unsupported": "已安装的桌面版本中提供了更新。",
  "error.update.notReady": "更新尚未准备好安装。",
  "error.update.restartFailed": "OpenBot无法重新启动以安装更新。",
  "error.update.downloadStalled": "更新下载停止响应。再试一次。",
  "error.update.installFailed": "无法安装更新。退出并重新打开OpenBot，然后重试。",
  "error.update.downloadFailed": "无法下载更新。再试一次。",
  "error.update.checkFailed": "无法检查更新。再试一次。",
  "error.update.checkStalled": "更新检查停止响应。再试一次。",
  "error.update.checkOffline": "无法访问更新服务。检查您的互联网连接，然后重试。",
  "error.update.checkUnavailable": "更新服务没有应答。 OpenBot会在几分钟后自行再次尝试。",
  "error.update.checkNoRelease": "未找到此平台的已发布更新。 OpenBot会在几分钟后自行再次尝试。",
  "error.update.managedByHost": "此Mac上的更新由主机安装。在主机维护运行之前，更新将保持就绪状态。",
  "error.update.siblingSession":
    "另一个OpenBot会话仍在从此应用程序运行。首先停止所有其他macOS用户帐户中的OpenBot，然后再次安装更新。",
  "error.update.siblingSessionSameAccount": "另一个OpenBot进程仍在该用户帐户中运行。退出，然后再次安装更新。",
  "error.update.siblingCheckFailed": "无法验证其他OpenBot会话。安装前重试。",
  // A joined server's admin reads these from the host.
  "error.update.remoteDisabled": "服务器管理员的更新在此计算机上已关闭。",
  "error.update.restartStarted": "OpenBot已重新启动以安装更新。",
  "error.update.alreadyRestarting": "OpenBot已重新启动。",
} as const satisfies PartialTranslation<typeof source>;
