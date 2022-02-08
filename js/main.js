
let openMenu = document.querySelector('.menu__btn');
let menuList = document.querySelector('.menu__list');

openMenu.addEventListener('click', function () {
     menuList.classList.toggle('menu__list--active');
})

const swiper = new Swiper('.leyla__certificates', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: '1',
     spaceBetween: 40,
     breakpoints: {
         
          1000: {
               slidesPerView: '2',
          },
           1250: {
               slidesPerView: '2.5'
          }
     },

  navigation: {
     nextEl: '.leyla__button-next',
    prevEl: '.leyla__button-prev',
  },
  
});
const swiper2 = new Swiper('.ontv__swiper', {
     direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
     centeredSlides: false,
     loopedSlides: 0,
     autoheight: true,
     breakpoints: {
         
          769: {
               slidesPerView: 2,
               spaceBetween: 20,
          },
           1000: {
               slidesPerView: 3,
               spaceBetween: 100,
               centeredSlides: true,
          }
     },

  navigation: {
     nextEl: '.ontv__swiper-button-prev',
    prevEl: '.ontv__swiper-button-next',
  },
});
 let openList = document.querySelector('.procedures__more');

 openList.addEventListener('click', function() {
          document.getElementById('elem5').style.display = 'block';
          document.getElementById('elem6').style.display = 'block';
          document.getElementById('elem7').style.display = 'block';
          document.getElementById('elem8').style.display = 'block';
          document.getElementById('elem9').style.display = 'block';
          document.getElementById('elem10').style.display = 'block';
          document.getElementById('elem11').style.display = 'block';
          document.getElementById('elem12').style.display = 'block';
          openList.style.display = "none";
 })

 const swiper3 = new Swiper('.responces__swiper', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows : false,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     
        1000: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: -80
        },        
    },
 });

 let accordion = document.getElementById('accordion');
		accordion.addEventListener('click', change);
		function change(event) {
			let targ = event.target;
			if (targ.tagName !== 'H3') return;
			if (targ.classList.contains('select')) {
				hideAll();
			} else {
				hideAll();
				targ.classList.add('select');
				showText(targ.nextElementSibling);
			}
		}
		function hideAll() {
			let h3El = accordion.querySelectorAll('h3');
			let divEl = accordion.querySelectorAll('div');
			for (let i = 0; i < h3El.length; i++) {
				h3El[i].classList.remove('select');
			}
			for (let i = 0; i < divEl.length; i++) {
				divEl[i].style.height = '0';
			}
		}
		function showText(textEl) {
			textEl.style.height = textEl.scrollHeight + 'px';
		}