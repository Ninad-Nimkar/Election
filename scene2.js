// Scene 3: Campaign Period
function getScene3Main() {
  return `
    <!-- Wall/building -->
    <rect x="60" y="60" width="180" height="220" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="60" y="280" width="300" height="20" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <!-- Poster on wall - clickable -->
    <g data-clickable="true" data-target="scene3sub" role="button" aria-label="Click the poster">
      <rect x="100" y="100" width="100" height="130" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2"/>
      <line x1="115" y1="130" x2="185" y2="130" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="115" y1="145" x2="175" y2="145" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="115" y1="160" x2="180" y2="160" stroke="#C49A6C" stroke-width="0.8"/>
      <!-- Simple star symbol on poster -->
      <polygon points="150,110 153,118 162,118 155,123 158,132 150,127 142,132 145,123 138,118 147,118" fill="#E8622A"/>
      <rect x="95" y="95" width="110" height="140" class="clickable-hint" rx="3"/>
    </g>
    <!-- Flag -->
    <line x1="320" y1="80" x2="320" y2="260" stroke="#7B4019" stroke-width="2"/>
    <polygon points="320,80 370,95 320,110" fill="#E8622A"/>
    <!-- Crowd silhouettes -->
    <ellipse cx="260" cy="250" rx="12" ry="12" fill="#7B4019"/>
    <rect x="250" y="262" width="20" height="30" fill="#7B4019" rx="3"/>
    <ellipse cx="290" cy="255" rx="11" ry="11" fill="#C49A6C"/>
    <rect x="280" y="266" width="20" height="26" fill="#C49A6C" rx="3"/>
    <ellipse cx="315" cy="252" rx="11" ry="11" fill="#7B4019"/>
    <rect x="305" y="263" width="20" height="28" fill="#7B4019" rx="3"/>
    <ellipse cx="340" cy="256" rx="10" ry="10" fill="#C49A6C"/>
    <rect x="331" y="266" width="18" height="24" fill="#C49A6C" rx="3"/>
    <!-- Street/ground -->
    <line x1="40" y1="300" x2="400" y2="300" stroke="#7B4019" stroke-width="1"/>
  `;
}

function getScene3Sub() {
  return `
    <!-- Large poster -->
    <rect x="60" y="30" width="300" height="250" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Candidate symbol -->
    <polygon points="210,60 220,80 240,80 224,92 230,112 210,100 190,112 196,92 180,80 200,80" fill="#E8622A"/>
    <!-- Candidate name -->
    <text x="210" y="135" text-anchor="middle" font-family="Georgia" font-size="16" fill="#7B4019">RAMESH KUMAR</text>
    <line x1="120" y1="145" x2="300" y2="145" stroke="#C49A6C" stroke-width="1"/>
    <!-- Party name -->
    <text x="210" y="165" text-anchor="middle" font-family="system-ui" font-size="11" fill="#A06030">Triangle Party — Central District</text>
    <!-- Promise lines -->
    <text x="210" y="195" text-anchor="middle" font-family="system-ui" font-size="10" fill="#7B4019">For Progress. For People.</text>
    <!-- Vote appeal -->
    <rect x="140" y="210" width="140" height="30" fill="#E8622A" rx="3"/>
    <text x="210" y="230" text-anchor="middle" font-family="Georgia" font-size="12" fill="#FFF5C8">VOTE ▲</text>
    <!-- Speech bubble from crowd -->
    <g class="text-revealing">
      <path d="M160,270 Q160,255 200,255 L280,255 Q300,255 300,270 L300,285 Q300,295 280,295 L230,295 L220,310 L225,295 L170,295 Q160,295 160,285Z" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>
      <text x="230" y="280" text-anchor="middle" font-family="Georgia" font-size="11" fill="#7B4019">We heard you.</text>
    </g>
  `;
}

