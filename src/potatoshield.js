const hiddenBody = false;
const isItalianLanguage = navigator.language === "it-IT";
const imagesCdnUrl =
  "https://cdn.jsdelivr.net/gh/The-3Labs-Team/potatoshield@main/assets";
const body = document.querySelector("body");

window.onload = async () => {
  const adBlockEnabled = await detectAdBlock();

  if (adBlockEnabled) {
    hideBody();
    showBannerAdBlock();
  }
};

async function detectAdBlock() {
  let adBlockEnabled = false;

  try {
    
    // 1. Check if the adBlocker is enabled by fetching the Google Ad URL
    const googleAdUrl =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    const response = await fetch(new Request(googleAdUrl));
    if (!response.headers.get("content-length")) {
      adBlockEnabled = true;
    }

    // 2. Check if the adBlocker is enabled by fetching the Google Tag URL
    const googleAdUrl2 = "https://www.googletagservices.com/tag/js/gpt.js";
    const response2 = await fetch(new Request(googleAdUrl2));
    if (!response2.headers.get("content-length")) {
      adBlockEnabled = true;
    }

    // 3. Check if the adBlocker is enabled by fetching the uBlock keywords or an element with height:1px!important
    const keywordsToCheck = ["uBlock", "height:1px!important"];
    const responseText = await response.text();
    const adBlockDetected = keywordsToCheck.some((keyword) =>
      responseText.includes(keyword)
    );
  
    if (adBlockDetected) {
      adBlockEnabled = true;
    }

    // 4. Check if the adBlocker is enabled by creating an element with the id "ad-test"
    const testAd = document.createElement("div");
    testAd.id = "ad-test";
    testAd.style.display = "none";
    document.body.appendChild(testAd);

    if (!document.getElementById("ad-test")) {
      adBlockEnabled = true;
    }

    // 5. Check if the adBlocker is enabled by creating an element with the class "adsbygoogle"
    const visibleAd = document.createElement("div");
    visibleAd.className = "adsbygoogle";
    visibleAd.style.width = "1px";
    visibleAd.style.height = "1px";
    document.body.appendChild(visibleAd);

    if (visibleAd.offsetHeight === 0) {
      adBlockEnabled = true;
    }
    document.body.removeChild(visibleAd);



  } catch (e) {
    console.error(e);
    adBlockEnabled = true;
  } finally {
    console.log(`AdBlock Enabled: ${adBlockEnabled}`);
  }

  return adBlockEnabled;
}

function hideBody() {
  body.setAttribute("aria-hidden", "true");
  if (hiddenBody) {
    body.innerHTML = "";
  }
}

function showBannerAdBlock() {
  body.style.setProperty("overflow", "hidden", "important");
  body.innerHTML += getBannerAdBlockHTML();

  const script = document.createElement("script");
  script.textContent = `
    function toggleContent() {
      const content = document.getElementById('content');
      const button = document.getElementById('how-to-remove');
      if (content.innerHTML.includes('<div id="content-1"')) {
        content.innerHTML = \`${getContentSecondPage()}\`;
        button.innerHTML = \`${getReturnBackButton()}\`;
      } else {
        content.innerHTML = \`${getContentFirstPage()}\`;
        button.innerHTML = \`${getHowDisableButton()}\`;
      }
    }
  `;
  body.appendChild(script);
}

function getBannerAdBlockHTML() {
  return `
    <div style="${getRandomStyle()}">
      <div style="width: 100%; max-width: 500px; margin: auto; background-color: white; border-radius: 1rem; overflow: hidden; position: relative;">
        <img src="${imagesCdnUrl}/logo-small.svg" style="position: absolute; top: 0; right: 0; background-color: #D9D9D9; padding: 10px; border-bottom-left-radius: 1rem;">
        <section id="content">
          ${getContentFirstPage()}
        </section>
        <p style="text-align: center; margin: 20px 0; font-size: .9rem;">
          ${
            isItalianLanguage
              ? "PotatoShield è un progetto di"
              : "PotatoShield is a project by"
          } <a href="https://github.com/The-3Labs-Team/potatoshield" target="_blank" style="font-weight: bold; text-decoration: none; color: black;">3Labs™ Team</a>
        </p>
        <div style="display: flex; border-top: 1px solid #E5E7EB">
          <span onclick="toggleContent()" id="how-to-remove" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: white;">
            ${getHowDisableButton()}
          </span>
          <span onclick="location.reload()" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: black; color: white; font-weight: bold;">
            ${isItalianLanguage ? "Ok, fatto!" : "Ok, done!"}
          </span>
        </div>
      </div>
    </div>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      #ad-icon-small {
        display: none;
      }
      @media screen and (max-width: 500px) {
        #ad-icon {
          display: none;
        }
        #ad-icon-small {
          display: inline-block;
        }
      }
    </style>
  `;
}

