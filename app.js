// ═══════════════════════════════════════════
// Election Explainer — Core App Logic v2
// Cursor hints · zoom transitions · scroll
// ═══════════════════════════════════════════

(function () {
  'use strict';

  const S = window.SceneData;
  let transitioning = false;

  // ── Initialize all scenes ──
  function initScenes() {
    for (let i = 1; i <= 7; i++) {
      const svg = document.getElementById('scene-' + i);
      if (!svg) continue;
      const key = 'scene' + i;
      if (S[key] && S[key].main) {
        svg.innerHTML = S[key].main();
      }
    }
    bindAllClickables();
    positionAllCursors();
  }

  // ── Bind click handlers ──
  function bindAllClickables() {
    document.querySelectorAll('[data-clickable]').forEach(function (el) {
      if (el._bound) return;
      el._bound = true;
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        if (transitioning) return;
        const target = el.getAttribute('data-target');
        if (target) handleClick(el, target);
      });
    });
  }

  // ── Position floating cursor hints (inside SVG so they float with it) ──
  function positionAllCursors() {
    // Remove old cursors
    document.querySelectorAll('.cursor-hint-svg').forEach(function (c) { c.remove(); });

    document.querySelectorAll('.scene-graphic [data-clickable]').forEach(function (el) {
      var svg = el.closest('svg');
      if (!svg) return;

      var hintEl = el.querySelector('.clickable-hint') || el;

      try {
        var bbox = hintEl.getBBox();
        var cx = bbox.x + bbox.width / 2;
        var cy = bbox.y + 45; // fingertip touches top edge of clickable

        var cursor = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        cursor.setAttribute('class', 'cursor-hint-svg');
        cursor.setAttribute('x', cx);
        cursor.setAttribute('y', cy);
        cursor.setAttribute('text-anchor', 'middle');
        cursor.setAttribute('font-size', '28');
        cursor.setAttribute('pointer-events', 'none');
        cursor.setAttribute('style', 'filter: drop-shadow(0 2px 4px rgba(123,64,25,0.3))');
        cursor.textContent = '👆';

        // Gentle bob animation inside SVG
        var anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        anim.setAttribute('attributeName', 'transform');
        anim.setAttribute('type', 'translate');
        anim.setAttribute('values', '0,0;0,-6;0,0');
        anim.setAttribute('dur', '2.5s');
        anim.setAttribute('repeatCount', 'indefinite');
        cursor.appendChild(anim);

        svg.appendChild(cursor);
      } catch (e) { /* getBBox fails on hidden elements */ }
    });
  }

  // ── Remove cursor hints from an SVG ──
  function removeCursors(wrapper) {
    if (!wrapper) return;
    // Remove from SVG inside wrapper
    wrapper.querySelectorAll('.cursor-hint-svg').forEach(function (c) {
      c.style.opacity = '0';
      setTimeout(function () { c.remove(); }, 300);
    });
  }

  // ── Handle clickable interaction ──
  function handleClick(element, target) {
    transitioning = true;
    var svg = element.closest('svg');
    var wrapper = svg.closest('.scene-graphic-wrapper');
    removeCursors(wrapper);

    zoomInto(element, function () {
      showSubScene(svg, target);
      setTimeout(function () {
        transitioning = false;
        positionAllCursors();
      }, 600);
    });
  }

  // ── Zoom transition ──
  function zoomInto(element, callback) {
    var rect = element.getBoundingClientRect();
    var svgRect = element.closest('svg').getBoundingClientRect();
    var originX = ((rect.left + rect.width / 2 - svgRect.left) / svgRect.width * 100).toFixed(1);
    var originY = ((rect.top + rect.height / 2 - svgRect.top) / svgRect.height * 100).toFixed(1);

    var graphic = element.closest('.scene-graphic');
    graphic.style.transformOrigin = originX + '% ' + originY + '%';
    graphic.style.transition = 'transform 0.5s ease-in, opacity 0.3s ease-in 0.2s';
    graphic.style.transform = 'scale(2.8)';
    graphic.style.opacity = '0';

    setTimeout(function () {
      if (callback) callback();
      graphic.style.transition = 'none';
      graphic.style.transform = 'scale(0.7)';
      graphic.style.opacity = '0';
      requestAnimationFrame(function () {
        graphic.style.transition = 'transform 0.45s ease-out, opacity 0.35s ease-out';
        graphic.style.transform = 'scale(1)';
        graphic.style.opacity = '1';
      });
    }, 520);
  }

  // ── Show sub-scene ──
  function showSubScene(svg, target) {
    var stepNum = parseInt(svg.id.replace('scene-', ''));
    var content = null;

    if (target === 'scene1sub' && S.scene1) content = S.scene1.sub();
    else if (target === 'scene2sub' && S.scene2) content = S.scene2.sub();
    else if (target === 'scene3sub' && S.scene3) content = S.scene3.sub();
    else if (target === 'scene4layer2' && S.scene4) content = S.scene4.layer2();
    else if (target === 'scene4layer3' && S.scene4) content = S.scene4.layer3();
    else if (target === 'scene5sub' && S.scene5) content = S.scene5.sub();
    else if (target === 'scene6sub' && S.scene6) content = S.scene6.sub();
    else if (target === 'scene7sub' && S.scene7) content = S.scene7.sub();

    if (content) {
      svg.innerHTML = content;
      bindAllClickables();

      // Update hint text
      var section = svg.closest('.step-section');
      var hint = section ? section.querySelector('.tap-hint') : null;
      var hintMap = {
        'scene4layer2': 'Tap the EVM to cast your vote',
        'scene4layer3': 'Watch your vote being recorded...',
        'scene1sub': '', 'scene2sub': '', 'scene3sub': '',
        'scene5sub': '', 'scene6sub': '', 'scene7sub': ''
      };
      if (hint && hintMap.hasOwnProperty(target)) {
        hint.textContent = hintMap[target];
      }

      var hasMore = svg.querySelector('[data-clickable]');
      if (!hasMore) {
        if (hint) hint.style.opacity = '0';
        if (target === 'scene4layer3') {
          animateVote(svg);
          setTimeout(function () { scrollToStep(5); }, 3000);
        } else if (target === 'scene7sub') {
          setTimeout(function () { showConfetti(); showFinalMessage(); }, 2000);
        } else {
          setTimeout(function () { scrollToStep(stepNum + 1); }, 1500);
        }
      }
    }
  }

  // ── Animate vote (Step 4 Layer 3) ──
  function animateVote(svg) {
    setTimeout(function () {
      var btn = svg.getElementById('evm-btn-2');
      if (btn) btn.setAttribute('fill', '#E8622A');
      var glow = svg.querySelector('.glow-btn');
      if (glow) { glow.setAttribute('opacity', '1'); glow.setAttribute('fill', '#E8622A'); }

      setTimeout(function () {
        var slip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        slip.classList.add('slip-printing');
        slip.innerHTML = '<rect x="405" y="130" width="100" height="50" fill="#FFF5C8" stroke="#7B4019" stroke-width="1" rx="2"/>' +
          '<circle cx="425" cy="155" r="8" fill="#E8622A"/>' +
          '<text x="440" y="150" font-family="Georgia" font-size="11" fill="#7B4019">Circle Party</text>' +
          '<text x="440" y="165" font-family="Georgia" font-size="13" fill="#E8622A" font-weight="bold">✓</text>';
        svg.appendChild(slip);
      }, 800);
    }, 500);
  }

  // ── Confetti ──
  function showConfetti() {
    var container = document.getElementById('confetti-container');
    if (!container) return;
    var colors = ['#E8622A', '#7B4019', '#F0A868', '#C49A6C', '#FFF5C8'];
    for (var i = 0; i < 40; i++) {
      var p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + '%';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (2 + Math.random() * 2) + 's';
      p.style.animationDelay = Math.random() * 1.5 + 's';
      p.style.width = (5 + Math.random() * 6) + 'px';
      p.style.height = (5 + Math.random() * 6) + 'px';
      container.appendChild(p);
    }
    setTimeout(function () { container.innerHTML = ''; }, 5000);
  }

  function showFinalMessage() {
    var msg = document.getElementById('final-message');
    if (msg) setTimeout(function () { msg.classList.add('visible'); }, 1000);
  }

  function scrollToStep(num) {
    var el = document.getElementById('step-' + num);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ── Scroll Observer ──
  function setupScrollObserver() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.step-section').forEach(function (s) { observer.observe(s); });
  }

  // ── Reposition cursors on resize ──
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(positionAllCursors, 200);
  });

  // ── Boot ──
  document.addEventListener('DOMContentLoaded', function () {
    initScenes();
    setupScrollObserver();
  });
})();
