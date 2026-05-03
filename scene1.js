// ═══ STEP 1: Election Announcement ═══
function getScene1Main() {
  return `
    <!-- GHOST SHAPES -->
    <g opacity="0.09">
      <rect x="-30" y="-20" width="340" height="300" fill="none" stroke="#7B4019" stroke-width="2"/>
      <line x1="50" y1="-20" x2="50" y2="280" stroke="#7B4019" stroke-width="1.5"/>
      <line x1="130" y1="-20" x2="130" y2="280" stroke="#7B4019" stroke-width="1.5"/>
      <line x1="210" y1="-20" x2="210" y2="280" stroke="#7B4019" stroke-width="1.5"/>
      <line x1="-30" y1="50" x2="310" y2="50" stroke="#7B4019" stroke-width="1.5"/>
      <line x1="-30" y1="120" x2="310" y2="120" stroke="#7B4019" stroke-width="1.5"/>
      <line x1="-30" y1="190" x2="310" y2="190" stroke="#7B4019" stroke-width="1.5"/>
    </g>
    <g opacity="0.08">
      <polygon points="400,20 400,120 490,150 490,-10" fill="#E8622A"/>
      <rect x="490" y="40" width="40" height="40" fill="#E8622A" rx="4"/>
    </g>
    <circle cx="460" cy="350" r="110" fill="none" stroke="#E8622A" stroke-width="3" opacity="0.10"/>
    <text x="80" y="400" font-family="Georgia" font-size="180" fill="#7B4019" opacity="0.05">16</text>

    <!-- WALL -->
    <rect x="60" y="30" width="440" height="350" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5" rx="2"/>
    <line x1="60" y1="380" x2="500" y2="380" stroke="#C49A6C" stroke-width="1"/>

    <!-- NAIL -->
    <circle cx="280" cy="52" r="3" fill="#7B4019"/>
    <line x1="280" y1="55" x2="280" y2="68" stroke="#7B4019" stroke-width="1"/>

    <!-- CALENDAR -->
    <rect x="140" y="68" width="280" height="260" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5" rx="3"/>
    <circle cx="170" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="210" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="250" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="290" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="330" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="370" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <circle cx="400" cy="68" r="4" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <rect x="140" y="78" width="280" height="36" fill="#E8622A"/>
    <text x="280" y="102" text-anchor="middle" font-family="Georgia" font-size="17" fill="#FFF5C8" font-weight="bold">MARCH 2026</text>

    <!-- Day labels -->
    <text x="162" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">SUN</text>
    <text x="202" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">MON</text>
    <text x="242" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">TUE</text>
    <text x="282" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">WED</text>
    <text x="322" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">THU</text>
    <text x="362" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">FRI</text>
    <text x="402" y="130" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030" font-weight="bold">SAT</text>
    <line x1="145" y1="135" x2="415" y2="135" stroke="#C49A6C" stroke-width="0.8"/>

    <!-- Grid -->
    <line x1="182" y1="114" x2="182" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="222" y1="114" x2="222" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="262" y1="114" x2="262" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="302" y1="114" x2="302" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="342" y1="114" x2="342" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="382" y1="114" x2="382" y2="328" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="145" y1="170" x2="415" y2="170" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="145" y1="210" x2="415" y2="210" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="145" y1="250" x2="415" y2="250" stroke="#C49A6C" stroke-width="0.4"/>
    <line x1="145" y1="290" x2="415" y2="290" stroke="#C49A6C" stroke-width="0.4"/>

    <!-- Dates -->
    <text x="162" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">1</text>
    <text x="202" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">2</text>
    <text x="242" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">3</text>
    <text x="282" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">4</text>
    <text x="322" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">5</text>
    <text x="362" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">6</text>
    <text x="402" y="158" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">7</text>
    <text x="162" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">8</text>
    <text x="202" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">9</text>
    <text x="242" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">10</text>
    <text x="282" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">11</text>
    <text x="322" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">12</text>
    <text x="362" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">13</text>
    <text x="402" y="198" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">14</text>
    <text x="162" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">15</text>
    <g data-clickable="true" data-target="scene1sub" role="button" aria-label="Click the circled date" data-testid="step-1-hotspot">
      <circle cx="202" cy="233" r="16" fill="#F0A868" opacity="0.35"/>
      <text x="202" y="238" text-anchor="middle" font-family="Georgia" font-size="14" fill="#E8622A" font-weight="bold">16</text>
      <rect x="186" y="220" width="32" height="26" class="clickable-hint" rx="3"/>
    </g>
    <text x="242" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">17</text>
    <text x="282" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">18</text>
    <text x="322" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">19</text>
    <text x="362" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">20</text>
    <text x="402" y="238" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">21</text>
    <text x="162" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">22</text>
    <text x="202" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">23</text>
    <text x="242" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">24</text>
    <text x="282" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">25</text>
    <text x="322" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">26</text>
    <text x="362" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">27</text>
    <text x="402" y="278" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">28</text>
    <text x="162" y="318" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">29</text>
    <text x="202" y="318" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">30</text>
    <text x="242" y="318" text-anchor="middle" font-family="Georgia" font-size="13" fill="#7B4019">31</text>

    <!-- Megaphone -->
    <polygon points="78,310 78,360 120,375 120,295" fill="#F0A868" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="120" y="325" width="18" height="18" fill="#C49A6C" stroke="#7B4019" stroke-width="1" rx="2"/>
    <path d="M72,325 Q60,335 72,345" fill="none" stroke="#C49A6C" stroke-width="1"/>
    <path d="M64,318 Q48,335 64,352" fill="none" stroke="#C49A6C" stroke-width="0.8"/>

    <!-- Floor -->
    <line x1="40" y1="392" x2="520" y2="392" stroke="#C49A6C" stroke-width="1.2"/>
    <rect x="60" y="380" width="440" height="12" fill="#C49A6C" opacity="0.3"/>
  `;
}

