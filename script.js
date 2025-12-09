// --- GAME DATA: Complex Scenarios and Scoring (5 Challenges per level) ---
// Note: This data structure ensures all required activity types and quantities are met.
const gameData = {
    Trainee: [
        // 1. GRC: Risk Assess (BYOD Policy)
        {
            type: "GRC", activityType: "risk-assess", maxScore: 1, unit: "Impact Rating",
            title: "GRC Challenge (1/5): BYOD Risk Rating",
            description: "A new company policy allows personal phones for work (BYOD). Rate the **Compliance Risk Impact** (1: Low to 5: Critical) of a major policy breach.",
            correctValue: 4, 
        },
        // 2. BLUE: Code Match (Phishing Identification)
        {
            type: "Blue", activityType: "code-match", selectedOption: null,
            title: "BLUE TEAM Challenge (2/5): Identify the Threat",
            description: "A user reports an email with a suspicious link: 'CLICK HERE TO UPDATE YOUR PASSWORD'. The sender is `no-reply@app-security.co`. What is the threat?",
            snippet: "Sender: no-reply@app-security.co | Link: update.app-security.info",
            options: [
                { text: "A genuine password reset (safe).", isCorrect: false, score: 0 },
                { text: "Phishing/Social Engineering attempt.", isCorrect: true, score: 1 }, // Correct (Blue)
                { text: "A Denial of Service (DoS) attack.", isCorrect: false, score: 0 },
            ],
        },
        // 3. RED: Code Match (SQL Injection Identification)
        {
            type: "Red", activityType: "code-match", selectedOption: null,
            title: "RED TEAM Challenge (3/5): Find the Weakness",
            description: "You see this insecure database query. Which input is the *most* classic attack vector here to bypass authentication?",
            snippet: "SELECT * FROM users WHERE username = 'USER_INPUT';",
            options: [
                { text: "Input: `admin' OR '1'='1`", isCorrect: true, score: 1 }, // SQL Injection (Red)
                { text: "Input: `<script>alert('XSS')</script>`", isCorrect: false, score: 0 },
                { text: "Input: `C:\\config.ini`", isCorrect: false, score: 0 },
            ],
        },
        // 4. GRC: Code Match (Control Type)
        {
            type: "GRC", activityType: "code-match", selectedOption: null,
            title: "GRC Challenge (4/5): Control Classification",
            description: "Which type of security control is **MFA (Multi-Factor Authentication)**?",
            snippet: "MFA blocks unauthorized users from accessing systems.",
            options: [
                { text: "Detective Control (Identifies an event)", isCorrect: false, score: 0 },
                { text: "Preventive Control (Stops an event from happening)", isCorrect: true, score: 1 }, // Correct (GRC)
                { text: "Corrective Control (Restores system post-event)", isCorrect: false, score: 0 },
            ],
        },
        // 5. BLUE: Order Triage (Incident Response)
        {
            type: "Blue", activityType: "order-triage", maxScore: 1, selectedOrder: [],
            title: "BLUE TEAM Challenge (5/5): Triage Sequence",
            description: "A server is reporting an intrusion. Click the steps in the correct **initial Incident Response** order.",
            items: ["Eradication (Removing the threat)", "Preparation (Testing tools)", "Containment (Isolating the host)", "Detection (Analyzing the alert)"],
            correctOrder: ["Detection (Analyzing the alert)", "Containment (Isolating the host)", "Eradication (Removing the threat)", "Preparation (Testing tools)"],
        },
    ],
    Specialist: [
        // 1. RED: Code Match (Lateral Movement Strategy)
        {
            type: "Red", activityType: "code-match", selectedOption: null,
            title: "RED TEAM Challenge (1/5): Lateral Movement Strategy",
            description: "You have low-privilege access. To find high-value targets in Active Directory, what is the best strategy?",
            snippet: "Goal: Domain Credential Theft. Available: Mimikatz, BloodHound.",
            options: [
                { text: "Start enumerating Active Directory (e.g., using BloodHound).", isCorrect: true, score: 2 }, // Correct (Red)
                { text: "Dump the local password hashes (SAM file).", isCorrect: false, score: 0 },
                { text: "Use Wireshark to capture local traffic.", isCorrect: false, score: 0 },
            ],
        },
        // 2. GRC: Risk Assess (High Value Asset Rating)
        {
            type: "GRC", activityType: "risk-assess", maxScore: 2, unit: "Impact Rating",
            title: "GRC Challenge (2/5): PII Breach Impact",
            description: "A server holds all customer PII (GDPR-scoped) and is unpatched. Rate the **Confidentiality Impact** (1: Low to 5: Critical) if this server is breached.",
            correctValue: 5, 
        },
        // 3. BLUE: Triage Order (Containment/Remediation)
        {
            type: "Blue", activityType: "order-triage", maxScore: 2, selectedOrder: [],
            title: "BLUE TEAM Challenge (3/5): Post-Breach Sequence",
            description: "The incident is contained. Click the correct sequence for the **next** steps in the recovery process.",
            items: ["System Hardening (Patching Gaps)", "Forensic Analysis (Collecting evidence)", "Return to Production (Reconnecting system)", "Lessons Learned (Writing the report)"],
            correctOrder: ["Forensic Analysis (Collecting evidence)", "System Hardening (Patching Gaps)", "Return to Production (Reconnecting system)", "Lessons Learned (Writing the report)"],
        },
        // 4. RED: Order Triage (Exploitation Steps)
        {
            type: "Red", activityType: "order-triage", maxScore: 2, selectedOrder: [],
            title: "RED TEAM Challenge (4/5): Exploit Chain",
            description: "Click the steps in the correct order to successfully exploit a web application with SQL Injection.",
            items: ["Identify the Injection Point", "Extract Sensitive Data", "Craft Malicious Payload (' OR '1'='1)", "Bypass Authentication"],
            correctOrder: ["Identify the Injection Point", "Craft Malicious Payload (' OR '1'='1)", "Bypass Authentication", "Extract Sensitive Data"],
        },
        // 5. GRC: Code Match (Framework Selection)
        {
            type: "GRC", activityType: "code-match", selectedOption: null,
            title: "GRC Challenge (5/5): Framework Selection",
            description: "Which framework is primarily used to set organizational policy, not just measure security maturity?",
            snippet: "Need a global standard for setting up an Information Security Management System (ISMS).",
            options: [
                { text: "MITRE ATT&CK (Knowledge Base of adversary tactics)", isCorrect: false, score: 0 },
                { text: "ISO 27001 (International standard for ISMS)", isCorrect: true, score: 2 }, // Correct (GRC)
                { text: "CVSS (Vulnerability Scoring System)", isCorrect: false, score: 0 },
            ],
        },
    ],
    Elite: [
        // 1. BLUE: Code Match (C2 Traffic Identification)
        {
            type: "Blue", activityType: "code-match", selectedOption: null,
            title: "BLUE TEAM Challenge (1/5): C2 Traffic Identification",
            description: "You observe small bursts of outbound data on port 53 (DNS) to a single external IP. This traffic pattern is a classic indicator of:",
            snippet: "Traffic Pattern: High Frequency, Low Volume, Port 53, Encrypted.",
            options: [
                { text: "DNS Tunneling for Command & Control (C2).", isCorrect: true, score: 3 }, // Correct (Blue)
                { text: "Routine DHCP Renewal.", isCorrect: false, score: 0 },
                { text: "Standard user web browsing.", isCorrect: false, score: 0 },
            ],
        },
        // 2. RED: Risk Assess (Zero-Day Viability)
        {
            type: "Red", activityType: "risk-assess", maxScore: 3, unit: "Likelihood Rating",
            title: "RED TEAM Challenge (2/5): Zero-Day Viability",
            description: "You have a **critical (5/5) severity** zero-day exploit. Rate its **Likelihood of Success** (1: Low to 5: Guaranteed) against a well-defended target.",
            correctValue: 4, 
        },
        // 3. GRC: Order Triage (Zero Trust Implementation)
        {
            type: "GRC", activityType: "order-triage", maxScore: 3, selectedOrder: [],
            title: "GRC Challenge (3/5): Zero Trust Implementation",
            description: "You are designing a Zero Trust Architecture. Click the steps in the correct **strategic priority** sequence.",
            items: ["Micro-Segmentation (Network policy)", "Identity and Access Management (Users/Devices)", "Risk Scoring (Continuous evaluation)", "Define Protection Surface (Data/Resources)"],
            correctOrder: ["Define Protection Surface (Data/Resources)", "Identity and Access Management (Users/Devices)", "Micro-Segmentation (Network policy)", "Risk Scoring (Continuous evaluation)"],
        },
        // 4. RED: Code Match (Buffer Overflow Concept)
        {
            type: "Red", activityType: "code-match", selectedOption: null,
            title: "RED TEAM Challenge (4/5): Exploit Development",
            description: "Which technique involves changing the return address on the stack to redirect program execution to attacker-controlled code?",
            snippet: "Function call: `strcpy(buffer, user_input)` (no boundary check).",
            options: [
                { text: "Cross-Site Scripting (XSS).", isCorrect: false, score: 0 },
                { text: "Return-Oriented Programming (ROP).", isCorrect: false, score: 0 },
                { text: "Stack-Based Buffer Overflow.", isCorrect: true, score: 3 }, // Correct (Red)
            ],
        },
        // 5. BLUE: Order Triage (Post-Exploit Remediation)
        {
            type: "Blue", activityType: "order-triage", maxScore: 3, selectedOrder: [],
            title: "BLUE TEAM Challenge (5/5): Remediation Sequence",
            description: "A machine was confirmed exploited. Click the steps in the correct **remediation** priority.",
            items: ["Reimage the Host (Clean slate)", "Apply Patches/Vulnerability Fixes", "Collect Forensic Image (Evidence)", "Review SIEM/Firewall Logs (Detection Gap Analysis)"],
            correctOrder: ["Collect Forensic Image (Evidence)", "Reimage the Host (Clean slate)", "Apply Patches/Vulnerability Fixes", "Review SIEM/Firewall Logs (Detection Gap Analysis)"],
        },
    ],
};