function getRandomStyle() {
  const styles = [
    { name: "width", value: "100%" },
    { name: "height", value: "100vh" },
    { name: "padding", value: "10px" },
    { name: "background-color", value: "rgba(0,0,0,0.68)" },
    { name: "position", value: "fixed" },
    { name: "top", value: "0" },
    { name: "left", value: "0" },
    { name: "z-index", value: "999999" },
    { name: "display", value: "flex" },
    {
      name: "font-family",
      value:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    },
    { name: "backdrop-filter", value: "blur(5px) grayscale(100%)" },
  ];

  const randomStyle = Array.from(
    { length: styles.length },
    (_, index) => index
  ).sort(() => Math.random() - 0.5);

  return randomStyle
    .map((index) => `${styles[index].name}: ${styles[index].value};`)
    .join(" ");
}

function getContentFirstPage() {
  return `
    <div id="content-1" style="display: flex; padding: 30px 10px 10px; min-height: 305px;">
      <div style="margin-left: 10px;">
        <div style="display:flex; justify-content: space-between;">
          <p>
            ${
              isItalianLanguage
                ? '<span style="text-transform: uppercase;">Alt!</span> Mi è sembrato di vedere un...'
                : '<span style="text-transform: uppercase;">Alt!</span> I thought I saw an...'
            }
            <br>
            <span style="font-size: 3rem; font-weight: bold; text-transform: uppercase;">Adblock!</span>
          </p>
          <img src="${imagesCdnUrl}/adIconSmall.png" id="ad-icon-small">
        </div>
        <p style="font-size: 1.1rem; color: rgb(107, 114, 128); line-height: 28px; margin: 20px 0;">
          ${
            isItalianLanguage
              ? "Abbiamo limitato la pubblicità sui nostri siti, ti chiediamo la cortesia di disabilitare l'AdBlock per continuare a navigare. Grazie!"
              : "We have limited advertising on our sites, we ask you to disable AdBlock to continue browsing. Thank you!"
          }
        </p>
      </div>
      <img src="${imagesCdnUrl}/adIcon.png" id="ad-icon" style="width: 100%; height: 100%;">
    </div>
  `;
}

function getContentSecondPage() {
  return `
    <div id="content-2" style="padding: 30px 10px 10px; min-height: 305px">
      <div style="margin-left: 10px;">
        <p style="font-weight: bold; font-size: 1.5rem; margin-bottom: 20px;">
          ${
            isItalianLanguage
              ? "Come disattivare l'Ad Blocker"
              : "How to disable Ad Blocker"
          }
        </p>
        <ol style="font-size: 1.1rem; color: rgb(107, 114, 128);">
          <li style="margin: 25px 20px;">
            ${
              isItalianLanguage
                ? "<span style=\"font-weight: bold;\">Clicca sull'icona dell'estensione per il blocco annunci</span>. Di solito si trova nell'angolo in alto a destra dello schermo."
                : '<span style="font-weight: bold;">Click on the extension icon for the ad blocker</span>. It is usually located in the top right corner of the screen.'
            }
          </li>   
          <li style="margin: 25px 20px;">
            ${
              isItalianLanguage
                ? 'Segui le istruzioni per <span style="font-weight: bold;">disattivare il blocco annunci</span>.'
                : 'Follow the instructions to <span style="font-weight: bold;">disable ad blocking</span>.'
            }
          </li>
          <li style="margin: 25px 20px;">
            ${
              isItalianLanguage
                ? 'Aggiorna la pagina cliccando su <span style="font-weight: bold;">"Ok, fatto!"</span>'
                : 'Refresh the page by clicking on <span style="font-weight: bold;">"Ok, done!"</span>'
            }
          </li>
        </ol>
      </div>
    </div>
  `;
}

function getHowDisableButton() {
  return `${isItalianLanguage ? "Come lo disattivo?" : "How to disable?"}`;
}

function getReturnBackButton() {
  return `${isItalianLanguage ? "Indietro" : "Back"}`;
}
