# 🎵 ZenWave - Advanced Music Player

A feature-rich music player web application with modern UI, visualizer, equalizer, and advanced features.

![ZenWave Music Player](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=400&fit=crop)

## 🚀 Features

### 🖥️ User Interface
- Modern, clean glassmorphism design
- Animated album cover with floating effect
- Song title, artist name, and album art display
- Real-time playback time and duration
- Fully responsive for desktop and mobile

### 🎮 Audio Controls
- Play/Pause, Next, Previous buttons
- Keyboard shortcuts (Space, Arrow keys, M, S, R, L)
- Playback state automatically updates UI

### 📊 Progress & Volume
- Interactive progress bar with seek functionality
- Draggable progress indicator
- Volume slider (0-100%)
- Mute/unmute toggle
- Visual volume percentage display

### 🔀 Shuffle & Repeat
- Shuffle mode for random playback
- Three repeat modes: None, Repeat All, Repeat One
- Visual indicators for active modes

### 📝 Playlist Management
- 8 pre-loaded sample songs with artwork
- Click any song to play instantly
- Currently playing track highlighted
- Auto-play next song feature
- Favorites filter option

### 💾 Persistent State (Local Storage)
- Remembers last played song
- Saves playback position
- Preserves volume level
- Stores theme preference
- Keeps favorite songs list
- Maintains shuffle/repeat settings

### 🎚️ Audio Equalizer
- Bass, Mid, Treble controls
- 5 Presets: Flat, Pop, Rock, Jazz, Classical
- Real-time audio processing via Web Audio API

### 📈 Audio Visualizer
- Three visualization modes: Bars, Wave, Circle
- Real-time audio analysis
- Fullscreen visualizer mode
- Gradient color effects

### 📝 Lyrics Display
- Synchronized lyrics panel
- Auto-scrolling to current lyric
- Highlighted active line
- Toggle lyrics on/off

### 🎨 Theme Customization
- Light and Dark mode toggle
- Smooth theme transitions
- Preferences saved to local storage

### ⏱️ Smart Features
- **Playback Speed**: 0.5x to 2x speed control
- **Sleep Timer**: 15, 30, 45, 60 minute options
- **Like/Favorite**: Heart songs and filter favorites
- **Mini Player**: Floating compact player mode

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `←` | Seek back 10 seconds |
| `→` | Seek forward 10 seconds |
| `Shift + ←` | Previous song |
| `Shift + →` | Next song |
| `↑` | Volume up |
| `↓` | Volume down |
| `M` | Mute/Unmute |
| `S` | Toggle Shuffle |
| `R` | Cycle Repeat modes |
| `L` | Like current song |
| `Esc` | Close modals/fullscreen |

## 📁 Project Structure

```
zenwave/
├── index.html      # Main HTML structure
├── styles.css      # CSS styles and animations
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🛠️ Tech Stack

- **HTML5** - Structure and semantics
- **CSS3** - Styling, animations, responsiveness
- **JavaScript (ES6+)** - Audio logic, state management
- **Tailwind CSS** - Utility-first styling
- **Web Audio API** - Equalizer & visualizer
- **Local Storage API** - Data persistence

## 🚀 Getting Started

### Option 1: Open directly
Simply open `index.html` in your web browser.

### Option 2: Use a local server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎵 Tamil Songs Playlist (21 Songs by Mood)

The playlist is organized by mood for easy browsing:

### ⚡ Energetic (5 Songs)
High-energy dance numbers and mass songs

| Song | Artist | Movie |
|------|--------|-------|
| Vaathi Coming | Anirudh Ravichander | Master |
| Rowdy Baby | Dhanush, Dhee | Maari 2 |
| Aalaporan Thamizhan | A.R. Rahman, Vijay | Mersal |
| Anjala | Anirudh Ravichander | Vedalam |
| Kutti Story | Anirudh Ravichander | Master |

### 😊 Happy (5 Songs)
Uplifting, joyful, and feel-good tracks

| Song | Artist | Movie |
|------|--------|-------|
| Why This Kolaveri Di | Dhanush | 3 (Moonu) |
| Ranjithame | Anirudh Ravichander | Vikram |
| Ilamai Thirumbudhe | A.R. Rahman | Petta |
| Oru Kili Oru Kili | Yuvan Shankar Raja | Paiyaa |
| Enna Nadanthalum | D. Imman, Haricharan | Meesaya Murukku |

### 😌 Chill (6 Songs)
Relaxing, soothing, and romantic melodies

| Song | Artist | Movie |
|------|--------|-------|
| Kaathalae Kaathalae | Govind Vasantha | 96 |
| Enna Solla Pogirai | A.R. Rahman, Sid Sriram | Kandukondain Kandukondain |
| Nenjukkul Peidhidum | Harris Jayaraj, Karthik | Vaaranam Aayiram |
| Kannamma | Santhosh Narayanan, Sid Sriram | Kaala |
| Visiri | Sid Sriram, Shashaa Tirupathi | Enai Noki Paayum Thota |
| Aaromale | A.R. Rahman, Alphons Joseph | Vinnaithaandi Varuvaayaa |

### 💔 Sad (5 Songs)
Emotional, heartfelt, and melancholic tracks

| Song | Artist | Movie |
|------|--------|-------|
| Thalli Pogathey | Sid Sriram | Achcham Yenbadhu Madamaiyada |
| Unakenna Venum Sollu | Yuvan Shankar Raja | Yennai Arindhaal |
| Po Nee Po | Sid Sriram | 3 (Moonu) |
| Ennodu Nee Irundhaal | A.R. Rahman, Sid Sriram | I |
| Neethanae En Ponvasantham | Ilaiyaraaja | Ninaithale Inikkum |

### 🎤 Featured Artists
- **Anirudh Ravichander** - Master, Vikram, Vedalam
- **A.R. Rahman** - Mersal, Petta, I, Vinnaithaandi Varuvaayaa
- **Sid Sriram** - Multiple emotional tracks
- **Yuvan Shankar Raja** - Paiyaa, Yennai Arindhaal
- **Dhanush** - 3, Maari 2
- **Harris Jayaraj** - Vaaranam Aayiram
- **Govind Vasantha** - 96
- **Ilaiyaraaja** - Classic emotional songs
- **D. Imman** - Meesaya Murukku

> **Note:** Audio files are demo samples. Replace with actual licensed Tamil songs for production use.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

> **Note**: Web Audio API features require a modern browser.

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ and 🎵 by ZenWave Team