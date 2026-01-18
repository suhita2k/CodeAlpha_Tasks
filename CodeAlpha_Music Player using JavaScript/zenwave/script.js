/**
 * ============================================
 * ZenWave - Advanced Music Player
 * ============================================
 * A feature-rich music player with visualizer,
 * equalizer, lyrics, and persistent state.
 * ============================================
 */

// ============================================
// PLAYLIST DATA - Tamil Songs Collection
// Categorized by Mood: Happy, Chill, Energetic, Sad
// ============================================

// Mood definitions with colors and icons
const moodConfig = {
    all: { name: 'All Songs', icon: '🎵', color: '#8b5cf6' },
    energetic: { name: 'Energetic', icon: '⚡', color: '#ef4444' },
    happy: { name: 'Happy', icon: '😊', color: '#f59e0b' },
    chill: { name: 'Chill', icon: '😌', color: '#10b981' },
    sad: { name: 'Sad', icon: '💔', color: '#6366f1' }
};

const playlist = [
    // ============================================
    // 🔥 ENERGETIC SONGS - High energy, dance numbers
    // ============================================
    {
        id: 1,
        title: "Vaathi Coming",
        artist: "Anirudh Ravichander",
        album: "Master",
        mood: "energetic",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        duration: "4:15",
        lyrics: [
            { time: 0, text: "♪ Mass Intro ♪" },
            { time: 10, text: "Vaathi coming... Vaathi coming..." },
            { time: 18, text: "Thalapathy gethu than" },
            { time: 26, text: "Singam single ah thaan varum" },
            { time: 34, text: "Mass ah mass ah varom" },
            { time: 42, text: "Vaathi coming..." },
            { time: 50, text: "Thalapathy style gethu than" }
        ]
    },
    {
        id: 2,
        title: "Rowdy Baby",
        artist: "Dhanush, Dhee",
        album: "Maari 2",
        mood: "energetic",
        cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        duration: "4:10",
        lyrics: [
            { time: 0, text: "♪ Rowdy Intro Beat ♪" },
            { time: 8, text: "Rowdy baby rowdy baby" },
            { time: 16, text: "Nee ketta rowdy baby" },
            { time: 24, text: "Maari maari maari" },
            { time: 32, text: "En maari yaaru illa" },
            { time: 40, text: "Rowdy baby..." },
            { time: 48, text: "Nee oru crazy baby" }
        ]
    },
    {
        id: 3,
        title: "Aalaporan Thamizhan",
        artist: "A.R. Rahman, Vijay",
        album: "Mersal",
        mood: "energetic",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        duration: "5:12",
        lyrics: [
            { time: 0, text: "♪ Epic Intro ♪" },
            { time: 12, text: "Aalaporan Thamizhan..." },
            { time: 22, text: "Veera Thamizhan naan" },
            { time: 32, text: "Tamizh endru sollada" },
            { time: 42, text: "Thalai nimirndhu nillada" },
            { time: 52, text: "Aalaporan Thamizhan..." },
            { time: 62, text: "Pride of Tamil Nadu" }
        ]
    },
    {
        id: 4,
        title: "Anjala",
        artist: "Anirudh Ravichander",
        album: "Vedalam",
        mood: "energetic",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        duration: "3:45",
        lyrics: [
            { time: 0, text: "♪ Energetic Beat ♪" },
            { time: 8, text: "Anjala anjala" },
            { time: 16, text: "Thillalangadi" },
            { time: 24, text: "Aalaporaan style-u" },
            { time: 32, text: "Thala gethu thaan" },
            { time: 40, text: "Anjala anjala..." }
        ]
    },
    {
        id: 5,
        title: "Kutti Story",
        artist: "Anirudh Ravichander",
        album: "Master",
        mood: "energetic",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        duration: "3:55",
        lyrics: [
            { time: 0, text: "♪ Upbeat Intro ♪" },
            { time: 8, text: "Life-oda oru kutti story" },
            { time: 16, text: "Kekkanum na kekka sollu" },
            { time: 24, text: "Nee enna mattum paarunga" },
            { time: 32, text: "Life is beautiful" },
            { time: 40, text: "Kutti story..." }
        ]
    },

    // ============================================
    // 😊 HAPPY SONGS - Uplifting, joyful vibes
    // ============================================
    {
        id: 6,
        title: "Why This Kolaveri Di",
        artist: "Dhanush",
        album: "3 (Moonu)",
        mood: "happy",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        duration: "4:02",
        lyrics: [
            { time: 0, text: "♪ Soup song... ♪" },
            { time: 8, text: "Yo boys, I am singing song" },
            { time: 14, text: "Soup song... Flop song..." },
            { time: 20, text: "Why this kolaveri kolaveri kolaveri di" },
            { time: 28, text: "Why this kolaveri kolaveri kolaveri di" },
            { time: 36, text: "Rhythm correct..." },
            { time: 42, text: "Why this kolaveri kolaveri kolaveri di" }
        ]
    },
    {
        id: 7,
        title: "Ranjithame",
        artist: "Anirudh Ravichander",
        album: "Vikram",
        mood: "happy",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        duration: "3:58",
        lyrics: [
            { time: 0, text: "♪ Hey hey hey... ♪" },
            { time: 8, text: "Ranjithame Ranjithame" },
            { time: 16, text: "En mela un aasai theriyum" },
            { time: 24, text: "Ranjithame Ranjithame" },
            { time: 32, text: "Kadhal varum pothu sollama varuma" },
            { time: 40, text: "Ranjithame..." },
            { time: 48, text: "Dance with me tonight..." }
        ]
    },
    {
        id: 8,
        title: "Ilamai Thirumbudhe",
        artist: "A.R. Rahman",
        album: "Petta",
        mood: "happy",
        cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        duration: "3:52",
        lyrics: [
            { time: 0, text: "♪ Peppy Intro ♪" },
            { time: 8, text: "Ilamai thirumbudhe" },
            { time: 16, text: "Kadhal varum azhage" },
            { time: 24, text: "Nee parthaal pogudhe" },
            { time: 32, text: "En manam thullum" },
            { time: 40, text: "Ilamai thirumbudhe..." }
        ]
    },
    {
        id: 9,
        title: "Oru Kili Oru Kili",
        artist: "Yuvan Shankar Raja",
        album: "Paiyaa",
        mood: "happy",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        duration: "4:05",
        lyrics: [
            { time: 0, text: "♪ Chirpy Tune ♪" },
            { time: 10, text: "Oru kili oru kili" },
            { time: 18, text: "Un azhagai parthen" },
            { time: 26, text: "Manam magizhndhu" },
            { time: 34, text: "Thulli kuthikudhu" },
            { time: 42, text: "Oru kili oru kili..." }
        ]
    },
    {
        id: 10,
        title: "Enna Nadanthalum",
        artist: "D. Imman, Haricharan",
        album: "Meesaya Murukku",
        mood: "happy",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        duration: "4:32",
        lyrics: [
            { time: 0, text: "♪ Inspirational Start ♪" },
            { time: 10, text: "Enna nadanthalum" },
            { time: 20, text: "Thunindhu nillu" },
            { time: 30, text: "Vizhundhalum ezhundhu" },
            { time: 40, text: "Mendum nadam podu" },
            { time: 50, text: "Enna nadanthalum..." }
        ]
    },

    // ============================================
    // 😌 CHILL SONGS - Relaxing, soothing melodies
    // ============================================
    {
        id: 11,
        title: "Kaathalae Kaathalae",
        artist: "Govind Vasantha",
        album: "96",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        duration: "5:25",
        lyrics: [
            { time: 0, text: "♪ Melodious Piano Intro ♪" },
            { time: 15, text: "Kaathalae kaathalae" },
            { time: 25, text: "Nee enna venna sollu" },
            { time: 35, text: "Unna marakka mudiyala" },
            { time: 45, text: "En nenjil nee thaan" },
            { time: 55, text: "Kaathalae kaathalae..." },
            { time: 65, text: "My first and last love" }
        ]
    },
    {
        id: 12,
        title: "Enna Solla Pogirai",
        artist: "A.R. Rahman, Sid Sriram",
        album: "Kandukondain Kandukondain",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        duration: "5:45",
        lyrics: [
            { time: 0, text: "♪ Soulful String Intro ♪" },
            { time: 18, text: "Enna solla pogirai" },
            { time: 28, text: "En kadhal solla pogirai" },
            { time: 38, text: "Enna kanna parkirai" },
            { time: 48, text: "En manam thirudi parkirai" },
            { time: 58, text: "Enna solla pogirai..." }
        ]
    },
    {
        id: 13,
        title: "Nenjukkul Peidhidum",
        artist: "Harris Jayaraj, Karthik",
        album: "Vaaranam Aayiram",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        duration: "5:30",
        lyrics: [
            { time: 0, text: "♪ Romantic Melody ♪" },
            { time: 15, text: "Nenjukkul peidhidum" },
            { time: 25, text: "Maamazhai thuligalai" },
            { time: 35, text: "Nee vandhai... en vazhvil" },
            { time: 45, text: "Oru pudhiya kanavai" },
            { time: 55, text: "Nenjukkul peidhidum..." }
        ]
    },
    {
        id: 14,
        title: "Kannamma",
        artist: "Santhosh Narayanan, Sid Sriram",
        album: "Kaala",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        duration: "4:38",
        lyrics: [
            { time: 0, text: "♪ Gentle Guitar Intro ♪" },
            { time: 12, text: "Kannamma Kannamma" },
            { time: 22, text: "En kadhal solla" },
            { time: 32, text: "Kanna irandil nee thaan" },
            { time: 42, text: "En uyir neeyae" },
            { time: 52, text: "Kannamma..." }
        ]
    },
    {
        id: 15,
        title: "Visiri",
        artist: "Sid Sriram, Shashaa Tirupathi",
        album: "Enai Noki Paayum Thota",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        duration: "4:48",
        lyrics: [
            { time: 0, text: "♪ Soulful Melody ♪" },
            { time: 12, text: "Visiri visiri" },
            { time: 22, text: "En manam suzhala" },
            { time: 32, text: "Unnai paartha pin" },
            { time: 42, text: "Kaadhal vandhadhe" },
            { time: 52, text: "Visiri visiri..." }
        ]
    },
    {
        id: 16,
        title: "Aaromale",
        artist: "A.R. Rahman, Alphons Joseph",
        album: "Ek Deewana Tha / Vinnaithaandi Varuvaayaa",
        mood: "chill",
        cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        duration: "5:10",
        lyrics: [
            { time: 0, text: "♪ Magical Intro ♪" },
            { time: 15, text: "Aaromale aaromale" },
            { time: 25, text: "Kadhal seivom endru" },
            { time: 35, text: "Un kannil naan kanden" },
            { time: 45, text: "En vazhkai azhagu" },
            { time: 55, text: "Aaromale..." }
        ]
    },

    // ============================================
    // 💔 SAD SONGS - Emotional, heartfelt melodies
    // ============================================
    {
        id: 17,
        title: "Thalli Pogathey",
        artist: "Sid Sriram",
        album: "Achcham Yenbadhu Madamaiyada",
        mood: "sad",
        cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        duration: "5:15",
        lyrics: [
            { time: 0, text: "♪ Emotional Intro ♪" },
            { time: 14, text: "Thalli pogathey" },
            { time: 24, text: "En kadhal neeyae" },
            { time: 34, text: "Maranthu pogathey" },
            { time: 44, text: "En uyir neeyae" },
            { time: 54, text: "Thalli pogathey..." },
            { time: 64, text: "Don't go away from me" }
        ]
    },
    {
        id: 18,
        title: "Unakenna Venum Sollu",
        artist: "Yuvan Shankar Raja",
        album: "Yennai Arindhaal",
        mood: "sad",
        cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        duration: "4:22",
        lyrics: [
            { time: 0, text: "♪ Soft Melody Start ♪" },
            { time: 10, text: "Unakenna venum sollu" },
            { time: 20, text: "En uyire tharen" },
            { time: 30, text: "Unnai thedi vandhen" },
            { time: 40, text: "En kanave neeyae" },
            { time: 50, text: "Unakenna venum sollu..." }
        ]
    },
    {
        id: 19,
        title: "Po Nee Po",
        artist: "Sid Sriram",
        album: "3 (Moonu)",
        mood: "sad",
        cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        duration: "4:45",
        lyrics: [
            { time: 0, text: "♪ Heartbreaking Melody ♪" },
            { time: 12, text: "Po nee po... po nee po" },
            { time: 22, text: "En anbe pogathey" },
            { time: 32, text: "Nee indri naan illai" },
            { time: 42, text: "Un kooda naan illai" },
            { time: 52, text: "Po nee po..." }
        ]
    },
    {
        id: 20,
        title: "Ennodu Nee Irundhaal",
        artist: "A.R. Rahman, Sid Sriram",
        album: "I",
        mood: "sad",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        duration: "5:35",
        lyrics: [
            { time: 0, text: "♪ Melancholic Piano ♪" },
            { time: 15, text: "Ennodu nee irundhaal" },
            { time: 25, text: "Naan pala aaguvein" },
            { time: 35, text: "Un paarvai padumbothu" },
            { time: 45, text: "Naan thani aaguvein" },
            { time: 55, text: "Ennodu nee irundhaal..." }
        ]
    },
    {
        id: 21,
        title: "Neethanae En Ponvasantham",
        artist: "Ilaiyaraaja",
        album: "Ninaithale Inikkum",
        mood: "sad",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        duration: "5:20",
        lyrics: [
            { time: 0, text: "♪ Classic Emotional Tune ♪" },
            { time: 15, text: "Neethanae en ponvasantham" },
            { time: 25, text: "Nee illai endral" },
            { time: 35, text: "Naan illai inil" },
            { time: 45, text: "En vazhkai veruthu" },
            { time: 55, text: "Neethanae..." }
        ]
    }
];

