import ScrollSuave from './scroll-suave.js';
import AnimacaoScroll from './scroll-animacao.js';
import Accordion from './accordion.js';
import TabNav from './tabnav.js';
import Modal from './modal.js';
import Tooltip from './tooltip.js';
import DropdownMenu from './dropdown-menu.js';
import MenuMobile from './menu-mobile.js';
import Funcionamento from './funcionamento.js';
import fetchAnimais from './fetch-animais.js';
import fetchBitcoin from './fetch-bitcoin.js';

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

const animacaoScroll = new AnimacaoScroll("[data-anime='scroll']");
animacaoScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchAnimais('../../animaisapi.json', '.numeros-grid');
