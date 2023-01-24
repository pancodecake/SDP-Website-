function tagss() {
  let ul = document.querySelectorAll(".cathalog-1024__ul ");
  let check = document.querySelectorAll(
    ".cathalog-1024__ul .filters__checkbox"
  );
  let tags = document.querySelectorAll(".filters-tags div p");
  let x = document.querySelectorAll(".filters-tags svg");
  let price = document.querySelector(".cathalog-1024__acc #maxValue-2");

  
  for(btn of x){
    btn.addEventListener('click',function(d){
      d.currentTarget.parentElement.classList.add('hidden')
    })
  }


   
    price.addEventListener('change',function(a){
    
      for (tag of tags) {
      
        
        if (price.dataset.set ===  tag.dataset.tag  ) {
          tag.parentElement.classList.remove("hidden");
          tag.textContent = price.value;
        
        }
      }
    })
  
  for (c of check) {
   
    c.addEventListener("change", function (a) {
     
      for (k of check){
        if(c !== k){
          k.checked === false
        }
      }
      if (a.target.checked) {
        let span = a.currentTarget.nextElementSibling;
        let id = span.textContent;
      
        for (tag of tags) {
         
          if (tag.dataset.tag === span.dataset.set) {
            tag.parentElement.classList.remove("hidden");
            tag.textContent = id;
           
          }
        }
      }
    });
  }

  // let svg = document.querySelectorAll("svg");
  // drop.classList.toggle("drop-active");
  // svg.classList.toggle("rotation");querySelector('.cath__text'

  // for (e of ul) {
  //   e.addEventListener("click", function (a) {
  //     if (a.target.checked) {
  //       console.log("its checked bruh");
  //       let id = a.currentTarget.textContent;
  //       console.log(a.target);
  //     }

  //     // tags.textContent += id
  //     // if(e.target.checked){

  //     // }

  //     // if(a.currentTarget.dataset.set === )
  //   });
  // }
}
tagss();
(function () {
  function range() {
    const range = document.querySelectorAll(".filters__price-range input");
    progress = document.querySelector(".filters__price-range #progress");
    const numberMin = document.querySelector("#minValue");
    const numberMax = document.querySelector("#maxValue");
    let numbers = [numberMin, numberMax];
    let gap = 100;
    function main() {
      range.forEach((e) => {
        e.addEventListener("change", Cathfilter);
        e.addEventListener("input", mainRange);
        e.addEventListener("hover", mainRange);
      });

      function mainRange(a) {
        var minRange = parseInt(range[0].value);
        var maxRange = parseInt(range[1].value);
        if (maxRange - minRange < gap) {
          if (a.target.id === "minRange") {
            range[0].value = maxRange - gap;
          } else {
            range[1].value = minRange + gap;
          }
       
        } else {
          progress.style.left = (minRange / range[0].max) * 100 + "%";
          progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
        }
        numberMin.value = range[0].value;
        numberMax.value = range[1].value;

        
      }
    }
    main();
    numbers.forEach((e) => {
      e.addEventListener("change", Cathfilter);
      e.addEventListener("change", numbersMain);
      window.addEventListener("DOMContentLoaded", numbersMain);
      function numbersMain(a) {
        numberMin.value = "2000";
        numberMax.value = "150000";
        minvalue = parseInt(numbers[0].value);
        maxvalue = parseInt(numbers[1].value);
        if (numberMax.value > 200000) {
          numberMax.value = 200000;
      
        }
     
        if (maxvalue - minvalue < gap) {
          if (a.target.id === " minvalue") {
            range[0].value = maxvalue - gap;
          } else {
            range[1].value = minvalue + gap;
          }
      
        } else {
          progress.style.left = (minvalue / range[0].max) * 100 + "%";
          progress.style.right = 100 - (maxvalue / range[1].max) * 100 + "%";
        }
        range[0].value = numberMin.value;
        range[1].value = numberMax.value;
      }
    });
    function Cathfilter() {
      let price = document.querySelectorAll(".card-text");
      let card = document.querySelectorAll(".card");
      for (i = 0; i < card.length; i++) {
        let iprice = parseInt(price[i].dataset.price);
        let child = parseInt(card[i].querySelector(".card-text").dataset.price); //same as iprice
       
        if (!(iprice > +numberMin.value && iprice < +numberMax.value)) {
          card[i].style.display = "none";
        } else {
          card[i].style.display = "flex";
        }
      }
    }
  }
  window.range = range;
})();
range();
(function () {
  function cathSwiper() {
    const slider = document.querySelector(".cathalog-swiper");
    let mySwiper1 = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 32,
      slideClass: "cath-card",

      wrapperClass: "wrapper",

      pagination: {
        el: ".cathalog__swiper-pagination",
        clickable: true, //you can change by clicking pagination
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 1,
          spaceBetween: 32,
        
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 1,
          spaceBetween: 32,
        
        },
      },
    });
  }
  window.cathSwiper = cathSwiper;
})();

cathSwiper();