// ============================================
// APPLICATION STATE
// ============================================
let state = {
    currentSongIndex: 0,
    isPlaying: false,
    isShuffle: false,
    repeatMode: 'none', // none, one, all
    volume: 80,
    isMuted: false,
    playbackSpeed: 1,
    favorites: [],
    theme: 'dark',
    sleepTimer: null,
    sleepTimerRemaining: 0,
    showFavoritesOnly: false,
    currentMoodFilter: 'all', // all, energetic, happy, chill, sad
    visualizerType: 'bars',
    eqSettings: { bass: 0, mid: 0, treble: 0 }
};

// ============================================
// DOM ELEMENTS
// ============================================
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const muteBtn = document.getElementById('muteBtn');
const volumeIcon = document.getElementById('volumeIcon');
const muteIcon = document.getElementById('muteIcon');
const albumCover = document.getElementById('albumCover');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const playlistContainer = document.getElementById('playlist');
const likeBtn = document.getElementById('likeBtn');
const themeToggle = document.getElementById('themeToggle');
const playbackSpeedBtn = document.getElementById('playbackSpeed');
const playerContainer = document.getElementById('playerContainer');
const playingIndicator = document.getElementById('playingIndicator');

// ============================================
// WEB AUDIO API VARIABLES
// ============================================
let audioContext, analyser, source, gainNode;
let bassFilter, midFilter, trebleFilter;
let isAudioContextInitialized = false;

