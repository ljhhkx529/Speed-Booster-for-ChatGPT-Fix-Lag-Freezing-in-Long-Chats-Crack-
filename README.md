# Speed Booster for ChatGPT – Reverse Engineering Notes

## Overview
![Extension Icon](icons/icon128.png)

This project contains the extracted source code of the Chrome extension **“Speed Booster for ChatGPT – Fix Lag & Freezing in Long Chats” (v2.1.5)**.

The extension aims to improve the performance of long ChatGPT conversations by reducing DOM size, optimizing UI rendering, and trimming unnecessary content in the page.

This repository is used for **learning and reverse engineering practice**, focusing on understanding how browser extensions interact with web pages and optimize performance.

---

## Extension Information

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| Name             | Speed Booster for ChatGPT – Fix Lag & Freezing in Long Chats |
| Version          | 2.1.5                                                        |
| Manifest Version | 3                                                            |
| Permissions      | storage, activeTab                                           |
| Target Websites  | chat.openai.com, chatgpt.com                                 |

---

## Project Structure

```
.
├── _metadata/               # Chrome extension metadata (auto-generated)
├── icons/                   # Extension icons
├── LICENSE                  # License file
├── manifest.json            # Extension configuration and entry points
└── src/                     # Core extension source code
```

### Source Directory

```
src/
├── background/              # Background service worker
│   └── background.js
│
├── popup/                   # Extension popup UI
│   └── popup.html
│
├── content/                 # Content script logic
│   └── index.js
│
├── page/                    # Scripts injected into the page
│   ├── pageInject.js
│   ├── wasmLoader.js
│   └── mainWorld.js
│
└── wasm/                    # WebAssembly modules
    └── build/trimmer.wasm
```

---

## How the Extension Works

The extension operates by injecting scripts directly into ChatGPT pages.

### Execution Flow

```
User opens chat.openai.com
        ↓
content_scripts execute (document_start)
        ↓
pageInject.js runs
        ↓
wasmLoader.js loads WebAssembly module
        ↓
mainWorld.js modifies page behavior
        ↓
ChatGPT UI optimized
        ↓
content/index.js executes after page load
```

### Key Components

#### 1. Content Scripts

Defined in `manifest.json`, these scripts are injected into the ChatGPT page.

* `pageInject.js`
  Early-stage script used to prepare environment and injection logic.

* `wasmLoader.js`
  Responsible for loading WebAssembly modules.

* `mainWorld.js`
  Runs in the **MAIN world** to interact directly with page JavaScript.

* `content/index.js`
  Executes after page load to modify UI and DOM.

---

#### 2. WebAssembly Module

```
src/wasm/build/trimmer.wasm
```

This module likely handles **high-performance text processing**, such as trimming or optimizing long conversation content.

Using WebAssembly allows the extension to perform complex operations faster than JavaScript alone.

---

#### 3. Background Script

```
src/background/background.js
```

The background service worker handles:

* extension lifecycle events
* storage access
* communication between scripts

---

#### 4. Popup Interface

```
src/popup/popup.html
```

Provides a small UI when clicking the extension icon.

This interface usually allows users to:

* enable / disable features
* configure behavior
* check status

---

## Permissions

The extension requests the following permissions:

```
storage
activeTab
```

These allow the extension to:

* store user preferences
* interact with the current browser tab

---

## Host Permissions

```
https://chat.openai.com/*
https://chatgpt.com/*
```

This ensures the extension only runs on ChatGPT-related pages.

---

## Learning Goals

This project can be used to study:

* Chrome Extension architecture
* Manifest V3 service workers
* Content script injection
* Interaction between extensions and web pages
* WebAssembly integration in browser extensions
* Performance optimization techniques

---

## Disclaimer

This repository is intended **for educational and research purposes only**.
All rights belong to the original extension authors.

Do not use this project for malicious activities or to violate software licenses.

---

## Useful Tools

Tools commonly used for analyzing browser extensions:

* Chrome DevTools
* JavaScript formatters and deobfuscators
* Network inspectors
* Source code search tools

---

## Author Notes

This repository is part of a personal learning project focusing on:

* browser security
* extension reverse engineering
* performance optimization techniques
