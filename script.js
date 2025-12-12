// --- CONFIGURATION ---
const FactionDetails = {
    Red: { color: '#f44336', title: 'RED TEAM | OFFENSIVE SECURITY', desc: "⚔️ **OFFENSE:** You specialize in exploitation, adversary simulation, and bypassing controls. You are the digital attacker." },
    Blue: { color: '#2196f3', title: 'BLUE TEAM | DEFENSIVE SECURITY', desc: "🎯 **DEFENSE:** You specialize in monitoring, incident response, threat hunting, and forensics. You are the digital protector." },
    GRC: { color: '#4caf50', title: 'GRC TEAM | RISK & COMPLIANCE', desc: "🛡️ **STRATEGY:** You specialize in policy management, risk assessment, audits, and security strategy. You are the digital governance expert." },
    Purple: { color: '#9c27b0', title: 'PURPLE TEAM | HYBRID STRATEGIST', desc: "💡 **HYBRID:** You possess a balanced skill set across offensive and defensive disciplines, ideal for security architecture and leadership." },
    Neutral: { color: '#ff9800', title: 'NEUTRAL AGENT | GENERALIST', desc: "🔍 **GENERALIST:** Your core alignment is still undefined. Explore all domains to find your specialization." }
};


// --- GAME DATA: Focused, Shortened Scenarios (All levels clarified) ---
const gameData = {
    Trainee: [
        // 1. GRC: Risk Assess
        { type: "GRC", activityType: "risk-assess", maxScore: 1, unit: "Risk Level", title: "GRC Challenge (1/5): BYOD Policy Risk", description: "A new (Bring Your Own Device (BYOD)) policy is implemented (employees use personal devices for work). Rate the (Compliance Risk) (1 to 5) 1 is lowest 5 is the most Critical.", correctValue: 4, },
        // 2. BLUE: Code Match 
        { type: "Blue", activityType: "code-match", maxScore: 1, selectedOption: null, title: "BLUE Challenge (2/5): Phishing Detection", description: "Suspicious link: 'update.app-security.info' from 'no-reply@app-security.co'. Identify the (Threat Vector (Phishing)). [Hint]: Phishing is an attack to steal data using deceptive messages.", snippet: "Sender: no-reply@app-security.co", options: [{ text: "Genuine Password Reset", isCorrect: false, score: 0 }, { text: "Phishing/Social Engineering", isCorrect: true, score: 1 }, { text: "Denial of Service (DoS)", isCorrect: false, score: 0 }, ], },
        // 3. RED: Code Fix (IDOR) - CORRECTED
        { type: "Red", activityType: "code-fix", maxScore: 1, selectedLine: null, title: "RED Challenge (3/5): Insecure Direct Object Reference (IDOR)", description: "A Python endpoint retrieves user data. Click the line with the (IDOR vulnerability). [Hint]: IDOR allows access to restricted resources by changing a URL or API parameter.",
            snippet: [
                "1  def get_user(request, user_id):",
                "2  # Request requires authentication",
                "3  # Validate user privileges",
                "4  user = db.query('SELECT * FROM users WHERE id = ' + user_id)",
                "5  return user.data"
            ],
            correctLine: 3, // Index 3 is Line 4
        },
        // 4. GRC: Code Match
        { type: "GRC", activityType: "code-match", maxScore: 1, selectedOption: null, title: "GRC Challenge (4/5): Security Control Classification", description: "(Multi-Factor Authentication (MFA)) is implemented (requires two or more verification methods). CLASSIFY CONTROL TYPE: [Hint]: A Preventive Control stops a risk from happening, a Detective Control spots it after it happens.", snippet: "Control Action: MFA prevents unauthorized access.", options: [{ text: "Detective Control", isCorrect: false, score: 0 }, { text: "Preventive Control", isCorrect: true, score: 1 }, { text: "Corrective Control", isCorrect: false, score: 0 }, ], },
        // 5. BLUE: Order Triage
        { type: "Blue", activityType: "order-triage", maxScore: 1, selectedOrder: [], title: "BLUE Challenge (5/5): Incident Response Order", description: "Server intrusion alert received. CLICK THE STEPS BELOW IN THE CORRECT ORDER for initial (Incident Response (IR)). [Hint]: IR is the process of handling a security breach, starting with identifying the problem.", items: ["Eradication (Remove Threat)", "Containment (Isolate Host)", "Detection (Analyze Alert)", "Recovery (Restore System)"], correctOrder: ["Detection (Analyze Alert)", "Containment (Isolate Host)", "Eradication (Remove Threat)", "Recovery (Restore System)"], },
    ],
    Specialist: [
        // 1. RED: Code Match
        { type: "Red", activityType: "code-match", maxScore: 2, selectedOption: null, title: "RED Challenge (1/5): Active Directory Reconnaissance", description: "Low-privilege access achieved. What is the Best tool for (Active Directory Mapping and Analysis)? [Hint]: Active Directory is a Microsoft service that manages user access and permissions on a network. Reconnaissance is the initial phase of gathering information about the target.", snippet: "Goal: Find high-value targets in AD.", options: [{ text: "BloodHound (AD Mapping)", isCorrect: true, score: 2 }, { text: "Mimikatz (Credential Dumping)", isCorrect: false, score: 0 }, { text: "Wireshark (Local Traffic Capture)", isCorrect: false, score: 0 }, ], },
        // 2. GRC: Risk Assess
        { type: "GRC", activityType: "risk-assess", maxScore: 2, unit: "Impact Level", title: "GRC Challenge (2/5): PII Breach Severity", description: "An unpatched database holds all customer PII (GDPR regulation). Rate the (Confidentiality Impact) (1-5). [Hint]: PII (Personally Identifiable Information) is any data that can identify a specific individual. GDPR is a strict EU regulation governing data protection and privacy.", correctValue: 5, },
        // 3. BLUE: Code Fix (XSS) - CORRECTED
        { type: "Blue", activityType: "code-fix", maxScore: 2, selectedLine: null, title: "BLUE Challenge (3/5): Cross-Site Scripting (XSS) Flaw", description: "Click the line where unsanitized user input is introduced to the HTML output, creating an (XSS) flaw. [Hint]: XSS is a vulnerability that injects malicious code into a website, affecting other users who view that page.",
            snippet: [
                "1  user_input = request.args.get('comment')",
                "2  # Process input for rendering",
                "3  html_output = '<div>' + user_input + '</div>'",
                "4  response.write(html_output)",
                "5  # Build HTML response"
            ],
            correctLine: 2, // Line 3
        },
        // 4. RED: Order Triage
        { type: "Red", activityType: "order-triage", maxScore: 2, selectedOrder: [], title: "RED Challenge (4/5): SQL Injection Exploit Chain", description: "CLICK THE STEPS BELOW IN THE CORRECT ORDER, To achieve Authentication Bypass via (SQL Injection). [Hint]: SQL Injection is an attack that involves inserting malicious SQL code into a query to manipulate a database.", items: ["Identify Injection Point", "Extract Sensitive Data", "Craft Malicious Payload", "Bypass Authentication"], correctOrder: ["Identify Injection Point", "Craft Malicious Payload", "Bypass Authentication", "Extract Sensitive Data"], },
        // 5. GRC: Code Match
        { type: "GRC", activityType: "code-match", maxScore: 2, selectedOption: null, title: "GRC Challenge (5/5): ISMS Standard", description: "The organization requires a global standard for setting up an Information Security Management System (ISMS). [Hint]: ISMS (Information Security Management System) is a set of policies and procedures for managing information security. ISO 27001 is the international standard for establishing an ISMS.", snippet: "Requirement: Organizational Policy and Controls.", options: [{ text: "MITRE ATT&CK", isCorrect: false, score: 0 }, { text: "ISO 27001", isCorrect: true, score: 2 }, { text: "CVSS", isCorrect: false, score: 0 }, ], },
    ],
    Elite: [
        // 1. BLUE: Code Match
        { type: "Blue", activityType: "code-match", maxScore: 3, selectedOption: null, title: "BLUE Challenge (1/5): Command and Control (C2) Identification", description: "Small, high-frequency bursts on port 53 (DNS) to an external IP. Identify the (Threat Type): [Hint]: C2 (Command and Control) is a secret communication channel used by an attacker to remotely control malware. DNS Tunneling hides this traffic inside legitimate DNS queries.", snippet: "Traffic Pattern: Port 53, Encrypted, Low Volume.", options: [{ text: "DNS Tunneling (C2)", isCorrect: true, score: 3 }, { text: "Routine DHCP Renewal", isCorrect: false, score: 0 }, { text: "Standard Web Browsing", isCorrect: false, score: 0 }, ], },
        // 2. RED: Risk Assess
        { type: "Red", activityType: "risk-assess", maxScore: 3, unit: "Likelihood Rating", title: "RED Challenge (2/5): Zero-Day Viability", description: "You have a Critical (5/5) (zero-day). Rate its (Likelihood of Exploitation) (1-5) against a fortified target. [Hint]: A Zero-Day is a vulnerability unknown to the software vendor, meaning there is no patch available yet.", correctValue: 4, },
        // 3. GRC: Order Triage
        { type: "GRC", activityType: "order-triage", maxScore: 3, selectedOrder: [], title: "GRC Challenge (3/5): Zero Trust Architecture Priority", description: "CLICK THE STEPS BELOW IN THE CORRECT ORDER for implementing a (Zero Trust Architecture (ZTA)). [Hint]: ZTA is a security concept requiring strict verification for every person and device trying to access network resources. Micro-Segmentation is breaking up security perimeters into small zones.", items: ["Micro-Segmentation", "Identity Management (IAM)", "Continuous Risk Scoring", "Define Protection Surface"], correctOrder: ["Define Protection Surface", "Identity Management (IAM)", "Micro-Segmentation", "Continuous Risk Scoring"], },
        // 4. RED: Code Fix (Buffer Overflow) - CORRECTED
        { type: "Red", activityType: "code-fix", maxScore: 3, selectedLine: null, title: "RED Challenge (4/5): Buffer Overflow Exploit", description: "In this C function, click the line that causes the primary (Buffer Overflow) vulnerability. [Hint]: A Buffer Overflow occurs when a program writes more data to a temporary memory block (buffer) than it can hold, corrupting adjacent data.",
            snippet: [
                "1  void process_input(char *data) {",
                "2  char buffer[128];",
                "3  // Copy data into buffer",
                "4  strcpy(buffer, data);",
                "5  // Function ends"
            ],
            correctLine: 3, // Line 4
        },
        // 5. BLUE: Order Triage
        { type: "Blue", activityType: "order-triage", maxScore: 3, selectedOrder: [], title: "BLUE Challenge (5/5): Remediation Priority", description: "A host was exploited. CLICK THE STEPS BELOW IN THE CORRECT ORDER for immediate remediation. [Hint]: A Forensic Image is a bit-for-bit copy of a storage device for investigation. SIEM (Security Information and Event Management) aggregates and analyzes security logs.", items: ["Reimage the Host", "Apply Patches", "Collect Forensic Image", "Review SIEM/Firewall Logs"], correctOrder: ["Collect Forensic Image", "Reimage the Host", "Apply Patches", "Review SIEM/Firewall Logs"], },
    ],
};

