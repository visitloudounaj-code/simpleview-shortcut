# SimpleView CMS Keyboard Shortcuts Extension

A lightweight Chrome extension that adds keyboard shortcuts to open the hyperlink and image dialogs in SimpleView CMS's CKEditor text editor, and to apply heading formats.

## The Problem

SimpleView CMS uses a custom CKEditor plugin for inserting hyperlinks and images that doesn't respond to standard shortcuts like `Ctrl+K`. Clicking the toolbar buttons every time is tedious, so this extension maps them to custom keyboard shortcuts and automatically clicks through to the browse/upload dialog in one step. Heading formatting similarly requires reaching for the toolbar dropdown on every use.

## How It Works

The extension listens for keyboard shortcuts and simulates clicks on the CKEditor toolbar buttons on the active tab. For link and image dialogs, it waits 400ms for the dialog to fully render, then polls every 100ms until the Browse button appears and clicks it automatically — opening the full SimpleView link/image picker in one keypress. For headings, it opens the Format dropdown and polls across iframes until the correct heading option is found and clicked.

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
| Apply Heading 2 | `Ctrl+Shift+2` |
| Apply Heading 3 | `Ctrl+Shift+3` |

> **Note:** Chrome limits extensions to 4 keyboard shortcuts total.

### Changing Shortcuts
1. Go to `chrome://extensions/shortcuts` in Chrome
2. Find **SimpleView CMS Keyboard Shortcuts**
3. Click the pencil icon next to the shortcut you want to change
4. Press your desired key combination

> **Note:** Chrome built-in shortcuts like `Ctrl+K` cannot be overridden by extensions. Stick to `Ctrl+Shift+[key]` combos. Punctuation keys (e.g. semicolons) are not valid in shortcut definitions.

> **Note:** Shortcuts may reset to defaults after reloading the extension and will need to be reassigned at `chrome://extensions/shortcuts`.

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

**Applying a Heading:**
1. Click inside the CKEditor text area
2. Place your cursor in the paragraph you want to format
3. Press `Ctrl+Shift+2` for Heading 2 or `Ctrl+Shift+3` for Heading 3
4. The Format dropdown opens and the heading is applied automatically

## Files

- `manifest.json` — Chrome extension configuration and shortcut definitions
- `background.js` — Service worker that listens for shortcuts and executes the automation

## Technical Notes

- Built specifically for **SimpleView CMS** with the custom `linklookup` CKEditor plugin (v4.5.2)
- The link and image Browse buttons are polled with a 400ms initial delay to allow CKEditor dialogs to fully render before automation begins — this prevents the "first use fails" issue where the dialog hadn't yet initialized its inner HTML
- The heading Format dropdown panel renders inside an iframe; the extension traverses all iframes on the page to locate and click the correct heading option
- Polling runs every 100ms with a 5-second timeout fallback on all automated clicks
