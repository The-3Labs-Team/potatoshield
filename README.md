# Potatoshield - Block Adblock on your website

[![Lint](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/lint.yml/badge.svg)](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/lint.yml)
[![Playwright](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/playwright.yml/badge.svg)](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/playwright.yml)
[![Build](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/build.yml/badge.svg)](https://github.com/The-3Labs-Team/potatoshield/actions/workflows/build.yml)
![License](https://img.shields.io/github/license/the-3labs-team/potatoshield)
[![Maintainability](https://api.codeclimate.com/v1/badges/a7b3762f32a20d9e8777/maintainability)](https://codeclimate.com/github/The-3Labs-Team/potatoshield/maintainability)
<!--![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/The-3Labs-Team/potatoshield?label=downloads)-->

Potatoshield is a revolutionary script designed to empower website owners in the battle against adblock software. With its lightweight and user-friendly nature, Potatoshield effortlessly detects adblockers and displays a captivating banner to users.

> ⚠️ **Note*: This project is still in development. The current version is a beta version, and it may not work as expected, it may have bugs and it may change in the future. Use it at your own risk. For the best experience, please read the RTFM article [here](...).

## Features
- [x] Detect adblock software on your website
- [x] Undetectable by adblockers (with some tweaks)
- [x] Lightweight script (less than 20KB in obfuscated mode)
- [x] Easy to use, just inline the script in your HTML layout
- [x] Open-source, no hidden fees or subscriptions, no data collection
- [ ] Shows a banner to the user in multiple languages (coming soon)
- [ ] Use with NPM (coming soon)

## List of detected adblocks

Here you can find a list of adblock software that has been detected by potatoshield, along with their versions and the date of the last check.

If you want to update the list, please see the CONTRIBUTOR.md file

### Adblockers

| Software         | Version | Detected | Last check | Official Site                |
|------------------|---------|----------|------------|------------------------------|
| uBlock           | 1.0     | ✅        | 2024-07-29 | [uBlock](https://ublock.org) |
| Adblock          | N/D     | ✅        | 2024-07-29 | [Adblock](https://getadblock.com) |
| Adblock Plus     |         |          |            | [Adblock Plus](https://adblockplus.org) |
| Adblock Ultimate |         |          |            | [Adblock Ultimate](https://adblockultimate.net) |
| Adblock Max      |         |          |            | [Adblock Max](https://adblockmax.com) |
| AdGuard          |         |          |            | [AdGuard](https://adguard.com) |
| Ghostery         |         |          |            | [Ghostery](https://ghostery.com) |

### Browsers

| Browser | Version | Detected | Last check         |
|---------|----------|----------|--------------------|
| Brave  | 92.0    | ✅       | 2024-07-29         |
| Opera | 90.0    | ✅       | 2024-07-29         |
| Arc Browser    | 92.0    | ✅       | 2024-07-29         |
| Safari  | 14.0    | ✅       | 2024-07-29         |

## Before you start

Before you start using potatoshield, you need to know that it is not a 100% bulletproof solution. Adblockers are constantly evolving, and they may find a way to detect potatoshield in the future.

The best way to fight against adblock users is to clone the project, build the script, and host it on your server (jump to #https://github.com/The-3Labs-Team/potatoshield#make-it-undetectable). This way, you can rotate the script name and make it harder for adblockers to detect it.

## Installation

You have four methods to use potatoshield on your website:

### 1. Inline the script (recommended)

You can inline the script in your HTML layout before the closing `</body>` tag:

```html
<script type="module" defer>
  // Add dist/potatoshield.min.ob.js content here
  const a0_0x191034=a0_0x4f56;(function(_0x15f1d4,_0x16b33d){const _0x3b7bb4=a0_0x4f56...
</script>
```

<!--### 2. Import the script (partially recommended) // Not yet implemented

You can install potatoshield by using NPM:

```bash
npm install potatoshield
```

Then, you can import it in one of your main JavaScript file:

```javascript
import 'potatoshield';
```-->

### 3. Download the script (partially recommended)

You can download the script from releases at the root of your website, rename it to something less suspicious and import it in your layout:

```html
<script type="module" defer src="your-potato-random-file.js"></script>
```

This can be easily detected manually by users, so it is not recommended.

### 4. Use the CDN (not recommended)

> 💡 Why not using CDN? Because adblockers can easily block the CDN URL. You can host the file on your own server and randomize the name to avoid detection (see above). Remember to rotate the file name every week or so, or Adblock users (and lists) will be able to block it.

You can use the CDN to import the script in your layout:

```html
<script src="https://cdn.jsdelivr.net/gh/The-3Labs-Team/potatoshield@main/dist/potatoshield.min.ob.js"></script>
```

## Make it undetectable

To make potatoshield undetectable by adblockers, [![Open in GitHub Codespaces](https://img.shields.io/badge/Open_in_GitHub_Codespaces-gray?logo=github)](https://codespaces.new/The-3Labs-Team/potatoshield) or clone the repo.

After that, open a terminal and run the following command:

```bash
npm run build
```

This will generate a minified and obfuscated script in the `dist` folder called `potatoshield.min.ob.js`. You can add it (method 1) or rename this file (method 3) to something less suspicious and host it on your server.

