document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', function() {
      scroll();
    });
  });

function scroll() {
    console.log('Scrolling...');
    window.scrollBy({
        top: 100,
        behavior: 'smooth'
    });
}
