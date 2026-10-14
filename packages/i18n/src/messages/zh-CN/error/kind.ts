import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/kind";

/** The sentence for each kind `classifyUserError` decides. `@openbot/user-errors` owns the mapping. */
export const messages = {
  "error.kind.network": "无法连接。检查您的连接并重试。",
  "error.kind.timeout": "请求花费的时间太长。在重试之前检查操作是否已完成。",
  "error.kind.storage": "存储空间不足。在运行OpenBot的计算机上释放一些空间，然后重试。",
  "error.kind.filePermission": "OpenBot无权完成此操作。检查文件或文件夹权限，然后重试。",
  "error.kind.notFound": "找不到所需的文件或文件夹。恢复它或选择另一个，然后重试。",
  "error.kind.readOnly": "此文件夹是只读的。选择一个可以写入的文件夹，然后重试。",
  "error.kind.conflict": "具有此名称的项目已存在。选择不同的名称，然后重试。",
  "error.kind.auth": "身份验证失败。检查您的帐户或服务器连接，然后重试。",
  "error.kind.permission": "您无权完成此操作。向所有者请求访问权限。",
  "error.kind.rateLimit": "请求太多。稍等片刻，然后重试。",
  "error.kind.service": "该服务不可用。稍等片刻，然后重试。",
} as const satisfies PartialTranslation<typeof source>;
