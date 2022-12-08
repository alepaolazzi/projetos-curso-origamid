import ScrollSuave from './scroll-suave.js';
import initAnimacaoScroll from './scroll-animacao.js';
import Accordion from './accordion.js';
import TabNav from './tabnav.js';
import Modal from './modal.js';
import Tooltip from './tooltip.js';
import initDropdownMenu from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';
import initFuncionamento from './funcionamento.js';
import fetchAnimais from './fetch-animais.js';
import initFetchBitcoin from './fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