// --- GAME STATE & DOM ELEMENTS ---
let currentLevel = 'Trainee';
let currentActivityIndex = 0;
let score = { Red: 0, Blue: 0, GRC: 0 };
let totalActivities = 0;

// Get all required DOM elements
const preStartScreen = document.getElementById('pre-start-screen'); 
const startScreen = document.getElementById('start-screen');
const levelSelectScreen = document.getElementById('level-select-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const activityContainer = document.getElementById('activity-container');
const optionsContainer = document.getElementById('options-container');
const interactiveElementsContainer = document.getElementById('interactive-elements-container');
const nextButton = document.getElementById('next-button');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressLabel = document.getElementById('progress-label'); 
const assignedTeamTitle = document.getElementById('assigned-team-title');
const teamDescription = document.getElementById('team-description');
const headerStatus = document.getElementById('header-status');


// --- FUNCTIONS: GAME FLOW LOGIC ---

function startFlow() {
    startScreen.classList.remove('active');
    levelSelectScreen.classList.add('active');
}

function startMission(level) {
    currentLevel = level;
    currentActivityIndex = 0;
    score = { Red: 0, Blue: 0, GRC: 0 };
    totalActivities = gameData[currentLevel].length;
    
    levelSelectScreen.classList.remove('active');
    gameScreen.classList.add('active');
    headerStatus.textContent = `STATUS: PROTOCOL ${level.toUpperCase()} ACTIVE`;

    loadActivity(currentActivityIndex);
}

function loadActivity(index) {
    if (index >= totalActivities) {
        return showResults();
    }

    // Shuffle activities (optional, but good for replays)
    if (index === 0) {
        gameData[currentLevel].sort(() => Math.random() - 0.5);
    }

    const activity = gameData[currentLevel][index];
    nextButton.disabled = true;
    optionsContainer.innerHTML = '';
    interactiveElementsContainer.innerHTML = '';

    // Simplified activity presentation
    activityContainer.innerHTML = `
        <h3>[CHALLENGE ${index + 1}/${totalActivities}] - ${activity.type.toUpperCase()} DOMAIN</h3>
        <p>${activity.description}</p>
    `;

    switch (activity.activityType) {
        case 'code-match':
            renderCodeMatchActivity(activity);
            break;
        case 'order-triage':
            renderOrderTriageActivity(activity);
            break;
        case 'risk-assess':
            renderRiskAssessActivity(activity);
            break;
        case 'code-fix':
            renderCodeFixActivity(activity);
            break;
    }

    const progressPercentage = ((index) / totalActivities) * 100;
    progressBarFill.style.width = `${progressPercentage}%`;
    progressLabel.textContent = `TASK ${index + 1} / ${totalActivities}`;
}


// --- ACTIVITY RENDERERS ---

function renderCodeMatchActivity(activity) {
    interactiveElementsContainer.innerHTML = `<pre class="code-snippet">${activity.snippet}</pre>`;
    activity.options.forEach((option, i) => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('option-card');
        optionCard.setAttribute('data-index', i);
        optionCard.textContent = option.text;
        optionCard.onclick = () => selectCodeMatchOption(activity, optionCard, i);
        optionsContainer.appendChild(optionCard);
    });
}

