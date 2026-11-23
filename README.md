# Unicode Inspector · Unicode 字符检查

Inspect grapheme, code point and UTF-8 byte counts, with visible labels for whitespace and controls.

Open **Unicode Inspector**, enter a value (for example `A中🙂`), then choose **Inspect text**. Requires Node.js 22 or later. No network, files, saved input or host permissions. Copying is always explicit.

查看字素、码点和 UTF-8 字节数，标出空白与控制字符。打开插件页面，输入内容后点击「检查文本」。需要 Node.js 22 或更高版本；不读取文件、不联网，也不保存输入。

## Independent development

`npm ci --ignore-scripts` → `npm run build` → `npm run verify` → `npm run package`. Push a matching `vX.Y.Z` tag to publish this plugin independently. The Hub distributes the release URL and SHA-256; it does not build this package.