// Scene 4: Voting Day (3 layers)
function getScene4Layer1() {
  return `
    <!-- Building -->
    <rect x="80" y="60" width="260" height="200" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Roof -->
    <polygon points="60,60 340,60 360,40 40,40" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
    <!-- Sign -->
    <rect x="140" y="48" width="140" height="16" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <text x="210" y="60" text-anchor="middle" font-family="system-ui" font-size="8" fill="#7B4019">POLLING STATION</text>
    <!-- Door -->
    <rect x="175" y="160" width="70" height="100" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <circle cx="235" cy="210" r="3" fill="#7B4019"/>
    <!-- Windows -->
    <rect x="100" y="90" width="50" height="45" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <line x1="125" y1="90" x2="125" y2="135" stroke="#7B4019" stroke-width="0.8"/>
    <line x1="100" y1="112" x2="150" y2="112" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="270" y="90" width="50" height="45" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <line x1="295" y1="90" x2="295" y2="135" stroke="#7B4019" stroke-width="0.8"/>
    <line x1="270" y1="112" x2="320" y2="112" stroke="#7B4019" stroke-width="0.8"/>
    <!-- Booth with curtain - clickable -->
    <g data-clickable="true" data-target="scene4layer2" role="button" aria-label="Enter the booth">
      <rect x="100" y="160" width="60" height="100" fill="#F0A868" stroke="#7B4019" stroke-width="1.2"/>
      <!-- Curtain lines -->
      <path d="M105,160 C108,185 102,210 105,260" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M120,160 C123,185 117,210 120,260" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M135,160 C138,185 132,210 135,260" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M150,160 C153,185 147,210 150,260" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <rect x="95" y="155" width="70" height="110" class="clickable-hint" rx="3"/>
    </g>
    <!-- Queue silhouettes -->
    <ellipse cx="290" cy="230" rx="10" ry="10" fill="#7B4019"/>
    <rect x="282" y="240" width="16" height="22" fill="#7B4019" rx="2"/>
    <ellipse cx="320" cy="232" rx="9" ry="9" fill="#C49A6C"/>
    <rect x="312" y="241" width="16" height="20" fill="#C49A6C" rx="2"/>
    <ellipse cx="348" cy="234" rx="9" ry="9" fill="#7B4019"/>
    <rect x="340" y="243" width="16" height="18" fill="#7B4019" rx="2"/>
    <!-- Guard -->
    <ellipse cx="260" cy="225" rx="8" ry="8" fill="#C49A6C"/>
    <rect x="253" y="233" width="14" height="28" fill="#C49A6C" rx="2"/>
    <!-- Ground -->
    <line x1="40" y1="260" x2="380" y2="260" stroke="#7B4019" stroke-width="1"/>
  `;
}

function getScene4Layer2() {
  return `
    <!-- Booth interior walls -->
    <rect x="40" y="30" width="340" height="280" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Curtain sides -->
    <rect x="40" y="30" width="30" height="280" fill="#F0A868" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="350" y="30" width="30" height="280" fill="#F0A868" stroke="#7B4019" stroke-width="0.8"/>
    <!-- Curtain folds -->
    <path d="M45,30 C48,100 42,200 45,310" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M60,30 C63,100 57,200 60,310" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M355,30 C358,100 352,200 355,310" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M370,30 C373,100 367,200 370,310" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <!-- Bulb -->
    <line x1="210" y1="30" x2="210" y2="55" stroke="#7B4019" stroke-width="1"/>
    <circle cx="210" cy="62" r="8" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <!-- Table -->
    <rect x="120" y="180" width="180" height="12" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="135" y="192" width="8" height="60" fill="#7B4019"/>
    <rect x="277" y="192" width="8" height="60" fill="#7B4019"/>
    <!-- EVM on table - clickable -->
    <g data-clickable="true" data-target="scene4layer3" role="button" aria-label="Use the EVM">
      <!-- Ballot unit -->
      <rect x="140" y="120" width="80" height="60" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2" rx="3"/>
      <!-- Buttons on ballot unit -->
      <rect x="150" y="132" width="50" height="8" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8" rx="1"/>
      <rect x="150" y="145" width="50" height="8" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8" rx="1"/>
      <rect x="150" y="158" width="50" height="8" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8" rx="1"/>
      <!-- Control unit -->
      <rect x="240" y="130" width="50" height="50" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2" rx="3"/>
      <circle cx="265" cy="150" r="8" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
      <rect x="250" y="165" width="30" height="6" fill="#C49A6C" rx="1"/>
      <!-- Wire between units -->
      <path d="M220,155 C230,155 230,155 240,155" stroke="#7B4019" stroke-width="1" fill="none"/>
      <!-- Clickable hint around EVM -->
      <rect x="135" y="115" width="160" height="70" class="clickable-hint" rx="5"/>
    </g>
    <!-- Voter hand silhouette -->
    <path d="M160,100 L160,120 M155,105 L165,105" stroke="#C49A6C" stroke-width="3" stroke-linecap="round"/>
    <!-- Floor -->
    <rect x="70" y="252" width="280" height="10" fill="#C49A6C"/>
  `;
}

