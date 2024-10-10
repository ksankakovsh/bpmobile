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
  });

offerW.addEventListener('click', function() {
      continueButton.href = linkForBlock2;
  });

const translations = {
    en: dataEn,
    de: dataDe,
    es: dataEs,
    fr: dataFr,
    pt: dataPt,
    ja: dataJa
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
    document.body.classList.add(lang);
    document.getElementById('title').innerHTML = translations[lang]['Get Unlimited <br>Access'];
    document.getElementById('card_title1').innerHTML = translations[lang]['Unlimited Art <br>Creation'];
    document.getElementById('card_title2').innerHTML = translations[lang]['Exclusive <br>Styles'];
    document.getElementById('card_title3').innerHTML = translations[lang]['Magic Avatars <br>With 20% Off'];
    document.getElementById('title-yerly').innerHTML = translations[lang]['YEARLY ACCESS'];
    document.getElementById('subtitle-yearly').innerHTML = translations[lang]['Just {{price}} per year'];
    document.getElementById('price-yearly').innerHTML = translations[lang]['{{price}} <br>per week'];
    document.getElementById('price-weekly').innerHTML = translations[lang]['{{price}} <br>per week'];
    document.getElementById('title-weekly').innerHTML = translations[lang]['WEEKLY ACCESS'];
    continueButton.innerHTML = translations[lang].Continue;
    document.getElementById('term').innerHTML = translations[lang]['Terms of Use'];
    document.getElementById('priv').innerHTML = translations[lang]['Privacy Policy'];
    document.getElementById('restore').innerHTML = translations[lang].Restore;
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

  const supportedLanguages = ['en', 'de', 'pt', 'js', 'es', 'fr'];
  if (!supportedLanguages.includes(lang)) {
    lang = 'en';
  }
  switchLanguage(lang);
}
window.onload = initLanguage;