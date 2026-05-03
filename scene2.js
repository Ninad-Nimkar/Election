// ═══ STEP 3: Campaign Period ═══
function getScene3Main() {
  return `
    <!-- GHOST SHAPES -->
    <polygon points="440,10 440,80 520,100 520,-10" fill="#E8622A" opacity="0.07"/>
    <circle cx="60" cy="380" r="90" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.07"/>
    <rect x="350" y="280" width="200" height="160" fill="#7B4019" opacity="0.04" rx="4"/>
    <text x="10" y="120" font-family="Georgia" font-size="160" fill="#E8622A" opacity="0.04">★</text>

    <!-- Wall/building -->
    <rect x="50" y="50" width="260" height="320" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="50" y="370" width="460" height="20" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>

    <!-- Poster - clickable -->
    <g data-clickable="true" data-target="scene3sub" role="button" aria-label="Click the poster">
      <rect x="100" y="100" width="150" height="190" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2"/>
      <line x1="120" y1="150" x2="230" y2="150" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="120" y1="170" x2="220" y2="170" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="120" y1="190" x2="225" y2="190" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="120" y1="210" x2="218" y2="210" stroke="#C49A6C" stroke-width="0.8"/>
      <polygon points="175,115 180,128 192,128 182,136 186,148 175,140 164,148 168,136 158,128 170,128" fill="#E8622A"/>
      <text x="175" y="270" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030">VOTE</text>
      <rect x="94" y="94" width="162" height="202" class="clickable-hint" rx="3"/>
    </g>

    <!-- Flag -->
    <line x1="440" y1="70" x2="440" y2="340" stroke="#7B4019" stroke-width="2.5"/>
    <polygon points="440,70 500,92 440,114" fill="#E8622A" stroke="#7B4019" stroke-width="0.8"/>

    <!-- Crowd silhouettes -->
    <ellipse cx="350" cy="320" rx="16" ry="16" fill="#7B4019"/>
    <rect x="336" y="336" width="28" height="36" fill="#7B4019" rx="3"/>
    <ellipse cx="390" cy="326" rx="14" ry="14" fill="#C49A6C"/>
    <rect x="378" y="340" width="24" height="32" fill="#C49A6C" rx="3"/>
    <ellipse cx="425" cy="322" rx="14" ry="14" fill="#7B4019"/>
    <rect x="413" y="336" width="24" height="34" fill="#7B4019" rx="3"/>
    <ellipse cx="460" cy="328" rx="13" ry="13" fill="#C49A6C"/>
    <rect x="449" y="341" width="22" height="28" fill="#C49A6C" rx="3"/>

    <!-- Floor -->
    <line x1="30" y1="390" x2="530" y2="390" stroke="#7B4019" stroke-width="1"/>
  `;
}

function getScene3Sub() {
  return `
    <!-- GHOST SHAPES -->
    <polygon points="20,30 30,50 40,30 50,50 60,30" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.07"/>
    <circle cx="480" cy="380" r="80" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.06"/>
    <rect x="420" y="20" width="130" height="180" fill="#E8622A" opacity="0.05" rx="3"/>

    <!-- Large poster -->
    <rect x="80" y="25" width="400" height="330" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5" rx="3"/>
    <polygon points="280,55 293,82 322,82 299,100 308,128 280,112 252,128 261,100 238,82 267,82" fill="#E8622A"/>
    <text x="280" y="160" text-anchor="middle" font-family="Georgia" font-size="20" fill="#7B4019" font-weight="bold">RAMESH KUMAR</text>
    <line x1="160" y1="172" x2="400" y2="172" stroke="#C49A6C" stroke-width="1"/>
    <text x="280" y="198" text-anchor="middle" font-family="Georgia" font-size="14" fill="#A06030">Triangle Party — Central District</text>
    <text x="280" y="228" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019">For Progress. For People.</text>
    <rect x="200" y="248" width="160" height="38" fill="#E8622A" rx="19"/>
    <text x="280" y="272" text-anchor="middle" font-family="Georgia" font-size="15" fill="#FFF5C8" font-weight="bold">VOTE ▲</text>

    <!-- Speech bubble -->
    <g class="text-revealing">
      <path d="M180,320 Q180,300 230,300 L370,300 Q400,300 400,320 L400,340 Q400,355 370,355 L300,355 L285,375 L290,355 L210,355 Q180,355 180,340Z" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>
      <text x="290" y="335" text-anchor="middle" font-family="Georgia" font-size="15" fill="#7B4019">We heard you.</text>
    </g>
  `;
}

