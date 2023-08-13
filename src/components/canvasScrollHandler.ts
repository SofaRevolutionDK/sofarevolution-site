import { invlerp } from './utils';
import { scrollAmountState } from './scrollAmountState';

export const canvasScrollHandler = () => {
  const scrollWrap = document.getElementById('scroller');
  const scrollContent = document.getElementById('scrollinner');
  const percentDisplay = document.getElementById('percentdisplay');
  const percent = document.getElementById('percent');

  // Create state object
  const scrollState = scrollAmountState();

  // Get maximum scroll amount (height of scroll content, minus screen height)
  const rect = scrollContent?.getBoundingClientRect();
  let totalHeight = rect?.height || null;
  scrollState.maxScroll = totalHeight ? totalHeight - window.innerHeight : null;

  // Add event listener
  scrollWrap?.addEventListener('scroll', () => {
    scrollState.currentScroll = scrollWrap.scrollTop;

    // Calculate percent scrolled
    if ( scrollState.maxScroll ) {
      scrollState.percent = Math.round(invlerp(0, scrollState.maxScroll, scrollState.currentScroll) * 100);

      if ( percent ) {
        window.requestAnimationFrame(() => {
          percent.innerHTML = `${scrollState.percent}`;
        });
      }

      // Show the percent display, if it's hidden 
      if ( !scrollState.hasScrolled ) {
        percentDisplay?.classList.remove('hidden');

        setTimeout(() => {
          percentDisplay?.classList.add('show');
          scrollState.hasScrolled = true;
        }, 500);
      }
    }
  });
}