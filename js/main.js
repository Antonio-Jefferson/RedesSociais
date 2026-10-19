(function () {
  var track = document.getElementById('track');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var dotBar = document.getElementById('dots');
  if (!track || !prev || !next || !dotBar) return;

  var cards = Array.prototype.slice.call(track.children);
  var smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach(function (card, i) {
    var name = card.querySelector('h3');
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir para ' + (name ? name.textContent : 'produto ' + (i + 1)));
    b.addEventListener('click', function () { goTo(i); });
    dotBar.appendChild(b);
  });
  var dots = Array.prototype.slice.call(dotBar.children);

  function step() {
    if (cards.length < 2) return track.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }
  function maxScroll() { return track.scrollWidth - track.clientWidth; }

  function goTo(i) {
    track.scrollTo({ left: i * step(), behavior: smooth ? 'smooth' : 'auto' });
  }
  function nudge(dir) {
    track.scrollBy({ left: dir * step(), behavior: smooth ? 'smooth' : 'auto' });
  }

  function sync() {
    var max = maxScroll();
    var x = track.scrollLeft;
    var atStart = x <= 2;
    var atEnd = x >= max - 2;
    var i = atEnd ? cards.length - 1 : Math.round(x / step());

    prev.disabled = atStart;
    next.disabled = atEnd || max <= 0;
    dots.forEach(function (d, n) {
      if (n === i) { d.setAttribute('aria-current', 'true'); }
      else { d.removeAttribute('aria-current'); }
    });
  }

  prev.addEventListener('click', function () { nudge(-1); });
  next.addEventListener('click', function () { nudge(1); });
  track.addEventListener('scroll', function () {
    window.clearTimeout(track._t);
    track._t = window.setTimeout(sync, 60);
  }, { passive: true });
  window.addEventListener('resize', sync);
  sync();
})();
