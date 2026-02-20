# Chrome Link Shortcut Extension

A lightweight Chrome extension that adds a keyboard shortcut to open the hyperlink dialog in SimpleView CMS's CKEditor text editor.

## The Problem

SimpleView CMS uses a custom CKEditor plugin for inserting hyperlinks that doesn't respond to the standard `Ctrl+K` shortcut. Clicking the link button in the toolbar every time is tedious, so this extension maps it to a custom keyboard shortcut.

## How It Works

The extension listens for a keyboard shortcut and simulates a click on the CKEditor link button (`.cke_button__linklookup_button`) on the active tab, which opens the Link Properties dialog.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the folder containing these files

## Usage

1. Click inside the CKEditor text area in SimpleView CMS
2. Highlight the text you want to turn into a link
3. Press your shortcut (default: `Ctrl+Shift+L`)
4. The Link Properties dialog will open

## Changing the Shortcut

1. Go to `chrome://extensions/shortcuts` in Chrome
2. Find **Link Shortcut**
3. Click the pencil icon and press your desired key combination

## Files

- `manifest.json` — Chrome extension configuration
- `background.js` — Service worker that listens for the shortcut and executes the click

## Notes

- This extension is specifically built for **SimpleView CMS**
- It targets the custom `linklookup` CKEditor plugin used by SimpleView
- Chrome built-in shortcuts like `Ctrl+K` cannot be overridden, which is why a custom combo is used
