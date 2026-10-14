import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/marketplace";

export const messages = {
  // Agent marketplace and agent link errors.
  "error.marketplace.timezoneInvalid": "本地时区无效。",
  "error.marketplace.installedAgentMissing": "安装的智能体不再存在。",
  "error.marketplace.differentListing": "此本地智能体是从不同的市场智能体安装的。",
  "error.marketplace.marketplaceAvatarInvalid": "市场智能体头像无效。",
  "error.marketplace.shareCardInvalid": "共享卡无效。",
  "error.marketplace.cannotPublish": "此智能体无法发布。",
  "error.marketplace.templateName": {
    one: "为此 智能体 指定 1 到 {count} 个字符的名称。",
    other: "为此 智能体 指定 1 到 {count} 个字符的名称。",
  },
  "error.marketplace.templateRole": {
    one: "角色比{count}字符长。缩短它。",
    other: "角色比{count}字符长。缩短它。",
  },
  "error.marketplace.templateNoInstructions": "在发布此智能体之前添加说明。",
  "error.marketplace.templateInstructions": {
    one: "指令长度超过{count}字符。缩短它们。",
    other: "指令长度超过{count}字符。缩短它们。",
  },
  "error.marketplace.templateAvatar": "此智能体的头像无效。在智能体设置中再次选择它。",
  "error.marketplace.templateSkills": {
    one: "一个智能体最多可以发布{count}技能。删除其中一些。",
    other: "一个智能体最多可以发布{count}技能。删除其中一些。",
  },
  "error.marketplace.templateLocalSkills": {
    one: "一个智能体最多可以发布{count}本地技能。删除其中一些。",
    other: "一个智能体最多可以发布{count}本地技能。删除其中一些。",
  },
  "error.marketplace.templateSkill": "技能“{name}”无法发布。检查其名称及其SKILL.md。",
  "error.marketplace.templateRoutines": {
    one: "智能体 最多可以发布 {count} 例程。删除其中一些。",
    other: "智能体 最多可以发布 {count} 例程。删除其中一些。",
  },
  "error.marketplace.templateRoutine": {
    one: "例程“{name}”需要最多 {count} 个字符的名称和一条指令。",
    other: "例程“{name}”需要最多 {count} 个字符的名称和一条指令。",
  },
  // Fills `{name}` above when the routine has no name.
  "error.marketplace.templateRoutineNoName": "没有名字",
  "error.marketplace.templateTooLarge": "此智能体太大，无法发布。缩短其指令、技能或例程。",
  "error.marketplace.linkInvalid": "智能体链接无效。",
  "error.marketplace.changedSinceOpened": "此智能体在您打开后发生了变化。再次打开链接查看新版本。",
  "error.marketplace.skillNameConflict": "您已经拥有名为“{name}”的不同本地技能。重命名或删除它，然后再次添加此智能体。",
  "error.marketplace.avatarInvalid": "智能体头像无效。",
  "error.marketplace.secretInName": "在发布之前从名称中删除机密或电子邮件地址。",
  "error.marketplace.secretInTitle": "发布前从标题中删除机密或电子邮件地址。",
  "error.marketplace.secretInInstructions": "发布前从说明中删除机密或电子邮件地址。",
  "error.marketplace.secretInRoutine": "在发布之前从例程“{name}”中删除机密或电子邮件地址。",
  "error.marketplace.secretInSkill": "在发布之前从技能“{name}”中删除机密或电子邮件地址。",
  "error.marketplace.catalogLoadFailed": "无法加载市场。再试一次。",
  "error.marketplace.templateUnreadable": "无法读取此共享智能体。它的所有者可能已将其删除。",
} as const satisfies PartialTranslation<typeof source>;
