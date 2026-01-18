/**
 * ============================================
 * CalcIQ - Advanced Calculator
 * ============================================
 * A professional-grade calculator with:
 * - Basic & Scientific modes
 * - Calculation history with persistence
 * - Dark/Light theme toggle
 * - Full keyboard support
 * - Extensive customization options
 * ============================================
 */

// ============================================
// State Management
// ============================================
let currentValue = '0';
let previousValue = '';
let currentOperator = null;
let waitingForOperand = false;
let expression = '';
let calculationHistory = [];
let currentMode = 'basic';
let isDarkMode = false;
let pendingPower = false;
let isFullscreen = false;

// Customization State
let customization = {
    buttonSize: 'medium',
    buttonSizeCustom: 56,
    buttonShape: 'rounded',
    buttonGlow: false,
    buttonBounce: false,
    button3D: false,
    fontFamily: 'JetBrains Mono',
    fontSize: 16,
    fontWeight: 'bold',
    calcSize: 'normal',
    calcScale: 100,
    bgType: 'color',
    bgColor: '#f3f4f6',
    bgGradient: '',
    bgTheme: '',
    bgImage: '',
    bgBlur: 0,
    bgOpacity: 100,
    buttonTheme: 'default',
    customColors: {
        number: '#e5e7eb',
        operator: '#6366f1',
        equals: '#8b5cf6',
        clear: '#ef4444'
    },
    // Sound settings
    soundEnabled: false,
    soundVolume: 50,
    soundType: 'click',
    equalsSound: true,
    errorSound: true,
    clearSound: true
};

// Audio Context for generating sounds
let audioContext = null;

// ============================================
// DOM Elements
// ============================================
const displayEl = document.getElementById('display');
const expressionEl = document.getElementById('expression');
const historyListEl = document.getElementById('historyList');
const mobileHistoryListEl = document.getElementById('mobileHistoryList');
const scientificPanelEl = document.getElementById('scientificPanel');
const basicPercentEl = document.getElementById('basicPercent');
const calculatorWrapper = document.getElementById('calculatorWrapper');
const backgroundLayer = document.getElementById('backgroundLayer');
const customImageBg = document.getElementById('customImageBg');

// ============================================
// Initialize Application
// ============================================
function init() {
    loadPreferences();
    loadHistory();
    loadCustomization();
    applyTheme();
    applyCustomization();
    applyBackgroundCustomization(); // Apply background separately
    updateModeUI();
}

// ============================================
// Theme Management
// ============================================

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
    savePreferences();
}

/**
 * Apply the current theme to all elements
 * NOTE: This function ONLY handles dark/light mode UI elements
 * It does NOT modify custom backgrounds set by the user
 */
function applyTheme() {
    const body = document.body;
    const calcBody = document.getElementById('calcBody');
    const historyPanel = document.getElementById('historyPanel');
    const mobileHistoryPanel = document.getElementById('mobileHistoryPanel').querySelector('.theme-transition:last-child');
    const modeContainer = document.getElementById('modeToggleContainer');
    const settingsPanel = document.querySelector('#settingsPanel > div:last-child');
    
    if (isDarkMode) {
        body.classList.add('dark', 'text-white');
        body.classList.remove('text-gray-900');
        calcBody.classList.add('bg-gray-800/90');
        calcBody.classList.remove('bg-white/90');
        historyPanel.classList.add('bg-gray-800/90', 'border-gray-700');
        historyPanel.classList.remove('bg-white/90', 'border-gray-200');
        mobileHistoryPanel.classList.add('bg-gray-800');
        mobileHistoryPanel.classList.remove('bg-white');
        modeContainer.classList.add('bg-gray-700');
        modeContainer.classList.remove('bg-gray-100');
        if (settingsPanel) {
            settingsPanel.classList.add('bg-gray-800');
            settingsPanel.classList.remove('bg-white');
        }
        
        document.getElementById('sunIcon').classList.remove('hidden');
        document.getElementById('moonIcon').classList.add('hidden');
        
        // Only update button colors if using default theme
        if (customization.buttonTheme === 'default') {
            applyDefaultButtonColors();
        }
    } else {
        body.classList.remove('dark', 'text-white');
        body.classList.add('text-gray-900');
        calcBody.classList.remove('bg-gray-800/90');
        calcBody.classList.add('bg-white/90');
        historyPanel.classList.remove('bg-gray-800/90', 'border-gray-700');
        historyPanel.classList.add('bg-white/90', 'border-gray-200');
        mobileHistoryPanel.classList.remove('bg-gray-800');
        mobileHistoryPanel.classList.add('bg-white');
        modeContainer.classList.remove('bg-gray-700');
        modeContainer.classList.add('bg-gray-100');
        if (settingsPanel) {
            settingsPanel.classList.remove('bg-gray-800');
            settingsPanel.classList.add('bg-white');
        }
        
        document.getElementById('sunIcon').classList.add('hidden');
        document.getElementById('moonIcon').classList.remove('hidden');
        
        // Only update button colors if using default theme
        if (customization.buttonTheme === 'default') {
            applyDefaultButtonColors();
        }
    }
}

