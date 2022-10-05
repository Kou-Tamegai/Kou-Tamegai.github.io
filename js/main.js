'use strict';

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

{
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  {
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
  
    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
      document.querySelector('Marquee').classList.add('hide');
      document.querySelector('.language').classList.add('hide');
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
      document.querySelector('Marquee').classList.remove('hide');
    });
  }
}

{
  bubbly({
    colorStart: '#fff4e6',
    colorStop: '#ffe9e4',
    blur: 1,
    compose: 'source-over',
    bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
  });
}