function selectCodeMatchOption(activity, card, index) {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    activity.selectedOption = activity.options[index];
    nextButton.disabled = false;
}

function renderCodeFixActivity(activity) {
    activity.selectedLine = null;
    const codeWrapper = document.createElement('div');
    codeWrapper.classList.add('code-fix-lines');

    activity.snippet.forEach((lineText, index) => {
        const trimmedLine = lineText.trim();
        // Check for comment markers: # (Python/Bash) or // (JS/C/C++)
        const isComment = trimmedLine.startsWith('#') || trimmedLine.startsWith('//');

        const lineDiv = document.createElement('div');
        lineDiv.classList.add('code-line');
        lineDiv.setAttribute('data-line-index', index);
        lineDiv.innerHTML = `
            <span class="line-number">${index + 1}</span>
            <span class="line-content">${lineText}</span>
        `;
        
        if (isComment) {
            // Comment lines: apply visual style, ensure no click handler
            lineDiv.classList.add('comment-line'); 
            lineDiv.onclick = null; 
        } else {
            // Executable lines: apply click handler
            lineDiv.onclick = () => selectCodeFixLine(activity, lineDiv, index);
        }
        
        codeWrapper.appendChild(lineDiv);
    });

    interactiveElementsContainer.appendChild(codeWrapper);
    nextButton.disabled = true; 
}

