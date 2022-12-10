export default class Slide {
  constructor(slide, container) {
    this.slide = document.querySelector(slide);
    this.container = document.querySelector(container);
  }

  onStart(e) {
    e.preventDefault();
    this.container.addEventListener('mousemove', this.onMove);
  }

  onMove(e) {}

  onEnd(e) {
    this.container.removeEventListener('mousedown', this.onMove);
  }

  addSlideEvents() {
    this.container.addEventListener('mousedown', this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStart(this);
    this.onMove = this.onMove(this);
    this.onEnd = this.onEnd(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
