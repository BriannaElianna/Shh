// Initialize variables
let videoGenerated = false;
let youtubeApiKey = "AIzaSyASDALBzbvmHgsnfC3wSOYg8ssJY5rIQ1E"; // Replace with your YouTube Data API key

// Function to generate a random video link
function generateVideoLink() {
    if (!videoGenerated) {
        const keywords = ["Bully", "Jock", "Curious", "Bro", "Bad Boy", "Delinquent", "Men", "Muscle", "Guys"];
        const keyword = keywords[Math.floor(Math.random() * keywords.length)];
        const query = "M4M " + keyword;

        // Simulating loading time
        showLoadingPage();

        // Perform API request to search for videos
        searchVideos(query, (videoId) => {
            if (videoId) {
                const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
                showVideoPreview(videoLink);
                videoGenerated = true;
            } else {
                // Handle case when no videos are found
                alert("No videos found. Please try again.");
                hideLoadingPage();
            }
        });
    }
}

// Function to perform API request to search for videos
function searchVideos(query, callback) {
    gapi.client.youtube.search.list({
        part: "snippet", // Update part to "snippet"
        q: query,
        type: "video",
        maxResults: 50
    }).then((response) => {
        const items = response.result.items;
        if (items && items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            const videoId = items[randomIndex].id.videoId;
            callback(videoId);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error("Error searching videos:", error);
        callback(null);
    });
}

// Function to show the loading page and hide the video preview
function showLoadingPage() {
    document.getElementById("loading-page").style.display = "block";
    document.getElementById("video-preview").style.display = "none";
}

// Function to show the video preview and hide the loading page
function showVideoPreview(videoLink) {
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("video-preview").style.display = "block";
    document.getElementById("video-iframe").src = videoLink;
    document.getElementById("video-link").textContent = videoLink;
}

// Event listener for "Generate New" button
document.getElementById("generate-new").addEventListener("click", generateVideoLink);

// Load the YouTube Data API client
gapi.load("client", () => {
    // Initialize the API client
    gapi.client.init({
        apiKey: youtubeApiKey,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
    }).then(() => {
        // API client is initialized
        generateVideoLink();
    }, (error) => {
        console.error("Error initializing API client:", error);
    });
});
