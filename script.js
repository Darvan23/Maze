const levelConfigs = [
    {
        size: 29,
        wolves: 1,
        tool: "bone",
        charges: 3,
        supplies: 5,
        traps: 6,
        loops: 50,
        wolfInterval: 3,
        alertRadius: 7,
        story: "Aimee enters the outer woods with a pouch of old bones. Akhink's voice in her memory tells her to keep the lantern high."
    },
    {
        size: 31,
        wolves: 1,
        tool: "stone",
        charges: 4,
        supplies: 6,
        traps: 7,
        loops: 60,
        wolfInterval: 3,
        alertRadius: 8,
        story: "The river stones are smooth and heavy. Aimee can fire them down straight paths to stun the wolf."
    },
    {
        size: 35,
        wolves: 2,
        tool: "bone",
        charges: 4,
        supplies: 6,
        traps: 8,
        loops: 75,
        wolfInterval: 3,
        alertRadius: 8,
        story: "Two shadows move between the trees. Aimee starts looking for Hannah, Sophie, and Maddy in the maze."
    },
    {
        size: 39,
        wolves: 2,
        tool: "flare",
        charges: 3,
        supplies: 7,
        traps: 9,
        loops: 90,
        wolfInterval: 2,
        alertRadius: 9,
        story: "The ranger's emergency flares still burn. One flash can stop every wolf close enough to see it."
    },
    {
        size: 43,
        wolves: 2,
        tool: "snare",
        charges: 4,
        supplies: 7,
        traps: 11,
        loops: 105,
        wolfInterval: 2,
        alertRadius: 9,
        story: "The old hunting trail is full of wire snares. Aimee can set one ahead and make a wolf step into it."
    },
    {
        size: 47,
        wolves: 3,
        tool: "whistle",
        charges: 4,
        supplies: 8,
        traps: 13,
        loops: 125,
        wolfInterval: 2,
        alertRadius: 10,
        story: "A cracked whistle echoes through the pines. It can pull the pack toward the wrong sound."
    },
    {
        size: 51,
        wolves: 3,
        tool: "smoke",
        charges: 3,
        supplies: 8,
        traps: 15,
        loops: 145,
        wolfInterval: 2,
        alertRadius: 10,
        story: "Damp moss and ash make a choking smoke. Aimee can vanish for a few heartbeats while wolves search blindly."
    },
    {
        size: 55,
        wolves: 4,
        tool: "bone",
        charges: 5,
        supplies: 9,
        traps: 17,
        loops: 165,
        wolfInterval: 2,
        alertRadius: 11,
        story: "The maze splits into old animal runs. Every branch can save Aimee, or feed the pack another shortcut."
    },
    {
        size: 59,
        wolves: 4,
        tool: "stone",
        charges: 5,
        supplies: 10,
        traps: 20,
        loops: 190,
        wolfInterval: 2,
        alertRadius: 11,
        story: "Four wolves stalk the lantern now. A clean shot down a corridor is the difference between panic and control."
    },
    {
        size: 65,
        wolves: 5,
        tool: "flare",
        charges: 4,
        supplies: 11,
        traps: 24,
        loops: 230,
        wolfInterval: 2,
        alertRadius: 12,
        story: "The ranger cabin is somewhere beyond the blackest trees. The pack is close, and Aimee refuses to give up."
    },
    {
        size: 69,
        wolves: 5,
        tool: "whistle",
        charges: 5,
        supplies: 12,
        traps: 26,
        loops: 260,
        wolfInterval: 2,
        alertRadius: 12,
        story: "Darvan's advice echoes between the branches: walk slowly when the path is confusing, but never stop choosing."
    },
    {
        size: 73,
        wolves: 6,
        tool: "smoke",
        charges: 4,
        supplies: 12,
        traps: 28,
        loops: 290,
        wolfInterval: 2,
        alertRadius: 13,
        story: "Zach leaves friendly signs carved into the bark, reminding Aimee that help can appear in strange places."
    },
    {
        size: 77,
        wolves: 6,
        tool: "snare",
        charges: 5,
        supplies: 13,
        traps: 30,
        loops: 320,
        wolfInterval: 2,
        alertRadius: 13,
        story: "Rojvan says resting is also a strategy. Aimee laughs, then uses the quiet to listen for pawsteps."
    },
    {
        size: 81,
        wolves: 7,
        tool: "stone",
        charges: 6,
        supplies: 14,
        traps: 32,
        loops: 360,
        wolfInterval: 2,
        alertRadius: 14,
        story: "Aryan's bright confidence keeps the dark from feeling endless. Aimee follows that courage deeper in."
    },
    {
        size: 85,
        wolves: 7,
        tool: "flare",
        charges: 5,
        supplies: 15,
        traps: 35,
        loops: 410,
        wolfInterval: 2,
        alertRadius: 15,
        story: "Leslie's jokes turn fear into breath. In the final forest, Aimee carries everyone's voices with her."
    }
];

const tools = {
    bone: {
        name: "Bones",
        verb: "Throw",
        range: 7
    },
    stone: {
        name: "Slingshot",
        verb: "Shoot",
        range: 9
    },
    flare: {
        name: "Flares",
        verb: "Fire",
        radius: 6
    },
    snare: {
        name: "Snares",
        verb: "Set",
        range: 1
    },
    whistle: {
        name: "Whistle",
        verb: "Call",
        range: 5
    },
    smoke: {
        name: "Smoke",
        verb: "Drop",
        radius: 5
    }
};

