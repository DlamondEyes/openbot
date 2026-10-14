import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/computerUse";

export const messages = {
  // Computer Use driver and permission window errors.
  "error.computerUse.noAppToDrag": "此版本的OpenBot没有可拖动的应用程序。",
  "error.computerUse.helpWindowChanged": "权限帮助窗口在拖动开始之前发生变化。",
  "error.computerUse.noAppToShow": "此版本的OpenBot没有可显示的应用程序。",
  "error.computerUse.noDriver": "此计算机没有计算机使用驱动程序。",
  "error.computerUse.socketPathTooLong": "计算机使用套接字路径是{length}字符，并且该系统允许{limit}。",
  "error.computerUse.socketDirectoryNotDirectory": "计算机使用套接字目录 {path} 不是目录。",
  "error.computerUse.socketDirectoryOtherOwner": "计算机使用套接字目录 {path} 属于另一个用户。",
  "error.computerUse.socketDirectoryShared": "计算机使用套接字目录{path}对其他用户开放。",
  "error.computerUse.socketNotReady": "它在 {seconds} 秒内未接受连接。 {reason}",
} as const satisfies PartialTranslation<typeof source>;
