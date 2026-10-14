import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/mcp";

export const messages = {
  // MCP sign-in errors, and the sign-in page in the browser.
  "error.mcp.redirectByName": "无法通过名称访问该地址。",
  "error.mcp.redirectGetOnly": "此地址仅响应GET。",
  "error.mcp.redirectNotSignIn": "此地址不是登录的一部分。",
  "error.mcp.redirectRefused": "登录被拒绝。返回OpenBot并重试。",
  "error.mcp.redirectNoSignIn": "没有登录等待此操作。可能已经结束了。",
  "error.mcp.redirectSignedIn": "OpenBot已登录。您可以关闭此窗口。",
  "error.mcp.signInFileUnreadable": "MCP登录文件不可读。",
  "error.mcp.signInFileTooLarge": "MCP登录文件太大。",
  "error.mcp.unsupported": "MCP服务器不受此服务器支持。",
  "error.mcp.signInOnHost": "登录到MCP服务器仅适用于主机上的OpenBot。",
  "error.mcp.signInAppUnsupported": "此服务器不支持登录应用程序。在主机上更新OpenBot。",
  "error.mcp.redirectRelayed": "OpenBot将登录发送到服务器。您可以关闭此窗口。",
  "error.mcp.relayEnded": "本次登录结束。重新开始吧。",
  "error.mcp.relayNoState": "服务器的登录页面不保护其返回地址，因此OpenBot不会在此计算机上打开它。",
  "error.mcp.relayAddressInvalid": "这不是本次登录结束时的地址。从浏览器复制完整地址。",
} as const satisfies PartialTranslation<typeof source>;
