const Isi = require('./components/isi.js');
const helperFunctions = require('./util/helper-functions');

module.exports = class MainJs {
  constructor() {
    this.isi = new Isi(IScroll);
    this.bannerFirstOptionAnimator = this.bannerFirstOptionAnimation();
    this.init = this.init.bind(this);
  }

  // ANIMATION FOR THE FIRST BANNER
  bannerFirstOptionAnimation() {
    const animator = {};
    const ANIMATION_SPEED = 1000;
    const SLIDE_ANIMATION_SPEED = 400;
    const ANIMATION_DELAY = 2000;
    const ANIMATION_DELAY_SECONDARY = 2800;
    const ANIMATION_DELAY_TERTIARY = 3500;

    // reference variables to DOM elements
    const isi = document.querySelector('.isi-container-wrapper');
    const screen1 = document.querySelector('.screen-1');
    const screen2 = document.querySelector('.screen-2');
    const screen3 = document.querySelector('.screen-3');
    const screen4 = document.querySelector('.screen-4');
    const screen5 = document.querySelector('.screen-5');
    const screen6 = document.querySelector('.screen-6');

    const frame1 = () => {
      helperFunctions.fadeIn(screen1.querySelector('img'), ANIMATION_SPEED, () => {
        setTimeout(() => {
          helperFunctions.animate(screen1.querySelector('img'), { opacity: 1 }, ANIMATION_SPEED, 'ease');
          // helperFunctions.animate(screen1, { opacity: 0 }, ANIMATION_SPEED, 'ease');

          frame2();
        }, 800);
      });
    };

    const frame2 = () => {
      helperFunctions.animate(screen2, { opacity: 1}, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
          helperFunctions.animate(screen2, { transform: 'translateX(-100%)' }, SLIDE_ANIMATION_SPEED, 'ease');

          frame3();
        }, ANIMATION_DELAY_SECONDARY);
      });
    };

    const frame3 = () => {

      helperFunctions.animate(screen3, { transform: 'translateX(0)' }, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
          helperFunctions.animate(screen3, { transform: 'translateX(100%)' }, SLIDE_ANIMATION_SPEED, 'ease');

          frame4();
        }, ANIMATION_DELAY);
      });
      

    };
    
    const frame4 = () => {
      helperFunctions.animate(isi, { width: '239px' }, 0, 'ease');
      helperFunctions.animate(isi, { opacity: 1 }, 0, 'ease');

      helperFunctions.animate(screen4, { transform: 'translateX(0)' }, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
          helperFunctions.animate(screen4, { transform: 'translateX(100%)' }, SLIDE_ANIMATION_SPEED, 'ease');

          frame5();
        }, ANIMATION_DELAY);
      });
    };

    const frame5 = () => {
      helperFunctions.animate(screen5, { transform: 'translateX(0)' }, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
          helperFunctions.fadeOut(screen5.querySelector('.content'), ANIMATION_SPEED, () => {
            frame6();
          });
        }, ANIMATION_DELAY_TERTIARY);
      });
    };

    const frame6 = () => {
      helperFunctions.fadeIn(screen6, ANIMATION_SPEED, () => {
        setTimeout(() => {
          frame1();
        }, ANIMATION_DELAY - 20);

        setTimeout(() => {
          helperFunctions.animate(screen5, { transform: 'translateX(-100%)' }, SLIDE_ANIMATION_SPEED, 'ease');
          helperFunctions.animate(screen6, { transform: 'translateX(-100%)' }, SLIDE_ANIMATION_SPEED, 'ease');
        }, ANIMATION_DELAY);
      });
    };



    animator.init = function() {
      frame1();
    };

    return animator;
  }

  // ANIMATION FOR THE SECOND BANNER
  

  init() {
      this.bannerFirstOptionAnimator.init();
  }
};