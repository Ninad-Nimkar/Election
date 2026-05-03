// ═══ STEP 5: Vote Counting ═══
function getScene5Main() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-20" y="200" width="160" height="200" fill="#7B4019" opacity="0.04" rx="3"/>
    <circle cx="500" cy="60" r="80" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.08"/>
    <text x="350" y="420" font-family="Georgia" font-size="150" fill="#E8622A" opacity="0.04">#</text>
    <rect x="400" y="300" width="160" height="140" fill="#E8622A" opacity="0.05" rx="4"/>

    <!-- Room (isometric-lite) -->
    <polygon points="40,160 280,80 520,160 280,240" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.2"/>
    <polygon points="40,160 280,240 280,400 40,320" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
    <polygon points="520,160 280,240 280,400 520,320" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>

    <!-- Tables -->
    <polygon points="90,190 200,150 250,175 140,215" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <polygon points="320,175 430,135 480,160 370,200" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>

    <!-- Officials -->
    <ellipse cx="140" cy="180" rx="10" ry="10" fill="#7B4019"/>
    <rect x="132" y="190" width="16" height="20" fill="#7B4019" rx="2"/>
    <ellipse cx="195" cy="162" rx="10" ry="10" fill="#C49A6C"/>
    <rect x="187" y="172" width="16" height="20" fill="#C49A6C" rx="2"/>
    <ellipse cx="370" cy="170" rx="10" ry="10" fill="#7B4019"/>
    <rect x="362" y="180" width="16" height="20" fill="#7B4019" rx="2"/>
    <ellipse cx="425" cy="152" rx="10" ry="10" fill="#C49A6C"/>
    <rect x="417" y="162" width="16" height="20" fill="#C49A6C" rx="2"/>

    <!-- EVM boxes -->
    <rect x="100" y="170" width="22" height="16" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="340" y="158" width="22" height="16" fill="#FFF5C8" stroke="#7B4019" stroke-width="0.8"/>

    <!-- Tally board - clickable -->
    <g data-clickable="true" data-target="scene5sub" role="button" aria-label="View the tally board">
      <rect x="200" y="260" width="160" height="100" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.2"/>
      <text x="220" y="285" font-family="Georgia" font-size="13" fill="#7B4019">||||</text>
      <text x="220" y="305" font-family="Georgia" font-size="13" fill="#E8622A">|||| ||</text>
      <text x="220" y="325" font-family="Georgia" font-size="13" fill="#C49A6C">|||</text>
      <text x="330" y="285" font-family="Georgia" font-size="13" fill="#A06030">A</text>
      <text x="330" y="305" font-family="Georgia" font-size="13" fill="#A06030">B</text>
      <text x="330" y="325" font-family="Georgia" font-size="13" fill="#A06030">C</text>
      <rect x="194" y="254" width="172" height="112" class="clickable-hint" rx="3"/>
    </g>

    <!-- Paper stacks -->
    <rect x="100" y="260" width="35" height="10" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
    <rect x="103" y="254" width="35" height="10" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
    <rect x="400" y="255" width="35" height="10" fill="#FFF5C8" stroke="#C49A6C" stroke-width="0.6"/>
  `;
}

function getScene5Sub() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="420" y="30" width="120" height="250" fill="#7B4019" opacity="0.04" rx="3"/>
    <circle cx="60" cy="380" r="70" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.07"/>
    <text x="20" y="100" font-family="Georgia" font-size="100" fill="#E8622A" opacity="0.04">∑</text>

    <!-- Tally board -->
    <rect x="70" y="25" width="420" height="350" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5" rx="3"/>
    <text x="280" y="58" text-anchor="middle" font-family="Georgia" font-size="16" fill="#7B4019" font-weight="bold">VOTE TALLY</text>
    <line x1="100" y1="70" x2="460" y2="70" stroke="#C49A6C" stroke-width="1"/>

    <!-- Labels -->
    <polygon points="110,95 118,112 102,112" fill="#7B4019"/>
    <text x="132" y="108" font-family="Georgia" font-size="14" fill="#7B4019">Triangle</text>
    <circle cx="110" cy="155" r="10" fill="#E8622A"/>
    <text x="132" y="160" font-family="Georgia" font-size="14" fill="#7B4019">Circle</text>
    <rect x="100" y="198" width="18" height="18" fill="#C49A6C"/>
    <text x="132" y="213" font-family="Georgia" font-size="14" fill="#7B4019">Square</text>

    <!-- Bar chart -->
    <rect x="220" y="80" width="240" height="190" fill="#FAEBD7" stroke="#C49A6C" stroke-width="0.8"/>
    <!-- Bars -->
    <rect x="245" y="160" width="45" height="110" fill="#7B4019" class="growing-bar" rx="3"/>
    <rect x="315" y="95" width="45" height="175" fill="#E8622A" class="growing-bar" style="animation-delay:0.3s" rx="3"/>
    <rect x="385" y="195" width="45" height="75" fill="#C49A6C" class="growing-bar" style="animation-delay:0.6s" rx="3"/>

    <!-- Vote counts -->
    <text x="268" y="152" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019" class="text-revealing" style="animation-delay:1.2s">42,891</text>
    <text x="338" y="87" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E8622A" class="text-revealing" style="animation-delay:1.5s">67,234</text>
    <text x="408" y="188" text-anchor="middle" font-family="Georgia" font-size="13" fill="#C49A6C" class="text-revealing" style="animation-delay:1.8s">28,156</text>

    <!-- Stamp -->
    <g class="stamp-text" style="animation-delay:2s">
      <rect x="120" y="300" width="320" height="40" fill="none" stroke="#E8622A" stroke-width="2" rx="4"/>
      <text x="280" y="326" text-anchor="middle" font-family="Georgia" font-size="16" fill="#E8622A" font-weight="bold">COUNTING COMPLETE</text>
    </g>
  `;
}

