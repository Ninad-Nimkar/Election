// Scene 1: Election Announcement
function getScene1Main() {
  return `
    <!-- Wall -->
    <rect x="60" y="40" width="300" height="260" fill="#FAEBD7" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Calendar frame -->
    <rect x="130" y="70" width="160" height="140" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Calendar header -->
    <rect x="130" y="70" width="160" height="28" fill="#E8622A"/>
    <text x="210" y="90" text-anchor="middle" font-family="Georgia" font-size="13" fill="#FFF5C8">MARCH 2026</text>
    <!-- Grid lines -->
    <line x1="153" y1="98" x2="153" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="176" y1="98" x2="176" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="199" y1="98" x2="199" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="222" y1="98" x2="222" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="245" y1="98" x2="245" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="268" y1="98" x2="268" y2="210" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="130" y1="126" x2="290" y2="126" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="130" y1="154" x2="290" y2="154" stroke="#C49A6C" stroke-width="0.5"/>
    <line x1="130" y1="182" x2="290" y2="182" stroke="#C49A6C" stroke-width="0.5"/>
    <!-- Date numbers -->
    <text x="165" y="118" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">1</text>
    <text x="188" y="118" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">2</text>
    <text x="211" y="118" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">3</text>
    <text x="234" y="118" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">4</text>
    <text x="257" y="118" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">5</text>
    <text x="142" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">7</text>
    <text x="165" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">8</text>
    <text x="188" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">9</text>
    <text x="211" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">10</text>
    <text x="234" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">11</text>
    <text x="257" y="146" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">12</text>
    <text x="142" y="174" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">14</text>
    <text x="165" y="174" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">15</text>
    <text x="211" y="174" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">17</text>
    <!-- Circled date 16 - clickable -->
    <g data-clickable="true" data-target="scene1sub" role="button" aria-label="Click the circled date">
      <circle cx="188" cy="170" r="14" fill="#F0A868" opacity="0.4"/>
      <text x="188" y="174" text-anchor="middle" font-family="system-ui" font-size="11" fill="#E8622A" font-weight="bold">16</text>
      <circle cx="188" cy="170" r="14" class="clickable-hint"/>
    </g>
    <text x="234" y="174" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">18</text>
    <text x="257" y="174" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">19</text>
    <text x="142" y="202" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">21</text>
    <text x="165" y="202" text-anchor="middle" font-family="system-ui" font-size="9" fill="#7B4019">22</text>
    <!-- Megaphone -->
    <polygon points="80,240 80,270 110,280 110,230" fill="#F0A868" stroke="#7B4019" stroke-width="1.2"/>
    <rect x="110" y="245" width="20" height="15" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <!-- Floor line -->
    <line x1="60" y1="300" x2="360" y2="300" stroke="#C49A6C" stroke-width="1"/>
  `;
}

function getScene1Sub() {
  return `
    <!-- Official gazette document -->
    <rect x="85" y="40" width="250" height="260" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <!-- EC Logo circle -->
    <circle cx="210" cy="80" r="22" fill="none" stroke="#7B4019" stroke-width="1.5"/>
    <text x="210" y="76" text-anchor="middle" font-family="Georgia" font-size="7" fill="#7B4019">ELECTION</text>
    <text x="210" y="87" text-anchor="middle" font-family="Georgia" font-size="7" fill="#7B4019">COMMISSION</text>
    <!-- Horizontal rule -->
    <line x1="110" y1="112" x2="310" y2="112" stroke="#C49A6C" stroke-width="1"/>
    <!-- Title -->
    <text x="210" y="140" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019">ELECTION DATE</text>
    <text x="210" y="160" text-anchor="middle" font-family="Georgia" font-size="14" fill="#7B4019">DECLARED</text>
    <!-- Date -->
    <rect x="145" y="175" width="130" height="30" fill="#FAEBD7" stroke="#7B4019" stroke-width="1"/>
    <text x="210" y="195" text-anchor="middle" font-family="Georgia" font-size="12" fill="#E8622A">16 MARCH 2026</text>
    <!-- Code of conduct -->
    <text x="210" y="232" text-anchor="middle" font-family="system-ui" font-size="10" fill="#A06030">Model Code of Conduct</text>
    <!-- ACTIVE stamp -->
    <g class="stamp-text">
      <rect x="155" y="245" width="110" height="28" fill="none" stroke="#E8622A" stroke-width="2" rx="3"/>
      <text x="210" y="264" text-anchor="middle" font-family="Georgia" font-size="14" fill="#E8622A" font-weight="bold">ACTIVE</text>
    </g>
    <!-- Decorative line -->
    <line x1="110" y1="285" x2="310" y2="285" stroke="#C49A6C" stroke-width="1"/>
  `;
}