/**
 * Apply default button colors based on dark/light mode
 * This is separate from background customization
 */
function applyDefaultButtonColors() {
    document.querySelectorAll('.calc-btn:not(.btn-operator):not(.btn-equals):not(.btn-clear)').forEach(btn => {
        if (isDarkMode) {
            btn.classList.add('bg-gray-700', 'hover:bg-gray-600', 'text-white');
            btn.classList.remove('bg-gray-100', 'hover:bg-gray-200', 'text-gray-800');
        } else {
            btn.classList.remove('bg-gray-700', 'hover:bg-gray-600', 'text-white');
            btn.classList.add('bg-gray-100', 'hover:bg-gray-200', 'text-gray-800');
        }
    });
}

// ============================================
// Fullscreen Toggle
// ============================================
function toggleFullscreen() {
    isFullscreen = !isFullscreen;
    const expandIcon = document.getElementById('expandIcon');
    const shrinkIcon = document.getElementById('shrinkIcon');
    
    if (isFullscreen) {
        calculatorWrapper.classList.add('calc-size-fullscreen');
        calculatorWrapper.classList.remove('calc-size-compact', 'calc-size-normal', 'calc-size-large');
        expandIcon.classList.add('hidden');
        shrinkIcon.classList.remove('hidden');
    } else {
        calculatorWrapper.classList.remove('calc-size-fullscreen');
        setCalcSize(customization.calcSize);
        expandIcon.classList.remove('hidden');
        shrinkIcon.classList.add('hidden');
    }
}

// ============================================
// Mode Management
// ============================================

function setMode(mode) {
    currentMode = mode;
    updateModeUI();
    savePreferences();
}

function updateModeUI() {
    const basicBtn = document.getElementById('basicModeBtn');
    const sciBtn = document.getElementById('sciModeBtn');
    
    if (currentMode === 'scientific') {
        scientificPanelEl.classList.remove('hidden');
        basicPercentEl.classList.add('hidden');
        sciBtn.classList.add('bg-indigo-500', 'text-white');
        sciBtn.classList.remove('text-gray-500');
        basicBtn.classList.remove('bg-indigo-500', 'text-white');
        basicBtn.classList.add('text-gray-500');
    } else {
        scientificPanelEl.classList.add('hidden');
        basicPercentEl.classList.remove('hidden');
        basicBtn.classList.add('bg-indigo-500', 'text-white');
        basicBtn.classList.remove('text-gray-500');
        sciBtn.classList.remove('bg-indigo-500', 'text-white');
        sciBtn.classList.add('text-gray-500');
    }
}

// ============================================
// Display Management
// ============================================

function updateDisplay() {
    displayEl.textContent = formatNumber(currentValue);
    expressionEl.textContent = expression;
}

function formatNumber(num) {
    if (num === 'Error' || num === 'Infinity' || num === '-Infinity') return num;
    
    const parsed = parseFloat(num);
    if (isNaN(parsed)) return num;
    
    if (Math.abs(parsed) > 999999999999) {
        return parsed.toExponential(6);
    }
    
    if (num.includes('.') && !num.endsWith('.')) {
        const parts = num.split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + parts[1];
    }
    
    if (num.endsWith('.')) {
        return parseFloat(num).toLocaleString() + '.';
    }
    
    return parseFloat(num).toLocaleString();
}

// ============================================
// Calculator Input Functions
// ============================================

function inputNumber(num) {
    playSound('button');
    
    if (waitingForOperand) {
        currentValue = num;
        waitingForOperand = false;
    } else {
        currentValue = currentValue === '0' ? num : currentValue + num;
    }
    
    if (currentValue.replace(/[^0-9]/g, '').length > 15) {
        currentValue = currentValue.slice(0, -1);
    }
    
    updateDisplay();
}

function inputDecimal() {
    playSound('button');
    
    if (waitingForOperand) {
        currentValue = '0.';
        waitingForOperand = false;
    } else if (!currentValue.includes('.')) {
        currentValue += '.';
    }
    updateDisplay();
}

function inputChar(char) {
    playSound('button');
    
    if (waitingForOperand) {
        currentValue = char;
        waitingForOperand = false;
    } else {
        currentValue = currentValue === '0' ? char : currentValue + char;
    }
    updateDisplay();
}

