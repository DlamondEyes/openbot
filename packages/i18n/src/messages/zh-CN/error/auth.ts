import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/auth";

export const messages = {
  // Errors from the OpenBot account service.
  "error.auth.serviceUnavailable": "OpenBot无法访问帐户服务。检查API是否正在运行，然后重试。",
  "error.auth.networkBlocked":
    "此网络上的防火墙或代理阻止了OpenBot到达 {host}。请您的网络管理员允许 {host}，然后重试。",
  "error.auth.signInFirst": "首先登录OpenBot。",
  "error.auth.signInRequired": "需要登录。",
  "error.auth.accountChangedDuringRegister": "注册此服务器时，登录帐户发生更改。",
  "error.auth.hostCredentialUnavailable": "远程主机凭据不可用。重新注册主机。",
  "error.auth.codeNotVerified": "无法验证登录代码。",
  "error.auth.serviceError": "帐户服务返回错误。",
  "error.auth.serviceUnreachable": "OpenBot无法访问帐户服务。检查您的连接，然后重试。",
  "error.auth.serviceTimeout": "账户服务未及时回复。再试一次。",
  "error.auth.serviceStatus": "帐户服务返回错误 ({status})。稍后再试。",
  "error.auth.invalidHostedServer": "帐户服务返回无效的托管服务器。",
  "error.auth.codeNotSent": "OpenBot无法发送登录代码。",
  "error.auth.deliveryTimeout": "OpenBot无法及时确认交货。代码可能仍会到达；再次发送前请检查递送情况。",
  "error.auth.deliveryInterrupted": "在OpenBot确认发送之前连接结束。检查递送以避免发送另一个代码。",
  "error.auth.deliveryUnknown": "OpenBot无法确认登录代码是否已发送。再次发送前请检查递送情况。",
} as const satisfies PartialTranslation<typeof source>;
