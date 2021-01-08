class TweenTextAnimation{
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
          curr = curr.replace(/\s+/, '&nbsp;');
          return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }

    animate() {
      this.DOM.el.classList.add('inview');
      this.DOM.chars.forEach((c, i) => {
           TweenMax.to(c, 1, {
              ease: Back.easeOut,
              delay: i * .1,
              startAt: { y: -50, opacity: 0},
              y: '0%',
              opacity: 1
           });
       });
    }
}
