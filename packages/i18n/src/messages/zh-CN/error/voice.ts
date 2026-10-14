import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/voice";

export const messages = {
  // Voice transcription errors.
  "error.voice.downloadFailed": "无法下载语音模型。再试一次。",
  "error.voice.downloadStopped": "语音模型下载已停止。",
  "error.voice.runtimeUnavailable": "本地语音转录在此平台上不可用。",
  "error.voice.busy": "语音转录已在进行中。",
  "error.voice.modelUnavailable": "语音模型不可用。",
  "error.voice.transcriptionTimedOut": "语音转录超时。",
  "error.voice.prepareRequired": "本地语音转录不可用。运行`bun run voice:prepare`并重新启动OpenBot。",
  "error.voice.transcriptionFailed": "OpenBot无法转录此录音。",
  "error.voice.cloud.keyRequired": "在“设置”→“语音”中添加您的ElevenLabs API密钥。",
  "error.voice.cloud.keyRejected": "ElevenLabs不接受API密钥。检查“设置”→“语音”中的按键。",
  "error.voice.cloud.quotaExceeded": "您的ElevenLabs配额已用完。",
  "error.voice.cloud.rateLimited": "ElevenLabs正忙。稍后再试一次。",
  "error.voice.cloud.termsRequired": "接受您的ElevenLabs帐户中的ElevenLabs条款，然后重试。",
  "error.voice.cloud.streamEnded": "听写流结束。再次记录。",
  "error.voice.cloud.tooLong": "录制时间太长。",
  "error.voice.cloud.keySaveFailed": "无法保存ElevenLabs API密钥。",
} as const satisfies PartialTranslation<typeof source>;
