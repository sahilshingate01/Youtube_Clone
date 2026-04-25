// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcons(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcons(theme);
});

function updateThemeIcons(theme) {
    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'flex';
    } else {
        sunIcon.style.display = 'flex';
        moonIcon.style.display = 'none';
    }
}
const videos = [
    {
        id: 1,
        title: "How to Build a YouTube Clone in HTML & CSS",
        channel: "Code Beginner",
        views: "1.2M views",
        time: "1 year ago",
        thumbnail: "https://picsum.photos/800/450?random=1",
        avatar: "https://picsum.photos/40/40?random=11",
        verified: true,
        progress: 40,
        description: "In this tutorial, we will learn how to build a fully responsive YouTube clone using only HTML and CSS. We will cover layout, grid, and modern design techniques.",
        subscribers: "250K"
    },
    {
        id: 2,
        title: "Top 10 Web Development Trends in 2026",
        channel: "Tech Insights",
        views: "850K views",
        time: "2 months ago",
        thumbnail: "https://picsum.photos/800/450?random=2",
        avatar: "https://picsum.photos/40/40?random=12",
        verified: true,
        progress: 0,
        description: "Discover the latest trends in web development for 2026. From AI-driven interfaces to WebGPU and beyond.",
        subscribers: "1.1M"
    },
    {
        id: 3,
        title: "Relaxing Lofi Music for Coding & Studying",
        channel: "Lofi Beats",
        views: "5.4M views",
        time: "3 years ago",
        thumbnail: "https://picsum.photos/800/450?random=3",
        avatar: "https://picsum.photos/40/40?random=13",
        verified: false,
        progress: 85,
        description: "The perfect lofi beats to keep you focused while coding, studying, or relaxing. Updated weekly with fresh tracks.",
        subscribers: "4.2M"
    },
    {
        id: 4,
        title: "CSS Grid Complete Tutorial",
        channel: "Design Masters",
        views: "420K views",
        time: "5 months ago",
        thumbnail: "https://picsum.photos/800/450?random=4",
        avatar: "https://picsum.photos/40/40?random=14",
        verified: true,
        progress: 0,
        description: "Master CSS Grid Layout in this comprehensive guide. We cover everything from the basics to advanced layouts.",
        subscribers: "890K"
    },
    {
        id: 5,
        title: "Minimalist Desk Setup Tour 2026",
        channel: "Tech Spaces",
        views: "2.1M views",
        time: "1 month ago",
        thumbnail: "https://picsum.photos/800/450?random=5",
        avatar: "https://picsum.photos/40/40?random=15",
        verified: true,
        progress: 10,
        description: "A tour of my 2026 minimalist desk setup. Focused on productivity and clean aesthetics.",
        subscribers: "340K"
    },
    {
        id: 6,
        title: "JavaScript Async/Await Explained in 10 Minutes",
        channel: "JS Simplified",
        views: "930K views",
        time: "8 months ago",
        thumbnail: "https://picsum.photos/800/450?random=6",
        avatar: "https://picsum.photos/40/40?random=16",
        verified: true,
        progress: 0,
        description: "Learn how to use Async and Await in JavaScript to write cleaner asynchronous code. Quick and easy explanation.",
        subscribers: "1.5M"
    }
];

const mockComments = [
    { user: "DevGuru", text: "This is exactly what I was looking for! Thanks for sharing.", time: "2 hours ago", avatar: "https://picsum.photos/32/32?random=50" },
    { user: "Alice Codes", text: "Love the minimalist design of this clone. Keep it up!", time: "5 hours ago", avatar: "https://picsum.photos/32/32?random=51" },
    { user: "TechFan", text: "Can you do a video on React next? Great content.", time: "1 day ago", avatar: "https://picsum.photos/32/32?random=52" }
];

const gridContainer = document.getElementById('video-grid');
const videoModal = document.getElementById('video-modal');
const closeModal = document.getElementById('close-modal');

// Modal Elements
const modalThumbnail = document.getElementById('modal-thumbnail');
const modalTitle = document.getElementById('modal-title');
const modalAvatar = document.getElementById('modal-avatar');
const modalChannel = document.getElementById('modal-channel');
const modalSubs = document.getElementById('modal-subs');
const modalViews = document.getElementById('modal-views');
const modalDesc = document.getElementById('modal-desc');
const commentsList = document.getElementById('comments-list');
const subscribeBtn = document.getElementById('subscribe-btn');