// ═══ STEP 4: Voting Day (3 layers) ═══
function getScene4Layer1() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-20" y="60" width="180" height="120" fill="#7B4019" opacity="0.05" rx="3"/>
    <circle cx="500" cy="380" r="90" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.07"/>
    <polygon points="450,10 450,70 520,90 520,-10" fill="#E8622A" opacity="0.06"/>
    <text x="380" y="160" font-family="Georgia" font-size="120" fill="#7B4019" opacity="0.04">✗</text>

    <!-- Building -->
    <rect x="80" y="80" width="400" height="260" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <polygon points="55,80 500,80 520,50 35,50" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="180" y="55" width="200" height="20" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <text x="280" y="70" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">POLLING STATION</text>

    <!-- Door (left side) -->
    <rect x="105" y="230" width="60" height="110" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
    <circle cx="155" cy="285" r="3" fill="#7B4019"/>

    <!-- Windows -->
    <rect x="105" y="110" width="70" height="60" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <line x1="140" y1="110" x2="140" y2="170" stroke="#7B4019" stroke-width="0.8"/>
    <line x1="105" y1="140" x2="175" y2="140" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="385" y="110" width="70" height="60" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <line x1="420" y1="110" x2="420" y2="170" stroke="#7B4019" stroke-width="0.8"/>
    <line x1="385" y1="140" x2="455" y2="140" stroke="#7B4019" stroke-width="0.8"/>

    <!-- Booth - clickable (CENTERED) -->
    <g data-clickable="true" data-target="scene4layer2" role="button" aria-label="Enter the booth">
      <rect x="230" y="180" width="100" height="160" fill="#F0A868" stroke="#7B4019" stroke-width="1.2"/>
      <path d="M236,180 C240,230 234,290 238,340" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M260,180 C264,230 258,290 262,340" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M284,180 C288,230 282,290 286,340" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <path d="M308,180 C312,230 306,290 310,340" stroke="#7B4019" stroke-width="0.6" fill="none"/>
      <rect x="224" y="174" width="112" height="172" class="clickable-hint" rx="3"/>
    </g>

    <!-- Queue (right of booth) -->
    <ellipse cx="380" cy="296" rx="14" ry="14" fill="#7B4019"/>
    <rect x="368" y="310" width="24" height="30" fill="#7B4019" rx="2"/>
    <ellipse cx="420" cy="300" rx="12" ry="12" fill="#C49A6C"/>
    <rect x="410" y="312" width="20" height="26" fill="#C49A6C" rx="2"/>
    <ellipse cx="456" cy="302" rx="12" ry="12" fill="#7B4019"/>
    <rect x="446" y="314" width="20" height="24" fill="#7B4019" rx="2"/>

    <!-- Guard -->
    <ellipse cx="350" cy="290" rx="10" ry="10" fill="#C49A6C"/>
    <rect x="342" y="300" width="16" height="36" fill="#C49A6C" rx="2"/>

    <!-- Ground -->
    <line x1="30" y1="340" x2="530" y2="340" stroke="#7B4019" stroke-width="1"/>
    <rect x="55" y="340" width="450" height="10" fill="#C49A6C" opacity="0.2"/>
  `;
}

function getScene4Layer2() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="420" y="-10" width="140" height="100" fill="#E8622A" opacity="0.06" rx="3"/>
    <circle cx="40" cy="400" r="70" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.06"/>

    <!-- Booth interior -->
    <rect x="40" y="20" width="480" height="380" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="40" y="20" width="40" height="380" fill="#F0A868" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="480" y="20" width="40" height="380" fill="#F0A868" stroke="#7B4019" stroke-width="0.8"/>
    <path d="M48,20 C52,140 44,280 48,400" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M68,20 C72,140 64,280 68,400" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M488,20 C492,140 484,280 488,400" stroke="#7B4019" stroke-width="0.5" fill="none"/>
    <path d="M508,20 C512,140 504,280 508,400" stroke="#7B4019" stroke-width="0.5" fill="none"/>

    <!-- Bulb -->
    <line x1="280" y1="20" x2="280" y2="55" stroke="#7B4019" stroke-width="1"/>
    <circle cx="280" cy="65" r="10" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>

    <!-- Table -->
    <rect x="100" y="250" width="360" height="14" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="120" y="264" width="10" height="80" fill="#7B4019"/>
    <rect x="430" y="264" width="10" height="80" fill="#7B4019"/>

    <!-- EVM SET - clickable -->
    <g data-clickable="true" data-target="scene4layer3" role="button" aria-label="Use the EVM">

      <!-- LEFT: Ballot Unit (flat horizontal panel) -->
      <rect x="110" y="160" width="155" height="90" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5" rx="4"/>
      <!-- Button rows -->
      <rect x="120" y="172" width="100" height="11" fill="#F0A868" stroke="#7B4019" stroke-width="0.6" rx="2"/>
      <circle cx="232" cy="177" r="5" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8"/>
      <rect x="120" y="188" width="100" height="11" fill="#F0A868" stroke="#7B4019" stroke-width="0.6" rx="2"/>
      <circle cx="232" cy="193" r="5" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8"/>
      <rect x="120" y="204" width="100" height="11" fill="#F0A868" stroke="#7B4019" stroke-width="0.6" rx="2"/>
      <circle cx="232" cy="209" r="5" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8"/>
      <rect x="120" y="220" width="100" height="11" fill="#F0A868" stroke="#7B4019" stroke-width="0.6" rx="2"/>
      <circle cx="232" cy="225" r="5" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8"/>
      <!-- Accent strip -->
      <rect x="110" y="238" width="155" height="8" fill="#E8622A" stroke="#7B4019" stroke-width="0.6" rx="2"/>

      <!-- Wire: Ballot → Control -->
      <path d="M265,210 C280,210 285,195 300,195" stroke="#C49A6C" stroke-width="1.5" fill="none"/>

      <!-- CENTER: Control Unit (upright boxy) -->
      <rect x="300" y="140" width="80" height="110" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5" rx="4"/>
      <!-- Display screen -->
      <rect x="316" y="155" width="48" height="28" fill="#FFF5C8" stroke="#7B4019" stroke-width="1" rx="2"/>
      <text x="340" y="173" text-anchor="middle" font-family="system-ui" font-size="8" fill="#7B4019">READY</text>
      <!-- Control buttons -->
      <circle cx="325" cy="200" r="5" fill="#E8622A" stroke="#7B4019" stroke-width="0.8"/>
      <circle cx="340" cy="200" r="5" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
      <circle cx="355" cy="200" r="5" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8"/>
      <rect x="318" y="215" width="44" height="10" fill="#C49A6C" stroke="#7B4019" stroke-width="0.6" rx="2"/>
      <!-- Accent line -->
      <rect x="300" y="240" width="80" height="6" fill="#E8622A" stroke="#7B4019" stroke-width="0.5" rx="2"/>

      <!-- Wire: Control → VVPAT -->
      <path d="M380,195 C395,195 400,185 415,185" stroke="#C49A6C" stroke-width="1.5" fill="none"/>

      <!-- RIGHT: VVPAT (tall narrow upright box) -->
      <rect x="415" y="115" width="50" height="135" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5" rx="4"/>
      <!-- Transparent window -->
      <rect x="423" y="135" width="34" height="50" fill="#FFF5C8" stroke="#E8622A" stroke-width="1.5" rx="2"/>
      <line x1="428" y1="150" x2="452" y2="150" stroke="#C49A6C" stroke-width="0.5"/>
      <line x1="428" y1="160" x2="452" y2="160" stroke="#C49A6C" stroke-width="0.5"/>
      <line x1="428" y1="170" x2="452" y2="170" stroke="#C49A6C" stroke-width="0.5"/>
      <text x="440" y="210" text-anchor="middle" font-family="system-ui" font-size="7" fill="#7B4019">VVPAT</text>
      <!-- Accent strip -->
      <rect x="415" y="242" width="50" height="6" fill="#E8622A" stroke="#7B4019" stroke-width="0.5" rx="2"/>

      <!-- Clickable hint wraps all 3 units -->
      <rect x="104" y="108" width="368" height="148" class="clickable-hint" rx="5"/>
    </g>

    <!-- Voter hand pointing -->
    <path d="M195,142 L195,160 M189,150 L201,150" stroke="#C49A6C" stroke-width="4" stroke-linecap="round"/>

    <!-- Floor -->
    <rect x="80" y="344" width="400" height="14" fill="#C49A6C"/>
  `;
}