function getScene4Layer3() {
  return `
    <!-- Split: Left EVM, Right voter roll -->
    <line x1="210" y1="20" x2="210" y2="320" stroke="#C49A6C" stroke-width="1"/>
    <!-- LEFT: EVM close-up -->
    <rect x="30" y="40" width="160" height="240" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5" rx="5"/>
    <text x="110" y="60" text-anchor="middle" font-family="system-ui" font-size="8" fill="#A06030">BALLOT UNIT</text>
    <line x1="45" y1="68" x2="175" y2="68" stroke="#C49A6C" stroke-width="0.8"/>
    <!-- Party buttons -->
    <!-- Candidate 1 - triangle -->
    <rect x="45" y="80" width="140" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <polygon points="60,88 67,100 53,100" fill="#7B4019"/>
    <text x="80" y="99" font-family="system-ui" font-size="9" fill="#7B4019">Triangle Party</text>
    <circle cx="170" cy="95" r="6" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <!-- Candidate 2 - circle - THIS ONE GETS PRESSED -->
    <rect x="45" y="120" width="140" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2" id="evm-btn-2"/>
    <circle cx="60" cy="135" r="7" fill="#E8622A"/>
    <text x="80" y="139" font-family="system-ui" font-size="9" fill="#7B4019">Circle Party</text>
    <circle cx="170" cy="135" r="6" fill="#E8622A" class="glow-btn" opacity="0"/>
    <!-- Candidate 3 - square -->
    <rect x="45" y="160" width="140" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <rect x="53" y="168" width="14" height="14" fill="#7B4019"/>
    <text x="80" y="179" font-family="system-ui" font-size="9" fill="#7B4019">Square Party</text>
    <circle cx="170" cy="175" r="6" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <!-- VVPAT slip area -->
    <rect x="50" y="210" width="130" height="60" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8" rx="2"/>
    <text x="115" y="228" text-anchor="middle" font-family="system-ui" font-size="7" fill="#A06030">VVPAT</text>
    <!-- RIGHT: Voter roll -->
    <rect x="225" y="40" width="170" height="240" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5" rx="3"/>
    <text x="310" y="60" text-anchor="middle" font-family="system-ui" font-size="8" fill="#A06030">VOTER ROLL</text>
    <line x1="240" y1="68" x2="380" y2="68" stroke="#C49A6C" stroke-width="0.8"/>
    <!-- Voter names -->
    <text x="248" y="88" font-family="system-ui" font-size="9" fill="#7B4019">1. Anil Sharma</text>
    <text x="248" y="108" font-family="system-ui" font-size="9" fill="#7B4019">2. Priya Desai</text>
    <text x="248" y="128" font-family="system-ui" font-size="9" fill="#7B4019">3. Vikram Singh</text>
    <text x="248" y="148" font-family="system-ui" font-size="9" fill="#7B4019">4. Meena Joshi</text>
    <text x="248" y="168" font-family="system-ui" font-size="9" fill="#7B4019">5. Suresh Patel</text>
    <text x="248" y="188" font-family="system-ui" font-size="9" fill="#7B4019">6. Kavita Rao</text>
    <!-- Tick mark for voter 4 - animated -->
    <path d="M375,140 L380,148 L390,132" class="tick-mark" fill="none" stroke="#E8622A" stroke-width="2" stroke-linecap="round"/>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene3 = { main: getScene3Main, sub: getScene3Sub };
window.SceneData.scene4 = { main: getScene4Layer1, layer2: getScene4Layer2, layer3: getScene4Layer3 };