const sideCharacters = {
    A: {
        name: "Akhink",
        label: "Mum",
        reward: 2,
        scripts: [
            "Aimee, breathe first. Brave girls can still be careful.",
            "Hold the lantern steady and trust your feet.",
            "I am proud of you before you even reach the cabin."
        ],
        story: "Akhink wraps Aimee in a quick hug and adds supplies to her pouch."
    },
    D: {
        name: "Darvan",
        label: "Wise",
        reward: 1,
        scripts: [
            "The wise path is not always straight. Walk, look, then choose.",
            "A maze is only scary until you start reading its pattern.",
            "Do not race every shadow. Save your courage for the real turn."
        ],
        story: "Darvan's advice steadies Aimee before the maze twists again."
    },
    Z: {
        name: "Zach",
        label: "Friend",
        reward: 2,
        scripts: [
            "You got this. I marked the next branch for you.",
            "I left a supply bag where the path bends twice.",
            "Keep going, Aimee. I will cheer from every clearing."
        ],
        story: "Zach's friendly smile makes the forest feel less lonely."
    },
    R: {
        name: "Rojvan",
        label: "Chill",
        reward: 1,
        hide: 2,
        scripts: [
            "No rush. Even wolves get tired if you make them run in circles.",
            "Sometimes the lazy plan is the smart plan: hide, listen, then move.",
            "If the forest wants drama, let it wait while you pick the quiet path."
        ],
        story: "Rojvan points to a quiet hiding path and yawns like this was all planned."
    },
    Y: {
        name: "Aryan",
        label: "Bright",
        reward: 1,
        scripts: [
            "Be proud, be loud when you need to, and do not let the dark name you.",
            "Walk like the moon is following you because it wants to learn confidence.",
            "If the wolves stare, let them. You still choose the path."
        ],
        story: "Aryan's confidence gives Aimee a little more courage."
    },
    L: {
        name: "Leslie",
        label: "Funny",
        reward: 1,
        scripts: [
            "If a wolf asks for directions, send it to the snack table.",
            "I told the trees a joke. They are still wooden about it.",
            "Run now, laugh later, then pretend that was the plan."
        ],
        story: "Leslie makes Aimee laugh, and the fear loosens its grip."
    }
};

const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const toolButton = document.querySelector("#toolButton");
const soundToggle = document.querySelector("#soundToggle");
const playerSkinSelect = document.querySelector("#playerSkinSelect");
const wolfSkinSelect = document.querySelector("#wolfSkinSelect");
const levelText = document.querySelector("#levelText");
const stepsText = document.querySelector("#stepsText");
const toolText = document.querySelector("#toolText");
const wolvesText = document.querySelector("#wolvesText");
const trophyText = document.querySelector("#trophyText");
const messageText = document.querySelector("#messageText");
const storyText = document.querySelector("#storyText");
const mazeEl = document.querySelector("#maze");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const quizOptions = document.querySelector("#quizOptions");
const modalButton = document.querySelector("#modalButton");

const directions = {
    up: { row: -1, col: 0 },
    down: { row: 1, col: 0 },
    left: { row: 0, col: -1 },
    right: { row: 0, col: 1 }
};

const directionList = Object.entries(directions);

let levelIndex = 0;
let config = levelConfigs[0];
let grid = [];
let rng = createRng(1);
let player = { row: 1, col: 1 };
let exit = { row: 1, col: 1 };
let wolves = [];
let decoys = [];
let snares = [];
let effects = [];
let steps = 0;
let toolCharges = 0;
let smokeTimer = 0;
let gameActive = false;
let touchStart = null;
let playerFacing = "right";
let animatePlayer = false;
let playerSkin = "aimee";
let wolfSkin = "wolf";
let soundEnabled = true;
let audioContext = null;
let lastCloseSoundStep = -20;
let trophies = 0;
let chapterDialogues = [];
let pendingQuiz = null;
let pendingCompletion = null;

function startGame() {
    applyStartOptions();
    initAudio();
    playSound("start");
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    levelIndex = 0;
    trophies = 0;
    loadLevel(levelIndex);
}

function loadLevel(index) {
    config = levelConfigs[index];
    const level = generateLevel(config, index);

    grid = level.grid;
    player = level.player;
    exit = level.exit;
    wolves = level.wolves;
    decoys = [];
    snares = [];
    effects = [];
    steps = 0;
    toolCharges = config.charges;
    smokeTimer = 0;
    gameActive = true;
    playerFacing = "right";
    animatePlayer = false;
    lastCloseSoundStep = -20;
    chapterDialogues = [];
    pendingQuiz = null;
    pendingCompletion = null;

    modal.classList.add("hidden");
    quizOptions.classList.add("hidden");
    modalButton.classList.remove("hidden");
    messageText.textContent = "Find the cabin. Use the forest tools to mislead the wolves.";
    storyText.textContent = config.story;
    updateHud();
    renderMaze();
}