function operator(op) {
    playSound('button');
    
    const inputValue = parseFloat(currentValue);
    
    if (pendingPower && op !== '^') {
        const base = parseFloat(previousValue);
        const exp = inputValue;
        currentValue = String(Math.pow(base, exp));
        expression = `${previousValue}^${inputValue}`;
        pendingPower = false;
    }
    
    if (previousValue === '' || waitingForOperand) {
        previousValue = currentValue;
    } else if (currentOperator) {
        const result = performCalculation(parseFloat(previousValue), inputValue, currentOperator);
        currentValue = String(result);
        previousValue = currentValue;
    }
    
    expression = `${previousValue} ${op}`;
    currentOperator = op;
    waitingForOperand = true;
    updateDisplay();
}

function performCalculation(left, right, op) {
    switch (op) {
        case '+': return left + right;
        case '−': return left - right;
        case '×': return left * right;
        case '÷': return right !== 0 ? left / right : 'Error';
        case '%': return (left * right) / 100;
        default: return right;
    }
}

function calculate() {
    if (currentOperator === null && !pendingPower) return;
    
    const inputValue = parseFloat(currentValue);
    let result;
    let fullExpression;
    
    if (pendingPower) {
        const base = parseFloat(previousValue);
        result = Math.pow(base, inputValue);
        fullExpression = `${previousValue}^${currentValue}`;
        pendingPower = false;
    } else {
        result = performCalculation(parseFloat(previousValue), inputValue, currentOperator);
        fullExpression = `${previousValue} ${currentOperator} ${currentValue}`;
    }
    
    if (result === 'Error' || !isFinite(result) || isNaN(result)) {
        result = 'Error';
    } else {
        result = Math.round(result * 1000000000000) / 1000000000000;
    }
    
    if (result !== 'Error') {
        addToHistory(fullExpression, result);
    }
    
    expression = `${fullExpression} =`;
    currentValue = String(result);
    previousValue = '';
    currentOperator = null;
    waitingForOperand = true;
    updateDisplay();
}

