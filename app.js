const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', () => {
    if (image.classList.contains('fullscreen')) {
      image.classList.add('fade-out');
      setTimeout(() => {
        image.classList.remove('fullscreen', 'fade-out');
      }, 500);
    } else {
      image.classList.add('fullscreen');
    }
  });
});

const gallery = document.querySelector('.gallery');

let isScrolling;


gallery.addEventListener('scroll', () => {
    setTimeout(() => {
        gallery.classList.add('scrolling');
    }, 30);
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
    gallery.classList.remove('scrolling');
    }, 40);

});