function applyStartOptions() {
    soundEnabled = soundToggle.checked !== false;
    playerSkin = playerSkinSelect.value || "aimee";
    wolfSkin = wolfSkinSelect.value || "wolf";
    updateSkinPreviews();
}

function updateSkinPreviews() {
    const runner = document.querySelector(".runner");
    const wolfPreview = document.querySelector(".wolf");

    if (runner) runner.className = `runner skin-${playerSkin}`;
    if (wolfPreview) wolfPreview.className = `wolf skin-${wolfSkin}`;
}

function initAudio() {
    if (!soundEnabled || audioContext) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = new AudioContextClass();
}

function playSound(name) {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const now = audioContext.currentTime;
    const sounds = {
        start: () => tone(392, 0.08, "sine", 0.08, now) && tone(523, 0.12, "sine", 0.06, now + 0.08),
        step: () => noise(0.045, 0.06, now, 600),
        blocked: () => tone(85, 0.08, "square", 0.07, now),
        pickup: () => tone(620, 0.07, "triangle", 0.08, now) && tone(820, 0.08, "triangle", 0.06, now + 0.06),
        empty: () => tone(180, 0.08, "sawtooth", 0.05, now),
        trap: () => noise(0.18, 0.16, now, 220),
        bone: () => noise(0.08, 0.1, now, 1100),
        stone: () => tone(930, 0.05, "square", 0.06, now) && noise(0.06, 0.08, now + 0.04, 1500),
        flare: () => tone(220, 0.16, "sawtooth", 0.05, now) && noise(0.22, 0.12, now, 3200),
        snare: () => tone(300, 0.06, "triangle", 0.05, now),
        whistle: () => tone(1250, 0.16, "sine", 0.06, now),
        smoke: () => noise(0.24, 0.08, now, 500),
        snareSnap: () => tone(140, 0.08, "square", 0.08, now) && noise(0.08, 0.08, now, 700),
        growl: () => growl(now),
        caught: () => growl(now) && tone(75, 0.35, "sawtooth", 0.09, now + 0.12),
        win: () => tone(523, 0.11, "sine", 0.07, now) && tone(659, 0.11, "sine", 0.06, now + 0.12) && tone(784, 0.18, "sine", 0.06, now + 0.24)
    };

    sounds[name]?.();
}

function tone(frequency, duration, type, volume, startTime) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
    return true;
}

function noise(duration, volume, startTime, filterFrequency) {
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, Math.ceil(Math.max(1, sampleRate * duration)), sampleRate);
    const data = buffer.getChannelData(0);
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();

    for (let index = 0; index < data.length; index += 1) {
        data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
    }

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFrequency, startTime);
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start(startTime);
    return true;
}

function growl(startTime) {
    tone(95, 0.18, "sawtooth", 0.07, startTime);
    tone(62, 0.22, "sawtooth", 0.06, startTime + 0.08);
    noise(0.18, 0.035, startTime, 180);
    return true;
}

function generateLevel(levelConfig, index) {
    const size = levelConfig.size % 2 === 1 ? levelConfig.size : levelConfig.size + 1;
    const random = createRng(9001 + index * 619);
    const levelGrid = Array.from({ length: size }, () => Array(size).fill("#"));
    const start = { row: 1, col: 1 };

    levelGrid[start.row][start.col] = ".";
    carveMaze(levelGrid, start, random);
    addLoops(levelGrid, levelConfig.loops, random);
    carveSafeStart(levelGrid, start);

    const distances = buildDistances(levelGrid, start);
    const farthest = findFarthestOpenCell(levelGrid, distances);
    const shortestPath = findPath(levelGrid, start, farthest);
    const protectedPath = new Set(shortestPath.map(positionKey));

    levelGrid[farthest.row][farthest.col] = "E";

    placeTiles(levelGrid, "T", levelConfig.traps, random, (position) => {
        const key = positionKey(position);
        return !protectedPath.has(key) && distances.get(key) > size * 0.55 && distance(position, farthest) > 6;
    });

    placeTiles(levelGrid, "S", levelConfig.supplies, random, (position) => {
        const key = positionKey(position);
        return distances.get(key) > 8 && distance(position, farthest) > 5 && distance(position, start) > 6;
    });

    placeSideCharacters(levelGrid, random, distances, start, farthest, protectedPath);

    const wolfPositions = chooseWolfPositions(levelGrid, levelConfig.wolves, random, distances, start, farthest, size);

    return {
        grid: levelGrid,
        player: start,
        exit: farthest,
        wolves: wolfPositions.map((position, wolfIndex) => ({
            ...position,
            facing: wolfIndex % 2 === 0 ? "left" : "right",
            stunned: 0,
            moving: false,
            patrol: wolfIndex % 2 === 0 ? "left" : "right"
        }))
    };
}

function carveMaze(levelGrid, start, random) {
    const stack = [start];
    const carveDirections = [
        { row: -2, col: 0 },
        { row: 2, col: 0 },
        { row: 0, col: -2 },
        { row: 0, col: 2 }
    ];

    while (stack.length) {
        const current = stack[stack.length - 1];
        const choices = shuffle([...carveDirections], random).filter((direction) => {
            const next = { row: current.row + direction.row, col: current.col + direction.col };
            return isInsideMaze(levelGrid, next) && levelGrid[next.row][next.col] === "#";
        });

        if (!choices.length) {
            stack.pop();
            continue;
        }

        const direction = choices[0];
        const between = { row: current.row + direction.row / 2, col: current.col + direction.col / 2 };
        const next = { row: current.row + direction.row, col: current.col + direction.col };
        levelGrid[between.row][between.col] = ".";
        levelGrid[next.row][next.col] = ".";
        stack.push(next);
    }
}