// --- GAME STATE & DOM ELEMENTS ---
let currentLevel = 'Trainee';
let currentActivityIndex = 0;
let score = { Red: 0, Blue: 0, GRC: 0 };
let totalActivities = 0;

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
const assignedTeamTitle = document.getElementById('assigned-team-title');
const teamDescription = document.getElementById('team-description');

// --- FUNCTIONS ---

/**
 * Transitions from the initial intrusion screen to the game's start screen.
 */
function goToStartScreen() {
    if (preStartScreen) {
        preStartScreen.classList.remove('active');
    }
    if (startScreen) {
        startScreen.classList.add('active');
    }
}

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

    loadActivity(currentActivityIndex);
}

function loadActivity(index) {
    if (index >= totalActivities) {
        return showResults();
    }

    const activity = gameData[currentLevel][index];
    nextButton.disabled = true;
    optionsContainer.innerHTML = '';
    interactiveElementsContainer.innerHTML = '';

    activityContainer.innerHTML = `
        <h3>ACTIVITY ${index + 1} / ${totalActivities}: ${activity.type} Challenge</h3>
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
    }

    const progressPercentage = (index / totalActivities) * 100;
    progressBarFill.style.width = `${progressPercentage}%`;
}


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

function renderOrderTriageActivity(activity) {
    activity.selectedOrder = [];
    const stepsDiv = document.createElement('div');
    stepsDiv.id = 'triage-steps-list';
    
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
    if (activity.selectedOrder.includes(item)) return;

    activity.selectedOrder.push(item);
    
    card.classList.add('selected-order');
    const numberSpan = card.querySelector('.triage-step-number');
    numberSpan.textContent = activity.selectedOrder.length;
    
    if (activity.selectedOrder.length === activity.items.length) {
        nextButton.disabled = false;
    }
}


function renderRiskAssessActivity(activity) {
    const sliderHTML = `
        <label class="risk-slider-label">RATE ${activity.unit} (1 to 5):</label>
        <div id="risk-current-rating" class="risk-rating-output">1 / 5</div>
        <input type="range" min="1" max="5" value="1" id="risk-slider" oninput="updateRiskSliderValue(this.value)">
        <div style="display: flex; justify-content: space-between; font-size: 0.8em; color: #94a3b8;">
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
    
    // Color logic for smooth transition (Blue -> Yellow -> Red)
    let color;
    if (value <= 2) {
        color = '#06b6d4'; // Cyan
    } else if (value <= 4) {
        color = '#ffcc00'; // Amber/Yellow
    } else {
        color = '#ef4444'; // Red
    }
    output.style.color = color;
}


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
    }
    
    score[activity.type] += pointsAwarded;

    currentActivityIndex++;
    loadActivity(currentActivityIndex);
}

