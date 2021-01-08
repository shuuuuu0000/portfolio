class smoothScroll {
  constructor() {
    this.smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    this._init();
  }

  _init() {
    for (let i = 0; i < this.smoothScrollTrigger.length; i++) {
      this.smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = this.smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.querySelector(href);
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 100;
        const target = rect + offset - gap;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      });
    }
  }
}
