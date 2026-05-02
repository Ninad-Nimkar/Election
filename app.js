// ═══════════════════════════════════════════
// Election Explainer — Core App Logic
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
  }

  // ── Bind click handlers ──
  function bindAllClickables() {
    document.querySelectorAll('[data-clickable]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        if (transitioning) return;
        const target = el.getAttribute('data-target');
        if (target) handleClick(el, target);
      });
    });
  }

  // ── Handle clickable interaction ──
  function handleClick(element, target) {
    transitioning = true;
    const svg = element.closest('svg');
    const graphic = svg; // .scene-graphic is the svg itself

    zoomInto(element, function () {
      showSubScene(svg, target);
      setTimeout(function () { transitioning = false; }, 600);
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
    var key = 'scene' + stepNum;
    var content = null;

    // Determine which content to show
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

      // Update hint text for sub-layers
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

      // Check if this is a terminal sub-scene (no more clickables)
      var hasMore = svg.querySelector('[data-clickable]');

      if (!hasMore) {
        if (hint) hint.style.opacity = '0';
        // Terminal scene — handle special cases
        if (target === 'scene4layer3') {
          animateVote(svg);
          setTimeout(function () { scrollToStep(5); }, 3000);
        } else if (target === 'scene7sub') {
          setTimeout(function () {
            showConfetti();
            showFinalMessage();
          }, 2000);
        } else {
          setTimeout(function () { scrollToStep(stepNum + 1); }, 1500);
        }
      }
    }
  }

  // ── Animate vote on EVM (Step 4 Layer 3) ──
  function animateVote(svg) {
    setTimeout(function () {
      // Highlight pressed button
      var btn = svg.getElementById('evm-btn-2');
      if (btn) btn.setAttribute('fill', '#F0A868');

      // Show button glow
      var glow = svg.querySelector('.glow-btn');
      if (glow) {
        glow.setAttribute('opacity', '1');
        glow.setAttribute('fill', '#E8622A');
      }

      // Add VVPAT slip
      setTimeout(function () {
        var vvpat = svg.querySelector('rect[x="50"][y="210"]');
        if (vvpat) {
          var slip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          slip.classList.add('slip-printing');
          slip.innerHTML = '<rect x="60" y="235" width="110" height="28" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8" rx="2"/>' +
            '<circle cx="80" cy="249" r="5" fill="#E8622A"/>' +
            '<text x="95" y="252" font-family="system-ui" font-size="7" fill="#7B4019">Circle Party ✓</text>';
          svg.appendChild(slip);
        }
      }, 800);
    }, 500);
  }

  // ── Confetti ──
  function showConfetti() {
    var container = document.getElementById('confetti-container');
    if (!container) return;
    var colors = ['#E8622A', '#7B4019', '#F0A868', '#C49A6C', '#FFF5C8'];

    for (var i = 0; i < 40; i++) {
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2 + Math.random() * 2) + 's';
      piece.style.animationDelay = Math.random() * 1.5 + 's';
      piece.style.width = (5 + Math.random() * 6) + 'px';
      piece.style.height = (5 + Math.random() * 6) + 'px';
      container.appendChild(piece);
    }

    setTimeout(function () {
      container.innerHTML = '';
    }, 5000);
  }

  // ── Final message ──
  function showFinalMessage() {
    var msg = document.getElementById('final-message');
    if (msg) {
      setTimeout(function () {
        msg.classList.add('visible');
      }, 1000);
    }
  }

  // ── Scroll to step ──
  function scrollToStep(num) {
    var el = document.getElementById('step-' + num);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ── IntersectionObserver for scroll-in ──
  function setupScrollObserver() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.step-section').forEach(function (section) {
      observer.observe(section);
    });
  }

  // ── Boot ──
  document.addEventListener('DOMContentLoaded', function () {
    initScenes();
    setupScrollObserver();
  });

})();
