const videos = [
    {
        title: "How to Build a YouTube Clone in HTML & CSS",
        channel: "Code Beginner",
        views: "1.2M views",
        time: "1 year ago",
        thumbnail: "https://picsum.photos/400/225?random=1",
        avatar: "https://picsum.photos/40/40?random=11"
    },
    {
        title: "Top 10 Web Development Trends in 2026",
        channel: "Tech Insights",
        views: "850K views",
        time: "2 months ago",
        thumbnail: "https://picsum.photos/400/225?random=2",
        avatar: "https://picsum.photos/40/40?random=12"
    },
    {
        title: "Relaxing Lofi Music for Coding & Studying",
        channel: "Lofi Beats",
        views: "5.4M views",
        time: "3 years ago",
        thumbnail: "https://picsum.photos/400/225?random=3",
        avatar: "https://picsum.photos/40/40?random=13"
    },
    {
        title: "CSS Grid Complete Tutorial",
        channel: "Design Masters",
        views: "420K views",
        time: "5 months ago",
        thumbnail: "https://picsum.photos/400/225?random=4",
        avatar: "https://picsum.photos/40/40?random=14"
    },
    {
        title: "Minimalist Desk Setup Tour 2026",
        channel: "Tech Spaces",
        views: "2.1M views",
        time: "1 month ago",
        thumbnail: "https://picsum.photos/400/225?random=5",
        avatar: "https://picsum.photos/40/40?random=15"
    },
    {
        title: "JavaScript Async/Await Explained in 10 Minutes",
        channel: "JS Simplified",
        views: "930K views",
        time: "8 months ago",
        thumbnail: "https://picsum.photos/400/225?random=6",
        avatar: "https://picsum.photos/40/40?random=16"
    },
    {
        title: "I Built a Smart Home from Scratch",
        channel: "DIY Tech",
        views: "3.5M views",
        time: "1 year ago",
        thumbnail: "https://picsum.photos/400/225?random=7",
        avatar: "https://picsum.photos/40/40?random=17"
    },
    {
        title: "Learn React in 2026 - Crash Course",
        channel: "Frontend Pro",
        views: "1.8M views",
        time: "6 months ago",
        thumbnail: "https://picsum.photos/400/225?random=8",
        avatar: "https://picsum.photos/40/40?random=18"
    },
    {
        title: "Why You Should Learn Vim in 2026",
        channel: "Terminal Wizard",
        views: "210K views",
        time: "3 weeks ago",
        thumbnail: "https://picsum.photos/400/225?random=9",
        avatar: "https://picsum.photos/40/40?random=19"
    },
    {
        title: "The Future of Artificial Intelligence",
        channel: "AI Today",
        views: "2.7M views",
        time: "10 months ago",
        thumbnail: "https://picsum.photos/400/225?random=10",
        avatar: "https://picsum.photos/40/40?random=20"
    }
];

const gridContainer = document.getElementById('video-grid');

function renderVideos(videoList = videos) {
    gridContainer.innerHTML = '';

    videoList.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('video-card');

        card.innerHTML = `
            <div class="thumbnail-container">
    <img src="${video.thumbnail}" class="thumbnail" />
    <div class="progress-bar"></div>
</div>
            <div class="video-info">
                <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar" />
                
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="channel-name">${video.channel}</p>
                    <p class="video-stats">${video.views} • ${video.time}</p>

                </div>
                
            </div>
            <p class="channel-name">
  ${video.channel} <span class="verified"> ⭐️ </span>
</p>
        `;

        gridContainer.appendChild(card);
    });
}

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = searchInput.value.toLowerCase().trim();

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(query) ||
        video.channel.toLowerCase().includes(query)
    );
if(filteredVideos.length === 0){
    gridContainer.innerHTML = "<h2>No videos found 😢</h2>";
} else {
    renderVideos(filteredVideos);
}
});
document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('collapsed');
});

renderVideos();
