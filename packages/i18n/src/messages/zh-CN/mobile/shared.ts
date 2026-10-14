import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/mobile/shared";

export const messages = {
  "mobile.shared.crop.choose": "选择",
  "mobile.shared.crop.label": "照片裁剪",
  "mobile.shared.crop.hint": "拖动以移动照片。捏合以缩放它。",
  "mobile.shared.splash.loading": "加载帐户",
  "mobile.shared.photo.openFailed": "无法打开这张照片。再试一次。",
  "mobile.shared.photo.tooLarge": "OpenBot无法使这张照片足够小。选择一张简单的照片。",
  "mobile.shared.save.changes": "保存更改",
} as const satisfies PartialTranslation<typeof source>;
