export const animationObserver = () => {
  let elements = document.querySelectorAll('.anim');

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    USE_MUTATION_OBSERVER: true
  }

  let callback = (entries : Array<any>) => {
    let delay = 1;

    entries.forEach(entry => {
      if ( entry.isIntersecting && !entry.target.classList.contains('show') ) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, 100*delay)
      }

      delay++;
    });
  }
  
  let observer = new IntersectionObserver(callback, options);

  elements.forEach(elem => {
    observer.observe(elem);
  });
}