// ============================================
// INITIALIZATION
// ============================================
function init() {
    loadState();
    renderPlaylist();
    loadSong(state.currentSongIndex);
    setupEventListeners();
    applyTheme();
    updateUIState();
}

// ============================================
// LOCAL STORAGE FUNCTIONS
// ============================================

/**
 * Load saved state from localStorage
 */
function loadState() {
    const savedState = localStorage.getItem('zenwave_state');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        state = { ...state, ...parsed };
    }
}

/**
 * Save current state to localStorage
 */
function saveState() {
    const toSave = {
        currentSongIndex: state.currentSongIndex,
        volume: state.volume,
        isMuted: state.isMuted,
        favorites: state.favorites,
        theme: state.theme,
        playbackSpeed: state.playbackSpeed,
        isShuffle: state.isShuffle,
        repeatMode: state.repeatMode,
        eqSettings: state.eqSettings,
        currentMoodFilter: state.currentMoodFilter,
        lastPosition: audio.currentTime
    };
    localStorage.setItem('zenwave_state', JSON.stringify(toSave));
}

// ============================================
// AUDIO CONTEXT SETUP
// ============================================

/**
 * Initialize Web Audio API context and nodes
 */
function initAudioContext() {
    if (isAudioContextInitialized) return;
    
    // Create audio context
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    // Create gain node for volume control
    gainNode = audioContext.createGain();
    
    // Create EQ Filters
    bassFilter = audioContext.createBiquadFilter();
    bassFilter.type = 'lowshelf';
    bassFilter.frequency.value = 200;
    
    midFilter = audioContext.createBiquadFilter();
    midFilter.type = 'peaking';
    midFilter.frequency.value = 1000;
    midFilter.Q.value = 1;
    
    trebleFilter = audioContext.createBiquadFilter();
    trebleFilter.type = 'highshelf';
    trebleFilter.frequency.value = 3000;
    
    // Connect audio nodes
    source = audioContext.createMediaElementSource(audio);
    source.connect(bassFilter);
    bassFilter.connect(midFilter);
    midFilter.connect(trebleFilter);
    trebleFilter.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    isAudioContextInitialized = true;
    
    // Apply saved EQ settings
    applyEQ();
    startVisualizer();
}

