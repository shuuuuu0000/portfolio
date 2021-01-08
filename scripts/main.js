document.addEventListener('DOMContentLoaded', function () {
  const mobile = new MobileMenu();
  const smooth = new smoothScroll();
  const nav = new ScrollObserver('.nav-trigger', navAnimation.bind(this), { once: false });
  const appear = new ScrollObserver('.appear', inviewAnimation);
  const hero = new HeroSlider('.swiper-container');
  const heroObseve = new ScrollObserver('.swiper-container', toggleSlideAnimation.bind(this), {once: false});
  hero.start();
  const side = new ScrollObserver('.main-content', sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" });
  const animateTitle = new ScrollObserver('.tween-animate-title', textAnimation, {rootMargin: "-200px 0px"});

  const header = document.querySelector('.header');
  function navAnimation(el, inview) {
    if(inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  }

  function inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }else {
      el.classList.remove('inview');
    }
  }

  function toggleSlideAnimation(el, inview) {
    if(inview) {
      hero.start();
    } else {
      hero.stop();
    }
  }


  const sides = document.querySelectorAll('.side');

  function sideAnimation(el, inview) {
    if(inview) {
      sides.forEach(side => side.classList.add('inview'));
    } else {
      sides.forEach(side => side.classList.remove('inview'));
    }
  }

  function textAnimation(el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
      }
  }
});
