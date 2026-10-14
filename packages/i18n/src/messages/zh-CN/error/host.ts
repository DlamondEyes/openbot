import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/host";

export const messages = {
  // Errors from host setup, publishing, and host maintenance.
  "error.host.iceServersMissing": "远程Signal未提供ICE服务器。",
  "error.host.webRtcNotConfigured": "WebRTC主机服务未配置。",
  "error.host.runtimeNotInstalled": "未安装远程桌面运行时。",
  "error.host.setupUnavailable": "权限设置不可用。",
  "error.host.accountChangedDuringUpdate": "更新此服务器时，登录帐户发生更改。",
  "error.host.nameBeforePublish": "在发布之前将此命名为OpenBot。",
  "error.host.memberNotFound": "远程成员不存在。",
  "error.host.publishBeforeInvite": "在创建邀请之前公开此OpenBot。",
  "error.host.teamAccessUnavailable": "您的团队访问权限不可用。",
  "error.host.ownerIdentityUnavailable": "主机所有者身份不可用。",
  "error.host.reserveAddressFailed": "无法保留公共地址。",
  "error.host.publishFailed": "此OpenBot无法发布。",
  "error.host.mobileConnectPublishFailed": "无法针对Mobile Connect发布此OpenBot。",
  "error.host.mobileConnectHostChanged": "Mobile Connect主机已更改。再试一次。",
  "error.host.noServer": "此计算机没有可更改的服务器。",
  "error.host.identityLocalOnly": "服务器名称和徽标只能在运行它的计算机上更改。",
  "error.host.maintenanceInterrupted": "主机维护中断。重试之前验证应用程序并重置主机状态。",
  "error.host.updateFailed": "{phase} 期间主机更新失败。在重置状态之前验证捆绑包所有权、签名、租户状态和可用磁盘空间。",
  "error.host.tenantsNotIdle": "租户在两小时内没有闲置五分钟。",
  "error.host.tenantShutdownTimeout": "租户关闭超时。没有开始更换应用程序。",
  "error.host.tenantHealthMissing": "重启后租户健康报告丢失或不健康。在下次更新之前检查租户会话。",
} as const satisfies PartialTranslation<typeof source>;
