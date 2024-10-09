import './index.html';
import './index.scss';
import dataDe from './i18n/de.json';
import dataEn from './i18n/en.json';
import dataEs from './i18n/es.json';
import dataFr from './i18n/fr.json';
import dataJa from './i18n/ja.json';
import dataPt from './i18n/pt.json';

const continueButton = document.getElementById('continue');

document.getElementById('title').innerHTML = dataEn['Get Unlimited <br>Access'];
document.getElementById('card_title1').innerHTML = dataEn['Unlimited Art <br>Creation'];
document.getElementById('card_title2').innerHTML = dataEn['Exclusive <br>Styles'];
document.getElementById('card_title3').innerHTML = dataEn['Magic Avatars <br>With 20% Off'];
document.getElementById('title-yerly').innerHTML = dataEn['YEARLY ACCESS'];
document.getElementById('subtitle-yearly').innerHTML = dataEn['Just {{price}} per year'];
document.getElementById('price-yearly').innerHTML = dataEn['{{price}} <br>per week'];
document.getElementById('price-weekly').innerHTML = dataEn['{{price}} <br>per week'];
document.getElementById('title-weekly').innerHTML = dataEn['WEEKLY ACCESS'];
continueButton.innerHTML = dataEn.Continue;
document.getElementById('term').innerHTML = dataEn['Terms of Use'];
document.getElementById('priv').innerHTML = dataEn['Privacy Policy'];
document.getElementById('restore').innerHTML = dataEn.Restore;

const offerY = document.getElementById('offer-yearly');
const offerW = document.getElementById('offer-weekly');

// function addSelectClass(element) {
//   element.addEventListener('click', function() {
//     element.classList.add('selected');
//   });
// }

// addSelectClass(offerW);
// addSelectClass(offerY);

const linkForBlock1 = 'https://apple.com/';
const linkForBlock2 = 'https://google.com/';

offerY.addEventListener('click', function() {
      continueButton.href = linkForBlock1;  // Меняем href ссылки
  });

offerW.addEventListener('click', function() {
      continueButton.href = linkForBlock2;  // Меняем href ссылки
  });