function getScene1Sub() {
  return `
    <!-- GHOST SHAPES for reveal -->
    <circle cx="460" cy="80" r="90" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.08"/>
    <circle cx="80" cy="380" r="70" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.07"/>
    <circle cx="280" cy="220" r="180" fill="none" stroke="#7B4019" stroke-width="1.5" opacity="0.05"/>
    <text x="380" y="420" font-family="Georgia" font-size="120" fill="#E8622A" opacity="0.04">EC</text>

    <!-- Centered gazette document -->
    <rect x="115" y="30" width="330" height="380" fill="#FFF8EC" stroke="#7B4019" stroke-width="1.5" rx="4"/>
    <!-- Inner border -->
    <rect x="125" y="40" width="310" height="360" fill="none" stroke="#C49A6C" stroke-width="0.8" stroke-dasharray="6 3" rx="3"/>

    <!-- EC Seal -->
    <circle cx="280" cy="85" r="28" fill="none" stroke="#7B4019" stroke-width="1.5"/>
    <circle cx="280" cy="85" r="20" fill="none" stroke="#7B4019" stroke-width="0.8"/>
    <text x="280" y="82" text-anchor="middle" font-family="Georgia" font-size="8" fill="#7B4019">ELECTION</text>
    <text x="280" y="93" text-anchor="middle" font-family="Georgia" font-size="8" fill="#7B4019">COMMISSION</text>

    <line x1="150" y1="122" x2="410" y2="122" stroke="#C49A6C" stroke-width="1"/>

    <!-- Title -->
    <text x="280" y="155" text-anchor="middle" font-family="Georgia" font-size="16" fill="#7B4019" font-weight="bold">ELECTION DATE</text>
    <text x="280" y="178" text-anchor="middle" font-family="Georgia" font-size="16" fill="#7B4019" font-weight="bold">DECLARED</text>

    <!-- Date in orange pill -->
    <rect x="195" y="198" width="170" height="38" fill="#E8622A" rx="19"/>
    <text x="280" y="222" text-anchor="middle" font-family="Georgia" font-size="15" fill="#FFF5C8" font-weight="bold">16 MARCH 2026</text>

    <!-- Divider -->
    <line x1="180" y1="255" x2="380" y2="255" stroke="#C49A6C" stroke-width="0.8"/>

    <!-- Model Code box -->
    <rect x="170" y="272" width="220" height="50" fill="none" stroke="#E8622A" stroke-width="2" rx="5"/>
    <text x="280" y="293" text-anchor="middle" font-family="Georgia" font-size="13" fill="#A06030">Model Code of Conduct</text>
    <g class="stamp-text">
      <text x="280" y="314" text-anchor="middle" font-family="Georgia" font-size="16" fill="#E8622A" font-weight="bold">ACTIVE</text>
    </g>

    <!-- Signature -->
    <line x1="220" y1="360" x2="340" y2="360" stroke="#7B4019" stroke-width="0.8"/>
    <text x="280" y="375" text-anchor="middle" font-family="system-ui" font-size="9" fill="#A06030">Chief Election Commissioner</text>
  `;
}