function addLoops(levelGrid, amount, random) {
    let opened = 0;
    let attempts = 0;

    while (opened < amount && attempts < amount * 40) {
        attempts += 1;
        const row = 1 + Math.floor(random() * (levelGrid.length - 2));
        const col = 1 + Math.floor(random() * (levelGrid.length - 2));

        if (levelGrid[row][col] !== "#") continue;

        const vertical = levelGrid[row - 1][col] !== "#" && levelGrid[row + 1][col] !== "#";
        const horizontal = levelGrid[row][col - 1] !== "#" && levelGrid[row][col + 1] !== "#";

        if (vertical || horizontal || random() > 0.72) {
            levelGrid[row][col] = ".";
            opened += 1;
        }
    }
}

function carveSafeStart(levelGrid, start) {
    const safeCells = [
        start,
        { row: start.row, col: start.col + 1 },
        { row: start.row + 1, col: start.col },
        { row: start.row + 1, col: start.col + 1 }
    ];

    safeCells.forEach((cell) => {
        if (isInsideMaze(levelGrid, cell)) levelGrid[cell.row][cell.col] = ".";
    });
}

function placeTiles(levelGrid, tile, amount, random, predicate) {
    const candidates = openCells(levelGrid).filter(predicate);
    shuffle(candidates, random).slice(0, amount).forEach((position) => {
        levelGrid[position.row][position.col] = tile;
    });
}

function placeSideCharacters(levelGrid, random, distances, start, goal, protectedPath) {
    const candidates = openCells(levelGrid).filter((position) => {
        const key = positionKey(position);
        const distanceFromStart = distances.get(key);
        return levelGrid[position.row][position.col] === "."
            && distanceFromStart > 10
            && distanceFromStart < distances.get(positionKey(goal)) - 8
            && distance(position, start) > 8
            && distance(position, goal) > 8
            && !protectedPath.has(key);
    });

    const used = [];

    Object.keys(sideCharacters).forEach((tile) => {
        const spot = shuffle([...candidates], random).find((position) => {
            return used.every((other) => distance(other, position) > 7);
        });

        if (!spot) return;

        levelGrid[spot.row][spot.col] = tile;
        used.push(spot);
    });
}

function chooseWolfPositions(levelGrid, amount, random, distances, start, goal, size) {
    const candidates = openCells(levelGrid).filter((position) => {
        const key = positionKey(position);
        return levelGrid[position.row][position.col] === "."
            && distances.get(key) > size * 0.8
            && distance(position, start) > size * 0.62
            && distance(position, goal) > 8;
    });

    const chosen = [];
    shuffle(candidates, random).forEach((position) => {
        if (chosen.length >= amount) return;
        if (chosen.every((other) => distance(other, position) > 5)) {
            chosen.push(position);
        }
    });

    return chosen.length ? chosen : candidates.slice(0, amount);
}

function updateHud() {
    const aliveWolves = wolves.filter((wolf) => wolf.stunned <= 0).length;
    levelText.textContent = `${levelIndex + 1} / ${levelConfigs.length}`;
    stepsText.textContent = steps;
    toolText.textContent = `${tools[config.tool].name} x${toolCharges}`;
    wolvesText.textContent = `${aliveWolves} / ${wolves.length}`;
    trophyText.textContent = trophies;
}

function renderMaze() {
    const viewSize = getViewSize();
    const half = Math.floor(viewSize / 2);
    const startRow = player.row - half;
    const startCol = player.col - half;

    mazeEl.style.setProperty("--cols", viewSize);
    mazeEl.innerHTML = "";

    for (let viewRow = 0; viewRow < viewSize; viewRow += 1) {
        for (let viewCol = 0; viewCol < viewSize; viewCol += 1) {
            const row = startRow + viewRow;
            const col = startCol + viewCol;
            const position = { row, col };
            const cell = document.createElement("div");
            const tile = grid[row]?.[col] ?? "#";
            const fogDistance = Math.max(Math.abs(viewRow - half), Math.abs(viewCol - half));

            cell.className = "cell";
            cell.setAttribute("role", "gridcell");

            if (!grid[row]?.[col]) {
                cell.classList.add("unknown");
            } else if (tile === "#") {
                cell.classList.add("wall");
            } else {
                if (tile === "E") cell.classList.add("exit");
                if (tile === "T") cell.classList.add("trap");
                if (tile === "S") cell.classList.add("supply", `supply-${config.tool}`);
                if (sideCharacters[tile]) cell.classList.add("character", `character-${tile.toLowerCase()}`);
            }

            if (fogDistance >= half - 1) cell.classList.add("edge-fog");
            if (isSame(position, player)) {
                cell.classList.add("player");
                cell.appendChild(createSprite("player-sprite", playerFacing, animatePlayer, playerSkin));
            }

            const wolf = wolves.find((candidate) => isSame(candidate, position));
            if (wolf) {
                cell.classList.add("wolf-cell");
                if (wolf.stunned > 0) cell.classList.add("wolf-stunned");
                cell.appendChild(createSprite("wolf-sprite", wolf.facing, wolf.moving, wolfSkin));
            }

            if (decoys.some((decoy) => isSame(decoy, position))) cell.classList.add("decoy");
            if (snares.some((snare) => isSame(snare, position))) cell.classList.add("snare");

            effects.filter((effect) => isSame(effect, position)).forEach((effect) => {
                cell.classList.add(effect.type);
            });

            mazeEl.appendChild(cell);
        }
    }
}

