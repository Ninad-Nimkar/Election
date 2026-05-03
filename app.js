// ═══════════════════════════════════════════
// Election Explainer — Core App Logic v3
// Sections: Constants, Debug, Render, Cursors,
// Transitions, Navigation, Animations, Observer,
// Analytics, Boot
// ═══════════════════════════════════════════

(function () {
  'use strict';

  // ═══ CONSTANTS ═══
  var DEBUG = false; // Set true for development logging
  var CONFETTI_COUNT = 20;
  var FLOAT_BOB_DUR = '2.5s';

  // Scene metadata — SVG content functions live in scene1.js, scene2.js, scene3.js
  // and register on window.SceneData. This array holds display metadata only.
  var SCENES = [
    { id: 1, key: 'scene1', title: 'Election Announcement', hint: 'Tap the circled date to continue',   svgTitle: 'Calendar showing March 2026 with election date circled' },
    { id: 2, key: 'scene2', title: 'Nominations',           hint: 'Tap the form stack to continue',     svgTitle: 'District office desk with nomination form stack' },
    { id: 3, key: 'scene3', title: 'Campaign Period',       hint: 'Tap the poster to continue',         svgTitle: 'Street wall with election campaign poster and crowd' },
    { id: 4, key: 'scene4', title: 'Voting Day',            hint: 'Tap the booth to enter',             svgTitle: 'Polling station building with voting booth' },
    { id: 5, key: 'scene5', title: 'Vote Counting',         hint: 'Tap the tally board to continue',    svgTitle: 'Counting centre with officials and tally board' },
    { id: 6, key: 'scene6', title: 'Results Declared',      hint: 'Tap the winning bar to continue',    svgTitle: 'Television showing election results bar chart' },
    { id: 7, key: 'scene7', title: 'Oath of Office',        hint: 'Tap the raised hand to complete',    svgTitle: 'Elected representative taking oath at podium' }
  ];

  var S = window.SceneData;
  var transitioning = false;
  var renderedScenes = {};

  // ═══ DEBUG ═══
  function log(msg) {
    if (DEBUG) console.log('[Election App] ' + msg);
  }

  // ═══ RENDER FUNCTIONS ═══

  /**
   * Render a scene's main SVG content lazily.
   * @param {number} stepNum - The step number (1-7) to render
   */
  function renderScene(stepNum) {
    if (stepNum < 1 || stepNum > 7) return;
    if (renderedScenes[stepNum]) return;
    var svg = document.getElementById('scene-' + stepNum);
    if (!svg) return;
    var meta = SCENES[stepNum - 1];
    var data = S[meta.key];
    if (!data || !data.main) return;

    // Safety note: innerHTML is used here with hardcoded SVG content only.
    // No user-controlled or external data is ever injected.
    var titleEl = svg.querySelector('title');
    var titleHTML = titleEl ? titleEl.outerHTML : '<title id="scene-' + stepNum + '-title">' + meta.svgTitle + '</title>';
    svg.innerHTML = titleHTML + data.main();

    renderedScenes[stepNum] = true;
    log('Rendered scene ' + stepNum);
    bindClickablesIn(svg);
    positionCursorsIn(svg);
  }

  // ═══ CLICK HANDLERS ═══

  function bindClickablesIn(container) {
    container.querySelectorAll('[data-clickable]').forEach(function (el) {
      if (el._bound) return;
      el._bound = true;

      // Accessibility: make focusable and keyboard-activatable
      el.setAttribute('tabindex', '0');

      // Testing: add data-testid if not present
      if (!el.dataset.testid) {
        var svg = el.closest('svg');
        var stepNum = svg ? svg.id.replace('scene-', '') : '0';
        var target = el.dataset.target || 'hotspot';
        el.dataset.testid = 'step-' + stepNum + '-' + target;
      }

      el.addEventListener('click', function (e) {
        e.stopPropagation();
        if (transitioning) return;
        var target = el.getAttribute('data-target');
        if (target) handleClick(el, target);
      });

      // Keyboard: Enter or Space activates
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          if (transitioning) return;
          var target = el.getAttribute('data-target');
          if (target) handleClick(el, target);
        }
      });
    });
  }

  // ═══ CURSOR POSITIONING ═══

  function positionCursorsIn(container) {
    container.querySelectorAll('[data-clickable]').forEach(function (el) {
      var svg = el.closest('svg');
      if (!svg) return;
      var hintEl = el.querySelector('.clickable-hint') || el;

      try {
        var bbox = hintEl.getBBox();
        var cx = bbox.x + bbox.width / 2;
        var cy = bbox.y + 45;

        var cursor = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        cursor.setAttribute('class', 'cursor-hint-svg');
        cursor.setAttribute('x', cx);
        cursor.setAttribute('y', cy);
        cursor.setAttribute('text-anchor', 'middle');
        cursor.setAttribute('font-size', '28');
        cursor.setAttribute('pointer-events', 'none');
        cursor.setAttribute('aria-hidden', 'true');
        cursor.setAttribute('data-testid', 'cursor-step-' + svg.id.replace('scene-', ''));
        cursor.textContent = '\u{1F446}';

        var anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        anim.setAttribute('attributeName', 'transform');
        anim.setAttribute('type', 'translate');
        anim.setAttribute('values', '0,0;0,-6;0,0');
        anim.setAttribute('dur', FLOAT_BOB_DUR);
        anim.setAttribute('repeatCount', 'indefinite');
        cursor.appendChild(anim);

        svg.appendChild(cursor);
      } catch (e) { /* getBBox fails on hidden elements */ }
    });
  }

  function removeAllCursors() {
    document.querySelectorAll('.cursor-hint-svg').forEach(function (c) { c.remove(); });
  }

  function removeCursorsFrom(wrapper) {
    if (!wrapper) return;
    wrapper.querySelectorAll('.cursor-hint-svg').forEach(function (c) {
      c.style.opacity = '0';
      setTimeout(function () { c.remove(); }, 300);
    });
  }

  // ═══ CLICK & TRANSITION ═══

  /**
   * Handles click events on scene hotspots.
   * @param {HTMLElement} element - The clicked hotspot element
   * @param {string} target - The key of the next scene layer to load
   */
  function handleClick(element, target) {
    transitioning = true;
    var svg = element.closest('svg');
    var wrapper = svg.closest('.scene-graphic-wrapper');
    var stepNum = parseInt(svg.id.replace('scene-', ''));
    removeCursorsFrom(wrapper);

    log('Step ' + stepNum + ' → ' + target + ' triggered');
    trackEvent('hotspot_clicked', { step_number: stepNum, scene_layer: target });
    trackEvent('scene_transition', { from_step: stepNum, to_layer: target });

    zoomInto(element, function () {
      showSubScene(svg, target);
      setTimeout(function () {
        transitioning = false;
        // Re-position cursors only in this SVG
        positionCursorsIn(svg);
      }, 600);
    });
  }

  /**
   * Zooms into a clicked SVG hotspot and transitions to the next scene layer.
   * @param {SVGElement} element - The clicked hotspot element
   * @param {Function} nextScene - Callback to render the next scene layer
   */
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

  // ═══ NAVIGATION ═══

  var hintMap = {
    'scene4layer2': 'Tap the EVM to cast your vote',
    'scene4layer3': 'Watch your vote being recorded...'
  };

  function showSubScene(svg, target) {
    var stepNum = parseInt(svg.id.replace('scene-', ''));
    var content = getSubContent(target);

    if (content) {
      svg.innerHTML = content;
      bindClickablesIn(svg);
      announce('Scene updated');

      // Update hint text
      var section = svg.closest('.step-section');
      var hint = section ? section.querySelector('.tap-hint') : null;
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
          trackEvent('journey_completed', {});
        } else {
          setTimeout(function () { scrollToStep(stepNum + 1); }, 1500);
        }
      }
    }
  }

  function getSubContent(target) {
    if (target === 'scene1sub' && S.scene1) return S.scene1.sub();
    if (target === 'scene2sub' && S.scene2) return S.scene2.sub();
    if (target === 'scene3sub' && S.scene3) return S.scene3.sub();
    if (target === 'scene4layer2' && S.scene4) return S.scene4.layer2();
    if (target === 'scene4layer3' && S.scene4) return S.scene4.layer3();
    if (target === 'scene5sub' && S.scene5) return S.scene5.sub();
    if (target === 'scene6sub' && S.scene6) return S.scene6.sub();
    if (target === 'scene7sub' && S.scene7) return S.scene7.sub();
    return null;
  }

  function scrollToStep(num) {
    var el = document.getElementById('step-' + num);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ═══ ANIMATIONS ═══

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
          '<text x="440" y="165" font-family="Georgia" font-size="13" fill="#E8622A" font-weight="bold">\u2713</text>';
        svg.appendChild(slip);
      }, 800);
    }, 500);
  }

  function showConfetti() {
    var container = document.getElementById('confetti-container');
    if (!container) return;
    var colors = ['#E8622A', '#7B4019', '#F0A868', '#C49A6C', '#FFF5C8'];
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < CONFETTI_COUNT; i++) {
      var p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + '%';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (2 + Math.random() * 2) + 's';
      p.style.animationDelay = Math.random() * 1.5 + 's';
      p.style.width = (5 + Math.random() * 6) + 'px';
      p.style.height = (5 + Math.random() * 6) + 'px';
      fragment.appendChild(p);
    }
    container.appendChild(fragment);
    setTimeout(function () { container.innerHTML = ''; }, 5000);
  }

  function showFinalMessage() {
    var msg = document.getElementById('final-message');
    if (msg) setTimeout(function () { msg.classList.add('visible'); }, 1000);
  }

  // ═══ ACCESSIBILITY ═══

  function announce(text) {
    var el = document.getElementById('sr-announcer');
    if (el) {
      el.textContent = '';
      setTimeout(function () { el.textContent = text; }, 100);
    }
  }

  // ═══ OBSERVER (Lazy Loading) ═══

  /**
   * Sets up the IntersectionObserver to lazy load scenes.
   * Only injects SVG when the section is about to be needed.
   */
  function setupScrollObserver() {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var step = parseInt(entry.target.getAttribute('data-step'), 10);
          if (!isNaN(step)) {
            // Track view
            trackEvent('step_viewed', { step_number: step, step_name: SCENES[step - 1] ? SCENES[step - 1].title : 'unknown' });
            log('Step ' + step + ' in view');
            
            // Lazy load the next scene
            if (step < 7) {
              renderScene(step + 1);
            }
          }
          obs.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('.step-section').forEach(function (s) {
      observer.observe(s);
    });
  }

  // ═══ ANALYTICS (GA4) ═══

  function trackEvent(name, params) {
    if (typeof gtag === 'function') {
      gtag('event', name, Object.assign({
        'send_to': 'G-X6JQFCEEWL'
      }, params || {}));
    }
    log('Event: ' + name + ' ' + JSON.stringify(params || {}));
  }

  // ═══ RESIZE ═══

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      removeAllCursors();
      document.querySelectorAll('.scene-graphic').forEach(function (svg) {
        if (svg.children.length > 0) positionCursorsIn(svg);
      });
    }, 200);
  });

  // ═══ BOOT ═══

  document.addEventListener('DOMContentLoaded', function () {
    log('Booting...');
    renderScene(1);
    setupScrollObserver();

    // "Begin the Journey" button
    var beginBtn = document.getElementById('scroll-begin');
    if (beginBtn) {
      beginBtn.addEventListener('click', function () {
        document.getElementById('step-1').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

    // Track device type on load
    trackEvent('app_loaded', { device: /Mobi/.test(navigator.userAgent) ? 'mobile' : 'desktop' });

    // Quiz logic
    var quizSubmitBtn = document.getElementById('quiz-submit');
    if (quizSubmitBtn) {
      quizSubmitBtn.addEventListener('click', async function () {
        var inputEl = document.getElementById('quiz-input');
        var resultEl = document.getElementById('quiz-result');
        if (!inputEl || !resultEl) return;
        
        var answer = inputEl.value.trim();
        if (!answer) {
          resultEl.textContent = 'Please share your thoughts before submitting.';
          return;
        }

        quizSubmitBtn.textContent = 'Analysing...';
        quizSubmitBtn.disabled = true;

        if (typeof analyzeQuizAnswer === 'function') {
          var sentiment = await analyzeQuizAnswer(answer);
          if (sentiment) {
            if (sentiment.score > 0.2) {
              resultEl.textContent = 'Your answer shows strong civic awareness and optimism! 🗳️';
            } else if (sentiment.score < -0.2) {
              resultEl.textContent = 'It sounds like you have concerns, but participating is how we drive change. 🗳️';
            } else {
              resultEl.textContent = 'Thanks for reflecting on the importance of your vote. 🗳️';
            }
          } else {
            resultEl.textContent = 'Thanks for sharing your thoughts! 🗳️';
          }
        } else {
          resultEl.textContent = 'Thanks for sharing your thoughts! 🗳️';
        }

        quizSubmitBtn.textContent = 'Analyse with AI ✦';
        quizSubmitBtn.disabled = false;
        
        trackEvent('quiz_submitted', { answer_length: answer.length });
      });
    }

    log('Ready');
  });
})();