// ═══ STEP 6: Results Declared ═══
function getScene6Main() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-10" y="50" width="140" height="200" fill="#7B4019" opacity="0.04" rx="3"/>
    <circle cx="510" cy="350" r="90" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.07"/>
    <text x="30" y="400" font-family="Georgia" font-size="120" fill="#E8622A" opacity="0.04">W</text>
    <rect x="400" y="10" width="130" height="100" fill="#E8622A" opacity="0.05" rx="4"/>

    <!-- TV frame -->
    <rect x="90" y="50" width="380" height="260" fill="#7B4019" stroke="#7B4019" stroke-width="2" rx="10"/>
    <rect x="102" y="60" width="356" height="236" fill="#FAEBD7" stroke="#7B4019" stroke-width="1" rx="5"/>

    <!-- On-screen content -->
    <text x="280" y="90" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019" font-weight="bold">ELECTION RESULTS</text>
    <line x1="140" y1="100" x2="420" y2="100" stroke="#C49A6C" stroke-width="0.8"/>

    <!-- Bar chart -->
    <rect x="162" y="180" width="50" height="96" fill="#7B4019" rx="3"/>
    <text x="187" y="172" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">▲</text>

    <!-- Tallest bar - clickable -->
    <g data-clickable="true" data-target="scene6sub" role="button" aria-label="View results certificate">
      <rect x="252" y="120" width="50" height="156" fill="#E8622A" rx="3"/>
      <text x="277" y="112" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E8622A">●</text>
      <text x="277" y="286" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E8622A" font-weight="bold">WINNER</text>
      <rect x="246" y="108" width="62" height="186" class="clickable-hint" rx="3"/>
    </g>

    <rect x="342" y="210" width="50" height="66" fill="#C49A6C" rx="3"/>
    <text x="367" y="202" text-anchor="middle" font-family="Georgia" font-size="13" fill="#C49A6C">■</text>

    <!-- TV stand -->
    <rect x="250" y="310" width="60" height="42" fill="#7B4019"/>
    <rect x="210" y="352" width="140" height="12" fill="#C49A6C" stroke="#7B4019" stroke-width="1" rx="3"/>

    <!-- Floor -->
    <line x1="60" y1="390" x2="500" y2="390" stroke="#C49A6C" stroke-width="1"/>
    <rect x="90" y="380" width="380" height="10" fill="#C49A6C" opacity="0.2"/>
  `;
}

function getScene6Sub() {
  return `
    <!-- GHOST SHAPES -->
    <circle cx="70" cy="70" r="70" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.07"/>
    <circle cx="490" cy="380" r="60" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.06"/>
    <text x="380" y="120" font-family="Georgia" font-size="100" fill="#E8622A" opacity="0.04">✓</text>

    <!-- Certificate -->
    <rect x="90" y="20" width="380" height="400" fill="#FFF8EC" stroke="#7B4019" stroke-width="1.5" rx="4"/>
    <rect x="102" y="32" width="356" height="376" fill="none" stroke="#C49A6C" stroke-width="1" stroke-dasharray="8 4" rx="3"/>

    <!-- EC Seal -->
    <circle cx="280" cy="75" r="28" fill="none" stroke="#7B4019" stroke-width="1.5"/>
    <circle cx="280" cy="75" r="20" fill="none" stroke="#7B4019" stroke-width="0.8"/>
    <text x="280" y="72" text-anchor="middle" font-family="Georgia" font-size="8" fill="#7B4019">ELECTION</text>
    <text x="280" y="83" text-anchor="middle" font-family="Georgia" font-size="8" fill="#7B4019">COMMISSION</text>

    <text x="280" y="128" text-anchor="middle" font-family="Georgia" font-size="14" fill="#A06030">This is to certify that</text>

    <text x="280" y="165" text-anchor="middle" font-family="Georgia" font-size="20" fill="#7B4019" font-weight="bold">RAMESH KUMAR</text>
    <line x1="160" y1="175" x2="400" y2="175" stroke="#C49A6C" stroke-width="1"/>
    <text x="280" y="200" text-anchor="middle" font-family="Georgia" font-size="14" fill="#A06030">Circle Party — Central District 42</text>

    <!-- ELECTED stamp -->
    <g class="stamp-text">
      <rect x="185" y="222" width="190" height="48" fill="none" stroke="#E8622A" stroke-width="3" rx="5"/>
      <text x="280" y="253" text-anchor="middle" font-family="Georgia" font-size="24" fill="#E8622A" font-weight="bold">ELECTED</text>
    </g>

    <text x="280" y="310" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030">Date: 20 March 2026</text>

    <line x1="200" y1="360" x2="360" y2="360" stroke="#7B4019" stroke-width="0.8"/>
    <text x="280" y="378" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030">Chief Election Commissioner</text>
  `;
}

// ═══ STEP 7: Oath of Office ═══
function getScene7Main() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-10" y="100" width="120" height="200" fill="#7B4019" opacity="0.04" rx="3"/>
    <circle cx="500" cy="80" r="80" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.07"/>
    <text x="380" y="420" font-family="Georgia" font-size="120" fill="#E8622A" opacity="0.04">⚖</text>
    <rect x="420" y="280" width="130" height="140" fill="#E8622A" opacity="0.05" rx="4"/>

    <!-- Room -->
    <rect x="40" y="40" width="480" height="330" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>

    <!-- Side pillars -->
    <rect x="50" y="40" width="30" height="330" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="480" y="40" width="30" height="330" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>

    <!-- Podium -->
    <rect x="215" y="245" width="130" height="105" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="200" y="238" width="160" height="14" fill="#7B4019"/>
    <circle cx="280" cy="298" r="16" fill="none" stroke="#F0A868" stroke-width="1.2"/>
    <circle cx="280" cy="298" r="10" fill="none" stroke="#F0A868" stroke-width="0.8"/>

    <!-- Book -->
    <rect x="252" y="226" width="40" height="10" fill="#7B4019" rx="2"/>
    <rect x="254" y="218" width="36" height="10" fill="#E8622A" rx="2"/>

    <!-- Figure -->
    <ellipse cx="280" cy="148" rx="20" ry="20" fill="#7B4019"/>
    <rect x="260" y="168" width="40" height="66" fill="#7B4019" rx="4"/>

    <!-- Right hand raised - clickable -->
    <g data-clickable="true" data-target="scene7sub" role="button" aria-label="Take the oath">
      <path d="M300,170 L322,130 L332,127 L330,136 L320,140 L304,177" fill="#C49A6C" stroke="#7B4019" stroke-width="1.2"/>
      <rect x="298" y="115" width="42" height="68" class="clickable-hint" rx="3"/>
    </g>

    <!-- Left hand on book -->
    <path d="M260,185 L248,216 L254,226" fill="none" stroke="#C49A6C" stroke-width="4" stroke-linecap="round"/>

    <!-- Floor -->
    <line x1="40" y1="350" x2="520" y2="350" stroke="#7B4019" stroke-width="1"/>
    <rect x="50" y="350" width="460" height="10" fill="#C49A6C" opacity="0.2"/>
  `;
}