function createSprite(className, facing, moving, skin) {
    const sprite = document.createElement("span");
    sprite.className = `sprite ${className} skin-${skin} face-${facing}${moving ? " moving" : ""}`;
    sprite.setAttribute("aria-hidden", "true");

    if (className === "wolf-sprite") {
        ["tail", "wing", "spine"].forEach((part) => {
            const detail = document.createElement("span");
            detail.className = `animal-detail animal-${part}`;
            detail.setAttribute("aria-hidden", "true");
            sprite.appendChild(detail);
        });
    }

    return sprite;
}

function movePlayer(directionName) {
    if (!gameActive) return;

    const direction = directions[directionName];
    const next = {
        row: player.row + direction.row,
        col: player.col + direction.col
    };

    if (!canMove(next)) {
        playerFacing = directionName;
        animatePlayer = false;
        messageText.textContent = "Branches block that way.";
        playSound("blocked");
        renderMaze();
        return;
    }

    playerFacing = directionName;
    player = next;
    steps += 1;
    animatePlayer = true;
    playSound("step");

    const currentTile = grid[player.row][player.col];

    if (currentTile === "S") {
        toolCharges += 1;
        grid[player.row][player.col] = ".";
        messageText.textContent = `Aimee finds another ${tools[config.tool].name.toLowerCase()} charge.`;
        playSound("pickup");
    } else if (sideCharacters[currentTile]) {
        meetSideCharacter(currentTile);
    } else if (currentTile === "T") {
        playSound("trap");
        loseLevel("Aimee trips over a hidden deadfall. The pack closes in.");
        return;
    } else if (isSame(player, exit)) {
        completeLevel();
        return;
    } else {
        messageText.textContent = getChaseMessage();
    }

    finishTurn();
}

function meetSideCharacter(tile) {
    const character = sideCharacters[tile];
    const line = getCharacterScript(tile);

    toolCharges += character.reward;
    smokeTimer = Math.max(smokeTimer, character.hide ?? 0);
    grid[player.row][player.col] = ".";
    chapterDialogues.push({
        tile,
        name: character.name,
        line
    });
    messageText.textContent = `${character.name}: "${line}"`;
    storyText.textContent = character.story;
    playSound("pickup");
}

function getCharacterScript(tile) {
    const scripts = sideCharacters[tile].scripts;
    const scriptIndex = (levelIndex + tile.charCodeAt(0)) % scripts.length;
    return scripts[scriptIndex];
}

function useTool() {
    if (!gameActive) return;

    if (toolCharges <= 0) {
        messageText.textContent = `${tools[config.tool].name} are gone. Search the branches for supplies.`;
        playSound("empty");
        return;
    }

    let used = false;

    if (config.tool === "bone") used = throwBone();
    if (config.tool === "stone") used = shootStone();
    if (config.tool === "flare") used = fireFlare();
    if (config.tool === "snare") used = setSnare();
    if (config.tool === "whistle") used = blowWhistle();
    if (config.tool === "smoke") used = dropSmoke();

    if (!used) return;

    toolCharges -= 1;
    steps += 1;
    animatePlayer = true;
    playSound(config.tool);
    finishTurn();
}

function throwBone() {
    const target = farthestOpenInFacingDirection(tools.bone.range);
    decoys.push({ ...target, timer: 7, type: "bone" });
    effects.push({ ...target, timer: 2, type: "decoy-pop" });
    messageText.textContent = "The bone clatters into a side path. Nearby wolves turn toward the sound.";
    return true;
}

function shootStone() {
    const ray = raycast(tools.stone.range);
    const hit = ray.find((cell) => wolves.some((wolf) => isSame(wolf, cell)));

    if (hit) {
        const wolf = wolves.find((candidate) => isSame(candidate, hit));
        wolf.stunned = Math.max(wolf.stunned, 4);
        wolf.moving = false;
        effects.push({ ...hit, timer: 2, type: "shot" });
        messageText.textContent = "The stone hits hard. One wolf staggers and loses the trail.";
    } else {
        const target = ray.at(-1) ?? player;
        effects.push({ ...target, timer: 2, type: "shot" });
        messageText.textContent = "The stone snaps through the dark and lands ahead.";
    }

    return ray.length > 0;
}

function fireFlare() {
    let stunned = 0;
    wolves.forEach((wolf) => {
        if (distance(wolf, player) <= tools.flare.radius) {
            wolf.stunned = Math.max(wolf.stunned, 5);
            wolf.moving = false;
            stunned += 1;
        }
    });

    effects.push({ ...player, timer: 3, type: "flare" });
    messageText.textContent = stunned ? "A white flare tears open the dark. The close wolves freeze." : "The flare lights the maze, but the wolves are still far away.";
    return true;
}