function showResults() {
    gameScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    progressBarFill.style.width = '100%';

    let finalTeam = 'Purple Team (Hybrid)';
    
    const teamScores = Object.entries(score).map(([team, value]) => ({ team, value }));
    teamScores.sort((a, b) => b.value - a.value);

    if (teamScores[0].value > 0 && teamScores[0].value > teamScores[1].value) {
        finalTeam = teamScores[0].team;
    } else if (teamScores[0].value === teamScores[1].value && teamScores[0].value > 0) {
        finalTeam = 'Purple Team (Hybrid)'; 
    } else if (teamScores[0].value === 0) {
        finalTeam = 'Neutral Agent';
    } else {
        finalTeam = teamScores[0].team;
    }
    
    // Update Results UI
    assignedTeamTitle.textContent = `<< ${finalTeam} FACTION >>`;
    
    let teamDesc = '';
    let teamColor = '#06b6d4'; // Default to Cyan

    switch(finalTeam) {
        case 'Blue':
            teamDesc = "🎯 **The Protector:** Your mindset is DEFENSIVE. You excel at Triage, Forensics, Detection, and protecting systems from threats.";
            teamColor = '#3b82f6'; // Deep Blue
            break;
        case 'Red':
            teamDesc = "⚔️ **The Attacker:** Your mindset is OFFENSIVE. You excel at Exploitation, Penetration Testing, Vulnerability Research, and thinking like an adversary.";
            teamColor = '#ef4444'; // Red
            break;
        case 'GRC':
            teamDesc = "🛡️ **The Strategist:** Your mindset is STRATEGIC. You excel at Risk Management, Policy Development, Compliance, and aligning security with business goals.";
            teamColor = '#10b981'; // Green
            break;
        case 'Purple Team (Hybrid)':
            teamDesc = "💡 **The Architect:** You balance attack and defense, ideal for Security Architecture, Purple Teaming, and managerial roles.";
            teamColor = '#a855f7'; // Purple
            break;
        case 'Neutral Agent':
            teamDesc = "🔍 **The Explorer:** Your results suggest no strong bias. You are perfectly positioned to explore all facets of cybersecurity!";
            teamColor = '#ffcc00'; // Amber/Yellow
            break;
    }

    assignedTeamTitle.style.color = teamColor;
    teamDescription.textContent = teamDesc;
}