// ============================================
// SONG MANAGEMENT
// ============================================

/**
 * Load a song by index
 * @param {number} index - Index of song in playlist
 */
function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    albumCover.src = song.cover;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    
    // Update mini player
    document.getElementById('miniAlbum').src = song.cover;
    document.getElementById('miniTitle').textContent = song.title;
    document.getElementById('miniArtist').textContent = song.artist;
    
    // Update fullscreen visualizer
    document.getElementById('fsAlbum').src = song.cover;
    document.getElementById('fsTitle').textContent = song.title;
    document.getElementById('fsArtist').textContent = song.artist;
    
    // Update playlist UI
    updatePlaylistUI();
    updateLikeButton();
    loadLyrics(song);
    
    // Apply volume and speed
    audio.volume = state.isMuted ? 0 : state.volume / 100;
    audio.playbackRate = state.playbackSpeed;
    
    // Restore position if available
    const savedState = JSON.parse(localStorage.getItem('zenwave_state') || '{}');
    if (savedState.lastPosition && savedState.currentSongIndex === index) {
        audio.currentTime = savedState.lastPosition;
    }
}

/**
 * Start playing the current song
 */
function playSong() {
    initAudioContext();
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    audio.play();
    state.isPlaying = true;
    updatePlayButton();
    playerContainer.classList.add('playing');
    playingIndicator.classList.remove('hidden');
}

/**
 * Pause the current song
 */
function pauseSong() {
    audio.pause();
    state.isPlaying = false;
    updatePlayButton();
    playerContainer.classList.remove('playing');
    playingIndicator.classList.add('hidden');
}

/**
 * Toggle play/pause state
 */
function togglePlay() {
    if (state.isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

/**
 * Play the next song in playlist
 */
function nextSong() {
    if (state.isShuffle) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * playlist.length);
        } while (newIndex === state.currentSongIndex && playlist.length > 1);
        state.currentSongIndex = newIndex;
    } else {
        state.currentSongIndex = (state.currentSongIndex + 1) % playlist.length;
    }
    loadSong(state.currentSongIndex);
    if (state.isPlaying) playSong();
    saveState();
}

/**
 * Play the previous song in playlist
 */
