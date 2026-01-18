# CalcIQ - Advanced Calculator with Full Customization

A professional-grade calculator web application with scientific functions, calculation history, modern UI, and extensive customization options.

![CalcIQ Calculator](https://img.shields.io/badge/Version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🎯 Features

### 🧮 Basic Calculator
- Arithmetic operations: + − × ÷
- Decimal support
- Clear (AC) and Delete (⌫)
- Toggle sign (±)
- Real-time input and result display

### 🔬 Scientific Mode
Toggle between Basic and Scientific modes for advanced calculations:

| Function | Description |
|----------|-------------|
| sin, cos, tan | Trigonometric functions (degrees) |
| log | Base-10 logarithm |
| ln | Natural logarithm |
| x² | Square |
| √x | Square root |
| xʸ | Power/Exponent |
| n! | Factorial |
| \|x\| | Absolute value |
| π | Pi constant |
| e | Euler's number |
| % | Percentage |

### 🕘 Calculation History
- Automatically saves all calculations
- Click any history item to reuse it
- Clear history button
- Persisted using localStorage
- Scrollable sidebar (desktop) / slide-out panel (mobile)

---

## 🎨 NEW! Customization Features

### 🔘 1. Button Size Editor
- **Presets:**
  - 👶 Small (little hands)
  - 👋 Medium (default)
  - 🧒 Large (easy tapping)
- **Custom slider:** 40px to 80px
- Live preview while adjusting

### 🔤 2. Font Style & Size Editor
- **Font size slider:** Small to Large (12px - 24px)
- **Kid-friendly fonts:**
  - Inter (default)
  - Comic Neue (Comic Sans style)
  - Poppins
  - Baloo 2 (Bubble font)
  - Bubblegum Sans
  - Fredoka (Rounded)
- **Font weight toggle:** Normal / Bold

### 📐 3. Calculator Size Controller
- **Size presets:**
  - Compact
  - Normal
  - Large
- **Custom scale slider:** 50% to 150%
- **Fullscreen mode** (toggle button)
- Auto-scale for tablets & mobiles

### 🌈 4. Background Changer
- **Solid colors:** 12 preset colors
- **Gradient backgrounds:** 8 beautiful gradients
- **Theme backgrounds:**
  - 🚀 Space (Stars & Galaxy)
  - 🌴 Jungle (Nature vibes)
  - 🍭 Candy (Sweet colors)
  - 🌊 Ocean (Deep blue)
- One-tap apply with preview

### 🖼️ 5. Custom Image Background
- Upload any image
- **Blur control:** 0px to 20px
- **Opacity control:** 20% to 100%
- Remove image button

### ✨ 6. Button Theme Editor
- **Color schemes:**
  - Default (Indigo/Purple)
  - Sunset (Orange/Red)
  - Forest (Green)
  - Ocean (Blue/Cyan)
  - Candy (Pink/Purple)
  - Midnight (Dark/Violet)
- **Button shapes:**
  - Rounded
  - Square
  - Circle
- **Effects:**
  - ✨ Glow effect
  - 🎾 Bounce animation
  - 📦 3D effect
- **Custom color pickers** for each button type

---

## ⌨️ Keyboard Shortcuts

### Basic Keys
| Key | Action |
|-----|--------|
| 0-9 | Input numbers |
| . | Decimal point |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Percentage |
| Enter or = | Calculate result |
| Backspace | Delete last digit |
| Escape | Clear all |
| ( ) | Parentheses |

### Scientific Keys (Scientific Mode only)
| Key | Action |
|-----|--------|
| s | sin |
| c | cos |
| t | tan |
| l | log |
| n | ln |
| r | √ (square root) |
| p | π (pi) |
| e | e (Euler's number) |
| ^ | Power (xʸ) |

---

## 📂 Project Structure

```
CalcIQ/
├── index.html      # Main HTML structure
├── style.css       # Styles with customization support
├── script.js       # Calculator logic & customization
└── README.md       # Documentation
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Use any local server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Animations, CSS Variables
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Google Fonts** - Multiple kid-friendly fonts

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### localStorage Keys
| Key | Description |
|-----|-------------|
| `calciq_preferences` | Theme and mode settings |
| `calciq_history` | Calculation history (max 50 items) |
| `calciq_customization` | All customization settings |

---

## 📝 Error Handling

The calculator gracefully handles:
- Division by zero → "Error"
- Square root of negative numbers → "Error"
- Logarithm of non-positive numbers → "Error"
- Tan of 90°, 270°, etc. → "Error"
- Factorial of negative/non-integer/large numbers → "Error"
- Floating point precision issues

---

## 🎨 Customization Guide

### Accessing Settings
Click the ⚙️ gear icon in the header to open the settings panel.

### Settings Tabs
1. **🔘 Buttons** - Size, shape, and effects
2. **🔤 Fonts** - Size, family, and weight
3. **📐 Size** - Calculator dimensions and scale
4. **🌈 Background** - Colors, gradients, themes, images
5. **✨ Themes** - Button color schemes

### Resetting Settings
Click "Reset All" in the settings footer to restore defaults.

---

## 📱 Responsive Design

- **Mobile:** Compact layout, touch-friendly buttons
- **Tablet:** Medium size, slide-out history
- **Desktop:** Full layout with sidebar history

---

## 📄 License

MIT License - feel free to use and modify for your projects.

---

## 🙏 Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: Custom SVG icons
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by CalcIQ Team

**Version 2.1** - Bug fix: Button/font customization no longer affects background color!