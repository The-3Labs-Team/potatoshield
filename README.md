# potatoshield
🥔 The final solution for block Adblock users on your website

For the best experience, please read the RTFM article [here](...).

## Features
- [x] Detect adblock software
- [x] Undetectable by adblockers
- [x] Lightweight script
- [x] Easy to use
- [x] No dependencies
- [x] Open-source
- [x] Shows a banner to the user

## List of detected adblocks

Here you can find a list of adblock software that has been detected by potatoshield, along with their versions and the date of the last check.

If you want to update the list, please see the CONTRIBUTOR.md file

### Adblockers

| Software | Version | Detected | Last check         |
|---------|----------|----------|--------------------|
| uBlock  | 1.0      | ✅       | 2024-07-29         |
// Adblock, Adblock Plus, Adblock Ultimate, Adblock Max, AdGuard, Ghostery

### Browsers

| Browser | Version | Detected | Last check         |
|---------|----------|----------|--------------------|
| Brave  | 92.0    | ✅       | 2024-07-29         |
| Opera | 90.0    | ✅       | 2024-07-29         |
| Arc Browser    | 92.0    | ✅       | 2024-07-29         |
| Safari  | 14.0    | ✅       | 2024-07-29         |


## Before you start

Before you start using potatoshield, you need to know that it is not a 100% bulletproof solution. Adblockers are constantly evolving, and they may find a way to detect potatoshield in the future.

The best way to fight against adblock users is to clone the project, build the script, and host it on your server. This way, you can rotate the script name and make it harder for adblockers to detect it.

## Installation

You have three methods to use potatoshield on your website:

### 1. Inline the script (recommended)

You can inline the script in your HTML layout:

```html
<script type="module" defer>
  // Add your potatoshield obfuscated code here
</script>
```

### 2. Import the script (partially recommended)

You can install potatoshield by using NPM:

```bash
npm install potatoshield
```

Then, you can import it in one of your main JavaScript file:

```javascript
import 'potatoshield';
```

You can use the obfuscated code generated by the build script to inline the script in your layout.

### 3. Download the script (not recommended)

You can download the script from releases, rename it to something less suspicious and import it in your layout:

```html
<script type="module" defer src="your-potato-random-file.js"></script>
```

This can be easily detected by adblockers, so it is not recommended.

> 💡 Why not using CDN? Because adblockers can easily block the CDN URL. You can host the file on your own server and randomize the name to avoid detection. Remember to rotate the file name every week or so, or Adblock users (and lists) will be able to block it.

## Make it undetectable

To make potatoshield undetectable by adblockers, you can use the following tips:

- **Rotate the script name**: Change the name of the script file every week or so. This will make it harder for adblockers to detect it.

- **Obfuscate the code**: You can obfuscate the code of the script to make it harder to read and detect.

You can clone the repository and build the script with the following command:

```bash
npm run build
```

This will generate a minified and obfuscated version of the script in the `dist` folder called `potatoshield.min.ob.js`.

It is important to remember that potatoshield is not a 100% bulletproof solution. It is a tool to help you fight against adblock users, but it is not a guarantee that it will work forever. Adblockers are constantly evolving, and they may find a way to detect potatoshield in the future.