function prevSong() {
    if (audio.currentTime > 3) {
        // If more than 3 seconds in, restart current song
        audio.currentTime = 0;
    } else {
        state.currentSongIndex = (state.currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(state.currentSongIndex);
        if (state.isPlaying) playSong();
    }
    saveState();
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================

/**
 * Update play/pause button icons
 */
function updatePlayButton() {
    if (state.isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        document.getElementById('miniPlayIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        document.getElementById('miniPlayIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
}

/**
 * Update progress bar and time display
 */
function updateProgress() {
    const percent = (audio.currentTime / audio.duration) * 100 || 0;
    progressFill.style.width = `${percent}%`;
    progressThumb.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    
    // Mini player progress
    document.getElementById('miniProgressFill').style.width = `${percent}%`;
    
    // Update lyrics
    updateActiveLyric();
}

/**
 * Format seconds to MM:SS
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Update playlist item styling
 */
function updatePlaylistUI() {
    const items = playlistContainer.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        if (index === state.currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/**
 * Get filtered playlist based on current filters
 */
function getFilteredPlaylist() {
    let filtered = playlist;
    
    // Filter by mood
    if (state.currentMoodFilter !== 'all') {
        filtered = filtered.filter(song => song.mood === state.currentMoodFilter);
    }
    
    // Filter by favorites
    if (state.showFavoritesOnly) {
        filtered = filtered.filter(song => state.favorites.includes(song.id));
    }
    
    return filtered;
}

/**
 * Render the playlist in the DOM
 */
function renderPlaylist() {
    const songsToShow = getFilteredPlaylist();
    
    // Group songs by mood for display
    const moodGroups = {};
    songsToShow.forEach(song => {
        if (!moodGroups[song.mood]) {
            moodGroups[song.mood] = [];
        }
        moodGroups[song.mood].push(song);
    });
    
    let html = '';
    
    // If showing all moods, group them
    if (state.currentMoodFilter === 'all' && !state.showFavoritesOnly) {
        const moodOrder = ['energetic', 'happy', 'chill', 'sad'];
        moodOrder.forEach(mood => {
            if (moodGroups[mood] && moodGroups[mood].length > 0) {
                const config = moodConfig[mood];
                html += `
                    <div class="mood-header flex items-center gap-2 px-3 py-2 mt-4 first:mt-0">
                        <span class="text-lg">${config.icon}</span>
                        <span class="text-sm font-semibold uppercase tracking-wide" style="color: ${config.color}">${config.name}</span>
                        <span class="text-xs opacity-50">(${moodGroups[mood].length})</span>
                    </div>
                `;
                moodGroups[mood].forEach(song => {
                    html += renderPlaylistItem(song);
                });
            }
        });
    } else {
        // Show flat list when filtered
        songsToShow.forEach(song => {
            html += renderPlaylistItem(song);
        });
    }
    
    if (songsToShow.length === 0) {
        html = `
            <div class="text-center py-8 opacity-50">
                <p class="text-lg">No songs found</p>
                <p class="text-sm">Try a different filter</p>
            </div>
        `;
    }
    
    playlistContainer.innerHTML = html;

    // Add click handlers to playlist items
    playlistContainer.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            state.currentSongIndex = index;
            loadSong(index);
            playSong();
            saveState();
        });
    });
}

/**
 * Render a single playlist item
 */
function renderPlaylistItem(song) {
    const actualIndex = playlist.findIndex(s => s.id === song.id);
    const isFavorite = state.favorites.includes(song.id);
    const isActive = actualIndex === state.currentSongIndex;
    const config = moodConfig[song.mood];
    
    return `
        <div class="playlist-item ${isActive ? 'active' : ''} flex items-center gap-3 p-3 rounded-xl cursor-pointer" data-index="${actualIndex}">
            <div class="relative">
                <img src="${song.cover}" alt="${song.title}" class="w-12 h-12 rounded-lg object-cover">
                <span class="absolute -bottom-1 -right-1 text-xs" title="${config.name}">${config.icon}</span>
            </div>
            <div class="flex-1 min-w-0">
                <p class="font-medium truncate">${song.title}</p>
                <p class="text-sm opacity-70 truncate">${song.artist}</p>
            </div>
            <span class="text-sm opacity-50">${song.duration}</span>
            ${isFavorite ? '<svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' : ''}
        </div>
    `;
}

/**
 * Update all UI elements based on current state
 */
function updateUIState() {
    // Shuffle button
    if (state.isShuffle) {
        shuffleBtn.classList.add('mode-active');
    } else {
        shuffleBtn.classList.remove('mode-active');
    }
    
    // Repeat button
    repeatBtn.classList.remove('mode-active');
    document.getElementById('repeatOneIndicator').classList.add('hidden');
    if (state.repeatMode === 'one') {
        repeatBtn.classList.add('mode-active');
        document.getElementById('repeatOneIndicator').classList.remove('hidden');
    } else if (state.repeatMode === 'all') {
        repeatBtn.classList.add('mode-active');
    }
    
    // Volume
    volumeSlider.value = state.volume;
    volumeValue.textContent = `${state.volume}%`;
    audio.volume = state.isMuted ? 0 : state.volume / 100;
    
    if (state.isMuted) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
    }
    
    // Playback speed
    playbackSpeedBtn.textContent = `${state.playbackSpeed}x`;
    
    // Favorites filter
    if (state.showFavoritesOnly) {
        document.getElementById('favoritesFilter').classList.add('mode-active');
    } else {
        document.getElementById('favoritesFilter').classList.remove('mode-active');
    }
    
    // Mood filter buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
        if (btn.dataset.mood === state.currentMoodFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Update like button based on current song's favorite status
 */
function updateLikeButton() {
    const song = playlist[state.currentSongIndex];
    if (state.favorites.includes(song.id)) {
        likeBtn.classList.add('liked');
        likeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
    } else {
        likeBtn.classList.remove('liked');
        likeBtn.querySelector('svg').setAttribute('fill', 'none');
    }
}

// ============================================
// THEME FUNCTIONS
// ============================================

/**
 * Apply the current theme to the document
 */
function applyTheme() {
    if (state.theme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeIcon').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
    } else {
        document.body.classList.remove('light-theme');
        document.getElementById('themeIcon').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
}

// ============================================
// LYRICS FUNCTIONS
// ============================================

/**
 * Load lyrics for a song
 * @param {object} song - Song object with lyrics
 */
function loadLyrics(song) {
    const lyricsPanel = document.getElementById('lyricsPanel');
    if (song.lyrics && song.lyrics.length > 0) {
        lyricsPanel.innerHTML = song.lyrics.map((line, index) => 
            `<p class="lyrics-line" data-time="${line.time}">${line.text}</p>`
        ).join('');
    } else {
        lyricsPanel.innerHTML = '<p class="lyrics-line opacity-50">No lyrics available</p>';
    }
}

/**
 * Highlight the current lyric line based on playback time
 */
function updateActiveLyric() {
    const song = playlist[state.currentSongIndex];
    if (!song.lyrics) return;
    
    const currentTime = audio.currentTime;
    const lines = document.querySelectorAll('.lyrics-line');
    
    let activeIndex = 0;
    song.lyrics.forEach((line, index) => {
        if (currentTime >= line.time) {
            activeIndex = index;
        }
    });
    
    lines.forEach((line, index) => {
        if (index === activeIndex) {
            line.classList.add('active');
            line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            line.classList.remove('active');
        }
    });
}

// ============================================
// EQUALIZER FUNCTIONS
// ============================================

/**
 * Apply EQ settings to audio filters
 */
function applyEQ() {
    if (!isAudioContextInitialized) return;
    bassFilter.gain.value = state.eqSettings.bass;
    midFilter.gain.value = state.eqSettings.mid;
    trebleFilter.gain.value = state.eqSettings.treble;
}

// EQ Presets
const eqPresets = {
    flat: { bass: 0, mid: 0, treble: 0 },
    pop: { bass: 2, mid: 4, treble: 3 },
    rock: { bass: 5, mid: -1, treble: 4 },
    jazz: { bass: 3, mid: 2, treble: -2 },
    classical: { bass: 0, mid: 0, treble: 4 }
};

/**
 * Apply an EQ preset
 * @param {string} preset - Preset name
 */
function applyEQPreset(preset) {
    state.eqSettings = { ...eqPresets[preset] };
    document.getElementById('eqBass').value = state.eqSettings.bass;
    document.getElementById('eqMid').value = state.eqSettings.mid;
    document.getElementById('eqTreble').value = state.eqSettings.treble;
    applyEQ();
    saveState();
    
    // Update preset button styles
    document.querySelectorAll('.eq-preset').forEach(btn => {
        if (btn.dataset.preset === preset) {
            btn.classList.add('bg-purple-500/20', 'text-purple-400');
            btn.classList.remove('opacity-50');
        } else {
            btn.classList.remove('bg-purple-500/20', 'text-purple-400');
            btn.classList.add('opacity-50');
        }
    });
}

// ============================================
// VISUALIZER FUNCTIONS
// ============================================

/**
 * Start the audio visualizer animation loop
 */
function startVisualizer() {
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');
    const fullCanvas = document.getElementById('fullscreenCanvas');
    const fullCtx = fullCanvas.getContext('2d');
    
    function draw() {
        requestAnimationFrame(draw);
        
        if (!analyser) return;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
        
        // Draw on regular canvas
        drawVisualizer(canvas, ctx, dataArray, bufferLength);
        
        // Draw on fullscreen canvas if active
        if (document.getElementById('fullscreenViz').classList.contains('active')) {
            fullCanvas.width = window.innerWidth;
            fullCanvas.height = window.innerHeight;
            drawVisualizer(fullCanvas, fullCtx, dataArray, bufferLength, true);
        }
    }
    
    draw();
}

/**
 * Draw visualizer on a canvas
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {Uint8Array} dataArray - Frequency data
 * @param {number} bufferLength - Length of data array
 * @param {boolean} isFullscreen - Whether drawing on fullscreen canvas
 */
function drawVisualizer(canvas, ctx, dataArray, bufferLength, isFullscreen = false) {
    canvas.width = canvas.offsetWidth * (isFullscreen ? 1 : 2);
    canvas.height = canvas.offsetHeight * (isFullscreen ? 1 : 2);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create gradient for visualizer
    const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
    gradient.addColorStop(0, '#8b5cf6');
    gradient.addColorStop(0.5, '#a855f7');
    gradient.addColorStop(1, '#ec4899');
    
    if (state.visualizerType === 'bars') {
        // Bar visualizer
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let x = 0;
        
        for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(x, canvas.height - barHeight, barWidth - 2, barHeight, 4);
            ctx.fill();
            
            x += barWidth;
        }
    } else if (state.visualizerType === 'wave') {
        // Wave visualizer
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        
        const sliceWidth = canvas.width / bufferLength;
        let x = 0;
        
        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvas.height) / 2;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        ctx.stroke();
    } else if (state.visualizerType === 'circle') {
        // Circular visualizer
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) / 4;
        
        for (let i = 0; i < bufferLength; i++) {
            const angle = (i / bufferLength) * Math.PI * 2;
            const barHeight = (dataArray[i] / 255) * radius;
            
            const x1 = centerX + Math.cos(angle) * radius;
            const y1 = centerY + Math.sin(angle) * radius;
            const x2 = centerX + Math.cos(angle) * (radius + barHeight);
            const y2 = centerY + Math.sin(angle) * (radius + barHeight);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }
}

// ============================================
// SLEEP TIMER FUNCTIONS
// ============================================

/**
 * Set or cancel the sleep timer
 * @param {number} minutes - Minutes until sleep (0 to cancel)
 */
function setSleepTimer(minutes) {
    // Clear existing timer
    if (state.sleepTimer) {
        clearInterval(state.sleepTimer);
        state.sleepTimer = null;
    }
    
    if (minutes === 0) {
        state.sleepTimerRemaining = 0;
        document.getElementById('sleepTimerBtn').classList.remove('sleep-timer-active');
        document.getElementById('sleepTimerStatus').textContent = 'Timer cancelled';
        return;
    }
    
    state.sleepTimerRemaining = minutes * 60;
    document.getElementById('sleepTimerBtn').classList.add('sleep-timer-active');
    
    state.sleepTimer = setInterval(() => {
        state.sleepTimerRemaining--;
        const mins = Math.floor(state.sleepTimerRemaining / 60);
        const secs = state.sleepTimerRemaining % 60;
        document.getElementById('sleepTimerStatus').textContent = `Stopping in ${mins}:${secs.toString().padStart(2, '0')}`;
        
        if (state.sleepTimerRemaining <= 0) {
            clearInterval(state.sleepTimer);
            state.sleepTimer = null;
            pauseSong();
            document.getElementById('sleepTimerBtn').classList.remove('sleep-timer-active');
            document.getElementById('sleepTimerStatus').textContent = 'Timer finished - Music stopped';
        }
    }, 1000);
    
    document.getElementById('sleepTimerStatus').textContent = `Timer set for ${minutes} minutes`;
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // ========== Play Controls ==========
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    
    // Mini player controls
    document.getElementById('miniPlay').addEventListener('click', togglePlay);
    document.getElementById('miniPrev').addEventListener('click', prevSong);
    document.getElementById('miniNext').addEventListener('click', nextSong);
    
    // ========== Shuffle & Repeat ==========
    shuffleBtn.addEventListener('click', () => {
        state.isShuffle = !state.isShuffle;
        updateUIState();
        saveState();
    });
    
    repeatBtn.addEventListener('click', () => {
        if (state.repeatMode === 'none') state.repeatMode = 'all';
        else if (state.repeatMode === 'all') state.repeatMode = 'one';
        else state.repeatMode = 'none';
        updateUIState();
        saveState();
    });
    
    // ========== Progress Bar ==========
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    document.getElementById('miniProgress').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // ========== Volume ==========
    volumeSlider.addEventListener('input', (e) => {
        state.volume = parseInt(e.target.value);
        state.isMuted = false;
        audio.volume = state.volume / 100;
        updateUIState();
        saveState();
    });
    
    muteBtn.addEventListener('click', () => {
        state.isMuted = !state.isMuted;
        audio.volume = state.isMuted ? 0 : state.volume / 100;
        updateUIState();
        saveState();
    });
    
    // ========== Audio Events ==========
    audio.addEventListener('timeupdate', () => {
        updateProgress();
        saveState();
    });
    
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });
    
    audio.addEventListener('ended', () => {
        if (state.repeatMode === 'one') {
            audio.currentTime = 0;
            playSong();
        } else if (state.repeatMode === 'all' || state.currentSongIndex < playlist.length - 1) {
            nextSong();
        } else {
            pauseSong();
        }
    });
    
    // ========== Like Button ==========
    likeBtn.addEventListener('click', () => {
        const song = playlist[state.currentSongIndex];
        const index = state.favorites.indexOf(song.id);
        if (index === -1) {
            state.favorites.push(song.id);
        } else {
            state.favorites.splice(index, 1);
        }
        updateLikeButton();
        renderPlaylist();
        saveState();
    });
    
    // ========== Theme Toggle ==========
    themeToggle.addEventListener('click', toggleTheme);
    
    // ========== Tabs ==========
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(`${btn.dataset.tab}Tab`).classList.remove('hidden');
        });
    });
    
    // ========== Visualizer Types ==========
    document.querySelectorAll('.viz-type').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.viz-type').forEach(b => {
                b.classList.remove('bg-purple-500/20', 'text-purple-400');
                b.classList.add('opacity-50');
            });
            btn.classList.add('bg-purple-500/20', 'text-purple-400');
            btn.classList.remove('opacity-50');
            state.visualizerType = btn.dataset.type;
        });
    });
    
    // ========== Equalizer Sliders ==========
    ['Bass', 'Mid', 'Treble'].forEach(band => {
        document.getElementById(`eq${band}`).addEventListener('input', (e) => {
            state.eqSettings[band.toLowerCase()] = parseInt(e.target.value);
            applyEQ();
            saveState();
        });
    });
    
    // ========== EQ Presets ==========
    document.querySelectorAll('.eq-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            applyEQPreset(btn.dataset.preset);
        });
    });
    
    // ========== Playback Speed ==========
    playbackSpeedBtn.addEventListener('click', () => {
        document.getElementById('speedModal').classList.remove('hidden');
    });
    
    document.querySelectorAll('.speed-option').forEach(btn => {
        btn.addEventListener('click', () => {
            state.playbackSpeed = parseFloat(btn.dataset.speed);
            audio.playbackRate = state.playbackSpeed;
            playbackSpeedBtn.textContent = `${state.playbackSpeed}x`;
            
            document.querySelectorAll('.speed-option').forEach(b => {
                b.classList.remove('bg-purple-500/20', 'text-purple-400');
            });
            btn.classList.add('bg-purple-500/20', 'text-purple-400');
            
            document.getElementById('speedModal').classList.add('hidden');
            saveState();
        });
    });
    
    document.getElementById('speedModal').addEventListener('click', (e) => {
        if (e.target.id === 'speedModal') {
            e.target.classList.add('hidden');
        }
    });
    
    // ========== Sleep Timer ==========
    document.getElementById('sleepTimerBtn').addEventListener('click', () => {
        document.getElementById('sleepTimerModal').classList.remove('hidden');
    });
    
    document.querySelectorAll('.sleep-option').forEach(btn => {
        btn.addEventListener('click', () => {
            setSleepTimer(parseInt(btn.dataset.minutes));
        });
    });
    
    document.getElementById('closeSleepModal').addEventListener('click', () => {
        document.getElementById('sleepTimerModal').classList.add('hidden');
    });
    
    document.getElementById('sleepTimerModal').addEventListener('click', (e) => {
        if (e.target.id === 'sleepTimerModal') {
            e.target.classList.add('hidden');
        }
    });
    
    // ========== Mini Player ==========
    document.getElementById('miniPlayerBtn').addEventListener('click', () => {
        const mini = document.getElementById('miniPlayer');
        mini.classList.toggle('hidden');
        document.getElementById('app').style.display = mini.classList.contains('hidden') ? 'block' : 'none';
    });
    
    document.getElementById('miniClose').addEventListener('click', () => {
        document.getElementById('miniPlayer').classList.add('hidden');
        document.getElementById('app').style.display = 'block';
    });
    
    // ========== Favorites Filter ==========
    document.getElementById('favoritesFilter').addEventListener('click', () => {
        state.showFavoritesOnly = !state.showFavoritesOnly;
        renderPlaylist();
        updateUIState();
    });
    
    // ========== Mood Filter ==========
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update filter
            state.currentMoodFilter = btn.dataset.mood;
            renderPlaylist();
            saveState();
        });
    });
    
    // ========== Fullscreen Visualizer ==========
    document.getElementById('fullscreenVizBtn').addEventListener('click', () => {
        document.getElementById('fullscreenViz').classList.add('active');
    });
    
    document.getElementById('closeFullscreenViz').addEventListener('click', () => {
        document.getElementById('fullscreenViz').classList.remove('active');
    });
    
    // ========== Lyrics Toggle ==========
    document.getElementById('lyricsToggle').addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-tab="lyrics"]').classList.add('active');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        document.getElementById('lyricsTab').classList.remove('hidden');
    });
    
    // ========== Keyboard Shortcuts ==========
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in an input
        if (e.target.tagName === 'INPUT') return;
        
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                if (e.shiftKey) nextSong();
                else audio.currentTime += 10;
                break;
            case 'ArrowLeft':
                if (e.shiftKey) prevSong();
                else audio.currentTime -= 10;
                break;
            case 'ArrowUp':
                e.preventDefault();
                state.volume = Math.min(100, state.volume + 10);
                audio.volume = state.volume / 100;
                updateUIState();
                saveState();
                break;
            case 'ArrowDown':
                e.preventDefault();
                state.volume = Math.max(0, state.volume - 10);
                audio.volume = state.volume / 100;
                updateUIState();
                saveState();
                break;
            case 'KeyM':
                state.isMuted = !state.isMuted;
                audio.volume = state.isMuted ? 0 : state.volume / 100;
                updateUIState();
                break;
            case 'KeyS':
                state.isShuffle = !state.isShuffle;
                updateUIState();
                saveState();
                break;
            case 'KeyR':
                if (state.repeatMode === 'none') state.repeatMode = 'all';
                else if (state.repeatMode === 'all') state.repeatMode = 'one';
                else state.repeatMode = 'none';
                updateUIState();
                saveState();
                break;
            case 'KeyL':
                likeBtn.click();
                break;
            case 'Escape':
                document.getElementById('fullscreenViz').classList.remove('active');
                document.getElementById('speedModal').classList.add('hidden');
                document.getElementById('sleepTimerModal').classList.add('hidden');
                break;
        }
    });
}

// ============================================
// START THE APPLICATION
// ============================================
init();