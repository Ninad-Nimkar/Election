// Scene 5: Vote Counting
function getScene5Main() {
  return `
    <!-- Room floor (isometric-lite) -->
    <polygon points="40,120 210,60 380,120 210,180" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>
    <polygon points="40,120 210,180 210,300 40,240" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <polygon points="380,120 210,180 210,300 380,240" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <!-- Tables -->
    <polygon points="80,145 160,115 200,135 120,165" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <polygon points="240,135 320,105 360,125 280,155" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <!-- Officials (simple shapes on chairs) -->
    <ellipse cx="120" cy="138" rx="7" ry="7" fill="#7B4019"/>
    <rect x="114" y="145" width="12" height="15" fill="#7B4019" rx="2"/>
    <ellipse cx="155" cy="125" rx="7" ry="7" fill="#C49A6C"/>
    <rect x="149" y="132" width="12" height="15" fill="#C49A6C" rx="2"/>
    <ellipse cx="280" cy="130" rx="7" ry="7" fill="#7B4019"/>
    <rect x="274" y="137" width="12" height="15" fill="#7B4019" rx="2"/>
    <ellipse cx="315" cy="118" rx="7" ry="7" fill="#C49A6C"/>
    <rect x="309" y="125" width="12" height="15" fill="#C49A6C" rx="2"/>
    <!-- EVM boxes on table -->
    <rect x="90" y="130" width="15" height="12" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="250" y="120" width="15" height="12" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8"/>
    <!-- Tally board - clickable -->
    <g data-clickable="true" data-target="scene5sub" role="button" aria-label="View the tally board">
      <rect x="160" y="195" width="100" height="70" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2"/>
      <!-- Tally marks -->
      <text x="175" y="215" font-family="system-ui" font-size="8" fill="#7B4019">||||</text>
      <text x="175" y="230" font-family="system-ui" font-size="8" fill="#E8622A">|||| ||</text>
      <text x="175" y="245" font-family="system-ui" font-size="8" fill="#C49A6C">|||</text>
      <rect x="155" y="190" width="110" height="80" class="clickable-hint" rx="3"/>
    </g>
    <!-- Paper stacks -->
    <rect x="90" y="200" width="25" height="8" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
    <rect x="92" y="195" width="25" height="8" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
    <rect x="300" y="195" width="25" height="8" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
  `;
}

function getScene5Sub() {
  return `
    <!-- Tally counter board -->
    <rect x="60" y="30" width="300" height="260" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <text x="210" y="55" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">VOTE TALLY</text>
    <line x1="80" y1="65" x2="340" y2="65" stroke="#C49A6C" stroke-width="1"/>
    <!-- Candidate labels -->
    <polygon points="95,85 102,97 88,97" fill="#7B4019"/>
    <text x="112" y="95" font-family="system-ui" font-size="10" fill="#7B4019">Triangle</text>
    <circle cx="95" cy="135" r="7" fill="#E8622A"/>
    <text x="112" y="139" font-family="system-ui" font-size="10" fill="#7B4019">Circle</text>
    <rect x="88" y="168" width="14" height="14" fill="#C49A6C"/>
    <text x="112" y="179" font-family="system-ui" font-size="10" fill="#7B4019">Square</text>
    <!-- Bar chart area -->
    <rect x="170" y="75" width="170" height="140" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8"/>
    <!-- Bars (growing animation) -->
    <rect x="185" y="130" width="30" height="85" fill="#7B4019" class="growing-bar" rx="2"/>
    <rect x="235" y="85" width="30" height="130" fill="#E8622A" class="growing-bar" style="animation-delay:0.3s" rx="2"/>
    <rect x="285" y="155" width="30" height="60" fill="#C49A6C" class="growing-bar" style="animation-delay:0.6s" rx="2"/>
    <!-- Vote counts -->
    <text x="200" y="125" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019" class="text-revealing" style="animation-delay:1.2s">42,891</text>
    <text x="250" y="80" text-anchor="middle" font-family="system-ui" font-size="9" fill="#E8622A" class="text-revealing" style="animation-delay:1.5s">67,234</text>
    <text x="300" y="150" text-anchor="middle" font-family="system-ui" font-size="9" fill="#C49A6C" class="text-revealing" style="animation-delay:1.8s">28,156</text>
    <!-- Counting complete stamp -->
    <g class="stamp-text" style="animation-delay:2s">
      <rect x="100" y="225" width="220" height="30" fill="none" stroke="#E8622A" stroke-width="2" rx="3"/>
      <text x="210" y="245" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E8622A" font-weight="bold">COUNTING COMPLETE</text>
    </g>
  `;
}

