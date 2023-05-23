// Array to store chosen video IDs
var chosenVideos = [];

// Function to search YouTube videos and select a random lesser-known video
function searchAndSelectVideo() {
    var searchTerm = 'M4M';

    var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=' + searchTerm + '&type=video&key=AIzaSyAkU3M6boVfkctrJ4IYBRmwVBhbIW-LQBc';
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            var filteredVideos = data.items.filter(video => {
                var title = video.snippet.title.toLowerCase();
                var keywords = ['bully', 'delinquent', 'jock', 'curious', 'nerd listener', 'bad boy', 'rival'];
                return keywords.some(keyword => title.includes(keyword)) &&
                    !title.includes('m4f') &&
                    !title.includes('m4a') &&
                    !chosenVideos.includes(video.id.videoId);
            });

            if (filteredVideos.length > 0) {
                var randomIndex = Math.floor(Math.random() * filteredVideos.length);
                var randomVideo = filteredVideos[randomIndex];
                var videoId = randomVideo.id.videoId;
                var videoTitle = randomVideo.snippet.title;
                var randomLink = 'https://www.youtube.com/watch?v=' + videoId;

                // Add chosen video ID to the list
                chosenVideos.push(videoId);

                var resultContainer = document.getElementById("resultContainer");
                resultContainer.innerHTML = '<a href="' + randomLink + '" target="_blank">' + videoTitle + '</a>';
                resultContainer.style.display = 'block';

                var playerContainer = document.getElementById("playerContainer");
                playerContainer.innerHTML = '<iframe id="player" type="text/html" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
                playerContainer.style.display = 'block';
            } else {
                var resultContainer = document.getElementById("resultContainer");
                resultContainer.innerHTML = 'No suitable videos found.';
                resultContainer.style.display = 'block';

                var playerContainer = document.getElementById("playerContainer");
                playerContainer.innerHTML = '';
                playerContainer.style.display = 'none';
            }
        })
        .catch(error => {
            console.log('Error searching videos:', error);
        });
}

// Event listener for the generate button
var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", searchAndSelectVideo);