function setSnare() {
    const target = nextOpenInFacingDirection();

    if (!target) {
        messageText.textContent = "There is no open ground there for a snare.";
        return false;
    }

    if (!snares.some((snare) => isSame(snare, target))) {
        snares.push({ ...target, timer: 12 });
    }

    effects.push({ ...target, timer: 2, type: "snare-set" });
    messageText.textContent = "Aimee tightens a snare across the path.";
    return true;
}

function blowWhistle() {
    const target = farthestOpenInFacingDirection(tools.whistle.range);
    decoys.push({ ...target, timer: 6, type: "sound" });
    effects.push({ ...target, timer: 2, type: "sound-ping" });
    messageText.textContent = "The whistle throws Aimee's position into another corridor.";
    return true;
}

function dropSmoke() {
    smokeTimer = 6;
    effects.push({ ...player, timer: 4, type: "smoke" });
    messageText.textContent = "Smoke rolls through the undergrowth. The wolves lose their sightline.";
    return true;
}

function finishTurn() {
    tickEffects();
    moveWolves();

    if (isCaught()) {
        loseLevel("A wolf reaches Aimee before she can break away.");
        return;
    }

    updateHud();
    renderMaze();
}

function moveWolves() {
    const shouldMove = steps % config.wolfInterval === 0;
    const occupied = new Set();

    wolves.forEach((wolf) => {
        wolf.moving = false;

        if (wolf.stunned > 0) {
            wolf.stunned -= 1;
            occupied.add(positionKey(wolf));
            return;
        }

        if (!shouldMove) {
            occupied.add(positionKey(wolf));
            return;
        }

        const previous = { row: wolf.row, col: wolf.col };
        const target = chooseWolfTarget(wolf);
        const next = target ? nextStepToward(wolf, target) : choosePatrolStep(wolf);

        if (!next || occupied.has(positionKey(next))) {
            occupied.add(positionKey(wolf));
            return;
        }

        const snare = snares.find((trap) => isSame(trap, next));
        wolf.row = next.row;
        wolf.col = next.col;
        wolf.facing = getDirectionName(previous, wolf, wolf.facing);
        wolf.moving = true;

        if (snare) {
            wolf.stunned = 6;
            snares = snares.filter((trap) => trap !== snare);
            effects.push({ ...wolf, timer: 2, type: "snare-snap" });
            messageText.textContent = "A snare snaps tight. One wolf is trapped for a moment.";
            playSound("snareSnap");
        }

        occupied.add(positionKey(wolf));
    });
}

function chooseWolfTarget(wolf) {
    if (decoys.length) {
        return [...decoys].sort((a, b) => distance(a, wolf) - distance(b, wolf))[0];
    }

    if (smokeTimer > 0) return null;
    if (distance(wolf, player) <= config.alertRadius) return player;
    if (hasLineOfSight(wolf, player, config.alertRadius + 4)) return player;

    return null;
}

function choosePatrolStep(wolf) {
    const options = shuffledOpenNeighbors(wolf);
    if (!options.length) return null;

    const preferred = options.find((option) => getDirectionName(wolf, option, wolf.facing) === wolf.patrol);
    const next = preferred ?? options[0];
    wolf.patrol = getDirectionName(wolf, next, wolf.patrol);
    return next;
}

function nextStepToward(from, to) {
    const queue = [{ row: from.row, col: from.col }];
    const cameFrom = new Map([[positionKey(from), null]]);

    while (queue.length) {
        const current = queue.shift();
        if (isSame(current, to)) break;

        openNeighbors(current).forEach((neighbor) => {
            const key = positionKey(neighbor);
            if (!cameFrom.has(key)) {
                cameFrom.set(key, current);
                queue.push(neighbor);
            }
        });
    }

    const targetKey = positionKey(to);
    if (!cameFrom.has(targetKey)) return choosePatrolStep(from);

    let current = to;
    let previous = cameFrom.get(targetKey);

    while (previous && !isSame(previous, from)) {
        current = previous;
        previous = cameFrom.get(positionKey(previous));
    }

    return current;
}

function tickEffects() {
    decoys = decoys.map((decoy) => ({ ...decoy, timer: decoy.timer - 1 })).filter((decoy) => decoy.timer > 0);
    snares = snares.map((snare) => ({ ...snare, timer: snare.timer - 1 })).filter((snare) => snare.timer > 0);
    effects = effects.map((effect) => ({ ...effect, timer: effect.timer - 1 })).filter((effect) => effect.timer > 0);
    smokeTimer = Math.max(0, smokeTimer - 1);
}

function getChaseMessage() {
    const nearestWolf = Math.min(...wolves.map((wolf) => distance(wolf, player)));

    if (nearestWolf <= 2) {
        if (steps - lastCloseSoundStep > 5) {
            playSound("growl");
            lastCloseSoundStep = steps;
        }
        return "A wolf is almost on top of her.";
    }
    if (nearestWolf <= config.alertRadius) return "The pack has Aimee's scent.";
    if (distance(player, exit) <= getViewSize()) return "Warm cabin light flickers somewhere ahead.";
    return "The forest branches again and again.";
}

