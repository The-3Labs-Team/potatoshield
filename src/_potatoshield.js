/*import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}.json'
        }
    }, (err, t) => {
        if (err) return console.error(err);
        showBannerAdBlock();
    });

const hiddenBody = false

  const imagesCdnUrl = 'https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@main/assets'  

  const body = document.querySelector('body')

  window.onload = async () => {
    const adBlockEnabled = await detectAdBlock();

    if (adBlockEnabled) {
      body.setAttribute('aria-hidden', 'true');
      if (hiddenBody) {
        body.innerHTML = '';
      }
      showBannerAdBlock();
    }
  };

  async function detectAdBlock() {
    let adBlockEnabled = false;
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  
    try {
        const keywordsToCheck = ['uBlock', 'height:1px!important'];
  
        const response = await fetch(new Request(googleAdUrl));
        if (!response.headers.get('content-length')) {
            adBlockEnabled = true;
        }
  
        const responseText = await response.text();
        const adBlockDetected = keywordsToCheck.some(keyword => responseText.includes(keyword));
        if (adBlockDetected) {
            adBlockEnabled = true;
        }
    } catch (e) {
        adBlockEnabled = true;
    } finally {
        console.log(`AdBlock Enabled: ${adBlockEnabled}`);
    }
  
    return adBlockEnabled;
  }

  function showBannerAdBlock () {
    body.style.overflow = 'hidden'

    body.innerHTML +=
          `
          <div style="${getRandomStyle()};">
            <div style="width: 100%; max-width: 500px; margin: auto; background-color: white; border-radius: 1rem; overflow: hidden; position: relative;">

            <img src="${imagesCdnUrl}/logo-small.svg" style="position: absolute; top: 0; right: 0; background-color: #D9D9D9; padding: 10px; border-bottom-left-radius: 1rem;">

            <!-- Content -->
            <section id="content">
              ${getContentFirstPage()}
            </section>

            <p style="text-align: center; margin: 20px 0; font-size: .7rem;">
                ${i18next.t('banner.content')}
            </p>

            <!-- Buttons -->
            <div style="display: flex; border-top: 1px solid #E5E7EB">

            <span onclick="toggleContent()" id="how-to-remove" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: white;">
              ${i18next.t('banner.howToRemove')}
            </span>
            <span onclick="location.reload()" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: black; color: white; font-weight: bold;">
              ${i18next.t('banner.okDone')}
            </span>

            </div>
        </div>

          <style>
          
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    
          #ad-icon-small{
                  display: none;
              }

          @media screen and (max-width: 500px){
              #ad-icon{
                  display: none;
              }

              #ad-icon-small{
                  display: inline-block;
              }
              
          }
      </style>
  `
    const script = document.createElement('script');
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


  function getRandomStyle () {
    const styles = [
      {
        name: 'width',
        value: '100%'
      },
      {
        name: 'height',
        value: '100vh'
      },
      {
        name: 'padding',
        value: '10px'
      },
      {
        name: 'background-color',
        value: 'rgba(0,0,0,0.68)'
      },
      {
        name: 'position',
        value: 'fixed'
      },
      {
        name: 'top',
        value: '0'
      },
      {
        name: 'left',
        value: '0'
      },
      {
        name: 'z-index',
        value: '999999'
      },
      {
        name: 'display',
        value: 'flex'
      },
      {
        name: 'font-family',
        value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
      },
      {
        name: 'backdrop-filter',
        value: 'blur(5px) grayscale(100%)'
      },
      
    ]

    const randomStyle = Array.from({ length: styles.length }, (_, index) => index)
      .sort(() => Math.random() - 0.5)

    return randomStyle.map(index => `${styles[index].name}: ${styles[index].value};`).join(' ')
  }


  function getContentFirstPage(){

    return `<div id="content-1" style="display: flex; padding: 30px 10px 10px; min-height: 305px;">
            <div style="margin-left: 10px;">

                <div style="display:flex; justify-content: space-between;">
                    <p>
                    <span style="text-transform: uppercase;">Alt!</span> ${i18next.t('banner.prefix')}
                        <br>
                        <span style="font-size: 3rem; font-weight: bold; text-transform: uppercase;">Adblock!</span>
                    </p>
                    <img src="${imagesCdnUrl}/adIconSmall.png" id="ad-icon-small">
                </div>

                

                <p style="font-size: 1.1rem; color: rgb(107, 114, 128); line-height: 28px; margin: 20px 0;">
                  ${i18next.t('banner.description')}
                </p>
            </div>
            
            <img src="${imagesCdnUrl}/adIcon.png" id="ad-icon" style="width: 100%; height: 100%;">
        </div> `;
}

function getContentSecondPage(){
  return `<div id="content-2" style="padding: 30px 10px 10px; min-height: 305px">
        <div style="margin-left: 10px;">
            <p style="font-weight: bold; font-size: 1.5rem; margin-bottom: 20px;">
              ${i18next.t('info.title')}
            </p>

            <ol style="font-size: 1.1rem; color: rgb(107, 114, 128);">
                <li style="margin: 25px 20px;">
                  <span style="font-weight: bold;">${i18next.t('info.step1.instruction')}</span>. ${i18next.t('info.step1.description')}
                </li>   
                <li style="margin: 25px 20px;">
                  ${i18next.t('info.step2.instruction')}
                </li>
                <li style="margin: 25px 20px;">
                  ${i18next.t('info.step3.instruction')}
                </li>
            </ol>

        </div>
    </div>`;
}

  function getHowDisableButton(){
    return i18next.t('banner.howDisable');
  }

  function getReturnBackButton(){
    return i18next.t('banner.back');
  }

  // Esportare le funzioni e le variabili
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    hiddenBody,
    imagesCdnUrl,
    detectAdBlock,
    showBannerAdBlock
  };
} else {
  window.myLibrary = {
    hiddenBody,
    imagesCdnUrl,
    detectAdBlock,
    showBannerAdBlock
  };
}*/