// Scene 2: Nominations
function getScene2Main() {
  return `
    <!-- Desk -->
    <rect x="70" y="160" width="280" height="80" fill="#C49A6C" stroke="#7B4019" stroke-width="1.5"/>
    <rect x="70" y="240" width="280" height="10" fill="#7B4019"/>
    <!-- Desk legs -->
    <rect x="80" y="250" width="12" height="50" fill="#7B4019"/>
    <rect x="328" y="250" width="12" height="50" fill="#7B4019"/>
    <!-- Wall -->
    <rect x="40" y="20" width="340" height="140" fill="#FAEBD7"/>
    <line x1="40" y1="160" x2="380" y2="160" stroke="#C49A6C" stroke-width="1"/>
    <!-- Chair left -->
    <rect x="100" y="260" width="40" height="5" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <rect x="96" y="265" width="5" height="30" fill="#7B4019"/>
    <rect x="139" y="265" width="5" height="30" fill="#7B4019"/>
    <rect x="96" y="240" width="48" height="20" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <!-- Chair right -->
    <rect x="270" y="260" width="40" height="5" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <rect x="266" y="265" width="5" height="30" fill="#7B4019"/>
    <rect x="309" y="265" width="5" height="30" fill="#7B4019"/>
    <rect x="266" y="240" width="48" height="20" fill="#F0A868" stroke="#7B4019" stroke-width="1"/>
    <!-- Form stack - clickable -->
    <g data-clickable="true" data-target="scene2sub" role="button" aria-label="Click the form stack">
      <rect x="160" y="165" width="70" height="50" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <rect x="163" y="168" width="70" height="50" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <rect x="166" y="171" width="70" height="50" fill="#FFF5C8" stroke="#7B4019" stroke-width="1"/>
      <line x1="174" y1="182" x2="226" y2="182" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="174" y1="190" x2="220" y2="190" stroke="#C49A6C" stroke-width="0.8"/>
      <line x1="174" y1="198" x2="224" y2="198" stroke="#C49A6C" stroke-width="0.8"/>
      <rect x="155" y="160" width="90" height="70" class="clickable-hint" rx="3"/>
    </g>
    <!-- Stamp -->
    <circle cx="290" cy="185" r="16" fill="#E8622A" opacity="0.3"/>
    <circle cx="290" cy="185" r="16" fill="none" stroke="#7B4019" stroke-width="1"/>
    <rect x="284" y="185" width="12" height="20" fill="#7B4019"/>
    <!-- Hand silhouette -->
    <path d="M180,150 C180,140 190,135 195,138 L200,145 C205,140 212,142 210,150" fill="#C49A6C" stroke="#7B4019" stroke-width="1"/>
    <!-- Floor -->
    <line x1="40" y1="300" x2="380" y2="300" stroke="#C49A6C" stroke-width="1"/>
  `;
}

function getScene2Sub() {
  return `
    <!-- Single nomination form -->
    <rect x="85" y="30" width="250" height="280" fill="#FFF5C8" stroke="#7B4019" stroke-width="1.5"/>
    <!-- Form header -->
    <text x="210" y="58" text-anchor="middle" font-family="Georgia" font-size="12" fill="#7B4019">NOMINATION FORM</text>
    <line x1="110" y1="66" x2="310" y2="66" stroke="#C49A6C" stroke-width="1"/>
    <!-- Name field -->
    <text x="105" y="90" font-family="system-ui" font-size="9" fill="#A06030">Candidate Name</text>
    <rect x="105" y="95" width="210" height="22" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <text x="112" y="110" font-family="Georgia" font-size="10" fill="#7B4019">Shri Ramesh Kumar</text>
    <!-- Party field -->
    <text x="105" y="135" font-family="system-ui" font-size="9" fill="#A06030">Party Symbol</text>
    <rect x="105" y="140" width="210" height="22" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <!-- Simple geometric symbol -->
    <polygon points="118,146 125,156 111,156" fill="#E8622A" stroke="#7B4019" stroke-width="0.8"/>
    <text x="135" y="155" font-family="Georgia" font-size="10" fill="#7B4019">Triangle Party</text>
    <!-- Deposit field -->
    <text x="105" y="180" font-family="system-ui" font-size="9" fill="#A06030">Security Deposit</text>
    <rect x="105" y="185" width="210" height="22" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <text x="112" y="200" font-family="Georgia" font-size="10" fill="#7B4019">₹ 25,000</text>
    <!-- Constituency -->
    <text x="105" y="225" font-family="system-ui" font-size="9" fill="#A06030">Constituency</text>
    <rect x="105" y="230" width="210" height="22" fill="#FAEBD7" stroke="#C49A6C" stroke-width="1"/>
    <text x="112" y="245" font-family="Georgia" font-size="10" fill="#7B4019">Central District — 42</text>
    <!-- ACCEPTED stamp -->
    <g class="stamp-text">
      <rect x="230" y="268" width="90" height="26" fill="none" stroke="#E8622A" stroke-width="2.5" rx="3" transform="rotate(-8,275,281)"/>
      <text x="275" y="286" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E8622A" font-weight="bold" transform="rotate(-8,275,281)">ACCEPTED</text>
    </g>
  `;
}

window.SceneData = window.SceneData || {};
window.SceneData.scene1 = { main: getScene1Main, sub: getScene1Sub };
window.SceneData.scene2 = { main: getScene2Main, sub: getScene2Sub };