// Navigation Logic
const menuItems = document.querySelectorAll('.sidebar .menu-item');
const mainContent = document.querySelector('.main-content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        const pageName = item.querySelector('span').textContent.toLowerCase();
        switchPage(pageName);
    });
});

function switchPage(page) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    switch(page) {
        case 'home':
            renderHomePage();
            break;
        case 'shorts':
            renderShortsPage();
            break;
        case 'subscriptions':
            renderSubscriptionsPage();
            break;
        case 'library':
        case 'history':
        case 'liked videos':
            renderLibraryPage(page);
            break;
        default:
            renderHomePage();
    }
}

function renderHomePage() {
    mainContent.innerHTML = `
        <div class="filter-bar">
            <button class="filter active">All</button>
            <button class="filter">Music</button>
            <button class="filter">Coding</button>
            <button class="filter">Tech</button>
            <button class="filter">Gaming</button>
            <button class="filter">AI</button>
            <button class="filter">Live</button>
            <button class="filter">Podcasts</button>
        </div>
        <div class="video-grid" id="video-grid"></div>
    `;
    
    // Re-attach filter listeners
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            const category = filter.textContent.toLowerCase();
            const grid = document.getElementById('video-grid');
            if (category === 'all') {
                renderVideos(videos, grid);
            } else {
                const filtered = videos.filter(v => 
                    v.title.toLowerCase().includes(category) || 
                    v.channel.toLowerCase().includes(category)
                );
                renderVideos(filtered, grid);
            }
        });
    });

    renderVideos(videos, document.getElementById('video-grid'));
}

function renderShortsPage() {
    const shortsData = [
        { id: 101, title: "How to use Grid", channel: "DesignPro", views: "2M", thumb: "https://picsum.photos/400/700?random=101" },
        { id: 102, title: "Keyboard ASMR", channel: "KeyClack", views: "500K", thumb: "https://picsum.photos/400/700?random=102" },
        { id: 103, title: "AI is taking over!", channel: "FutureTech", views: "1.2M", thumb: "https://picsum.photos/400/700?random=103" }
    ];

    mainContent.innerHTML = `
        <div class="shorts-container">
            ${shortsData.map(short => `
                <div class="short-video">
                    <img src="${short.thumb}" alt="${short.title}" />
                    <div class="short-info">
                        <h3>${short.title}</h3>
                        <p>${short.channel} • ${short.views} views</p>
                    </div>
                    <div class="short-actions">
                        <div class="s-action"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg><span>Like</span></div>
                        <div class="s-action"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path></svg><span>Dislike</span></div>
                        <div class="s-action"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span>Comment</span></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderSubscriptionsPage() {
    mainContent.innerHTML = `
        <div class="subscriptions-page">
            <div class="sub-header">
                <h2>Latest</h2>
                <div class="sub-view-options">
                    <button class="active">Grid</button>
                    <button>List</button>
                </div>
            </div>
            <div class="video-grid" id="sub-grid"></div>
        </div>
    `;
    renderVideos(videos.slice(0, 3), document.getElementById('sub-grid'));
}

function renderLibraryPage(title) {
    mainContent.innerHTML = `
        <div class="library-page">
            <div class="lib-header">
                <h2>${title.charAt(0).toUpperCase() + title.slice(1)}</h2>
            </div>
            <div class="video-grid" id="lib-grid"></div>
        </div>
    `;
    renderVideos(videos.slice(3, 6), document.getElementById('lib-grid'));
}

// Update renderVideos to accept a container
function renderVideos(videoList = videos, container = document.getElementById('video-grid')) {
    if (!container) return;
    container.innerHTML = '';

    videoList.forEach((video, index) => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.style.animationDelay = `${index * 0.05}s`;

        const verifiedBadge = video.verified ? '<span class="verified">✓</span>' : '';
        const progressIndicator = video.progress > 0 ? `<div class="progress-bar" style="width: ${video.progress}%"></div>` : '';

        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${video.thumbnail}" class="thumbnail" loading="lazy" />
                ${progressIndicator}
            </div>
            <div class="video-info">
                <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar" />
                <div class="video-details">
                    <h3 class="video-title" title="${video.title}">${video.title}</h3>
                    <p class="channel-name">
                        ${video.channel} ${verifiedBadge}
                    </p>
                    <p class="video-stats">${video.views} • ${video.time}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openVideoModal(video));
        container.appendChild(card);
    });
}

// Modify initial render call
renderHomePage();


