import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/computerUse";

export const messages = {
  // Computer Use driver status.
  "status.computerUse.driverNotStarted": "计算机使用驱动程序未启动。 {reason}",
  "status.computerUse.driverStoppedBeforeAnswer": "计算机使用驱动程序在应答之前停止。",
  "status.computerUse.driverNoAnswer": "计算机使用驱动程序没有应答。 {reason}",
  "status.computerUse.driverStopped": "计算机使用驱动程序已停止。",
  "status.computerUse.unsupported": "计算机使用可在macOS、Windows和Linux上使用。",
  "status.computerUse.driverMissing": "此版本的OpenBot不包含计算机使用驱动程序。",
  // Computer Use progress on the agent's activity line.
  "status.computerUse.progressActing": "在此计算机上使用应用程序...",
  "status.computerUse.progressDeciding": "决定应用程序的下一步...",
} as const satisfies PartialTranslation<typeof source>;