function selectCodeFixLine(activity, lineDiv, index) {
    document.querySelectorAll('.code-line').forEach(c => c.classList.remove('selected'));
    lineDiv.classList.add('selected');
    activity.selectedLine = index;
    nextButton.disabled = false;
}

// Helper function to update the visuals of all triage cards
function updateTriageCardVisuals(activity) {
    const allCards = document.querySelectorAll('.triage-step');
    
    // 1. Reset all cards and enable clicks
    allCards.forEach(card => {
        card.classList.remove('selected-order');
        card.querySelector('.triage-step-number').textContent = '?';
        card.style.cursor = 'pointer'; // Re-enable hover/cursor hint
    });

    // 2. Re-apply visuals for currently selected items
    activity.selectedOrder.forEach((item, index) => {
        const card = document.querySelector(`.triage-step[data-item='${item}']`);
        if (card) {
            card.classList.add('selected-order');
            card.querySelector('.triage-step-number').textContent = index + 1;
        }
    });

    // 3. Check for completion
    if (activity.selectedOrder.length === activity.items.length) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}


function renderOrderTriageActivity(activity) {
    activity.selectedOrder = [];
    const stepsDiv = document.createElement('div');
    stepsDiv.id = 'triage-steps-list';
    
    // Shuffle items for the selection list
    const shuffledItems = [...activity.items].sort(() => Math.random() - 0.5); 

    shuffledItems.forEach((item) => {
        const stepCard = document.createElement('div');
        stepCard.classList.add('triage-step');
        stepCard.setAttribute('data-item', item);
        stepCard.innerHTML = `<span class="triage-step-number">?</span> ${item}`;
        stepCard.onclick = () => selectTriageStep(activity, stepCard, item); 
        stepsDiv.appendChild(stepCard);
    });

    interactiveElementsContainer.appendChild(stepsDiv);
}