function clearAll() {
    currentValue = '0';
    previousValue = '';
    currentOperator = null;
    waitingForOperand = false;
    expression = '';
    pendingPower = false;
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

function toggleSign() {
    if (currentValue !== '0') {
        currentValue = currentValue.startsWith('-') 
            ? currentValue.slice(1) 
            : '-' + currentValue;
    }
    updateDisplay();
}

// ============================================
// Scientific Functions
// ============================================

function scientific(func) {
    const value = parseFloat(currentValue);
    let result;
    let expr;
    
    switch (func) {
        case 'sin':
            result = Math.sin(value * Math.PI / 180);
            expr = `sin(${value}°)`;
            break;
        case 'cos':
            result = Math.cos(value * Math.PI / 180);
            expr = `cos(${value}°)`;
            break;
        case 'tan':
            if (Math.abs(value % 180) === 90) {
                result = 'Error';
            } else {
                result = Math.tan(value * Math.PI / 180);
            }
            expr = `tan(${value}°)`;
            break;
        case 'log':
            result = value > 0 ? Math.log10(value) : 'Error';
            expr = `log(${value})`;
            break;
        case 'ln':
            result = value > 0 ? Math.log(value) : 'Error';
            expr = `ln(${value})`;
            break;
        case 'square':
            result = value * value;
            expr = `${value}²`;
            break;
        case 'sqrt':
            result = value >= 0 ? Math.sqrt(value) : 'Error';
            expr = `√${value}`;
            break;
        case 'power':
            previousValue = currentValue;
            expression = `${currentValue}^`;
            pendingPower = true;
            waitingForOperand = true;
            updateDisplay();
            return;
        case 'pi':
            result = Math.PI;
            expr = 'π';
            break;
        case 'e':
            result = Math.E;
            expr = 'e';
            break;
        case 'factorial':
            if (value < 0 || !Number.isInteger(value) || value > 170) {
                result = 'Error';
            } else {
                result = factorial(value);
            }
            expr = `${value}!`;
            break;
        case 'abs':
            result = Math.abs(value);
            expr = `|${value}|`;
            break;
    }
    
    if (result === 'Error' || !isFinite(result) || isNaN(result)) {
        result = 'Error';
    } else {
        result = Math.round(result * 1000000000000) / 1000000000000;
    }
    
    if (result !== 'Error' && expr) {
        addToHistory(expr, result);
    }
    
    expression = `${expr} =`;
    currentValue = String(result);
    waitingForOperand = true;
    updateDisplay();
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// ============================================
// History Management
// ============================================

function addToHistory(expr, result) {
    const item = {
        expression: expr,
        result: result,
        timestamp: Date.now()
    };
    
    calculationHistory.unshift(item);
    
    if (calculationHistory.length > 50) {
        calculationHistory.pop();
    }
    
    saveHistory();
    renderHistory();
}

function renderHistory() {
    const html = calculationHistory.length === 0 
        ? '<p class="text-center text-gray-400 py-8">No calculations yet</p>'
        : calculationHistory.map((item, index) => `
            <div class="history-item p-3 rounded-xl cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}" 
                 onclick="useHistoryItem(${index})">
                <div class="calc-font text-sm opacity-60">${item.expression}</div>
                <div class="calc-font text-lg font-semibold">= ${formatNumber(String(item.result))}</div>
            </div>
        `).join('');
    
    historyListEl.innerHTML = html;
    mobileHistoryListEl.innerHTML = html;
}

function useHistoryItem(index) {
    const item = calculationHistory[index];
    currentValue = String(item.result);
    expression = item.expression + ' =';
    waitingForOperand = true;
    updateDisplay();
    document.getElementById('mobileHistoryPanel').classList.add('hidden');
}

function clearHistory() {
    calculationHistory = [];
    saveHistory();
    renderHistory();
}

function toggleHistory() {
    const panel = document.getElementById('mobileHistoryPanel');
    panel.classList.toggle('hidden');
}

// ============================================
// Settings Panel
// ============================================

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('hidden');
    
    if (!panel.classList.contains('hidden')) {
        updateSettingsUI();
    }
}

function switchSettingsTab(tab) {
    // Update tabs
    document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[onclick="switchSettingsTab('${tab}')"]`).classList.add('active');
    
    // Update content
    document.querySelectorAll('.settings-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`${tab}Tab`).classList.remove('hidden');
}

function updateSettingsUI() {
    // Button size presets
    document.querySelectorAll('.btn-size-preset').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === customization.buttonSize);
    });
    document.getElementById('buttonSizeSlider').value = customization.buttonSizeCustom;
    document.getElementById('buttonSizeValue').textContent = customization.buttonSizeCustom + 'px';
    
    // Button shape
    document.querySelectorAll('.btn-shape-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.shape === customization.buttonShape);
    });
    
    // Button effects
    document.getElementById('glowToggle').checked = customization.buttonGlow;
    document.getElementById('bounceToggle').checked = customization.buttonBounce;
    document.getElementById('threeDToggle').checked = customization.button3D;
    
    // Font settings
    document.getElementById('fontSizeSlider').value = customization.fontSize;
    document.getElementById('fontSizeValue').textContent = customization.fontSize + 'px';
    document.querySelectorAll('.font-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === customization.fontFamily);
    });
    document.querySelectorAll('.font-weight-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.weight === customization.fontWeight);
    });
    
    // Calculator size
    document.querySelectorAll('.calc-size-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === customization.calcSize);
    });
    document.getElementById('calcScaleSlider').value = customization.calcScale;
    document.getElementById('calcScaleValue').textContent = customization.calcScale + '%';
    
    // Button theme
    document.querySelectorAll('.btn-theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === customization.buttonTheme);
    });
    
    // Custom colors
    document.getElementById('numberBtnColor').value = customization.customColors.number;
    document.getElementById('operatorBtnColor').value = customization.customColors.operator;
    document.getElementById('equalsBtnColor').value = customization.customColors.equals;
    document.getElementById('clearBtnColor').value = customization.customColors.clear;
    
    // Sound settings
    document.getElementById('soundToggle').checked = customization.soundEnabled;
    document.getElementById('volumeSlider').value = customization.soundVolume;
    document.getElementById('volumeValue').textContent = customization.soundVolume + '%';
    document.getElementById('equalsSoundToggle').checked = customization.equalsSound;
    document.getElementById('errorSoundToggle').checked = customization.errorSound;
    document.getElementById('clearSoundToggle').checked = customization.clearSound;
    
    document.querySelectorAll('.sound-type-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sound === customization.soundType);
    });
    
    // Enable/disable sound controls based on sound toggle
    const soundControls = ['volumeControl', 'soundTypeControl', 'specialSoundsControl', 'testSoundControl'];
    soundControls.forEach(id => {
        const el = document.getElementById(id);
        if (customization.soundEnabled) {
            el.classList.add('enabled');
            el.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            el.classList.remove('enabled');
            el.classList.add('opacity-50', 'pointer-events-none');
        }
    });
}

// ============================================
// Customization Functions
// ============================================

// Button Size
function setButtonSize(size) {
    customization.buttonSize = size;
    const sizes = { small: 40, medium: 56, large: 72 };
    customization.buttonSizeCustom = sizes[size];
    document.getElementById('buttonSizeSlider').value = customization.buttonSizeCustom;
    document.getElementById('buttonSizeValue').textContent = customization.buttonSizeCustom + 'px';
    
    document.querySelectorAll('.btn-size-preset').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === size);
    });
    
    applyCustomization();
    saveCustomization();
}

function customButtonSize(value) {
    customization.buttonSizeCustom = parseInt(value);
    customization.buttonSize = 'custom';
    document.getElementById('buttonSizeValue').textContent = value + 'px';
    
    document.querySelectorAll('.btn-size-preset').forEach(btn => {
        btn.classList.remove('active');
    });
    
    applyCustomization();
    saveCustomization();
}

// Button Shape
function setButtonShape(shape) {
    customization.buttonShape = shape;
    
    document.querySelectorAll('.btn-shape-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.shape === shape);
    });
    
    applyCustomization();
    saveCustomization();
}

// Button Effects
function toggleGlow(enabled) {
    customization.buttonGlow = enabled;
    applyCustomization();
    saveCustomization();
}

function toggleBounce(enabled) {
    customization.buttonBounce = enabled;
    applyCustomization();
    saveCustomization();
}

function toggle3D(enabled) {
    customization.button3D = enabled;
    applyCustomization();
    saveCustomization();
}

// Font Settings
function setFontSize(value) {
    customization.fontSize = parseInt(value);
    document.getElementById('fontSizeValue').textContent = value + 'px';
    applyCustomization();
    saveCustomization();
}

function setFontFamily(font) {
    customization.fontFamily = font;
    
    document.querySelectorAll('.font-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === font);
    });
    
    applyCustomization();
    saveCustomization();
}

function setFontWeight(weight) {
    customization.fontWeight = weight;
    
    document.querySelectorAll('.font-weight-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.weight === weight);
    });
    
    applyCustomization();
    saveCustomization();
}

// Calculator Size
function setCalcSize(size) {
    if (isFullscreen) return;
    
    customization.calcSize = size;
    
    calculatorWrapper.classList.remove('calc-size-compact', 'calc-size-normal', 'calc-size-large');
    calculatorWrapper.classList.add(`calc-size-${size}`);
    
    document.querySelectorAll('.calc-size-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === size);
    });
    
    saveCustomization();
}

function setCalcScale(value) {
    customization.calcScale = parseInt(value);
    document.getElementById('calcScaleValue').textContent = value + '%';
    document.documentElement.style.setProperty('--calc-scale', value / 100);
    saveCustomization();
}

// Background Settings
function setBgColor(color) {
    customization.bgType = 'color';
    customization.bgColor = color;
    customization.bgGradient = '';
    customization.bgTheme = '';
    customization.bgImage = '';
    
    applyBackgroundCustomization();
    saveCustomization();
}

function setBgGradient(gradient) {
    customization.bgType = 'gradient';
    customization.bgGradient = gradient;
    customization.bgTheme = '';
    customization.bgImage = '';
    
    applyBackgroundCustomization();
    saveCustomization();
}

function setBgTheme(theme) {
    customization.bgType = 'theme';
    customization.bgTheme = theme;
    customization.bgGradient = '';
    customization.bgImage = '';
    
    applyBackgroundCustomization();
    
    document.querySelectorAll('.bg-theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    saveCustomization();
}

function uploadBgImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        customization.bgType = 'image';
        customization.bgImage = e.target.result;
        customization.bgGradient = '';
        customization.bgTheme = '';
        
        applyBackgroundCustomization();
        document.getElementById('imageControls').classList.remove('hidden');
        
        saveCustomization();
    };
    reader.readAsDataURL(file);
}

function setBgBlur(value) {
    customization.bgBlur = parseInt(value);
    document.getElementById('bgBlurValue').textContent = value + 'px';
    document.documentElement.style.setProperty('--bg-blur', value + 'px');
    // Only save, don't apply full background (it's just a CSS variable change)
    saveCustomization();
}

function setBgOpacity(value) {
    customization.bgOpacity = parseInt(value);
    document.getElementById('bgOpacityValue').textContent = value + '%';
    document.documentElement.style.setProperty('--bg-opacity', value / 100);
    // Only save, don't apply full background (it's just a CSS variable change)
    saveCustomization();
}

function clearBgImage() {
    customization.bgType = 'color';
    customization.bgImage = '';
    customization.bgGradient = '';
    customization.bgTheme = '';
    customization.bgBlur = 0;
    customization.bgOpacity = 100;
    customization.bgColor = isDarkMode ? '#111827' : '#f3f4f6';
    
    customImageBg.classList.add('hidden');
    customImageBg.style.backgroundImage = '';
    document.getElementById('imageControls').classList.add('hidden');
    document.getElementById('bgBlurSlider').value = 0;
    document.getElementById('bgOpacitySlider').value = 100;
    document.getElementById('bgBlurValue').textContent = '0px';
    document.getElementById('bgOpacityValue').textContent = '100%';
    
    applyBackgroundCustomization();
    saveCustomization();
}

// Button Theme
function setButtonTheme(theme) {
    customization.buttonTheme = theme;
    
    const calcBody = document.getElementById('calcBody');
    
    // Remove all theme classes
    calcBody.classList.remove('btn-theme-default', 'btn-theme-sunset', 'btn-theme-forest', 
                               'btn-theme-ocean', 'btn-theme-candy', 'btn-theme-midnight');
    
    if (theme !== 'default') {
        calcBody.classList.add(`btn-theme-${theme}`);
    }
    
    document.querySelectorAll('.btn-theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // Only update button colors, NOT the background
    if (theme === 'default') {
        applyDefaultButtonColors();
    }
    
    saveCustomization();
}

function setCustomBtnColor(type, color) {
    customization.customColors[type] = color;
    
    switch(type) {
        case 'number':
            document.documentElement.style.setProperty('--number-btn-color', color);
            break;
        case 'operator':
            document.documentElement.style.setProperty('--operator-btn-color', color);
            break;
        case 'equals':
            document.documentElement.style.setProperty('--equals-btn-color', color);
            break;
        case 'clear':
            document.documentElement.style.setProperty('--clear-btn-color', color);
            break;
    }
    
    saveCustomization();
}

// Apply Button & Font Customizations (does NOT affect background)
function applyCustomization() {
    const root = document.documentElement;
    const calcBody = document.getElementById('calcBody');
    
    // Button size
    root.style.setProperty('--button-size', customization.buttonSizeCustom + 'px');
    
    // Button shape
    calcBody.classList.remove('btn-shape-rounded', 'btn-shape-square', 'btn-shape-circle');
    calcBody.classList.add(`btn-shape-${customization.buttonShape}`);
    
    // Button effects
    calcBody.classList.toggle('btn-glow', customization.buttonGlow);
    calcBody.classList.toggle('btn-bounce', customization.buttonBounce);
    calcBody.classList.toggle('btn-3d', customization.button3D);
    
    // Font settings
    root.style.setProperty('--calc-font', customization.fontFamily);
    root.style.setProperty('--calc-font-size', customization.fontSize + 'px');
    root.style.setProperty('--calc-font-weight', customization.fontWeight === 'bold' ? '600' : '400');
    
    // Calculator scale
    root.style.setProperty('--calc-scale', customization.calcScale / 100);
    
    // Button theme (NOT background)
    calcBody.classList.remove('btn-theme-default', 'btn-theme-sunset', 'btn-theme-forest', 
                               'btn-theme-ocean', 'btn-theme-candy', 'btn-theme-midnight');
    if (customization.buttonTheme !== 'default') {
        calcBody.classList.add(`btn-theme-${customization.buttonTheme}`);
    } else {
        applyDefaultButtonColors();
    }
    
    // Custom colors
    root.style.setProperty('--number-btn-color', customization.customColors.number);
    root.style.setProperty('--operator-btn-color', customization.customColors.operator);
    root.style.setProperty('--equals-btn-color', customization.customColors.equals);
    root.style.setProperty('--clear-btn-color', customization.customColors.clear);
    
    // Calculator size
    if (!isFullscreen) {
        calculatorWrapper.classList.remove('calc-size-compact', 'calc-size-normal', 'calc-size-large');
        calculatorWrapper.classList.add(`calc-size-${customization.calcSize}`);
    }
}

// Apply Background Customization (separate function)
function applyBackgroundCustomization() {
    const root = document.documentElement;
    
    if (customization.bgType === 'color') {
        backgroundLayer.className = 'fixed inset-0 z-0 transition-all duration-500';
        backgroundLayer.style.background = customization.bgColor;
        customImageBg.classList.add('hidden');
    } else if (customization.bgType === 'gradient') {
        backgroundLayer.className = 'fixed inset-0 z-0 transition-all duration-500 gradient';
        backgroundLayer.style.background = customization.bgGradient;
        customImageBg.classList.add('hidden');
    } else if (customization.bgType === 'theme') {
        backgroundLayer.className = `fixed inset-0 z-0 transition-all duration-500 theme-${customization.bgTheme}`;
        backgroundLayer.style.background = '';
        customImageBg.classList.add('hidden');
    } else if (customization.bgType === 'image' && customization.bgImage) {
        customImageBg.style.backgroundImage = `url(${customization.bgImage})`;
        customImageBg.classList.remove('hidden');
        backgroundLayer.style.background = 'rgba(0,0,0,0.3)';
        document.getElementById('imageControls').classList.remove('hidden');
        root.style.setProperty('--bg-blur', customization.bgBlur + 'px');
        root.style.setProperty('--bg-opacity', customization.bgOpacity / 100);
    }
}

// ============================================
// Sound Functions
// ============================================

/**
 * Initialize the Web Audio API context
 */
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume if suspended (required for some browsers)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    return audioContext;
}

/**
 * Play a sound based on the current sound type
 */
function playSound(type = 'button') {
    if (!customization.soundEnabled) return;
    
    const ctx = initAudioContext();
    const volume = customization.soundVolume / 100;
    
    // Determine which sound to play
    let soundToPlay = customization.soundType;
    if (type === 'equals' && customization.equalsSound) {
        playEqualsSound(ctx, volume);
        return;
    } else if (type === 'error' && customization.errorSound) {
        playErrorSound(ctx, volume);
        return;
    } else if (type === 'clear' && customization.clearSound) {
        playClearSound(ctx, volume);
        return;
    }
    
    // Play the selected button sound
    switch (soundToPlay) {
        case 'click':
            playClickSound(ctx, volume);
            break;
        case 'pop':
            playPopSound(ctx, volume);
            break;
        case 'beep':
            playBeepSound(ctx, volume);
            break;
        case 'typewriter':
            playTypewriterSound(ctx, volume);
            break;
        case 'game':
            playGameSound(ctx, volume);
            break;
        case 'xylophone':
            playXylophoneSound(ctx, volume);
            break;
        default:
            playClickSound(ctx, volume);
    }
}

/**
 * Soft click sound
 */
function playClickSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
}

/**
 * Bubble pop sound
 */
function playPopSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
}

/**
 * Digital beep sound
 */
function playBeepSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'square';
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.08);
}

/**
 * Typewriter/mechanical key sound
 */
function playTypewriterSound(ctx, volume) {
    // Create noise for mechanical click
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume * 0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
}

/**
 * Retro game sound
 */
function playGameSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'square';
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // Quick pitch slide like old video games
    oscillator.frequency.setValueAtTime(300, ctx.currentTime);
    oscillator.frequency.setValueAtTime(600, ctx.currentTime + 0.03);
    oscillator.frequency.setValueAtTime(400, ctx.currentTime + 0.06);
    
    gainNode.gain.setValueAtTime(volume * 0.15, ctx.currentTime);
    gainNode.gain.setValueAtTime(volume * 0.15, ctx.currentTime + 0.06);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
}

/**
 * Xylophone/musical note sound
 */
function playXylophoneSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sine';
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // Random note from C major scale
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    
    oscillator.frequency.setValueAtTime(randomNote, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
}

/**
 * Special sound for equals button (success/result)
 */
function playEqualsSound(ctx, volume) {
    // Play a pleasant two-tone sound
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
    
    gainNode.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    
    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.2);
    osc2.stop(ctx.currentTime + 0.2);
}

/**
 * Error sound (buzzer)
 */
function playErrorSound(ctx, volume) {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sawtooth';
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(150, ctx.currentTime);
    oscillator.frequency.setValueAtTime(100, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
}

/**
 * Clear/swoosh sound
 */
function playClearSound(ctx, volume) {
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        const t = i / bufferSize;
        data[i] = (Math.random() * 2 - 1) * (1 - t) * Math.sin(t * Math.PI);
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.15);
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
}

/**
 * Test sound button
 */
function testSound() {
    playSound('button');
}

// Sound Setting Functions
function toggleSound(enabled) {
    customization.soundEnabled = enabled;
    
    const controls = ['volumeControl', 'soundTypeControl', 'specialSoundsControl', 'testSoundControl'];
    controls.forEach(id => {
        const el = document.getElementById(id);
        if (enabled) {
            el.classList.add('enabled');
            el.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            el.classList.remove('enabled');
            el.classList.add('opacity-50', 'pointer-events-none');
        }
    });
    
    saveCustomization();
    
    // Play a test sound when enabling
    if (enabled) {
        playSound('button');
    }
}

function setVolume(value) {
    customization.soundVolume = parseInt(value);
    document.getElementById('volumeValue').textContent = value + '%';
    saveCustomization();
}

function setSoundType(type) {
    customization.soundType = type;
    
    document.querySelectorAll('.sound-type-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sound === type);
    });
    
    saveCustomization();
    
    // Play the selected sound
    playSound('button');
}

function toggleEqualsSound(enabled) {
    customization.equalsSound = enabled;
    saveCustomization();
}

function toggleErrorSound(enabled) {
    customization.errorSound = enabled;
    saveCustomization();
}

function toggleClearSound(enabled) {
    customization.clearSound = enabled;
    saveCustomization();
}

// Reset All Settings
function resetAllSettings() {
    if (!confirm('Are you sure you want to reset all customizations?')) return;
    
    customization = {
        buttonSize: 'medium',
        buttonSizeCustom: 56,
        buttonShape: 'rounded',
        buttonGlow: false,
        buttonBounce: false,
        button3D: false,
        fontFamily: 'JetBrains Mono',
        fontSize: 16,
        fontWeight: 'bold',
        calcSize: 'normal',
        calcScale: 100,
        bgType: 'color',
        bgColor: isDarkMode ? '#111827' : '#f3f4f6',
        bgGradient: '',
        bgTheme: '',
        bgImage: '',
        bgBlur: 0,
        bgOpacity: 100,
        buttonTheme: 'default',
        customColors: {
            number: '#e5e7eb',
            operator: '#6366f1',
            equals: '#8b5cf6',
            clear: '#ef4444'
        },
        soundEnabled: false,
        soundVolume: 50,
        soundType: 'click',
        equalsSound: true,
        errorSound: true,
        clearSound: true
    };
    
    // Remove theme classes
    const calcBody = document.getElementById('calcBody');
    calcBody.classList.remove('btn-theme-sunset', 'btn-theme-forest', 'btn-theme-ocean', 
                               'btn-theme-candy', 'btn-theme-midnight');
    
    customImageBg.classList.add('hidden');
    document.getElementById('imageControls').classList.add('hidden');
    
    saveCustomization();
    applyCustomization();
    applyBackgroundCustomization(); // Reset background separately
    applyTheme();
    updateSettingsUI();
}

// ============================================
// Local Storage
// ============================================

function savePreferences() {
    const prefs = {
        isDarkMode: isDarkMode,
        currentMode: currentMode
    };
    localStorage.setItem('calciq_preferences', JSON.stringify(prefs));
}

function loadPreferences() {
    const prefs = localStorage.getItem('calciq_preferences');
    if (prefs) {
        const parsed = JSON.parse(prefs);
        isDarkMode = parsed.isDarkMode || false;
        currentMode = parsed.currentMode || 'basic';
    }
}

function saveHistory() {
    localStorage.setItem('calciq_history', JSON.stringify(calculationHistory));
}

function loadHistory() {
    const history = localStorage.getItem('calciq_history');
    if (history) {
        calculationHistory = JSON.parse(history);
        renderHistory();
    }
}

function saveCustomization() {
    localStorage.setItem('calciq_customization', JSON.stringify(customization));
}

function loadCustomization() {
    const saved = localStorage.getItem('calciq_customization');
    if (saved) {
        const parsed = JSON.parse(saved);
        customization = { ...customization, ...parsed };
    }
}

// ============================================
// Keyboard Support
// ============================================
document.addEventListener('keydown', (e) => {
    // Don't handle if settings is open
    if (!document.getElementById('settingsPanel').classList.contains('hidden')) return;
    
    if (e.key >= '0' && e.key <= '9') {
        inputNumber(e.key);
    } else if (e.key === '.') {
        inputDecimal();
    } else if (e.key === '+') {
        operator('+');
    } else if (e.key === '-') {
        operator('−');
    } else if (e.key === '*') {
        operator('×');
    } else if (e.key === '/') {
        e.preventDefault();
        operator('÷');
    } else if (e.key === '%') {
        operator('%');
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearAll();
    } else if (e.key === '(' || e.key === ')') {
        inputChar(e.key);
    }
    
    if (currentMode === 'scientific') {
        if (e.key === 's' && !e.ctrlKey) {
            scientific('sin');
        } else if (e.key === 'c' && !e.ctrlKey) {
            scientific('cos');
        } else if (e.key === 't') {
            scientific('tan');
        } else if (e.key === 'l') {
            scientific('log');
        } else if (e.key === 'n') {
            scientific('ln');
        } else if (e.key === 'r') {
            scientific('sqrt');
        } else if (e.key === 'p') {
            scientific('pi');
        } else if (e.key === 'e' && !e.ctrlKey) {
            scientific('e');
        } else if (e.key === '^') {
            scientific('power');
        }
    }
});

// ============================================
// Initialize Application on Load
// ============================================
init();