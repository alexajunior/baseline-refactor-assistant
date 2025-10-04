# Baseline Refactor Assistant

A VS Code extension that helps you build web apps compatible with all browsers via Baseline feature checks.

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