function getScene7Sub() {
  return `
    <!-- GHOST SHAPES -->
    <circle cx="70" cy="70" r="60" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.07"/>
    <rect x="430" y="300" width="120" height="120" fill="#E8622A" opacity="0.05" rx="3"/>
    <text x="20" y="400" font-family="Georgia" font-size="100" fill="#7B4019" opacity="0.04">★</text>

    <!-- Room -->
    <rect x="40" y="40" width="480" height="330" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <rect x="50" y="40" width="30" height="330" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>
    <rect x="480" y="40" width="30" height="330" fill="#C49A6C" stroke="#7B4019" stroke-width="0.8"/>

    <!-- Podium -->
    <rect x="215" y="245" width="130" height="105" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="200" y="238" width="160" height="14" fill="#7B4019"/>
    <rect x="252" y="226" width="40" height="10" fill="#7B4019" rx="2"/>
    <rect x="254" y="218" width="36" height="10" fill="#E8622A" rx="2"/>

    <!-- Figure (glowing) -->
    <ellipse cx="280" cy="148" rx="20" ry="20" fill="#E8622A"/>
    <rect x="260" y="168" width="40" height="66" fill="#7B4019" rx="4"/>
    <path d="M300,170 L322,130 L332,127 L330,136 L320,140 L304,177" fill="#E8622A" stroke="#7B4019" stroke-width="1.2"/>
    <path d="M260,185 L248,216 L254,226" fill="none" stroke="#C49A6C" stroke-width="4" stroke-linecap="round"/>

    <!-- Oath text -->
    <text x="280" y="58" text-anchor="middle" font-family="Georgia" font-size="15" fill="#7B4019" class="text-revealing" style="animation-delay:0.2s">"I do solemnly swear..."</text>
    <text x="280" y="80" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030" class="text-revealing" style="animation-delay:0.6s">to bear true faith and allegiance</text>
    <text x="280" y="100" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030" class="text-revealing" style="animation-delay:1s">to the Constitution of India</text>

    <!-- Badge -->
    <g class="badge-appearing" style="animation-delay:1.5s">
      <rect x="160" y="370" width="240" height="48" fill="#E8622A" rx="8"/>
      <text x="280" y="390" text-anchor="middle" font-family="Georgia" font-size="14" fill="#FFF5C8" font-weight="bold">REPRESENTATIVE</text>
      <text x="280" y="408" text-anchor="middle" font-family="Georgia" font-size="13" fill="#FFF5C8">ELECTED</text>
    </g>

    <!-- Floor -->
    <line x1="40" y1="425" x2="520" y2="425" stroke="#7B4019" stroke-width="1"/>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene5 = { main: getScene5Main, sub: getScene5Sub };
window.SceneData.scene6 = { main: getScene6Main, sub: getScene6Sub };
window.SceneData.scene7 = { main: getScene7Main, sub: getScene7Sub };