function selectTriageStep(activity, card, item) {
    const itemIndex = activity.selectedOrder.indexOf(item);

    if (itemIndex > -1) {
        // --- DESELECT (UNDO) LOGIC ---
        activity.selectedOrder.splice(itemIndex, 1);
    } else {
        // --- SELECT LOGIC ---
        // Only allow selection if the item is not already selected
        activity.selectedOrder.push(item);
    }
    
    // Update all card visuals and check the next button state
    updateTriageCardVisuals(activity);
}


function renderRiskAssessActivity(activity) {
    const sliderHTML = `
        <label class="risk-slider-label" style="color: var(--color-warn-orange); margin-bottom: 5px;">RATE ${activity.unit} (1 to 5):</label>
        <div id="risk-current-rating" class="risk-rating-output" style="color: var(--color-blue);">1 / 5</div>
        <input type="range" min="1" max="5" value="1" id="risk-slider" oninput="updateRiskSliderValue(this.value)">
        <div style="display: flex; justify-content: space-between; font-size: 0.8em; color: var(--color-text-subtle); margin-top: 5px;">
            <span>1 (LOW)</span>
            <span>5 (CRITICAL)</span>
        </div>
    `;
    interactiveElementsContainer.innerHTML = sliderHTML;
    activity.currentValue = 1; 
    nextButton.disabled = false; 
    updateRiskSliderValue(1); 
}

