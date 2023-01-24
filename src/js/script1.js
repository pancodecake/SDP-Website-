(function () {
    function validation(){
      (() => {
        const validation = new JustValidate('.form', {
          errorFieldCssClass: 'is-invalid',
          errorLabelStyle: {

            color: 'rgba(209, 22, 22, 1)',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '16px',
          },
          focusInvalidField: true,
          lockForm: true,
        });

        validation
          .addField('#name', [
            {
              rule: 'required',
              errorMessage: 'Необходимо заполнить!'
            },
            {
           rule: 'customRegexp',
          value:/[A-Za-z]+$/,
          errorMessage: 'Недопустимый формат'
          }
          ])
          .addField('#phone', [
            {
              rule: 'required',
              errorMessage: 'Необходимо заполнить!'
            },
            {
              rule: 'number',
              errorMessage: 'Недопустимый формат'
            },
          ])
          .addField('#gmail', [
              {
                rule: 'required',
                errorMessage: 'Необходимо заполнить!'
              },
              {
                rule: 'email',
                errorMessage: 'Недопустимый формат'
              },
            ])
          .onSuccess((ev) => {
            ev.preventDefault();
            window.showNotification();
          });
      })();
    }
    window.validation = validation;
  })();
  
  validation();
  let con =
  '<div style="max-height:52px;font-size: 9px;line-height: 14px">Реплицированные с зарубежных источников, исследования формируют глобальную сеть.</div>';

tippy(".tooltip", {
  content: con,
  theme: "basic",
  maxWidth: 147,
  allowHTML: true,
  interactive: true,
});
function swiperHero() {
  const slider = document.querySelector(".swiper-con");

  let mySwiper = new Swiper(slider, {
    slidesPerView: 1, //auto will consume space as much as block needs css width needs to be auto doe
    loop: true,
    // autoplay: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true, //you can change by clicking pagination
    },
  });
}
swiperHero();
function swiperspecial() {
  const slider = document.querySelector(".swiper__special");

  let mySwiper = new Swiper(slider, {
    slidesPerView: 1, //auto will consume space as much as block needs css width needs to be auto doe
   
    spaceBetween: 32,
    // slideClass:'special-item ',
    // wrapperClass: 'special-wrapper',

      slidesPerGroup:3,//on one click changes 2
    navigation: {
      nextEl: ".special-next",
      prevEl: ".special-prev ",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
        slidesPerGroup:1,
      },
      // when window width is >= 480px
      637: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup:2,
      },
      // when window width is >= 640px
      785: {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesPerGroup:3,
      },
    },
  });
}
swiperspecial();

function usefulswiper() {
  const slider = document.querySelector(".useful__swiper");

  let mySwiper = new Swiper(slider, {
    slidesPerView: 2,

    spaceBetween: 32,
    //  slideClass:'useful__swiper-card',
    //  wrapperClass: 'useful__swiper-wrapper',

    //  slidesPerGroup:3,//on one click changes 2
    navigation: {
      nextEl: ".useful-next",
      prevEl: ".useful-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
        navigation: {
          nextEl: ".sp",
          prevEl: ".sn",
        },
      },
      // when window width is >= 480px
      583: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      // when window width is >= 640px
      1023: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1500: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1500: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      4500: {
       
      },
      
   
    },
  });
}
usefulswiper();


