//nav2-dropdown
// function nav1dropdown() {
//   const btn = document.querySelector(".first-nav__dropdown-btn");
//   const ul = document.querySelector(".first-nav__dropdown-menu");
//   const arow = document.querySelector(".first-nav__dropdown-svg");

//   btn.addEventListener("click", function () {
//     arow.classList.toggle("fa-rotate-180");
//     ul.classList.toggle("hidden");
//     console.log("hi");
//   });
// }
// nav1dropdown();

// // }
// // nav1dropdown()
// function nav2dropdown() {
//   const btn = document.querySelector(".second-nav__dropdown-btn");
//   const ul = document.querySelector(".second-nav__dropdown-menu");
//   const arow = document.querySelector(".second-nav__dropdown-svg");
//   btn.addEventListener("click", function () {
//     arow.classList.toggle("fa-rotate-180");
//     ul.classList.toggle("drop-active");
//     console.log("hi");
//   });
//   arow.addEventListener("click", function () {
//     arow.classList.toggle("fa-rotate-180");
//     ul.classList.toggle("drop-active");
//     console.log("hi");
//   });
// }
// nav2dropdown();
// e.addEventListener('click',function(a){
//   let tar = a.target.className

//   console.log(tar);
// })
function dropdown(a) {
 
  let btn = document.querySelectorAll(".dropdown button");


  for (e of btn ) {
    e.addEventListener("click", function (a) {
      let id = a.currentTarget.parentElement
      let svg = id.querySelector('svg')
      let menu = id.querySelector('.drop-menu')
      let menus = document.querySelectorAll('.drop-menu')
      svg.classList.toggle("rotation");
      menu.classList.toggle("drop-active");
      console.log(menu);
      for(m of menus){
        if(m !== menu){
          m.classList.remove('drop-active')
        }
      }
    
      
    });
  }
}
dropdown();

// (function () {
//   function searchCath(e) {
//     const searched = document.querySelector('.searchs-Cat')
//     let id = e.currentTarget.textContent
//     searched.innerHTML += `<span>${id}</span>`
//   }

//   window.searchCath = searchCath;
// })();
// searchCath()
(function () {
  function burger() {
    let X = document.querySelector(".X-2");
    let popup = document.querySelector(".burger-Con");
    let btn = document.querySelector(".burger");
    btn.addEventListener("click", function () {
      popup.classList.remove("hidden");
    });
    X.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  }
  window.burger = burger;
})();

burger();

// cathpag()