function updateRiskSliderValue(value) {
    const activity = gameData[currentLevel][currentActivityIndex];
    activity.currentValue = parseInt(value);
    
    const output = document.getElementById('risk-current-rating');
    output.textContent = `${value} / 5`;
    
    let color;
    if (value <= 2) {
        color = 'var(--color-blue)'; 
    } else if (value <= 4) {
        color = 'var(--color-warn-orange)';
    } else {
        color = 'var(--color-red)';
    }
    output.style.color = color;
}


// --- SCORE CALCULATION & TRANSITION ---

function nextActivity() {
    const activity = gameData[currentLevel][currentActivityIndex];
    let pointsAwarded = 0;

    switch (activity.activityType) {
        case 'code-match':
            if (activity.selectedOption && activity.selectedOption.isCorrect) {
                pointsAwarded = activity.selectedOption.score;
            }
            break;
            
        case 'order-triage':
            const isCorrectOrder = activity.selectedOrder.every((val, index) => val === activity.correctOrder[index]);
            if (isCorrectOrder) {
                pointsAwarded = activity.maxScore;
            }
            break;
            
        case 'risk-assess':
            const difference = Math.abs(activity.currentValue - activity.correctValue);
            if (difference === 0) {
                pointsAwarded = activity.maxScore; 
            } else if (difference === 1) {
                pointsAwarded = activity.maxScore * 0.5; 
            }
            break;

        case 'code-fix':
            if (activity.selectedLine === activity.correctLine) {
                pointsAwarded = activity.maxScore;
            }
            break;
    }
    
    score[activity.type] += pointsAwarded;

    currentActivityIndex++;
    loadActivity(currentActivityIndex);
}

function showResults() {
    gameScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    headerStatus.textContent = 'STATUS: ALIGNMENT LOCKED';
    
    progressBarFill.style.width = '100%';
    progressLabel.textContent = `COMPLETED`;

    // 1. Determine Faction
    let finalTeamKey = 'Neutral';
    
    const teamScores = Object.entries(score).map(([team, value]) => ({ team, value }));
    teamScores.sort((a, b) => b.value - a.value);

    const maxScore = teamScores[0].value;
    const dominantTeams = teamScores.filter(t => t.value === maxScore);

    if (maxScore === 0) {
        finalTeamKey = 'Neutral';
    } else if (dominantTeams.length > 1) {
        finalTeamKey = 'Purple'; // Tied scores are Purple Team (Hybrid)
    } else {
        finalTeamKey = dominantTeams[0].team; // Clear winner
    }
    
    const finalTeam = FactionDetails[finalTeamKey];

    // 2. Update Results UI
    assignedTeamTitle.textContent = `<< ${finalTeam.title} >>`;
    assignedTeamTitle.style.color = finalTeam.color;
    teamDescription.innerHTML = finalTeam.desc;

    // 3. Inject Score Breakdown
    const scoreSummaryDiv = document.getElementById('score-summary');
    scoreSummaryDiv.innerHTML = `
        ${Object.keys(FactionDetails).filter(k => k !== 'Purple' && k !== 'Neutral').map(key => {
            // maxScore is guaranteed to be a number now, fixing the NaN issue
            const max = gameData[currentLevel].filter(a => a.type === key).reduce((sum, a) => sum + a.maxScore, 0);
            return `
            <div class="score-line" style="color: ${FactionDetails[key].color};">
                <span>[${key} TEAM] SCORE:</span>
                <span class="score-value">${score[key]} / ${max}</span>
            </div>
            `;
        }).join('')}
    `;
}

/**
 * Performs the final redirection to the roadmap file.
 */
function claimPrize() {
    // This is the correct, user-provided filename
    window.location.href = 'Cybersecurity Complete Roadmap 2bd9cba5f57f803cb678f063fe08e5a4.html';
}

// Initialize the screen: Start directly on the start screen
document.addEventListener('DOMContentLoaded', () => {
    startScreen.classList.add('active');
    headerStatus.textContent = 'STATUS: DEPLOYMENT READY'; 
});