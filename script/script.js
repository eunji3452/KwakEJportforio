
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