/**
 * 5. Claim Prize: Performs the final, mandatory redirection to the roadmap.
 */
function claimPrize() {
    // IMPORTANT: This file must be in the same folder as index.html
    window.location.href = 'Cybersecurity Complete Roadmap 2bd9cba5f57f803cb678f063fe08e5a4.html';
}

// Initialize the screen and start the auto-transition timer
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Start on the new pre-start screen (if it exists)
    if (preStartScreen) {
        preStartScreen.classList.add('active');
        startScreen.classList.remove('active');
    } else {
        // Fallback to the original start screen if pre-start is missing
        startScreen.classList.add('active');
    }

    // 2. Implement 20-second automatic transition
    const transitionDelay = 25000; // 25 seconds
    const timerElement = document.getElementById('auto-transition-timer');
    let secondsLeft = Math.ceil(transitionDelay / 1000); // 20

    // Countdown function to update the timer display
    if (timerElement && preStartScreen) { // Only run if preStartScreen is present
        timerElement.textContent = `SYSTEM LOCKDOWN INITIATED: ${secondsLeft}s until assessment...`;
        const countdownInterval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft >= 0) {
                 timerElement.textContent = `SYSTEM LOCKDOWN INITIATED: ${secondsLeft}s until assessment...`;
            }

            if (secondsLeft <= 0) {
                clearInterval(countdownInterval);
                goToStartScreen();
            }
        }, 1000);
    } else {
        // Fallback: if timer element is missing, just wait the full delay
        setTimeout(goToStartScreen, transitionDelay);
    }
});