function isCaught() {
    return wolves.some((wolf) => wolf.stunned <= 0 && isSame(wolf, player));
}

function completeLevel() {
    gameActive = false;
    updateHud();
    renderMaze();
    playSound("win");

    if (levelIndex === levelConfigs.length - 1) {
        startMemoryQuiz({
            title: "You Escaped!",
            text: "Aimee reaches the ranger cabin, throws the bolt, and watches the pack vanish into the dawn trees.",
            button: "Play Again"
        });
    } else {
        startMemoryQuiz({
            title: "Chapter Escaped",
            text: `Aimee survives chapter ${levelIndex + 1}, but the forest grows larger and the pack grows smarter.`,
            button: "Next Chapter"
        });
    }
}

function startMemoryQuiz(completion) {
    pendingCompletion = completion;
    pendingQuiz = buildMemoryQuiz();

    modalTitle.textContent = "Memory Trophy";
    modalText.textContent = pendingQuiz.heard
        ? `What did ${pendingQuiz.name} say in this chapter?`
        : `A trophy trial appears. Which line sounds like ${pendingQuiz.name}?`;
    quizOptions.innerHTML = "";
    quizOptions.classList.remove("hidden");
    modalButton.classList.add("hidden");

    pendingQuiz.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.className = "quiz-choice";
        button.type = "button";
        button.textContent = choice;
        button.addEventListener("click", () => answerMemoryQuiz(choice));
        quizOptions.appendChild(button);
    });

    modal.classList.remove("hidden");
}

function buildMemoryQuiz() {
    const heardDialogue = chapterDialogues.length
        ? { ...chapterDialogues[(levelIndex + chapterDialogues.length) % chapterDialogues.length], heard: true }
        : fallbackChapterDialogue();
    const wrongChoices = Object.values(sideCharacters)
        .flatMap((character) => character.scripts)
        .filter((line) => line !== heardDialogue.line);
    const choices = shuffle([heardDialogue.line, ...shuffle(wrongChoices, createRng(3000 + levelIndex)).slice(0, 3)], createRng(7000 + levelIndex));

    return {
        ...heardDialogue,
        choices
    };
}

function fallbackChapterDialogue() {
    const tiles = Object.keys(sideCharacters);
    const tile = tiles[levelIndex % tiles.length];

    return {
        tile,
        name: sideCharacters[tile].name,
        line: getCharacterScript(tile),
        heard: false
    };
}

function answerMemoryQuiz(choice) {
    const correct = choice === pendingQuiz.line;

    quizOptions.classList.add("hidden");
    quizOptions.innerHTML = "";
    modalButton.classList.remove("hidden");

    if (correct) {
        trophies += 1;
        playSound("win");
        modalText.textContent = `Correct. Aimee wins a trophy. ${pendingCompletion.text}`;
    } else {
        modalText.textContent = `Not this time. ${pendingQuiz.name} said: "${pendingQuiz.line}" ${pendingCompletion.text}`;
    }

    modalTitle.textContent = pendingCompletion.title;
    modalButton.textContent = pendingCompletion.button;
    pendingQuiz = null;
    updateHud();
}

function loseLevel(text) {
    gameActive = false;
    updateHud();
    renderMaze();
    playSound("caught");
    showModal("Caught!", text, "Try Again");
}

function showModal(title, text, buttonText) {
    pendingQuiz = null;
    pendingCompletion = null;
    quizOptions.classList.add("hidden");
    quizOptions.innerHTML = "";
    modalButton.classList.remove("hidden");
    modalTitle.textContent = title;
    modalText.textContent = text;
    modalButton.textContent = buttonText;
    modal.classList.remove("hidden");
}

function handleModalButton() {
    if (modalTitle.textContent === "You Escaped!") {
        levelIndex = 0;
        trophies = 0;
    } else if (modalTitle.textContent === "Chapter Escaped") {
        levelIndex += 1;
    }

    loadLevel(levelIndex);
}

function restartLevel() {
    loadLevel(levelIndex);
}

function canMove(position) {
    const tile = grid[position.row]?.[position.col];
    return tile && tile !== "#";
}

function openNeighbors(position) {
    return Object.values(directions)
        .map((direction) => ({ row: position.row + direction.row, col: position.col + direction.col }))
        .filter(canMove);
}

function shuffledOpenNeighbors(position) {
    return shuffle(openNeighbors(position), rng);
}

function raycast(range) {
    const direction = directions[playerFacing];
    const cells = [];

    for (let step = 1; step <= range; step += 1) {
        const position = {
            row: player.row + direction.row * step,
            col: player.col + direction.col * step
        };

        if (!canMove(position)) break;
        cells.push(position);
    }

    return cells;
}

function farthestOpenInFacingDirection(range) {
    return raycast(range).at(-1) ?? { ...player };
}

function nextOpenInFacingDirection() {
    const direction = directions[playerFacing];
    const target = { row: player.row + direction.row, col: player.col + direction.col };
    return canMove(target) ? target : null;
}

