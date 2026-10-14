import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/common";

/**
 * Short words with no context of their own: a button or a menu item that means the same thing on
 * every screen. A word whose translation can change with the screen gets a key in that screen's
 * area instead, even when the English is the same.
 */
export const messages = {
  "common.cancel": "取消",
  "common.save": "保存",
  "common.close": "关闭",
  "common.delete": "删除",
  "common.remove": "删除",
  "common.edit": "编辑",
  "common.rename": "重命名",
  "common.retry": "重试",
  "common.copy": "复制",
  "common.copied": "已复制",
  "common.done": "完成",
  "common.back": "返回",
  "common.continue": "继续",
  "common.add": "添加",
  "common.create": "创建",
  "common.open": "打开",
  "common.search": "搜索",
  "common.loading": "正在加载...",
  "common.saving": "正在保存...",
  "common.tryAgain": "重试",
  "common.connecting": "正在连接...",
  "common.download": "下载",
  "common.removing": "正在删除...",
  "common.sending": "正在发送...",
} as const satisfies PartialTranslation<typeof source>;
