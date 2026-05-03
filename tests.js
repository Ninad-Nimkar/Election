// tests.js — Node.js test suite, run with: node tests.js
const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passed++;
  } catch (e) {
    console.error(`❌ FAIL: ${name} — ${e.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

function assertContains(str, substring, message) {
  assert(str.includes(substring), message || `Expected to find: "${substring}"`);
}

// Read source files
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css  = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const app  = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

// --- HTML structure tests ---
test('index.html has viewport meta tag', () => {
  assertContains(html, 'name="viewport"');
});
test('index.html has meta description', () => {
  assertContains(html, 'name="description"');
});
test('index.html has Content-Security-Policy', () => {
  assertContains(html, 'Content-Security-Policy');
});
test('index.html has Google Fonts link', () => {
  assertContains(html, 'fonts.googleapis.com');
});
test('index.html has GA4 script', () => {
  assertContains(html, 'googletagmanager.com');
});
test('index.html has all 7 step sections', () => {
  for (let i = 1; i <= 7; i++) {
    assertContains(html, `data-step="${i}"`, `Missing data-step="${i}"`);
  }
});
test('index.html has main landmark', () => {
  assertContains(html, '<main>');
});
test('index.html has h1', () => {
  assertContains(html, '<h1>');
});
test('All SVGs have role="img"', () => {
  const svgMatches = html.match(/<svg[^>]*>/g) || [];
  const sceneSvgs = svgMatches.filter(s => s.includes('scene-graphic'));
  sceneSvgs.forEach((s, i) => {
    assert(s.includes('role="img"'), `SVG ${i+1} missing role="img"`);
  });
});
test('All step sections have aria-label', () => {
  const sections = html.match(/<section[^>]*data-step[^>]*>/g) || [];
  sections.forEach((s, i) => {
    assert(s.includes('aria-label'), `Section ${i+1} missing aria-label`);
  });
});
test('All SVGs have aria-labelledby', () => {
  const svgMatches = html.match(/<svg[^>]*scene-graphic[^>]*>/g) || [];
  svgMatches.forEach((s, i) => {
    assert(s.includes('aria-labelledby'), `Scene SVG ${i+1} missing aria-labelledby`);
  });
});
test('index.html has sr-only announcer for screen readers', () => {
  assertContains(html, 'aria-live="polite"');
});
test('Confetti container has aria-hidden', () => {
  assertContains(html, 'aria-hidden="true"');
});
test('Scripts use defer attribute', () => {
  const scripts = html.match(/<script[^>]*src[^>]*>/g) || [];
  scripts.forEach((s, i) => {
    if (!s.includes('googletagmanager') && !s.includes('async')) {
      assert(s.includes('defer'), `Script ${i+1} missing defer: ${s}`);
    }
  });
});

// --- CSS tests ---
test('styles.css has float keyframe animation', () => {
  assertContains(css, '@keyframes float');
});
test('styles.css has prefers-reduced-motion query', () => {
  assertContains(css, 'prefers-reduced-motion');
});
test('styles.css uses transform for animations (not top/margin)', () => {
  assert(!css.match(/animation[^{]*top:/), 'Found top: in animation — causes reflow');
});
test('styles.css has step-section class', () => {
  assertContains(css, '.step-section');
});
test('styles.css has scene-graphic class', () => {
  assertContains(css, '.scene-graphic');
});

// --- JS tests ---
test('app.js has IntersectionObserver', () => {
  assertContains(app, 'IntersectionObserver');
});
test('app.js has zoomInto function', () => {
  assertContains(app, 'zoomInto');
});
test('app.js has scrollToStep function', () => {
  assertContains(app, 'scrollToStep');
});
test('app.js has gtag event calls', () => {
  assertContains(app, "gtag('event'");
});
test('app.js tracks step_viewed event', () => {
  assertContains(app, 'step_viewed');
});
test('app.js tracks hotspot_clicked event', () => {
  assertContains(app, 'hotspot_clicked');
});
test('app.js tracks journey_completed event', () => {
  assertContains(app, 'journey_completed');
});
test('app.js uses addEventListener not inline onclick', () => {
  assert(!app.includes('onclick='), 'Found inline onclick handler');
});
test('app.js does not use eval()', () => {
  assert(!app.includes('eval('), 'Found eval() — security risk');
});
test('app.js does not use document.write', () => {
  assert(!app.includes('document.write'), 'Found document.write — security risk');
});
test('app.js unobserves after intersection', () => {
  assertContains(app, 'unobserve');
});
test('app.js has DEBUG constant', () => {
  assertContains(app, 'DEBUG');
});

// --- Dockerfile tests ---
test('Dockerfile exists', () => {
  assert(fs.existsSync(path.join(__dirname, 'Dockerfile')), 'Dockerfile not found');
});
test('Dockerfile uses python base image', () => {
  const dockerfile = fs.readFileSync(path.join(__dirname, 'Dockerfile'), 'utf8');
  assertContains(dockerfile, 'python');
});
test('Dockerfile exposes port 8080', () => {
  const dockerfile = fs.readFileSync(path.join(__dirname, 'Dockerfile'), 'utf8');
  assertContains(dockerfile, '8080');
});

// --- cloudbuild.yaml tests ---
test('cloudbuild.yaml exists', () => {
  assert(fs.existsSync(path.join(__dirname, 'cloudbuild.yaml')), 'cloudbuild.yaml not found');
});
test('cloudbuild.yaml uses CLOUD_LOGGING_ONLY', () => {
  const cb = fs.readFileSync(path.join(__dirname, 'cloudbuild.yaml'), 'utf8');
  assertContains(cb, 'CLOUD_LOGGING_ONLY');
});

// --- Summary ---
console.log(`\n📊 Results: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);
if (failed > 0) {
  console.log('⚠️  Some tests failed. Fix before submitting.');
  process.exit(1);
} else {
  console.log('🎉 All tests passed!');
  process.exit(0);
}
