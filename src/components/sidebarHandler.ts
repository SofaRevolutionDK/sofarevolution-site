export const sidebarHandler = () => {
  const trigFooter = document.getElementById('sb-trigger-footer');
  const trigSB = document.getElementById('sb-trigger-sb');
  const trigSBTop = document.getElementById('sb-trigger-sb-top');
  const trigContent = document.getElementById('sb-trigger-content');
  const ctaText = document.getElementById('cta-inner-text');
  const body = document.getElementsByTagName('body')[0];

  trigFooter?.addEventListener('click', () => {
    if ( body.classList.contains('sidebar-open') ) {
      body.classList.add('sidebar-closed');
      body.classList.remove('sidebar-open');
      updateCTA('close');
      return;
    }

    if ( body.classList.contains('sidebar-closed') ) {
      body.classList.add('sidebar-open');
      body.classList.remove('sidebar-closed');
      updateCTA('open');
    }
  });

  trigSB?.addEventListener('click', () => {
    if ( body.classList.contains('sidebar-open') ) {
      body.classList.add('sidebar-closed');
      body.classList.remove('sidebar-open');
      updateCTA('close');
      return;
    }
  });

  trigSBTop?.addEventListener('click', () => {
    if ( body.classList.contains('sidebar-open') ) {
      body.classList.add('sidebar-closed');
      body.classList.remove('sidebar-open');
      updateCTA('close');
      return;
    }
  });

  trigContent?.addEventListener('click', () => {
    if ( body.classList.contains('sidebar-open') ) {
      body.classList.add('sidebar-closed');
      body.classList.remove('sidebar-open');
      updateCTA('close');
      return;
    }

    if ( body.classList.contains('sidebar-closed') ) {
      body.classList.add('sidebar-open');
      body.classList.remove('sidebar-closed');
      updateCTA('open');
    }
  });

  function updateCTA(state: string) {
    if ( ctaText && state === 'open' ) {
      ctaText.innerHTML = `<p>close</p>`;
    }

    if ( ctaText && state === 'close' ) {
      ctaText.innerHTML = `<p>open</p>`;
    }
  }
}