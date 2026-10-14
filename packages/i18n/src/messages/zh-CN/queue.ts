import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/queue";

export const messages = {
  "queue.label": "消息队列",
  "queue.moved": "已将排队消息移至 {total} 的位置 {position}。",
  "queue.attachment": "附件",
  "queue.hold.named": "等待 - {name} 正在 {channel} 中工作",
  "queue.hold.unnamed": "等待 - 此智能体正在 {channel} 中工作",
  "queue.item.label": "排队消息 {position}: {preview}",
  "queue.item.labelEditing": "排队消息 {position}，编辑：{preview}",
  "queue.item.editing": "编辑",
  "queue.item.steerLabel": "引导排队消息 {position}",
  "queue.item.steerTooltip": "转向消息",
  "queue.item.steering": "转向",
  "queue.item.steer": "转向",
  "queue.item.notSteered": "未转向",
  "queue.item.steerFallback.providerUnsupported": "此AI服务商无法转向正在行驶的转弯，因此消息在队列中等待。",
  "queue.item.steerFallback.steerFailed": "转向未成功，因此消息在队列中等待。",
  "queue.item.deleteLabel": "删除排队消息 {position}",
  "queue.item.deleteTooltip": "删除消息",
  "queue.item.editLabel": "编辑排队消息 {position}",
  "queue.item.editTooltip": "编辑消息",
  "queue.deleteHeld.title": "删除排队的消息？",
  "queue.deleteHeld.body": "另一台设备正在编辑此消息。 智能体不会收到它。",
  "queue.deleteHeld.keep": "保留",
} as const satisfies PartialTranslation<typeof source>;