(function () {
  function cathAdjuster() {
    let con = document.querySelector(".wrapper");

    let body = document.body;
    // let child = con.children[1]
    // con.removeChild(child)
    // let slide =  con.querySelectorAll('.cath-card')

    let old = con.innerHTML;
    // for(e of slide){
    //   console.log(e.children);
    // }

    window.addEventListener("resize", function () {
      if (body.getBoundingClientRect().width <= 769) {
        console.log("smaller");

        con.innerHTML = `<div class="cath-card">
            <div class="card">
              <span class="card-span"
                >
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
5,0</span
              >
              
            <div class=" highRating-card__img">
            <img
              src="imgs//sofa_PNG69251.webp"
              alt="imgs//sofa_PNG69251.webp"
              class=""
            />
          </div>
          
            <h3 class="card-title">
              Диван кожаный<br />
              “R-94”
            </h3>
            <p class="card-text" data-price="94990">94 990 руб</p>
            <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
            <span class="card-span"
              >
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,9</span
            >
            <div class=" highRating-card__img">
          
          <img
            src="imgs//sofa_PNG69331.webp"
            alt="imgs//sofa_PNG69331.webp"
            class=""
          /></div>
          <h3 class="card-title">Диван апартековый <br />“T-75”</h3>
          <p class="card-text" data-price="69990">69 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
         
          <div class="card">
          <span class="card-span"
            >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//1211.webp"
          alt="imgs//1211 (1).webp"
          class=""
          /></div>
          <h3 class="card-title">Диван тканевый <br />“D-31”</h3>
          <p class="card-text" data-price="28490">28 490 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//sofa_PNG69651.webp"
          alt="imgs//sofa_PNG69651.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый <br />“Y-68”</h3>
          <p class="card-text" data-price="22990">22 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          
          <div class="card">
          
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//sofa_PNG69191.webp"
          alt="imgs//sofa_PNG69191.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван из шинила <br />“W-95”</h3>
          <p class="card-text" data-price="22990">22 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//sofa_PNG69181.webp"
          alt="imgs//sofa_PNG69181.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван флоковый <br />“G-41”</h3>
          <p class="card-text" data-price="17990">17 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          </div>
          <div class="cath-card">
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//sofa_PNG69231.webp"
          alt="imgs//sofa_PNG69231.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван шиниловый <br />“V-43”</h3>
          <p class="card-text" data-price="19990">19 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,7</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs//sofa_PNG69401.webp"
          alt="imgs//sofa_PNG69401.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый <br />“S-99”</h3>
          <p class="card-text" data-price="19990">19 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
            <span class="card-span"
              ><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
                </svg>
               
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
5,0</span
            >
            
          <div class=" highRating-card__img">
          <img
            src="imgs/sofa_PNG69341.webp"
            alt="imgs/sofa_PNG69341.webp"
            class=""
          />
        </div>
        
          <h3 class="card-title">
            Диван кожаный<br />
            “R-94”
          </h3>
          <p class="card-text" data-price="94 990">94 990 руб</p>
          <button class=" btn-buy ">Купить</button>
        
        </div>

            <div class="card">
              <span class="card-span"
                >
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,6</span
              >
              
            <div class=" highRating-card__img">
            <img
              src="imgs/1234.webp"
              alt="imgs/1234.webp"
              class=""
            />
          </div>
          
            <h3 class="card-title">
              Диван флоковый <br />
              “H-64”
            </h3>
            <p class="card-text" data-price="25990">25 990 руб</p>
            <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
            <span class="card-span"
              >
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,6</span
            >
            <div class=" highRating-card__img">
          
          <img
            src="imgs/1121.webp"
            alt="imgs/111.webp"
            class=""
          /></div>
          <h3 class="card-title">Диван флоковый  <br />“H-58”</h3>
          <p class="card-text" data-price="23990">23 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          <span class="card-span"
            >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1222.webp"
          alt="imgs/1222.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван из кожзама  <br />“R-43”</h3>
          <p class="card-text" data-price="33990">33 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
        
        </div>
        <div class="cath-card">
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,6</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1245.webp"
          alt="imgs/1245.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван из шинила  <br />“С-42”</h3>
          <p class="card-text" data-price="18990">18 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,8</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1242.webp"
          alt="imgs/1242.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый <br />“U-58”</h3>
          <p class="card-text" data-price="22990">22 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
         
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,5</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1233.webp"
          alt="imgs/1233.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый  <br />“R-85”</h3>
          <p class="card-text" data-price="34990">34 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,6</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1225.webp"
          alt="imgs/1225.webp" 
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый<br /> “R-85”</h3>
          <p class="card-text" data-price="21990">21 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
          <span class="card-span"
          >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,5</span
          >
          <div class=" highRating-card__img">
          
          <img
          src="imgs/1224.webp"
          alt="imgs/1224.webp"
          class=""
          /></div>
          <h3 class="card-title">Диван велюровый <br />“S-44”</h3>
          <p class="card-text" data-price="19990">19 990 руб</p>
          <button class=" btn-buy ">Купить</button>
          
          </div>
          <div class="card">
            <span class="card-span"
            >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
</svg>
4,4</span
            >
            <div class=" highRating-card__img">
            
            <img
            src="imgs/1243.webp"
            alt="imgs/1243.webp"
            class=""
            /></div>
            <h3 class="card-title">Диван из шинила  <br />“С-80”</h3>
            <p class="card-text" data-price="20990">20 990 руб</p>
            <button class=" btn-buy ">Купить</button>
            
            </div>
          </div>`;
      } else {
        con.innerHTML = old;
      }
    });

  }
  window.cathAdjuster = cathAdjuster;
})();

cathAdjuster();
