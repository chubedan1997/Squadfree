
// time

const times = document.querySelectorAll(".data-number");
const onscrollHeader = document.querySelector(".header")

window.onscroll = function(){
  myFunction();
};
function myFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    onscrollHeader.classList.add("onscrollHeader")
   }
    else {
     onscrollHeader.classList.remove("onscrollHeader")
   }

    if (document.documentElement.scrollTop > 1220 ) {
    times.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / 250;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + inc)}`;
          setTimeout(updateCount, 100);
        }
      };
      updateCount();
    });
  }
}


// tab-menu
const lists = document.querySelectorAll(".nav-link");

[...lists].forEach(param => param.addEventListener("click", function(event){
  [...lists].forEach(e => e.classList.remove("active"));
  event.target.classList.add("active");
}));

// slick slider
$(document).ready(function(){
    $('.slider-items').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,

        dots:true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              
        ]
    });
  });





// attack app

const itemAttack = document.querySelectorAll(".control");
const itemData = document.querySelectorAll(".portfoloi-item");

let index = 0;


[...itemAttack].forEach(item => item.addEventListener("click", function(event){
    [...itemAttack].forEach(e => e.classList.remove("active"));
    event.target.classList.add("active");
    
    const dataKeyword = item.getAttribute("data-keyword")
    itemData.forEach(data => {
        if(data.getAttribute("data-keyword") === dataKeyword || dataKeyword === "ALL") {
            data.classList.remove("hide-img")
        } else {
            data.classList.add("hide-img")
        }

    })
    console.log(item);
}));
