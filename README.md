# Baseline Refactor Assistant
A VS Code extension that helps you build web apps compatible with all browsers via Baseline feature checks.
## Installation
### Download from Releases
1. Go to the [Releases](https://github.com/alexajunior/baseline-refactor-assistant/releases) page
2. Download the latest `.vsix` file from the release assets
3. Open VS Code
4. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette
5. Type "Extensions: Install from VSIX" and select it
6. Browse to the downloaded `.vsix` file and select it
7. Reload VS Code when prompted
## Features
- Automatically flags code using features.
- Real-time warnings in Problems panel and inline in code.
- Supports JavaScript, TypeScript, and CSS.
## How to Use
1. Install extension from source or package.
2. Open/edit a JS, TS, or CSS file.
3. Non-baseline features like `.flat()` or `@container` are flagged.
## Development
- Clone this repo
- Run `npm install`
- Press F5 in VS Code to test
## Packaging
- Run: `npm install -g vsce`
- Run: `vsce package` to generate `.vsix`

## Copyright

© 2025 Alex Junior. All rights reserved. This work is the original creation of Alex Junior and is protected under copyright law.
