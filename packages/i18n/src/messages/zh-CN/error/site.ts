import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/site";

export const messages = {
  // Hosted site errors.
  "error.site.absolutePath": "选择绝对站点目录路径。",
  "error.site.rootSymlink": "托管站点中不允许使用符号链接。",
  "error.site.notDirectory": "站点源必须是目录。",
  "error.site.outsideWorkspace": "该站点必须在此智能体的工作区或OpenBot内共享。",
  "error.site.packageJsonInvalid": "站点package.json无效。",
  "error.site.astroServerOutput": "Astro必须使用静态输出。",
  "error.site.astroAdapter": "Astro服务器适配器和React集成是不允许的。",
  "error.site.astroApiRoutes": "Astro API路线和服务器操作不允许。",
  "error.site.astroMiddleware": "不允许Astro中间件和服务器源。",
  "error.site.astroNotBuilt": "首先构建Astro项目。需要其现有的dist/ 目录。",
  "error.site.astroDistNotDirectory": "Astro dist/ 必须是真实目录。",
  "error.site.astroDistOutside": "Astro dist/ 必须保留在项目目录中。",
  "error.site.directoryOutsideRoot": "站点目录必须位于源根目录内。",
  "error.site.siteTooLarge": "该网站超出了2 MB限制。",
  "error.site.missingIndex": "站点根目录必须包含index.html。",
  "error.site.symlink": "不允许使用符号链接：{name}",
  "error.site.unsupportedEntry": "不支持的站点条目：{name}",
  "error.site.tooManyFiles": "一个站点最多可以包含 {limit} 文件。",
  "error.site.hiddenFile": "不允许隐藏文件：{path}",
  "error.site.unsafePath": "不允许此文件路径：{path}",
  "error.site.secretFile": "不允许使用凭证、私钥和服务器源：{path}",
  "error.site.fileType": "不允许此文件类型：{path}",
  "error.site.fileOutsideRoot": "站点文件必须保留在源根目录中：{path}",
  "error.site.fileTooLarge": "文件超出1 MB限制：{path}",
} as const satisfies PartialTranslation<typeof source>;