// Scene 6: Results Declared
function getScene6Main() {
  return `
    <!-- TV outer frame -->
    <rect x="80" y="50" width="260" height="190" fill="#7B4019" stroke="#7B4019" stroke-width="2" rx="8"/>
    <!-- TV screen -->
    <rect x="90" y="58" width="240" height="170" fill="#FAEBD7" stroke="#7B4019" stroke-width="1" rx="4"/>
    <!-- "RESULTS" text on screen -->
    <text x="210" y="82" text-anchor="middle" font-family="Georgia" font-size="11" fill="#7B4019">ELECTION RESULTS</text>
    <line x1="110" y1="88" x2="310" y2="88" stroke="#C49A6C" stroke-width="0.8"/>
    <!-- Bar chart on TV -->
    <rect x="130" y="140" width="35" height="70" fill="#7B4019" rx="2"/>
    <text x="147" y="135" text-anchor="middle" font-family="system-ui" font-size="7" fill="#7B4019">▲</text>
    <!-- Tallest bar - clickable -->
    <g data-clickable="true" data-target="scene6sub" role="button" aria-label="View results certificate">
      <rect x="190" y="100" width="35" height="110" fill="#E8622A" rx="2"/>
      <text x="207" y="95" text-anchor="middle" font-family="system-ui" font-size="7" fill="#E8622A">●</text>
      <text x="207" y="218" text-anchor="middle" font-family="system-ui" font-size="8" fill="#E8622A" font-weight="bold">WINNER</text>
      <rect x="185" y="92" width="45" height="140" class="clickable-hint" rx="3"/>
    </g>
    <rect x="250" y="160" width="35" height="50" fill="#C49A6C" rx="2"/>
    <text x="267" y="155" text-anchor="middle" font-family="system-ui" font-size="7" fill="#C49A6C">■</text>
    <!-- TV stand -->
    <rect x="190" y="240" width="40" height="30" fill="#7B4019"/>
    <rect x="160" y="270" width="100" height="8" fill="#C49A6C" stroke="#7B4019" stroke-width="1" rx="2"/>
    <!-- Floor -->
    <line x1="60" y1="300" x2="360" y2="300" stroke="#C49A6C" stroke-width="1"/>
  `;
}

function getScene6Sub() {
  return `
    <!-- Certificate -->
    <rect x="70" y="25" width="280" height="290" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Border decoration -->
    <rect x="80" y="35" width="260" height="270" fill="none" stroke="#C49A6C" stroke-width="1" stroke-dasharray="8 4"/>
    <!-- EC Seal -->
    <circle cx="210" cy="70" r="20" fill="none" stroke="#7B4019" stroke-width="1.5"/>
    <circle cx="210" cy="70" r="15" fill="none" stroke="#7B4019" stroke-width="0.8"/>
    <text x="210" y="68" text-anchor="middle" font-family="Georgia" font-size="5" fill="#7B4019">ELECTION</text>
    <text x="210" y="76" text-anchor="middle" font-family="Georgia" font-size="5" fill="#7B4019">COMMISSION</text>
    <!-- Certificate text -->
    <text x="210" y="115" text-anchor="middle" font-family="Georgia" font-size="11" fill="#A06030">This is to certify that</text>
    <!-- Winner name -->
    <text x="210" y="145" text-anchor="middle" font-family="Georgia" font-size="16" fill="#7B4019">RAMESH KUMAR</text>
    <line x1="120" y1="152" x2="300" y2="152" stroke="#C49A6C" stroke-width="1"/>
    <text x="210" y="172" text-anchor="middle" font-family="system-ui" font-size="10" fill="#A06030">Circle Party — Central District 42</text>
    <!-- ELECTED stamp -->
    <g class="stamp-text">
      <rect x="140" y="190" width="140" height="35" fill="none" stroke="#E8622A" stroke-width="3" rx="4"/>
      <text x="210" y="213" text-anchor="middle" font-family="Georgia" font-size="20" fill="#E8622A" font-weight="bold">ELECTED</text>
    </g>
    <!-- Date -->
    <text x="210" y="255" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030">Date: 20 March 2026</text>
    <!-- Signature line -->
    <line x1="155" y1="280" x2="265" y2="280" stroke="#7B4019" stroke-width="0.8"/>
    <text x="210" y="293" text-anchor="middle" font-family="system-ui" font-size="7" fill="#A06030">Chief Election Commissioner</text>
  `;
}

