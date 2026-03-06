# SimpleView CMS Keyboard Shortcuts Extension

A lightweight Chrome extension that adds keyboard shortcuts to open the hyperlink and image dialogs in SimpleView CMS's CKEditor text editor.

## The Problem

SimpleView CMS uses a custom CKEditor plugin for inserting hyperlinks and images that doesn't respond to standard shortcuts like `Ctrl+K`. Clicking the toolbar buttons every time is tedious, so this extension maps them to custom keyboard shortcuts and automatically clicks through to the browse/upload dialog in one step.

## How It Works

The extension listens for keyboard shortcuts and simulates clicks on the CKEditor toolbar buttons on the active tab, then waits for the dialog to open and automatically clicks the browse button inside it — opening the full SimpleView link/image picker in one keypress.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the folder containing these files

## Shortcuts

| Action | Default Shortcut |
|--------|-----------------|
| Insert Hyperlink | `Ctrl+Shift+K` |
| Insert Image | `Ctrl+Shift+L` |

### Changing Shortcuts
1. Go to `chrome://extensions/shortcuts` in Chrome
2. Find **SimpleView CMS Keyboard Shortcuts**
3. Click the pencil icon next to the shortcut you want to change
4. Press your desired key combination

> **Note:** Chrome built-in shortcuts like `Ctrl+K` cannot be overridden by extensions. Stick to `Ctrl+Shift+[key]` combos.

## Workflow

**Inserting a Hyperlink:**
1. Click inside the CKEditor text area
2. Highlight the text you want to link
3. Press `Ctrl+Shift+K`
4. The Link Properties dialog opens and Browse is clicked automatically

**Inserting an Image:**
1. Click inside the CKEditor text area
2. Place your cursor where you want the image
3. Press `Ctrl+Shift+L`
4. The Image dialog opens and Browse Server is clicked automatically

## Files

- `manifest.json` — Chrome extension configuration and shortcut definitions
- `background.js` — Service worker that listens for shortcuts and executes the automation

## Notes

- Built specifically for **SimpleView CMS** with the custom `linklookup` CKEditor plugin
- If shortcuts reset after reloading the extension, reassign them at `chrome://extensions/shortcuts`
