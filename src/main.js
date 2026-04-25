const videos = [
    {
        title: "How to Build a YouTube Clone in HTML & CSS",
        channel: "Code Beginner",
        views: "1.2M views",
        time: "1 year ago",
        thumbnail: "https://picsum.photos/400/225?random=1",
        avatar: "https://picsum.photos/40/40?random=11",
        verified: true,
        progress: 40
    },
    {
        title: "Top 10 Web Development Trends in 2026",
        channel: "Tech Insights",
        views: "850K views",
        time: "2 months ago",
        thumbnail: "https://picsum.photos/400/225?random=2",
        avatar: "https://picsum.photos/40/40?random=12",
        verified: true,
        progress: 0
    },
    {
        title: "Relaxing Lofi Music for Coding & Studying",
        channel: "Lofi Beats",
        views: "5.4M views",
        time: "3 years ago",
        thumbnail: "https://picsum.photos/400/225?random=3",
        avatar: "https://picsum.photos/40/40?random=13",
        verified: false,
        progress: 85
    },
    {
        title: "CSS Grid Complete Tutorial",
        channel: "Design Masters",
        views: "420K views",
        time: "5 months ago",
        thumbnail: "https://picsum.photos/400/225?random=4",
        avatar: "https://picsum.photos/40/40?random=14",
        verified: true,
        progress: 0
    },
    {
        title: "Minimalist Desk Setup Tour 2026",
        channel: "Tech Spaces",
        views: "2.1M views",
        time: "1 month ago",
        thumbnail: "https://picsum.photos/400/225?random=5",
        avatar: "https://picsum.photos/40/40?random=15",
        verified: true,
        progress: 10
    },
    {
        title: "JavaScript Async/Await Explained in 10 Minutes",
        channel: "JS Simplified",
        views: "930K views",
        time: "8 months ago",
        thumbnail: "https://picsum.photos/400/225?random=6",
        avatar: "https://picsum.photos/40/40?random=16",
        verified: true,
        progress: 0
    },
    {
        title: "I Built a Smart Home from Scratch",
        channel: "DIY Tech",
        views: "3.5M views",
        time: "1 year ago",
        thumbnail: "https://picsum.photos/400/225?random=7",
        avatar: "https://picsum.photos/40/40?random=17",
        verified: false,
        progress: 60
    },
    {
        title: "Learn React in 2026 - Crash Course",
        channel: "Frontend Pro",
        views: "1.8M views",
        time: "6 months ago",
        thumbnail: "https://picsum.photos/400/225?random=8",
        avatar: "https://picsum.photos/40/40?random=18",
        verified: true,
        progress: 0
    },
    {
        title: "Why You Should Learn Vim in 2026",
        channel: "Terminal Wizard",
        views: "210K views",
        time: "3 weeks ago",
        thumbnail: "https://picsum.photos/400/225?random=9",
        avatar: "https://picsum.photos/40/40?random=19",
        verified: true,
        progress: 95
    },
    {
        title: "The Future of Artificial Intelligence",
        channel: "AI Today",
        views: "2.7M views",
        time: "10 months ago",
        thumbnail: "https://picsum.photos/400/225?random=10",
        avatar: "https://picsum.photos/40/40?random=20",
        verified: true,
        progress: 0
    }
];

const gridContainer = document.getElementById('video-grid');

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

        gridContainer.appendChild(card);
    });
}

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

// Filter Bar Interaction
const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        // Simple mock filtering
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

