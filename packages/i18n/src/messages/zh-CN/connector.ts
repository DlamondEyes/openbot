import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/connector";

export const messages = {
  // Server settings > Connectors: the built-in GitHub connection of this computer.
  "connector.github.title": "GitHub",
  "connector.github.description": "此计算机上的每个智能体都可以使用您的GitHub存储库、问题和拉取请求以及gh和git。",
  "connector.github.connect": "连接GitHub",
  "connector.github.pendingTitle": "在GitHub上键入此代码",
  "connector.github.pendingDescription": "GitHub在浏览器中打开。在那里输入代码进行连接。",
  "connector.github.waiting": "等待GitHub",
  "connector.github.copyCode": "复制代码",
  "connector.github.codeCopied": "已复制",
  "connector.github.openGitHub": "打开GitHub",
  "connector.github.cancel": "取消",
  "connector.github.connectedAs": "连接为@{login}",
  "connector.github.repositoriesTitle": "存储库",
  "connector.github.repositoriesDescription": "智能体只能使用安装了OpenBot GitHub应用程序的存储库。",
  "connector.github.chooseRepositories": "选择存储库",
  "connector.github.repositoriesLoading": "从GitHub读取存储库",
  "connector.github.repositoriesFailed": "OpenBot无法从GitHub读取存储库。",
  "connector.github.noRepositories": "OpenBot GitHub应用程序尚未安装在存储库上。",
  // {count} is a number, such as 12.
  "connector.github.moreRepositories": { one: "和{count}更多存储库", other: "和{count}更多存储库" },
  // A badge next to a repository that only its members can see.
  "connector.github.private": "私人",
  "connector.github.disconnect": "断开连接",
  "connector.github.disconnectTitle": "断开GitHub",
  "connector.github.disconnectSummary": "每个智能体都会损失GitHub。您的聊天记录和文件将保留。",
  "connector.github.expiredTitle": "GitHub连接已过期",
  "connector.github.expiredDescription": "再次连接为@{login}，再次给出智能体GitHub。",
  "connector.github.reconnect": "重新连接",
  "connector.github.actionFailed": "OpenBot无法更改GitHub连接。",
  // The status next to the name at the top of the GitHub page.
  "connector.github.statusConnected": "已连接",
  "connector.github.statusConnecting": "正在连接",
  "connector.github.statusExpired": "已过期",
  "connector.github.statusNotSetUp": "未设置",
  "connector.github.accountTitle": "帐户",
  // {count} is the number of repositories in the list, such as 12.
  "connector.github.filterPlaceholder": { one: "过滤{count}存储库", other: "过滤 {count} 存储库" },
  "connector.github.filterLabel": "过滤存储库",
  // {query} is the text the user typed in the filter.
  "connector.github.noMatch": "没有存储库与“{query}”匹配。",
  // The connect dialog. The steps show as numbers; screen readers read the names.
  "connector.github.stepSignIn": "登录",
  "connector.github.stepConnected": "已连接",
  "connector.github.requestingCode": "OpenBot向GitHub询问代码。",
  // {code} is the code to type on GitHub, such as WDJB-MJHT.
  "connector.github.codeLabel": "代码 {code}",
  "connector.github.failedTitle": "GitHub未连接",
  "connector.github.cancelConnecting": "取消连接GitHub",
  // {count} is the number of repositories that agents can use.
  "connector.github.connectedSummary": {
    one: "{count} 存储库·此计算机上的每个 智能体",
    other: "{count} 存储库·此计算机上的每个 智能体",
  },
  "connector.github.done": "完成",
  "connector.github.later": "稍后",
  // The confirmation before Disconnect. {login} is the GitHub account name, such as octocat.
  "connector.github.disconnectConfirmTitle": "断开GitHub？",
  "connector.github.disconnectConfirmDescription": "断开连接会从此计算机上删除 @{login} 的登录。",
  "connector.github.disconnectEffectTools": "每个智能体都会丢失GitHub工具、gh和git。",
  "connector.github.disconnectEffectRevoke": "然后GitHub打开，您可以在其中撤销OpenBot。",
  "connector.github.disconnectEffectKept": "聊天、文件和智能体记忆会保留在这台电脑上。",
  // The same text for the connection of a joined server. {host} is the server name, such as Studio.
  "connector.github.descriptionHost": "{host} 上的每个智能体都可以使用您的GitHub存储库、问题和拉取请求以及gh和git。",
  "connector.github.connectedSummaryHost": {
    one: "{count} 存储库 · {host} 上的每个 智能体",
    other: "{count} 存储库 · {host} 上的每个 智能体",
  },
  "connector.github.disconnectConfirmDescriptionHost": "断开连接会从 {host} 中删除 @{login} 的登录。",
  "connector.github.disconnectEffectKeptHost": "聊天、文件和智能体记忆会保留在 {host} 上。",
  "connector.github.keepConnected": "保持连接",
  "connector.github.close": "关闭",
  // The last section of an integration page, with the action that removes it.
  "connector.dangerZone": "危险区域",

  // Server settings > Connectors: the list of integrations. Each row opens its page.
  "connector.hub.onThisComputer": "在此计算机上",
  "connector.hub.onHost": "关于{host}",
  "connector.hub.notSetUp": "未设置",
  "connector.hub.available": "可用",
  // {name} is the name of an integration, such as Slack.
  "connector.hub.open": "打开{name}",
  "connector.hub.setUp": "设置",
  // {names} lists the agents, such as "Chief, Research".
  "connector.hub.usedBy": "由 {names} 使用",

  // Server settings > Connectors > Slack: a workspace installs the one OpenBot app, and the Slack
  // Orchestrator agent receives each request, asks the team and answers.
  "connector.slack.title": "松弛",
  "connector.slack.description":
    "人们在Slack中提及@OpenBot或向其发送直接消息。 Slack Orchestrator询问正确的智能体并给出答案。",
  "connector.slack.statusNotSetUp": "未设置",
  "connector.slack.statusConnected": "已连接",
  "connector.slack.statusAttention": "需要注意",
  // {workspace} is the Slack workspace name.
  "connector.slack.summaryConnected": "{workspace} · Slack Orchestrator答案",
  "connector.slack.summaryNoAgent": "{workspace} · 尚无智能体答案",
  "connector.slack.attentionTitle": {
    one: "{count}工作区需要注意",
    other: "{count} 工作区需要注意",
  },
  "connector.slack.attentionDescription": "下面的状态说明了要做什么。",
  "connector.slack.connect": "连接Slack",
  "connector.slack.addAgent": "添加智能体",
  "connector.slack.actionFailed": "Slack未接受更改",
  "connector.slack.workspaceTitle": "工作区",
  "connector.slack.workspaceDescription": "人们提及@OpenBot或向其发送直接消息。",
  "connector.slack.disconnectWorkspace": "断开连接",
  "connector.slack.missingScopes": "OpenBot在Slack中没有这些权限：{scopes}。断开工作区，然后重新连接。",
  "connector.slack.retryAt": "Slack要求OpenBot等待。它在 {time} 处再次尝试。",
  "connector.slack.reconnect": "重新连接",
  "connector.slack.resume": "简历",
  // {action} is a button, such as Pause; {name} is the workspace name.
  "connector.slack.rowAction": "{action}：{name}",
  "connector.slack.orchestratorTitle": "Slack Orchestrator",
  "connector.slack.orchestratorDescription":
    "此智能体接收来自Slack的每个请求。它本身回答简短的问题，将其他工作交给正确的智能体，并将答案发布在线程中。",
  "connector.slack.orchestratorNone": "智能体尚未答复",
  "connector.slack.orchestratorNoneDescription": "添加Slack Orchestrator，否则Slack不会得到任何答复。",
  "connector.slack.inviteNote": "OpenBot单独加入每个公共频道以及每个新频道。对于私人频道，请邀请它：/invite @OpenBot。",
  // The connect dialog. The steps show as numbers; screen readers read the names.
  "connector.slack.stepWorkspace": "工作区",
  "connector.slack.stepAgent": "智能体",
  "connector.slack.connectTitle": "连接Slack工作区",
  "connector.slack.connectDescription": "OpenBot在工作区中安装一个应用程序，名为OpenBot，并且它加入每个公共频道。",
  "connector.slack.connectStepBrowser": "Slack在您的浏览器中打开",
  "connector.slack.connectStepAllow": "选择右上角的工作区，然后允许",
  "connector.slack.connectStepReturn": "Slack完成后此对话框继续",
  "connector.slack.connectInSlack": "在Slack中连接",
  "connector.slack.connectWaiting": "等待松弛。在浏览器中完成安装。",
  "connector.slack.agentStepTitle": "添加Slack Orchestrator",
  // {workspace} is the Slack workspace name.
  "connector.slack.agentStepDescription": "这个新的智能体会回答人们在 {workspace} 中发送给 @OpenBot的所有内容。",
  "connector.slack.orchestratorName": "Slack Orchestrator",
  "connector.slack.orchestratorRole": "在Slack中回答并询问团队",
  "connector.slack.orchestratorDoesReceive": "首先接收每个Slack请求",
  "connector.slack.orchestratorDoesDelegate": "将每项任务交给最适合的智能体",
  "connector.slack.orchestratorDoesAnswer": "在Slack线程中发布答案",
  "connector.slack.orchestratorModel": "模型",
  "connector.slack.doneTitle": "OpenBot位于 {workspace}",
  "connector.slack.doneDescription": "在任何公共频道提及@OpenBot，或直接发送消息。",
  "connector.slack.done": "完成",
  "connector.slack.disconnectTitle": "断开{workspace}？",
  "connector.slack.disconnectDescription": "OpenBot停止在 {workspace} 中应答，并从此计算机中删除其Slack令牌。",
  "connector.slack.disconnectDescriptionHost": "OpenBot停止在 {workspace} 中应答，并从 {host} 中删除其Slack令牌。",
  "connector.slack.disconnectEffect": "{workspace} 中的人员无法再通过 @OpenBot联系您的智能体。",
  "connector.slack.removeEffectKept": "对话和Slack Orchestrator留在OpenBot中。",
  "connector.slack.keep": "保持连接",
  "connector.slack.close": "关闭",

  // Server settings > Connectors > Discord: a Discord server (a guild) adds the one OpenBot bot, and
  // the Discord Orchestrator agent receives each request, asks the team and answers. Always write
  // "Discord server": "server" alone is an OpenBot server.
  "connector.discord.title": "不和谐",
  "connector.discord.description":
    "人们在Discord服务器的频道中提到@OpenBot。 Discord Orchestrator询问正确的智能体并给出答案。",
  "connector.discord.statusNotSetUp": "未设置",
  "connector.discord.statusConnected": "已连接",
  "connector.discord.statusAttention": "需要注意",
  // {workspace} is the Discord server name.
  "connector.discord.summaryConnected": "{workspace} · Discord Orchestrator答案",
  "connector.discord.summaryNoAgent": "{workspace} · 尚无智能体答案",
  "connector.discord.attentionTitle": {
    one: "{count} Discord 服务器需要注意",
    other: "{count} Discord 服务器需要注意",
  },
  "connector.discord.attentionDescription": "下面的状态说明了要做什么。",
  "connector.discord.connect": "连接不和谐",
  "connector.discord.addAgent": "添加智能体",
  "connector.discord.actionFailed": "Discord未接受更改",
  "connector.discord.workspaceTitle": "不和谐服务器",
  "connector.discord.workspaceDescription": "在频道中提及@OpenBot。回复OpenBot继续。",
  "connector.discord.disconnectWorkspace": "断开连接",
  "connector.discord.missingScopes": "OpenBot在Discord中没有这些权限：{scopes}。断开Discord服务器，然后重新连接。",
  "connector.discord.retryAt": "Discord要求OpenBot等待。它在 {time} 处再次尝试。",
  "connector.discord.reconnect": "重新连接",
  "connector.discord.resume": "简历",
  // {action} is a button, such as Pause; {name} is the Discord server name.
  "connector.discord.rowAction": "{action}：{name}",
  "connector.discord.orchestratorTitle": "Discord协调器",
  "connector.discord.orchestratorDescription":
    "此智能体接收来自Discord的每个请求。它自己回答短的，将其他工作交给正确的智能体，并在频道中回复答案。",
  "connector.discord.orchestratorNone": "智能体尚未答复",
  "connector.discord.orchestratorNoneDescription": "添加Discord Orchestrator，否则Discord不会得到任何答复。",
  "connector.discord.channelsNote": "OpenBot查看其角色可以查看的频道。",
  // The connect dialog. The steps show as numbers; screen readers read the names.
  "connector.discord.stepWorkspace": "不和谐服务器",
  "connector.discord.stepAgent": "智能体",
  "connector.discord.connectTitle": "连接Discord服务器",
  "connector.discord.connectDescription": "OpenBot在Discord服务器中添加了一个名为OpenBot的机器人。",
  "connector.discord.connectStepBrowser": "Discord在您的浏览器中打开",
  "connector.discord.connectStepAllow": "选择服务器，然后授权",
  "connector.discord.connectStepReturn": "Discord完成后此对话框将继续",
  "connector.discord.connectInDiscord": "不和谐地连接",
  "connector.discord.connectWaiting": "等待不和谐。在浏览器中完成授权。",
  "connector.discord.agentStepTitle": "添加Discord Orchestrator",
  // {workspace} is the Discord server name.
  "connector.discord.agentStepDescription": "这个新的智能体会回答人们在 {workspace} 中发送给 @OpenBot的所有内容。",
  "connector.discord.orchestratorName": "Discord协调器",
  "connector.discord.orchestratorRole": "在Discord中回答并询问团队",
  "connector.discord.orchestratorDoesReceive": "首先接收每个Discord请求",
  "connector.discord.orchestratorDoesDelegate": "将每项任务交给最适合的智能体",
  "connector.discord.orchestratorDoesAnswer": "在Discord频道中回复答案",
  "connector.discord.orchestratorModel": "模型",
  "connector.discord.doneTitle": "OpenBot位于 {workspace}",
  "connector.discord.doneDescription": "在频道中提及@OpenBot。回复OpenBot继续。",
  "connector.discord.done": "完成",
  "connector.discord.disconnectTitle": "断开{workspace}？",
  "connector.discord.disconnectDescription": "OpenBot停止在 {workspace} 中应答并删除与此计算机的Discord连接。",
  "connector.discord.disconnectDescriptionHost": "OpenBot停止在 {workspace} 中应答，并从 {host} 中删除Discord连接。",
  "connector.discord.disconnectEffect": "{workspace} 中的人员无法再通过 @OpenBot联系您的智能体。",
  "connector.discord.removeEffectKept": "对话和Discord Orchestrator留在OpenBot中。",
  "connector.discord.keep": "保持连接",
  "connector.discord.close": "关闭",

  // Server settings > Connectors > Telegram: each chat adds the one OpenBot bot, and the Telegram
  // Orchestrator agent receives the messages of all chats, asks the team and answers.
  "connector.telegram.title": "电报",
  "connector.telegram.description":
    "将OpenBot机器人添加到Telegram群组或与其直接聊天。 Telegram Orchestrator询问正确的智能体并给出答案。",
  "connector.telegram.statusNotSetUp": "未设置",
  "connector.telegram.statusConnected": "已连接",
  "connector.telegram.statusAttention": "需要注意",
  // {count} is the number of linked Telegram chats.
  "connector.telegram.summaryConnected": {
    one: "{count} 聊天 · Telegram Orchestrator 解答",
    other: "{count} 聊天 · Telegram Orchestrator 答案",
  },
  "connector.telegram.summaryNoAgent": {
    one: "{count} 聊天 · 还没有 智能体 答案",
    other: "{count} 聊天 · 还没有 智能体 答案",
  },
  "connector.telegram.attentionTitle": {
    one: "{count}聊天需要关注",
    other: "{count} 聊天需要关注",
  },
  "connector.telegram.attentionDescription": "下面的状态说明了要做什么。",
  "connector.telegram.connect": "连接电报",
  "connector.telegram.addAgent": "添加智能体",
  "connector.telegram.actionFailed": "Telegram未接受更改",
  "connector.telegram.chatsTitle": "聊天",
  "connector.telegram.groupDescription": "人们提及该机器人或回复其消息。",
  "connector.telegram.directDescription": "此聊天中的每条消息都会发送到Telegram Orchestrator。",
  "connector.telegram.helpRemoved": "OpenBot机器人不再在此聊天中。断开聊天，然后再次添加机器人。",
  "connector.telegram.helpRelayUnavailable":
    "OpenBot无法在此计算机上接收Telegram消息。登录，在服务器设置中为此计算机命名，并保持OpenBot打开。",
  "connector.telegram.helpRelayUnavailableHost":
    "{host} 上的OpenBot无法接收Telegram消息。在 {host} 上登录，在服务器设置中为服务器命名，并保持OpenBot打开。",
  "connector.telegram.helpError": "OpenBot无法访问此聊天。重新连接或断开聊天。",
  "connector.telegram.retryAt": "电报要求OpenBot等待。它在 {time} 处再次尝试。",
  "connector.telegram.pause": "暂停",
  "connector.telegram.resume": "简历",
  "connector.telegram.reconnect": "重新连接",
  "connector.telegram.disconnectChat": "断开连接",
  // {action} is a button, such as Pause; {name} is the chat name.
  "connector.telegram.rowAction": "{action}：{name}",
  "connector.telegram.linkTitle": "链接另一个聊天",
  "connector.telegram.linkDescription": "Telegram在您的浏览器中打开。当链接时，聊天会显示在此处。",
  "connector.telegram.linkWaiting": "等待电报。选择Telegram中的聊天。",
  "connector.telegram.addToGroup": "添加到群组",
  "connector.telegram.openDirectChat": "打开直接聊天",
  "connector.telegram.orchestratorTitle": "电报协调器",
  "connector.telegram.orchestratorDescription":
    "此智能体从您的所有Telegram聊天中接收OpenBot的消息。它自己回答简短的问题，将其他工作交给正确的智能体，并将答案发布在聊天中。",
  "connector.telegram.orchestratorNone": "智能体尚未答复",
  "connector.telegram.orchestratorNoneDescription": "添加Telegram Orchestrator，否则Telegram无法得到答复。",
  "connector.telegram.mentionNote": "在群组中提及机器人或回复其消息。在直接聊天中，每条消息都会发送到机器人。",
  // The connect dialog. The steps show as numbers; screen readers read the names.
  "connector.telegram.stepChat": "聊天",
  "connector.telegram.stepAgent": "智能体",
  "connector.telegram.connectTitle": "链接Telegram聊天",
  "connector.telegram.connectDescription":
    "将OpenBot机器人添加到群组，或打开与其直接聊天。一个机器人可以为您提供所有聊天服务。",
  "connector.telegram.connectStepBrowser": "Telegram在您的浏览器中打开",
  "connector.telegram.connectStepPick": "选择群组，或在直接聊天中按“开始”",
  "connector.telegram.connectStepReturn": "链接聊天时此对话框继续",
  "connector.telegram.connectWaiting": "等待电报。选择Telegram中的聊天。",
  "connector.telegram.agentStepTitle": "添加Telegram Orchestrator",
  // {chat} is the Telegram chat name.
  "connector.telegram.agentStepDescription": "这个新的智能体会回答 {chat} 中以及您稍后链接的每个聊天中的OpenBot消息。",
  "connector.telegram.orchestratorName": "电报协调器",
  "connector.telegram.orchestratorRole": "在Telegram中回答并询问团队",
  "connector.telegram.orchestratorDoesReceive": "首先收到OpenBot的每条电报消息",
  "connector.telegram.orchestratorDoesDelegate": "将每项任务交给最适合的智能体",
  "connector.telegram.orchestratorDoesAnswer": "在Telegram聊天中发布答案",
  "connector.telegram.orchestratorModel": "模型",
  "connector.telegram.doneTitle": "OpenBot位于 {chat}",
  "connector.telegram.done": "完成",
  "connector.telegram.disconnectTitle": "断开{chat}？",
  "connector.telegram.disconnectDescription": "OpenBot机器人离开 {chat}，OpenBot在那里停止应答。 对话留在OpenBot中。",
  "connector.telegram.disconnectEffect": "{chat} 中的人员无法再通过OpenBot机器人联系您的智能体。",
  "connector.telegram.removeEffectKept": "对话和Telegram Orchestrator留在OpenBot中。",
  "connector.telegram.keep": "保持连接",
  "connector.telegram.close": "关闭",
  // Marketplace > 1Password: a vault that the user shares with OpenBot through a service account.
  "connector.onePassword.title": "1密码",
  "connector.onePassword.description":
    "通过服务帐户与OpenBot共享专用的1Password保管库，以便智能体可以在OpenBot浏览器中登录网站。",
  "connector.onePassword.howItWorks":
    "连接会在您的1Password帐户中设置一个“与OpenBot共享”保管库以及一个只能读取该保管库的服务帐户。 OpenBot在此计算机上的浏览器中填写保存的登录信息，因此只有您移入该保管库的项目才会被共享。 智能体从未见过密码。",
  "connector.onePassword.connect": "连接1密码",
  // The three setup steps before a connection, each with the one button it needs.
  "connector.onePassword.setupTitle": "设置",
  "connector.onePassword.stepCliTitle": "安装1Password CLI",
  "connector.onePassword.stepCliChecking": "在此计算机上查找1Password CLI",
  "connector.onePassword.stepCliInstalling": "从1Password下载1Password CLI",
  // {version} is a version number, such as 2.39.0.
  "connector.onePassword.stepCliReady": "已安装版本 {version}。",
  "connector.onePassword.stepCliMissing": "OpenBot将其从1Password下载到其自己的文件夹中。它不需要管理员密码。",
  "connector.onePassword.stepCliManual": "OpenBot无法在此计算机上安装它。从1Password安装它，然后返回此页面。",
  "connector.onePassword.installCli": "安装",
  "connector.onePassword.stepAppTitle": "打开CLI集成",
  "connector.onePassword.stepAppDescription":
    "在1Password应用程序中，打开“设置”>“开发人员”，然后打开“与1Password CLI集成”。",
  "connector.onePassword.stepAppReady": "1Password应用程序允许CLI创建共享保管库。",
  "connector.onePassword.openApp": "打开1密码",
  "connector.onePassword.checkAgain": "再次检查",
  "connector.onePassword.stepVaultTitle": "创建共享保管库",
  "connector.onePassword.stepVaultDescription":
    "OpenBot创建“与OpenBot共享”的保管库以及只能读取该保管库的服务帐户。 1Password要求您批准。",
  "connector.onePassword.useToken": "改用服务帐户令牌",
  "connector.onePassword.tokenLabel": "服务帐户令牌",
  "connector.onePassword.tokenPlaceholder": "ops_…",
  "connector.onePassword.connectWithToken": "连接",
  "connector.onePassword.approveInApp": "批准1Password应用程序中的请求",
  "connector.onePassword.cancel": "取消",
  "connector.onePassword.chooseAccountTitle": "选择帐户",
  "connector.onePassword.chooseAccountDescription": "OpenBot在您选择的帐户中创建共享保管库。",
  "connector.onePassword.useAccount": "使用此帐户",
  "connector.onePassword.vaultTitle": "共享保管库",
  "connector.onePassword.vaultDescription":
    "将登录信息移至1Password中的此保管库中，以便智能体使用它登录。将其移除即可停止。",
  "connector.onePassword.loginsLoading": "从1Password读取登录信息",
  // {count} is a number, such as 3.
  "connector.onePassword.loginCount": { one: "{count}登录", other: "{count} 登录" },
  "connector.onePassword.disconnect": "断开连接",
  "connector.onePassword.disconnectTitle": "断开1密码",
  "connector.onePassword.disconnectSummary":
    "OpenBot忘记令牌。保管库和服务帐户保留在1Password中；如果您不再需要它们，请将它们删除。",
  "connector.onePassword.actionFailed": "OpenBot无法更改1Password连接。",
  "connector.onePassword.statusConnected": "已连接",
  "connector.onePassword.statusConnecting": "正在连接",
  "connector.onePassword.statusNotSetUp": "未设置",
  "connector.bitwarden.title": "Bitwarden",
  "connector.bitwarden.description": "填写Bitwarden的浏览器登录信息。",
  "connector.bitwarden.setup":
    "安装Bitwarden CLI并使用bw登录名登录。创建一个名为Shared with OpenBot的文件夹，并仅将智能体可能使用的登录名放入其中。运行bw unlock --raw并粘贴下面的会话密钥。不要粘贴您的主密码。",
  "connector.bitwarden.scope":
    "此计算机上的所有智能体都可以在与OpenBot共享中使用匹配的登录名。 OpenBot使用精确的HTTPS原点。它不使用需要主密码提示或自定义URI匹配规则的项目。",
  "connector.bitwarden.session":
    "会话密钥仅暂存于内存中。若连续 8 小时未使用保管库，或退出 OpenBot 后，请重新连接。断开连接会停止 OpenBot 的访问，但不会锁定其他 Bitwarden 客户端。",
  "connector.bitwarden.sessionKey": "Bitwarden会话密钥",
  "connector.bitwarden.connect": "连接Bitwarden",
  "connector.bitwarden.disconnect": "断开Bitwarden的连接",
  "connector.bitwarden.connected": "已连接",
  "connector.bitwarden.disconnected": "未连接",
  "connector.bitwarden.failed": "无法连接到Bitwarden。",
} as const satisfies PartialTranslation<typeof source>;