// Scene 7: Oath of Office
function getScene7Main() {
  return `
    <!-- Room bg -->
    <rect x="40" y="50" width="340" height="230" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <!-- Podium -->
    <rect x="165" y="180" width="90" height="80" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="155" y="175" width="110" height="10" fill="#7B4019"/>
    <!-- Emblem on podium -->
    <circle cx="210" cy="220" r="12" fill="none" stroke="#F0A868" stroke-width="1.2"/>
    <circle cx="210" cy="220" r="8" fill="none" stroke="#F0A868" stroke-width="0.8"/>
    <!-- Book on podium -->
    <rect x="185" y="168" width="30" height="6" fill="#7B4019" rx="1"/>
    <rect x="186" y="163" width="28" height="6" fill="#E8622A" rx="1"/>
    <!-- Figure standing -->
    <ellipse cx="210" cy="115" rx="14" ry="14" fill="#7B4019"/>
    <rect x="196" y="129" width="28" height="46" fill="#7B4019" rx="3"/>
    <!-- Right hand raised - clickable -->
    <g data-clickable="true" data-target="scene7sub" role="button" aria-label="Take the oath">
      <path d="M224,130 L240,100 L248,98 L246,105 L238,108 L228,135" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
      <rect x="225" y="88" width="30" height="52" class="clickable-hint" rx="3"/>
    </g>
    <!-- Left hand on book -->
    <path d="M196,140 L188,160 L192,168" fill="none" stroke="#C49A6C" stroke-width="3" stroke-linecap="round"/>
    <!-- Floor -->
    <line x1="40" y1="260" x2="380" y2="260" stroke="#7B4019" stroke-width="1"/>
    <!-- Side pillars -->
    <rect x="50" y="50" width="20" height="210" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="350" y="50" width="20" height="210" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
  `;
}

function getScene7Sub() {
  return `
    <!-- Same room but with oath text -->
    <rect x="40" y="50" width="340" height="230" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <rect x="165" y="180" width="90" height="80" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="155" y="175" width="110" height="10" fill="#7B4019"/>
    <circle cx="210" cy="220" r="12" fill="none" stroke="#F0A868" stroke-width="1.2"/>
    <rect x="185" y="168" width="30" height="6" fill="#7B4019" rx="1"/>
    <rect x="186" y="163" width="28" height="6" fill="#E8622A" rx="1"/>
    <!-- Figure glowing -->
    <ellipse cx="210" cy="115" rx="14" ry="14" fill="#E8622A"/>
    <rect x="196" y="129" width="28" height="46" fill="#7B4019" rx="3"/>
    <!-- Hand raised glowing -->
    <path d="M224,130 L240,100 L248,98 L246,105 L238,108 L228,135" fill="#E8622A" stroke="#7B4019" stroke-width="1"/>
    <path d="M196,140 L188,160 L192,168" fill="none" stroke="#C49A6C" stroke-width="3" stroke-linecap="round"/>
    <!-- Oath text appearing -->
    <text x="210" y="55" text-anchor="middle" font-family="Georgia" font-size="11" fill="#7B4019" class="text-revealing" style="animation-delay:0.2s">"I do solemnly swear..."</text>
    <text x="210" y="72" text-anchor="middle" font-family="Georgia" font-size="9" fill="#A06030" class="text-revealing" style="animation-delay:0.6s">to bear true faith and allegiance</text>
    <text x="210" y="86" text-anchor="middle" font-family="Georgia" font-size="9" fill="#A06030" class="text-revealing" style="animation-delay:1s">to the Constitution of India</text>
    <!-- Badge -->
    <g class="badge-appearing" style="animation-delay:1.5s">
      <rect x="50" y="260" width="120" height="28" fill="#E8622A" rx="4"/>
      <text x="110" y="278" text-anchor="middle" font-family="system-ui" font-size="8" fill="#FFF5C8" font-weight="bold">REPRESENTATIVE — ELECTED</text>
    </g>
    <!-- Pillars -->
    <rect x="50" y="50" width="20" height="210" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="350" y="50" width="20" height="210" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
    <line x1="40" y1="260" x2="380" y2="260" stroke="#7B4019" stroke-width="1"/>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene5 = { main: getScene5Main, sub: getScene5Sub };
window.SceneData.scene6 = { main: getScene6Main, sub: getScene6Sub };
window.SceneData.scene7 = { main: getScene7Main, sub: getScene7Sub };
