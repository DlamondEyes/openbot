import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/connector";

export const messages = {
  // The built-in GitHub connection: the device flow, the token refresh and the stored file.
  "error.connector.githubUnavailable": "此版本的OpenBot没有GitHub应用程序。",
  "error.connector.githubDenied": "GitHub登录被拒绝。",
  "error.connector.githubCodeExpired": "GitHub代码已过期。再次连接GitHub。",
  "error.connector.githubDeviceFlowDisabled": "GitHub应用程序不允许设备登录。",
  "error.connector.githubClientUnknown": "GitHub不知道此GitHub应用程序的客户端ID。",
  "error.connector.githubUnexpected": "GitHub发送了意外的回复：{detail}",
  "error.connector.githubUnreachable": "OpenBot无法到达GitHub: {detail}",
  "error.connector.githubExpired": "GitHub连接已过期。再次连接GitHub。",
  "error.connector.githubFileUnreadable": "GitHub连接文件不可读。",
  "error.connector.githubFileTooLarge": "GitHub连接文件太大。",
  // The 1Password connection: the CLI that creates the service account, the token and the stored file.
  "error.connector.onePasswordCliMissing":
    "OpenBot找不到1Password CLI。安装它并在1Password应用程序中打开其集成，或使用服务帐户令牌。",
  "error.connector.onePasswordCliInstallFailed": "OpenBot无法安装1Password CLI。检查互联网连接，然后重试。",
  "error.connector.onePasswordCliSignedOut": "1Password CLI未登录。在1Password应用程序中打开其集成，然后再次连接。",
  "error.connector.onePasswordCliFailed": "1Password CLI失败：{detail}",
  "error.connector.onePasswordUnexpected": "1Password发送了意外的回复：{detail}",
  "error.connector.onePasswordTokenRejected": "1密码不接受服务帐户令牌。",
  "error.connector.onePasswordNoVault": "服务帐户无法读取保管库。授予其访问保管库的权限，然后重试。",
  "error.connector.onePasswordFileUnreadable": "1Password连接文件不可读。",
  "error.connector.onePasswordFileTooLarge": "1Password连接文件太大。",
  "error.connector.bitwardenFailed":
    "无法读取Bitwarden。安装bw CLI，登录，解锁，然后创建一个名为Shared with OpenBot的文件夹。使用新的会话密钥进行连接。",
} as const satisfies PartialTranslation<typeof source>;