// ═══ STEP 2: Nominations ═══
function getScene2Main() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-20" y="10" width="200" height="260" fill="none" stroke="#7B4019" stroke-width="2" opacity="0.07" transform="rotate(-5,80,140)"/>
    <circle cx="500" cy="100" r="80" fill="none" stroke="#E8622A" stroke-width="2.5" opacity="0.08"/>
    <text x="350" y="420" font-family="Georgia" font-size="140" fill="#7B4019" opacity="0.04">§</text>
    <rect x="420" y="280" width="120" height="150" fill="#E8622A" opacity="0.06" rx="3"/>

    <!-- Wall -->
    <rect x="40" y="20" width="480" height="220" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <line x1="40" y1="240" x2="520" y2="240" stroke="#C49A6C" stroke-width="1"/>

    <!-- Desk -->
    <rect x="60" y="240" width="440" height="14" fill="#7B4019"/>
    <rect x="70" y="195" width="420" height="50" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="80" y="254" width="14" height="70" fill="#7B4019"/>
    <rect x="466" y="254" width="14" height="70" fill="#7B4019"/>

    <!-- Chair left -->
    <rect x="110" y="336" width="55" height="6" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <rect x="106" y="310" width="62" height="26" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="2"/>
    <rect x="110" y="342" width="6" height="35" fill="#7B4019"/>
    <rect x="159" y="342" width="6" height="35" fill="#7B4019"/>

    <!-- Chair right -->
    <rect x="390" y="336" width="55" height="6" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <rect x="386" y="310" width="62" height="26" fill="#F0A868" stroke="#7B4019" stroke-width="1" rx="2"/>
    <rect x="390" y="342" width="6" height="35" fill="#7B4019"/>
    <rect x="439" y="342" width="6" height="35" fill="#7B4019"/>

    <!-- Form stack - clickable -->
    <g data-clickable="true" data-target="scene2sub" role="button" aria-label="Click the form stack" data-testid="step-2-hotspot">
      <rect x="210" y="198" width="100" height="44" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <rect x="214" y="194" width="100" height="44" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <rect x="218" y="190" width="100" height="44" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <line x1="228" y1="204" x2="306" y2="204" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="228" y1="214" x2="298" y2="214" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="228" y1="224" x2="302" y2="224" stroke="#C49A6C" stroke-width="0.8"/>
      <rect x="205" y="185" width="120" height="60" class="clickable-hint" rx="3"/>
    </g>

    <!-- Stamp -->
    <circle cx="400" cy="215" r="20" fill="#E8622A" opacity="0.2"/>
    <circle cx="400" cy="215" r="20" fill="none" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="393" y="218" width="14" height="26" fill="#7B4019" rx="2"/>

    <!-- Hand silhouette -->
    <path d="M240,178 C240,165 252,158 258,162 L264,170 C270,164 278,167 276,176" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>

    <!-- Floor -->
    <line x1="30" y1="390" x2="530" y2="390" stroke="#C49A6C" stroke-width="1"/>
    <rect x="40" y="378" width="480" height="12" fill="#C49A6C" opacity="0.2"/>
  `;
}

function getScene2Sub() {
  return `
    <!-- GHOST SHAPES -->
    <rect x="-10" y="50" width="180" height="220" fill="#7B4019" opacity="0.05" rx="4" transform="rotate(8,80,160)"/>
    <circle cx="490" cy="350" r="80" fill="none" stroke="#E8622A" stroke-width="2" opacity="0.08"/>
    <text x="400" y="120" font-family="Georgia" font-size="100" fill="#E8622A" opacity="0.05">✓</text>

    <!-- Form document -->
    <rect x="115" y="30" width="330" height="380" fill="#FFF8EC" stroke="#7B4019" stroke-width="1.5" rx="4"/>
    <text x="280" y="65" text-anchor="middle" font-family="Georgia" font-size="15" fill="#7B4019" font-weight="bold">NOMINATION FORM</text>
    <line x1="145" y1="75" x2="415" y2="75" stroke="#C49A6C" stroke-width="1"/>

    <!-- Fields -->
    <text x="145" y="105" font-family="Georgia" font-size="13" fill="#A06030">Candidate Name</text>
    <rect x="145" y="112" width="270" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <text x="155" y="132" font-family="Georgia" font-size="14" fill="#7B4019">Shri Ramesh Kumar</text>

    <text x="145" y="162" font-family="Georgia" font-size="13" fill="#A06030">Party Symbol</text>
    <rect x="145" y="169" width="270" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <polygon points="160,178 168,192 152,192" fill="#E8622A" stroke="#7B4019" stroke-width="0.8"/>
    <text x="180" y="189" font-family="Georgia" font-size="14" fill="#7B4019">Triangle Party</text>

    <text x="145" y="220" font-family="Georgia" font-size="13" fill="#A06030">Security Deposit</text>
    <rect x="145" y="227" width="270" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <text x="155" y="247" font-family="Georgia" font-size="14" fill="#7B4019">₹ 25,000</text>

    <text x="145" y="278" font-family="Georgia" font-size="13" fill="#A06030">Constituency</text>
    <rect x="145" y="285" width="270" height="30" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1" rx="2"/>
    <text x="155" y="305" font-family="Georgia" font-size="14" fill="#7B4019">Central District — 42</text>

    <!-- ACCEPTED stamp -->
    <g class="stamp-text">
      <rect x="295" y="345" width="120" height="35" fill="none" stroke="#E8622A" stroke-width="2.5" rx="4" transform="rotate(-8,355,362)"/>
      <text x="355" y="368" text-anchor="middle" font-family="Georgia" font-size="16" fill="#E8622A" font-weight="bold" transform="rotate(-8,355,368)">ACCEPTED</text>
    </g>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene1 = { main: getScene1Main, sub: getScene1Sub };
window.SceneData.scene2 = { main: getScene2Main, sub: getScene2Sub };
