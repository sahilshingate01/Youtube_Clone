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

function renderVideos(videoList = videos) {
    gridContainer.innerHTML = '';

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
        gridContainer.appendChild(card);
    });
}

const relatedVideosContainer = document.getElementById('related-videos');

function openVideoModal(video) {
    modalThumbnail.src = video.thumbnail;
    modalTitle.textContent = video.title;
    modalAvatar.src = video.avatar;
    modalChannel.textContent = video.channel;
    modalSubs.textContent = `${video.subscribers || '1.2M'} subscribers`;
    modalViews.textContent = `${video.views} • ${video.time}`;
    modalDesc.textContent = video.description || "No description available for this video.";

    renderComments();
    renderRelatedVideos(video.id);
    
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderRelatedVideos(currentId) {
    const related = videos.filter(v => v.id !== currentId);
    relatedVideosContainer.innerHTML = related.map(v => `
        <div class="related-video-card" data-id="${v.id}">
            <img src="${v.thumbnail}" alt="${v.title}" class="related-thumb" />
            <div class="related-info">
                <h4>${v.title}</h4>
                <p>${v.channel}</p>
                <p>${v.views} • ${v.time}</p>
            </div>
        </div>
    `).join('');

    // Add click events to related videos
    relatedVideosContainer.querySelectorAll('.related-video-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = parseInt(card.getAttribute('data-id'));
            const video = videos.find(v => v.id === id);
            if (video) {
                // Smooth transition: scroll modal to top and update content
                videoModal.scrollTo({ top: 0, behavior: 'smooth' });
                openVideoModal(video);
            }
        });
    });
}


function renderComments() {
    commentsList.innerHTML = mockComments.map(comment => `
        <div class="comment">
            <img src="${comment.avatar}" alt="${comment.user}" class="channel-avatar" style="width: 32px; height: 32px;" />
            <div class="comment-info">
                <h5>${comment.user} • <span>${comment.time}</span></h5>
                <p>${comment.text}</p>
            </div>
        </div>
    `).join('');
}

// Like/Dislike Functionality
const likeBtn = document.querySelector('.action-btn:nth-child(1)');
const dislikeBtn = document.querySelector('.action-btn:nth-child(2)');
let isLiked = false;
let isDisliked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
        isDisliked = false;
        likeBtn.style.color = 'var(--accent-color)';
        likeBtn.querySelector('svg').style.fill = 'var(--accent-color)';
        dislikeBtn.style.color = 'white';
        dislikeBtn.querySelector('svg').style.fill = 'none';
        
        // Add a little pop animation
        likeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => likeBtn.style.transform = 'scale(1)', 200);
    } else {
        likeBtn.style.color = 'white';
        likeBtn.querySelector('svg').style.fill = 'none';
    }
});

dislikeBtn.addEventListener('click', () => {
    isDisliked = !isDisliked;
    if (isDisliked) {
        isLiked = false;
        dislikeBtn.style.color = 'var(--accent-color)';
        dislikeBtn.querySelector('svg').style.fill = 'var(--accent-color)';
        likeBtn.style.color = 'white';
        likeBtn.querySelector('svg').style.fill = 'none';
    } else {
        dislikeBtn.style.color = 'white';
        dislikeBtn.querySelector('svg').style.fill = 'none';
    }
});

// Close modal logic
closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset likes for next video (in a real app these would be per-video)
    isLiked = false;
    isDisliked = false;
    likeBtn.style.color = 'white';
    likeBtn.querySelector('svg').style.fill = 'none';
    dislikeBtn.style.color = 'white';
    dislikeBtn.querySelector('svg').style.fill = 'none';
});


// Close modal on background click
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Subscribe Functionality
subscribeBtn.addEventListener('click', () => {
    subscribeBtn.classList.toggle('subscribed');
    if (subscribeBtn.classList.contains('subscribed')) {
        subscribeBtn.textContent = 'Subscribed';
        subscribeBtn.style.background = 'var(--hover-bg)';
        subscribeBtn.style.color = 'white';
    } else {
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.style.background = 'white';
        subscribeBtn.style.color = 'black';
    }
});

// Search Logic
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(query) ||
        video.channel.toLowerCase().includes(query)
    );

    if (filteredVideos.length === 0) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 100px 0;">
                <h2 style="font-size: 48px; margin-bottom: 16px;">🔍</h2>
                <h2>No videos found for "${searchInput.value}"</h2>
                <p style="color: var(--text-secondary); margin-top: 8px;">Try searching for something else</p>
            </div>
        `;
    } else {
        renderVideos(filteredVideos);
    }
});

// Sidebar Toggle
const menuBtn = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Filter Bar
const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        const category = filter.textContent.toLowerCase();
        if (category === 'all') {
            renderVideos(videos);
        } else {
            const filtered = videos.filter(v => 
                v.title.toLowerCase().includes(category) || 
                v.channel.toLowerCase().includes(category)
            );
            renderVideos(filtered);
        }
    });
});

renderVideos();


