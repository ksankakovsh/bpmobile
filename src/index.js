import './index.html';
import './index.scss';
import dataDe from './i18n/de.json';
import dataEn from './i18n/en.json';
import dataEs from './i18n/es.json';
import dataFr from './i18n/fr.json';
import dataJa from './i18n/ja.json';
import dataPt from './i18n/pt.json';

const continueButton = document.getElementById('continue');

const offerY = document.getElementById('offer-yearly');
const offerW = document.getElementById('offer-weekly');
const linkForBlock1 = 'https://apple.com/';
const linkForBlock2 = 'https://google.com/';

offerY.addEventListener('click', function() {
      continueButton.href = linkForBlock1;
      offerW.classList.remove('selected');
      offerY.classList.add('selected');
  });

offerW.addEventListener('click', function() {
      continueButton.href = linkForBlock2;
      offerY.classList.remove('selected');
      offerW.classList.add('selected');
  });

const translations = {
    en: dataEn,
    de: dataDe,
    es: dataEs,
    fr: dataFr,
    ja: dataJa,
    pt: dataPt,
  
};

function getLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang');
}

function getSystemLanguage() {
  return navigator.language.substring(0, 2);
}

function switchLanguage(lang) {
  if (translations[lang]) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const translationKey = element.getAttribute('data-i18n');
      const translation = translations[lang][translationKey];

      if (translation) {
        element.innerHTML = translation.replace(/&lt;br&gt;/g, '<br>');
      }
    });
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
  }
}

function initLanguage() {
  let lang = getLangFromUrl();

  if (!lang) {
    lang = getSystemLanguage();
  }

  const supportedLanguages = ['en', 'de', 'pt', 'ja', 'es', 'fr'];
  if (!supportedLanguages.includes(lang)) {
    lang = 'en';
  }

  document.body.classList.add(lang);
  switchLanguage(lang);
}
window.onload = initLanguage;

function detectScreenSize() {
  
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const banner = document.getElementById('banner');
  const toggleClass = function(element, class1, class2) {
    return (
      element.classList.add(class1),
      element.classList.remove(class2)
    )
  };
  if ((screenWidth === 375 && screenHeight === 667) || (screenWidth === 414 && screenHeight === 736)) {
    toggleClass(banner, 'small-bg', 'main-bg')

  } else {
    toggleClass(banner, 'main-bg', 'small-bg')
  }
}

detectScreenSize();
window.addEventListener('resize', detectScreenSize);