function hasLineOfSight(a, b, range) {
    if (distance(a, b) > range) return false;

    if (a.row === b.row) {
        const start = Math.min(a.col, b.col) + 1;
        const end = Math.max(a.col, b.col);
        for (let col = start; col < end; col += 1) {
            if (grid[a.row][col] === "#") return false;
        }
        return true;
    }

    if (a.col === b.col) {
        const start = Math.min(a.row, b.row) + 1;
        const end = Math.max(a.row, b.row);
        for (let row = start; row < end; row += 1) {
            if (grid[row][a.col] === "#") return false;
        }
        return true;
    }

    return false;
}

function buildDistances(levelGrid, start) {
    const distances = new Map([[positionKey(start), 0]]);
    const queue = [start];

    while (queue.length) {
        const current = queue.shift();
        const currentDistance = distances.get(positionKey(current));

        Object.values(directions).forEach((direction) => {
            const next = { row: current.row + direction.row, col: current.col + direction.col };
            const key = positionKey(next);

            if (levelGrid[next.row]?.[next.col] && levelGrid[next.row][next.col] !== "#" && !distances.has(key)) {
                distances.set(key, currentDistance + 1);
                queue.push(next);
            }
        });
    }

    return distances;
}

function findFarthestOpenCell(levelGrid, distances) {
    return openCells(levelGrid)
        .filter((position) => distances.has(positionKey(position)))
        .sort((a, b) => distances.get(positionKey(b)) - distances.get(positionKey(a)))[0];
}

function findPath(levelGrid, start, goal) {
    const queue = [start];
    const cameFrom = new Map([[positionKey(start), null]]);

    while (queue.length) {
        const current = queue.shift();
        if (isSame(current, goal)) break;

        Object.values(directions).forEach((direction) => {
            const next = { row: current.row + direction.row, col: current.col + direction.col };
            const key = positionKey(next);

            if (levelGrid[next.row]?.[next.col] && levelGrid[next.row][next.col] !== "#" && !cameFrom.has(key)) {
                cameFrom.set(key, current);
                queue.push(next);
            }
        });
    }

    const path = [];
    let current = goal;

    while (current) {
        path.push(current);
        current = cameFrom.get(positionKey(current));
    }

    return path;
}

function openCells(levelGrid) {
    const cells = [];

    levelGrid.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile !== "#") cells.push({ row: rowIndex, col: colIndex });
        });
    });

    return cells;
}

function isInsideMaze(levelGrid, position) {
    return position.row > 0 && position.col > 0 && position.row < levelGrid.length - 1 && position.col < levelGrid.length - 1;
}

function positionKey(position) {
    return `${position.row},${position.col}`;
}

function distance(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function isSame(a, b) {
    return a.row === b.row && a.col === b.col;
}

function getDirectionName(from, to, fallback = "right") {
    if (to.row < from.row) return "up";
    if (to.row > from.row) return "down";
    if (to.col < from.col) return "left";
    if (to.col > from.col) return "right";
    return fallback;
}

function getViewSize() {
    return window.matchMedia("(max-width: 640px)").matches ? 13 : 17;
}

function shuffle(items, random) {
    for (let index = items.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1));
        [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }

    return items;
}

function createRng(seed) {
    let value = seed >>> 0;

    return function random() {
        value += 0x6D2B79F5;
        let result = value;
        result = Math.imul(result ^ (result >>> 15), result | 1);
        result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
        return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
}

function handleKeydown(event) {
    const keys = {
        ArrowUp: "up",
        w: "up",
        W: "up",
        ArrowDown: "down",
        s: "down",
        S: "down",
        ArrowLeft: "left",
        a: "left",
        A: "left",
        ArrowRight: "right",
        d: "right",
        D: "right"
    };

    if (keys[event.key]) {
        event.preventDefault();
        movePlayer(keys[event.key]);
    }

    if (event.key === " " || event.key === "f" || event.key === "F") {
        event.preventDefault();
        useTool();
    }
}

function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
}

function handleTouchEnd(event) {
    event.preventDefault();
    if (!touchStart) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    touchStart = null;

    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;

    if (Math.abs(dx) > Math.abs(dy)) {
        movePlayer(dx > 0 ? "right" : "left");
    } else {
        movePlayer(dy > 0 ? "down" : "up");
    }
}

let lastPointerPress = 0;

function bindPress(element, handler) {
    element.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "touch" || event.pointerType === "pen") {
            event.preventDefault();
            lastPointerPress = Date.now();
            handler(event);
        }
    });

    element.addEventListener("click", (event) => {
        if (Date.now() - lastPointerPress < 500) {
            event.preventDefault();
            return;
        }

        handler(event);
    });
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartLevel);
bindPress(toolButton, useTool);
modalButton.addEventListener("click", handleModalButton);
soundToggle.addEventListener("change", applyStartOptions);
playerSkinSelect.addEventListener("change", applyStartOptions);
wolfSkinSelect.addEventListener("change", applyStartOptions);
document.addEventListener("keydown", handleKeydown);
window.addEventListener("resize", () => {
    if (gameActive) renderMaze();
});
mazeEl.addEventListener("touchstart", handleTouchStart, { passive: false });
mazeEl.addEventListener("touchend", handleTouchEnd, { passive: false });

document.querySelectorAll("[data-move]").forEach((button) => {
    bindPress(button, () => movePlayer(button.dataset.move));
});

updateSkinPreviews();
