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

| Software | Version | Detected | Last check         |
|---------|----------|----------|--------------------|
| uBlock  | 1.0      | ✅       | 2024-07-29         |

## How to use

You have two methods to use potatoshield on your website:

### 1. Import the script

You can install potatoshield by using NPM:

```bash
npm install potatoshield
```

Then, you can import it in one of your main JavaScript file:

```javascript
import 'potatoshield';
```

> **Note:** For better undetection, you can build rotate the build of your js file manually or with a cron job.

### 2. Download the script (not recommended)

You can download the script from releases, rename it to something less suspicious and import it in your website:

```html
<script src="your-potato-random-file.js"></script>
```

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


