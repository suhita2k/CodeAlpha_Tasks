# 📷 Gallery Pro - Advanced Image Gallery

A modern, feature-rich Image Gallery Web Application with built-in image editing tools. Built with vanilla HTML, CSS, and JavaScript.

![Gallery Pro](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🖼️ Preview

```
┌─────────────────────────────────────────────────────────────┐
│  📷 Gallery Pro                    [Upload] [❤️] [🌙]       │
├─────────────────────────────────────────────────────────────┤
│  Filter: [All] [🌿Nature] [✈️Travel] [💻Tech] [🏔️Adventures]│
│          [👥People] [🐾Animal] [🏛️History] [🐦Bird]         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Image  │  │  Image  │  │  Image  │  │  Image  │        │
│  │    1    │  │    2    │  │    3    │  │    4    │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Image  │  │  Image  │  │  Image  │  │  Image  │        │
│  │    5    │  │    6    │  │    7    │  │    8    │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### 🧱 Core Features
- ✅ **Modern UI** - Clean, card-style gallery with CSS Grid/Flexbox
- ✅ **Dark/Light Mode** - Toggle themes with persistent storage
- ✅ **Lightbox Modal** - Full-screen image viewing
- ✅ **Keyboard Navigation** - Arrow keys, ESC support
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Smooth Animations** - Hover effects and transitions

### ✏️ Image Editing Tools
- ✅ **Crop** - Select and crop image areas
- ✅ **Rotate** - 90° left/right rotation
- ✅ **Flip** - Horizontal and vertical flipping
- ✅ **Zoom** - Zoom in/out controls
- ✅ **Filters** - Brightness, Contrast, Saturation, Blur
- ✅ **Presets** - Grayscale, Sepia, Invert
- ✅ **Drawing** - Freehand drawing with color picker
- ✅ **Eraser** - Remove drawings
- ✅ **Text Overlay** - Add text with custom fonts and colors

### 🗂️ Image Management
- ✅ **8 Categories** - Nature, Travel, Tech, Adventures, People, Animal, History, Bird
- ✅ **Category Filters** - Filter images by category
- ✅ **Upload Images** - Drag & drop or browse
- ✅ **Favorites** - Mark and filter favorite images
- ✅ **Delete Images** - Remove unwanted images
- ✅ **75 Sample Images** - Pre-loaded from Unsplash

### 💾 Save & History
- ✅ **Undo/Redo** - Full editing history
- ✅ **Save to Gallery** - Save edited images
- ✅ **Download** - Export as PNG

---

## 📁 Project Structure

```
gallery-pro/
│
├── index.html      # Main HTML structure
├── style.css       # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: VS Code with Live Server extension

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/yourusername/gallery-pro.git
   ```

2. **Navigate** to the project folder
   ```bash
   cd gallery-pro
   ```

3. **Open** the application (choose one method):

   **Method 1: Double-click**
   - Simply double-click `index.html`

   **Method 2: VS Code Live Server (Recommended)**
   - Open folder in VS Code
   - Right-click `index.html` → "Open with Live Server"

   **Method 3: Python Server**
   ```bash
   python -m http.server 8000
   # Open http://localhost:8000
   ```

   **Method 4: Node.js**
   ```bash
   npx serve
   # Open http://localhost:3000
   ```

---

## 🎮 Usage Guide

### Viewing Images
| Action | How To |
|--------|--------|
| View image | Click on any image |
| Next image | Click `❯` or press `→` |
| Previous image | Click `❮` or press `←` |
| Close lightbox | Click `✕` or press `ESC` |

### Managing Images
| Action | How To |
|--------|--------|
| Filter by category | Click category buttons |
| Add to favorites | Hover image → Click `🤍` |
| View favorites only | Click `❤️ Favorites` button |
| Delete image | Hover image → Click `🗑️` |
| Upload image | Click `➕ Upload` button |

### Editing Images
| Action | How To |
|--------|--------|
| Open editor | Hover image → Click `✏️` |
| Rotate | Click `↶` or `↷` buttons |
| Flip | Click `↔️` or `↕️` buttons |
| Crop | Click `✂️ Crop` → Drag selection → Apply |
| Adjust filters | Move sliders |
| Draw | Click `✏️ Draw` → Draw on image |
| Add text | Enter text → Click `➕ Add Text` |
| Undo | Click `↩️` or press `Ctrl+Z` |
| Redo | Click `↪️` or press `Ctrl+Y` |
| Reset | Click `🔄 Reset` |
| Save | Click `💾 Save` |
| Download | Click `⬇️ Download` |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous image (in lightbox) |
| `→` | Next image (in lightbox) |
| `ESC` | Close lightbox/editor |
| `Ctrl + Z` | Undo (in editor) |
| `Ctrl + Y` | Redo (in editor) |

---

## 🖼️ Image Categories

| Category | Count | Emoji |
|----------|-------|-------|
| Nature | 10 | 🌿 |
| Travel | 10 | ✈️ |
| Tech | 10 | 💻 |
| Adventures | 10 | 🏔️ |
| People | 5 | 👥 |
| Animal | 10 | 🐾 |
| History | 10 | 🏛️ |
| Bird | 10 | 🐦 |
| **Total** | **75** | 📷 |

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Styling, animations, Grid/Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Canvas API** - Image editing functionality

### Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not supported |

### Features Implementation
- CSS Custom Properties for theming
- LocalStorage for theme persistence
- HTML Canvas for image manipulation
- FileReader API for image uploads
- Blob API for image downloads

---

## 🎨 Customization

### Adding New Categories
1. Add filter button in `index.html`:
   ```html
   <button class="filter-btn" data-category="food">🍕 Food</button>
   ```

2. Add option in upload form:
   ```html
   <option value="food">🍕 Food</option>
   ```

3. Update emoji function in `script.js`:
   ```javascript
   const emojis = {
       // ... existing
       food: '🍕'
   };
   ```

### Adding New Images
Add to the `images` array in `script.js`:
```javascript
{
    id: 300,
    src: 'https://your-image-url.jpg',
    title: 'Image Title',
    category: 'nature',
    favorite: false
}
```

### Changing Theme Colors
Edit CSS variables in `style.css`:
```css
:root {
    --accent: #6366f1;        /* Primary color */
    --accent-hover: #4f46e5;  /* Hover color */
    --danger: #ef4444;        /* Delete/error color */
    --success: #22c55e;       /* Success color */
}
```

---

## 🐛 Troubleshooting

### Images Not Loading
- Check internet connection (images load from Unsplash)
- Use Live Server instead of opening file directly
- Check browser console for CORS errors

### Editor Not Working
- Ensure JavaScript is enabled
- Try a different browser
- Clear browser cache

### Slow Performance
- Reduce number of images
- Close other browser tabs
- Use a modern browser

---

## 📝 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2024 Gallery Pro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/gallery-pro](https://github.com/yourusername/gallery-pro)

---

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) - Beautiful free images
- [Picsum Photos](https://picsum.photos) - Random placeholder images
- [Google Fonts](https://fonts.google.com) - Web fonts

---

<p align="center">
  Made with ❤️ by Gallery Pro Team
</p>

<p align="center">
  ⭐ Star this repo if you found it helpful!
</p>