function getScene4Layer3() {
  return `
    <!-- GHOST SHAPES -->
    <circle cx="510" cy="50" r="50" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.07"/>
    <rect x="-10" y="360" width="80" height="80" fill="#7B4019" opacity="0.04" rx="3"/>

    <!-- ═══ BALLOT UNIT (left, zoomed in) ═══ -->
    <rect x="20" y="30" width="310" height="380" fill="#FAEBD7" stroke="#7B4019" stroke-width="2" rx="6"/>
    <text x="175" y="58" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019" font-weight="bold">BALLOT UNIT</text>
    <line x1="40" y1="66" x2="310" y2="66" stroke="#C49A6C" stroke-width="1"/>

    <!-- Candidate 1 — Triangle Party -->
    <rect x="40" y="80" width="275" height="48" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="3"/>
    <rect x="50" y="88" width="28" height="28" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <polygon points="64,93 72,110 56,110" fill="#7B4019"/>
    <text x="90" y="108" font-family="Georgia" font-size="13" fill="#7B4019">Triangle Party</text>
    <circle cx="295" cy="104" r="12" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>

    <!-- Candidate 2 — Circle Party (will be pressed) -->
    <rect x="40" y="138" width="275" height="48" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="3" id="evm-btn-2"/>
    <rect x="50" y="146" width="28" height="28" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <circle cx="64" cy="160" r="9" fill="#E8622A"/>
    <text x="90" y="166" font-family="Georgia" font-size="13" fill="#7B4019">Circle Party</text>
    <circle cx="295" cy="162" r="12" fill="#E8622A" class="glow-btn" opacity="0"/>

    <!-- Candidate 3 — Square Party -->
    <rect x="40" y="196" width="275" height="48" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="3"/>
    <rect x="50" y="204" width="28" height="28" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <rect x="56" y="210" width="16" height="16" fill="#7B4019"/>
    <text x="90" y="224" font-family="Georgia" font-size="13" fill="#7B4019">Square Party</text>
    <circle cx="295" cy="220" r="12" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>

    <!-- Candidate 4 — Star Party -->
    <rect x="40" y="254" width="275" height="48" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="3"/>
    <rect x="50" y="262" width="28" height="28" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <text x="64" y="283" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019">★</text>
    <text x="90" y="282" font-family="Georgia" font-size="13" fill="#7B4019">Star Party</text>
    <circle cx="295" cy="278" r="12" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>

    <!-- Candidate 5 — Diamond Party -->
    <rect x="40" y="312" width="275" height="48" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="3"/>
    <rect x="50" y="320" width="28" height="28" fill="#FAEBD7" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <polygon points="64,325 72,338 64,351 56,338" fill="#C49A6C" stroke="#7B4019" stroke-width="0.6"/>
    <text x="90" y="340" font-family="Georgia" font-size="13" fill="#7B4019">Diamond Party</text>
    <circle cx="295" cy="336" r="12" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>

    <!-- Accent strip at bottom of Ballot Unit -->
    <rect x="20" y="370" width="310" height="12" fill="#E8622A" stroke="#7B4019" stroke-width="0.8" rx="3"/>

    <!-- Wire from Ballot Unit to VVPAT area -->
    <path d="M330,200 C355,200 360,140 380,140" stroke="#C49A6C" stroke-width="2" fill="none"/>

    <!-- ═══ VVPAT (right side, tall) ═══ -->
    <rect x="380" y="30" width="150" height="340" fill="#FAEBD7" stroke="#7B4019" stroke-width="2" rx="6"/>
    <text x="455" y="55" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019" font-weight="bold">VVPAT</text>
    <line x1="395" y1="64" x2="515" y2="64" stroke="#C49A6C" stroke-width="0.8"/>

    <!-- VVPAT transparent window -->
    <rect x="400" y="80" width="110" height="180" fill="#FFF5C8" stroke="#E8622A" stroke-width="2" rx="3"/>
    <!-- Guide lines inside window -->
    <line x1="410" y1="120" x2="500" y2="120" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="410" y1="155" x2="500" y2="155" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="410" y1="190" x2="500" y2="190" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="410" y1="225" x2="500" y2="225" stroke="#C49A6C" stroke-width="0.4"/>

    <!-- Printed slip (appears via animation) -->
    <rect x="410" y="280" width="90" height="60" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8" rx="2"/>
    <text x="455" y="298" text-anchor="middle" font-family="system-ui" font-size="8" fill="#A06030">YOUR VOTE</text>

    <!-- Accent strip at bottom -->
    <rect x="380" y="358" width="150" height="12" fill="#E8622A" stroke="#7B4019" stroke-width="0.8" rx="3"/>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene3 = { main: getScene3Main, sub: getScene3Sub };
window.SceneData.scene4 = { main: getScene4Layer1, layer2: getScene4Layer2, layer3: getScene4Layer3 };
