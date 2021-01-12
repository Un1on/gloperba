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
    const ANIMATION_DELAY_MEDIUM = 500;
    const ANIMATION_DELAY_SMALL = 200;
    const ANIMATION_DELAY_READ = 4000;
    // reference variables to DOM elements
    const isi = document.querySelector('.isi-container-wrapper');
    const screen1 = document.querySelector('.screen-1');
    const screen2 = document.querySelector('.screen-2');
    const screen3 = document.querySelector('.screen-3');
    const screen4 = document.querySelector('.screen-4');
    const screen5 = document.querySelector('.screen-5');
    const screen6 = document.querySelector('.screen-6');

    const frame1 = () => {
    
      helperFunctions.fadeIn(screen1.querySelector('img'), SLIDE_ANIMATION_SPEED, () => {
        setTimeout(() => {
        helperFunctions.fadeOut(screen1.querySelector('img'), SLIDE_ANIMATION_SPEED, () => {
          setTimeout(() => {
            helperFunctions.animate(screen1, {
              opacity: 0
            }, ANIMATION_DELAY, 'ease');

            frame2();
          }, ANIMATION_DELAY_SMALL);
        
        });
      }, ANIMATION_DELAY, 'ease');
      });
    };

    const frame2 = () => {
      helperFunctions.fadeIn(screen2, SLIDE_ANIMATION_SPEED, () => {
        setTimeout(() => {
          helperFunctions.fadeOut(screen2, SLIDE_ANIMATION_SPEED, () => {
            setTimeout(() => {
  
              frame3();
            }, ANIMATION_DELAY_SMALL);
          });
        }, ANIMATION_DELAY_READ);
      
      });
    };

    const frame3 = () => {
      helperFunctions.animate(screen3, {display: 'block'}, 0, 'ease');
      helperFunctions.fadeIn(screen3.querySelector('h1'), SLIDE_ANIMATION_SPEED);
      setTimeout(() => {
      helperFunctions.fadeIn(screen3.querySelector('.screen-bg'), ANIMATION_SPEED, () => {
        setTimeout(() => {
        helperFunctions.fadeOut(screen3.querySelector('h1'), SLIDE_ANIMATION_SPEED);
      setTimeout(() => {
        helperFunctions.animate(screen3, {display: 'none'}, 0, 'ease');
        frame4();
      }, SLIDE_ANIMATION_SPEED + 50);
    }, ANIMATION_DELAY, 'ease');
      });
    }, SLIDE_ANIMATION_SPEED);
    };

    const frame4 = () => {
      
      helperFunctions.animate(screen4, {transform: 'translateY(0)'}, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
          helperFunctions.fadeIn(screen4.querySelector('h1'), SLIDE_ANIMATION_SPEED);
          setTimeout(() => {
            helperFunctions.animate(isi, {display:'block'}, 0, 'ease');
          helperFunctions.animate(isi, {transform: 'translateY(0)'}, SLIDE_ANIMATION_SPEED, 'ease');
          this.isi.init();
          this.isi.refresh();
            setTimeout(() => {
            helperFunctions.fadeOut(screen4.querySelector('h1'), SLIDE_ANIMATION_SPEED);
            }, SLIDE_ANIMATION_SPEED);
            setTimeout(() => {
              helperFunctions.animate(screen4, {transform: 'translateY(-100%)'}, SLIDE_ANIMATION_SPEED, 'ease');
              frame5();
            }, 800);
        }, ANIMATION_DELAY);
        }, ANIMATION_DELAY_SMALL);
      });
    };

    const frame5 = () => {
        helperFunctions.animate(screen5, {transform: 'translateY(0)'}, SLIDE_ANIMATION_SPEED, 'ease', () => {
        setTimeout(() => {
        helperFunctions.fadeIn(screen5.querySelector('h1'), SLIDE_ANIMATION_SPEED);
        setTimeout(() => {
          helperFunctions.fadeOut(screen5.querySelector('h1'), SLIDE_ANIMATION_SPEED);
          setTimeout(() => {
          // helperFunctions.animate(screen5, {transform: 'translateY(100%)'}, SLIDE_ANIMATION_SPEED, 'ease', () => {

            frame6();
          // });
        }, SLIDE_ANIMATION_SPEED);
        }, ANIMATION_DELAY);
    }, SLIDE_ANIMATION_SPEED);
  });
    };



    const frame6 = () => {
      helperFunctions.animate(screen6, {background: 'linear-gradient(to bottom, transparent, white), url(img/bg-6-gradient.png)'}, SLIDE_ANIMATION_SPEED, 'ease');
      helperFunctions.fadeIn(screen6, ANIMATION_DELAY_MEDIUM, () => {
        setTimeout(() => {
        helperFunctions.animate(screen6.querySelector('.bg-image'), {transform: 'translateY(0)'}, SLIDE_ANIMATION_SPEED, 'ease');
        setTimeout(() => {
          helperFunctions.animate(screen6.querySelector('.logo-image'), {transform: 'translateX(0)'}, SLIDE_ANIMATION_SPEED, 'ease');
          setTimeout(() => {
            helperFunctions.animate(screen6.querySelector('.button'), {transform: 'translateX(0)'}, SLIDE_ANIMATION_SPEED, 'ease');
            helperFunctions.animate(screen1, {opacity: 1}, 0, 'ease');
          //   setTimeout(() => {
          //     helperFunctions.fadeOut(screen6, 0);
          //     helperFunctions.animate(screen6.querySelector('.bg-image'), {transform: 'translateY(-100%)'}, SLIDE_ANIMATION_SPEED, 'ease');
          //     helperFunctions.animate(screen6.querySelector('.logo-image'), {transform: 'translateX(250%)'}, SLIDE_ANIMATION_SPEED, 'ease');
          //     helperFunctions.animate(screen6.querySelector('.button'), {transform: 'translateX(250%)'}, SLIDE_ANIMATION_SPEED, 'ease');
          //     helperFunctions.animate(isi, {display:'none'}, 0, 'ease');
          // }, ANIMATION_DELAY);
          }, ANIMATION_DELAY_SMALL);
        }, ANIMATION_DELAY_SMALL);
      }, ANIMATION_DELAY_SMALL);
    }, ANIMATION_DELAY_SMALL);
  };


    animator.init = function () {
      frame1();
    };

    return animator;
  }

  // ANIMATION FOR THE SECOND BANNER


  init() {
    this.bannerFirstOptionAnimator.init();
  }
};