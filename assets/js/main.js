(function() {
  "use strict";

  // 1. إظهار الصفحة فوراً وإلغاء أي تعليقة
  window.onload = function() {
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
  };

  // 2. Header toggle
  const headerToggleBtn = document.querySelector('.header-toggle');
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', function() {
      document.querySelector('#header').classList.toggle('header-show');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  // 3. Typed.js (الكلمات اللي بتتغير)
  const selectTyped = document.querySelector('.typed');
  if (selectTyped && typeof Typed !== 'undefined') {
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000
    });
  }

  // 4. Skills Animation (ملء الخطوط)
  let skillsContent = document.querySelector('.skills-content');
  if (skillsContent && typeof Waypoint !== 'undefined') {
    new Waypoint({
      element: skillsContent, offset: '80%',
      handler: function() {
        document.querySelectorAll('.progress .progress-bar').forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  // 5. Swiper (المشاريع والشهادات)
  function initSwiper() {
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        try {
          let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
          new Swiper(swiperElement, config);
        } catch (e) { console.error("Swiper Config Error"); }
      });
    }
  }
  initSwiper(); // تشغيل فوري

  // 6. GLightbox
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

})();