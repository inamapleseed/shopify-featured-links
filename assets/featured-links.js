document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 720) return;
  
  const sectionContainer = document.querySelector('.section__featured-links');
  const linkItems = document.querySelectorAll('.link__item:not(.link__button)');
  const defaultImage = document.querySelector('.default-image');
  const allImages = document.querySelectorAll('.link__image-desktop');
  
  // show only default image
  allImages.forEach(img => img.classList.remove('active'));
  if (defaultImage) defaultImage.classList.add('active');
  
  // handle link hover
  linkItems.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // hide all images
      if (defaultImage) {
        defaultImage.classList.remove('active');
        defaultImage.classList.add('hidden-1');
      }
      
      allImages.forEach(img => img.classList.remove('active'));
      
      // show the hovered image
      const currentImage = document.querySelector(`.link__image-desktop-${index}`);
      if (currentImage) currentImage.classList.add('active');
    });
  });
  
  // show default img on mouse leave
  sectionContainer.addEventListener('mouseleave', () => {
    allImages.forEach(img => img.classList.remove('active'));

    if (defaultImage) {
      defaultImage.classList.remove('hidden-1');
      defaultImage.classList.add('active');
    }  
  });
});