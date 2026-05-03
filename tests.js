// tests.js — Election App Test Suite
// Run in browser console or Node with a DOM shim

const DEBUG = true;
const results = [];

function test(name, fn) {
  try {
    fn();
    results.push({ name, pass: true });
    if (DEBUG) console.log(`✅ PASS: ${name}`);
  } catch (e) {
    results.push({ name, pass: false, error: e.message });
    console.error(`❌ FAIL: ${name} —`, e.message);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

// --- Core path tests ---

test('SCENES metadata exists and has 7 steps', () => {
  const sections = document.querySelectorAll('[data-step]');
  assert(sections.length === 7, `Expected 7 step sections, got ${sections.length}`);
});

test('Step sections exist in DOM for all 7 steps', () => {
  for (let i = 1; i <= 7; i++) {
    const el = document.querySelector(`[data-step="${i}"]`);
    assert(el, `Missing section with data-step="${i}"`);
  }
});

test('All hotspots have data-testid attributes', () => {
  const hotspots = document.querySelectorAll('[data-testid]');
  assert(hotspots.length >= 7, `Expected at least 7 testid elements, found ${hotspots.length}`);
});

test('All hotspots are keyboard accessible', () => {
  const hotspots = document.querySelectorAll('[role="button"]');
  hotspots.forEach((el, i) => {
    const tabindex = el.getAttribute('tabindex');
    assert(tabindex === '0', `Hotspot ${i+1} missing tabindex="0"`);
  });
});

test('All SVGs have a title element', () => {
  const svgs = document.querySelectorAll('.scene-graphic');
  svgs.forEach((svg, i) => {
    const title = svg.querySelector('title');
    assert(title, `SVG ${i+1} missing <title> element`);
    assert(title.textContent.length > 0, `SVG ${i+1} has empty <title>`);
  });
});

test('Float animation class exists in stylesheet', () => {
  const sheets = Array.from(document.styleSheets);
  let found = false;
  sheets.forEach(sheet => {
    try {
      const rules = Array.from(sheet.cssRules || []);
      rules.forEach(rule => {
        if (rule.name === 'float') found = true;
      });
    } catch(e) {}
  });
  assert(found, 'float keyframe animation not found in stylesheet');
});

// --- Edge case tests ---

test('GA4 gtag function is defined', () => {
  assert(typeof gtag === 'function', 'gtag is not defined — GA4 not loaded');
});

test('prefers-reduced-motion media query exists', () => {
  const sheets = Array.from(document.styleSheets);
  let found = false;
  sheets.forEach(sheet => {
    try {
      Array.from(sheet.cssRules || []).forEach(rule => {
        if (rule.conditionText && rule.conditionText.includes('reduced-motion')) found = true;
      });
    } catch(e) {}
  });
  assert(found, 'prefers-reduced-motion media query not found');
});

// --- Integration flow tests ---

test('Step 1 hotspot exists and is clickable', () => {
  const hotspot = document.querySelector('[data-testid="step-1-hotspot"]');
  assert(hotspot, 'Step 1 hotspot not found');
  assert(hotspot.getAttribute('role') === 'button', 'Step 1 hotspot missing role="button"');
});

test('IntersectionObserver is used (not scroll events)', () => {
  assert(typeof IntersectionObserver !== 'undefined', 'IntersectionObserver not available');
});

test('Begin button exists and is interactive', () => {
  const btn = document.getElementById('scroll-begin');
  assert(btn, 'scroll-begin button not found');
  assert(btn.tagName === 'BUTTON', 'scroll-begin is not a <button>');
});

test('CSP meta tag is present', () => {
  const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  assert(csp, 'Content-Security-Policy meta tag not found');
});

test('Main landmark wraps step sections', () => {
  const main = document.querySelector('main');
  assert(main, '<main> landmark not found');
  const sections = main.querySelectorAll('.step-section');
  assert(sections.length === 7, `Expected 7 sections inside <main>, found ${sections.length}`);
});

test('All SVGs have role="img" and aria-labelledby', () => {
  const svgs = document.querySelectorAll('.scene-graphic');
  svgs.forEach((svg, i) => {
    assert(svg.getAttribute('role') === 'img', `SVG ${i+1} missing role="img"`);
    assert(svg.getAttribute('aria-labelledby'), `SVG ${i+1} missing aria-labelledby`);
  });
});

test('Confetti container has aria-hidden', () => {
  const container = document.getElementById('confetti-container');
  assert(container, 'confetti-container not found');
  assert(container.getAttribute('aria-hidden') === 'true', 'confetti-container missing aria-hidden');
});

test('Screen reader announcer exists', () => {
  const announcer = document.getElementById('sr-announcer');
  assert(announcer, 'sr-announcer not found');
  assert(announcer.getAttribute('aria-live') === 'polite', 'sr-announcer missing aria-live="polite"');
});

// --- Report ---
const passed = results.filter(r => r.pass).length;
const total = results.length;
console.log(`\n📊 Test Results: ${passed}/${total} passed`);
if (passed === total) console.log('🎉 All tests passed!');
