
    const instance = new Typewriter('#typewriter', {
        strings: ['유연한', '호기심 많은', '즐거운'],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
    });

    const mailBtn = document.querySelectorAll('.mailBtn');
    const phoneBtn = document.querySelectorAll('.phoneBtn');
    const addressBtn = document.querySelectorAll('.addressBtn');

    const firstBox = document.querySelectorAll('.firstBox');
    const secondBox = document.querySelectorAll('.secondBox');

    mailBtn.forEach(function(item) {
    item.addEventListener('click', function() {
      for(let idx of firstBox) {
        idx.style.cssText  = 'z-index:1000;';
      }
    });
  });

  phoneBtn.forEach(function(item) {
    item.addEventListener('click', function() {
      for(let idx of secondBox) {
        idx.style.cssText  = 'z-index:1000;';
      }
    });
  });

    const more_btn1 = document.querySelector('#more_btn1');
    const moreconts1 = document.querySelector('#moreconts1');

    const more_btn2 = document.querySelector('#more_btn2');
    const moreconts2 = document.querySelector('#moreconts2');

    const more_btn3 = document.querySelector('#more_btn3');
    const moreconts3 = document.querySelector('#moreconts3');

    function toggleMenu1() {
      moreconts1.classList.toggle('active1');
    }
    more_btn1.addEventListener('click', toggleMenu1);

    function toggleMenu2() {
      moreconts2.classList.toggle('active2');
    }
    more_btn2.addEventListener('click', toggleMenu2);

    function toggleMenu3() {
      moreconts3.classList.toggle('active3');
    }
    more_btn3.addEventListener('click', toggleMenu3);

  

    
    
    

    

