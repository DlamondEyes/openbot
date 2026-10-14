import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/plugin";

export const messages = {
  // The plugin page in the marketplace.
  "plugin.link.website": "网站",
  "plugin.link.privacyPolicy": "隐私政策",
  "plugin.link.terms": "服务条款",
  "plugin.copyLink": "复制链接",
  "plugin.askPrompt": "询问{name}：{prompt}",
  "plugin.section.apps": "应用程序",
  "plugin.section.skills": "技能",
  "plugin.section.information": "信息",
  "plugin.info.developer": "开发商",
  "plugin.info.category": "类别",
  "plugin.info.version": "版本",

  // The uninstall confirmation. {number} is a count that has no plural form here.
  "plugin.uninstallDialog.title": "断开{name}？",
  "plugin.uninstallDialog.description": "这将删除此计算机上安装的 {name}。此主机或此智能体上的其他任何内容都没有更改。",
  "plugin.uninstallDialog.confirm": "断开连接",
  "plugin.uninstallDialog.appsLabel": "要删除的应用程序，{number}",
  "plugin.uninstallDialog.appsTitle": "从此主机中删除的应用程序",
  "plugin.uninstallDialog.appsNote": "他们的工具不再可用，并且为他们保留的任何登录OpenBot都被遗忘。",
  "plugin.uninstallDialog.skillsLabel": "技能删除，{number}",
  "plugin.uninstallDialog.skillsTitle": "从 {agentName} 中删除的技能",
} as const satisfies PartialTranslation<typeof source>;
