(function () {
  function validation() {
    function bought() {
      const check = document.querySelector(".filters__checkbox");
      const pop = document.querySelector(".pop-up");
      const fin = document.querySelector(".pop-up__fin");
      const start = document.querySelector(".pop-up__start");
   
      check.addEventListener("change", function (e) {
        if (e.target.checked) {
         
          fin.classList.remove('hidden')
          start.classList.add('hidden')
        }
         else{
          fin.classList.add('hidden')
          start.classList.remove('hidden')
         }
      });
    }
    (() => {
      const validation = new JustValidate(".form", {
        errorFieldCssClass: "is-invalid",
        errorLabelStyle: {
          color: "rgba(209, 22, 22, 1)",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
        },
        focusInvalidField: true,
        lockForm: true,
      });

      validation
        .addField("#name", [
          {
            rule: "customRegexp",
            value: /[A-Za-z]+$/,
            errorMessage: "Недопустимый формат",
          },
          {
            rule: "required",
            errorMessage: "Необходимо заполнить!",
          },
        ])
        .addField("#phone", [
          {
            rule: "required",
            errorMessage: "Необходимо заполнить!",
          },
          {
            rule: "number",
            errorMessage: "Недопустимый формат",
          },
        ])
        .onSuccess((ev) => {
          ev.preventDefault();
          bought();
        });
    })();
  }
  window.validation = validation;
})();

validation();


(function () {
  function popUp() {
    let X = document.querySelector(".X");
    let popup = document.querySelector(".items-cover");
    let btn = document.querySelector(".items-main__btn");
    btn.addEventListener("click", function () {
      popup.classList.remove("hidden");
    });
    X.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  }
  window.popUp = popUp;
})();

popUp();


(function () {
  function displayItem() {
    const itemList = document.querySelectorAll(".card-title");
    const item = document.querySelector(".items-main__id");

   
    for (e of itemList) {
      let con = e.textContent;

      if (con.search(item.textContent) > 0) {
   
     
        e.parentElement.style.display = "none";
      } else {
      
        e.parentElement.style.display = "flex";
      }
    }
  }

  window.displayItem = displayItem;
})();
displayItem();

(function () {
  function itemSwiper() {
    const slider = document.querySelector(".items-swiper");
    let mySwiper1 = new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: ".items-next",
        prevEl: ".items-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1700: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },
    });
  }

  window.itemSwiper = itemSwiper;
})();
itemSwiper()(function () {
  // const check = document.querySelector('.filters__checkbox')
  window.bought = bought;
})();
bought();

