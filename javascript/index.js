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

var jokes = [
  "Why did the closeted bully always carry a mirror? So he could practice his 'straight face'!",
  "How does a closeted bully give a compliment? 'Nice shoes! Where did you get them? Asking for a friend.'",
  "What did the closeted bully say to his victim? 'I'll beat you up... and then ask you out... as a prank!'",
  "Why did the closeted bully join the drama club? To perfect his act of aggression!",
  "How does a closeted bully apologize? 'Sorry for being so aggressive. I was just trying to assert my heterosexuality!'",
  "What's the favorite weapon of a closeted bully? The suppression stick!",
  "Why did the closeted bully always pick on the jocks? To hide his secret admiration for them!",
  "What did the closeted bully say to the nerd? 'You're such a geek... and I secretly envy your intelligence!'",
  "Why did the closeted bully go to the dance party? To convince everyone he had great rhythm!",
  "How does a closeted bully start a fight? 'I'll show you who's boss... and then ask if you want to hang out, no big deal.'",
  "Why did the closeted bully become a chef? To whip up some fabulous excuses for his aggressive behavior!",
  "What did the closeted bully say to the gym teacher? 'I'll show you how to do proper push-ups... and then ask for a date.'",
  "Why did the closeted bully join the fashion club? To learn how to intimidate with style!",
  "How does a closeted bully express his feelings? Through carefully timed acts of 'friendship'.",
  "What did the closeted bully say to his crush? 'I'll make your heart race... and then pretend it was all just a joke.'",
  "Why did the closeted bully become a musician? To play the strings of his own secret desires!",
  "How does a closeted bully handle rejection? 'No worries, I wasn't really interested... or was I?'",
  "What did the closeted bully say to the teacher? 'I'll disrupt the class... and then tell everyone it's because I'm secretly a rebel.'",
  "Why did the closeted bully start a YouTube channel? To hide behind a screen while flexing his tough persona!",
  "How does a closeted bully handle emotional vulnerability? 'I'll push you away... and then hope you'll chase after me.'",
  "Why did the gay bully go to art school? To learn how to draw blood.",
  "What's the difference between a jock and a curious guy? The jock likes balls and the curious guy likes to explore them.",
  "What did one bro say to the other at the gym? Let's get swole, bro!",
  "Why did the bad boy get detention? He couldn't resist breaking all the rules, especially hearts.",
  "Why did the delinquent join the drama club? To steal the spotlight, just like he steals hearts.",
  "Why did the closeted bully always target the nerd? Because he couldn't resist his adorable brain!",
  "How does a closeted bully express his hidden feelings? By tripping over his own words, just like he trips the nerd!",
  "What did the closeted bully say to the nerd? 'You're so smart, it's almost like you cast a spell on me!'",
  "Why did the closeted bully join the math club? To calculate the probability of the nerd returning his feelings!",
  "How does a closeted bully show affection? By giving the nerd a hard time and hoping he can crack his own tough shell!",
  "What did the closeted bully write in his secret diary? 'Today, I teased the nerd again... I hope he understands it's because I care!'",
  "Why did the closeted bully become a poet? To write love letters in the form of teasing insults for the nerd!",
  "How does a closeted bully handle his crush on the nerd? By pretending to be indifferent while stealing glances from afar!",
  "What did the closeted bully say to his friends? 'I can't stand the nerd... and by that, I mean I can't stand how much I like him!'",
  "Why did the closeted bully always challenge the nerd's knowledge? To impress him with unexpected displays of intelligence!",
  "How does a closeted bully deal with jealousy? By mocking the nerd's accomplishments, while secretly longing to be by his side!",
  "What did the closeted bully say to the nerd during their arguments? 'You make me so mad... and so incredibly infatuated!'",
  "Why did the closeted bully become a science enthusiast? To study the chemical reactions in his heart whenever he saw the nerd!",
  "How does a closeted bully handle rejection from the nerd? By pretending not to care, even though it breaks his heart!",
  "What did the closeted bully say to the nerd's friend? 'Tell him I hate him... except, don't actually tell him, okay?'",
  "Why did the closeted bully always challenge the nerd's fashion choices? To mask his own interest in clothing and style!",
  "How does a closeted bully express his affection for the nerd? By stealing his books, hoping the nerd will come looking for him!",
  "What did the closeted bully write in his secret love letter to the nerd? 'I'll keep pushing you away... until you realize I want you closer!'",
  "Why did the closeted bully become an artist? To sketch secret portraits of the nerd, capturing his heart's desires!",
  "How does a closeted bully handle his fear of being vulnerable? By pretending to be invincible while daydreaming about the nerd!",
  "What did the closeted bully say to the nerd's sibling? 'Your brother is so annoying... but I secretly hope he thinks I'm cool!'",
   "Why did the nerd always blush when the bully was around? Because love was his secret superpower!",
  "How does the nerd show affection for the closeted bully? By solving complex equations to calculate the chances of their love story!",
  "What did the nerd say when the bully teased him? 'You make my heart race... and I hope it's not just because you scare me!'",
  "Why did the nerd join the gym? To work out his feelings for the bully, one rep at a time!",
  "How does the nerd handle his crush on the closeted bully? By getting lost in daydreams and pretending he's solving the puzzle of their love!",
  "What did the nerd write in his secret diary? 'Today, the bully teased me again... and I couldn't help but smile!'",
  "Why did the nerd start writing poetry? To capture the essence of the bully's tough exterior and tender heart!",
  "How does the nerd express his hidden feelings for the bully? By stumbling over words and blushing, just like in the sweetest of dreams!",
  "What did the nerd confide in his best friend? 'I can't stop thinking about the bully... and I hope he notices me too!'",
  "Why did the nerd always strive for academic excellence? To impress the closeted bully with his intelligence and win his heart!",
  "How does the nerd deal with jealousy towards others who catch the bully's attention? By pretending not to care, even though it hurts!",
  "What did the nerd say to himself in the mirror? 'You're brave enough to solve complex problems... now be brave enough to show your love!'",
  "Why did the nerd always volunteer for the bully's projects? To spend more time together and get closer to his heart!",
  "How does the nerd handle his fear of rejection from the bully? By keeping his feelings hidden, hoping that one day the bully will see through his disguise!",
  "What did the nerd say to the bully's friend? 'Tell him I think he's annoying... but secretly, I adore him!'",
  "Why did the nerd always offer to help the bully with fashion advice? To subtly show his interest and care about his appearance!",
  "How does the nerd show his love for the bully? By collecting comic books, hoping one day their story will have a happy ending!",
  "What did the nerd write in his secret love letter to the bully? 'I'll keep admiring you from afar... until you realize we're meant to be!'",
  "Why did the nerd become a musician? To compose melodies that would capture the beauty of the bully's presence!",
  "How does the nerd handle the fear of being rejected by the bully? By believing in the power of love and hoping their hearts align!",
  "What did the nerd say to the bully's sibling? 'Your brother is so frustrating... but I secretly wish he knew how much I care!'",
  "Why did the nerd and the bully always argue? Because their love was too big to contain in a single conversation!",
  "How does the nerd and the closeted bully express their hidden affection? By exchanging insults that mask their true feelings!",
  "What did the nerd and the bully say when they argued? 'I can't stand you... except, deep down, I hope you can't stand being away from me either!'",
  "Why did the nerd and the bully always compete against each other? To hide their love under a cloak of rivalry!",
  "How does the nerd and the closeted bully handle their feelings? By engaging in a dance of fake hatred, with stolen glances as secret choreography!",
  "What did the nerd and the bully write in their secret diaries? 'Today, I annoyed the nerd/bully again... and secretly, I loved every moment!'",
  "Why did the nerd and the bully become expert pranksters? To hide their affection under layers of mischief and laughter!",
  "How does the nerd and the closeted bully navigate their hidden love? By exchanging sarcastic remarks that hold the power of unspoken desire!",
  "What did the nerd and the bully confide in their friends? 'I can't believe I have to deal with them... but secretly, I can't imagine my life without them!'",
  "Why did the nerd and the bully always challenge each other intellectually? To mask the sparks of romance that ignited between them!",
  "How does the nerd and the closeted bully deal with their envy towards others vying for their attention? By pretending not to care, even though their hearts ache!",
  "What did the nerd and the bully say to themselves in the mirror? 'You're strong enough to keep up this charade... now be brave enough to reveal your love!'",
  "Why did the nerd and the bully always end up paired together for group projects? To create opportunities for stolen glances and secret cooperation!",
  "How does the nerd and the closeted bully handle their fear of rejection? By engaging in banter that conceals their vulnerability, yet reveals their hearts!",
  "What did the nerd and the bully say to each other's friends? 'Tell them I despise them... except, don't actually tell them, okay?'",
  "Why did the nerd and the bully always critique each other's fashion choices? To mask their admiration for each other's style and taste!",
  "How does the nerd and the closeted bully convey their love? By engaging in playful teasing that carries the weight of unspoken affection!",
  "What did the nerd and the bully write in their secret love letters? 'I'll keep pretending to hate you... until you realize it's all a facade, and my love is real!'",
  "Why did the nerd and the bully become artists of disguise? To conceal their love under layers of personas, waiting for the perfect moment to reveal their true selves!",
  "How does the nerd and the closeted bully navigate the fear of exposing their feelings? By believing that their love story will be worth the risk, even if it means tearing down the walls they built!",
  "What did the nerd and the bully say to each other's siblings? 'Your brother/sister is so annoying... but secretly, I can't help but adore them!'"
];

var jokeContainer = document.getElementById("jokeContainer");

var usedJokes = []; // Array to store used jokes

// Function to update the joke text
function updateJoke() {
  // Check if all jokes have been used
  if (usedJokes.length === jokes.length) {
    jokeContainer.textContent = "No more jokes available!";
    return;
  }

  // Get a random joke that has not been used before
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * jokes.length);
  } while (usedJokes.includes(randomIndex));

  // Add the joke to the used jokes array
  usedJokes.push(randomIndex);

  jokeContainer.textContent = jokes[randomIndex];
}

// Function to update the joke text
function updateJoke() {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  jokeContainer.textContent = jokes[randomIndex];
}

// Initial joke display
updateJoke();

// Function to rotate the jokes every few seconds
function rotateJokes() {
  setInterval(function() {
    updateJoke();
  }, 5000); // Change the time interval (in milliseconds) for the jokes to rotate
}

// Call the rotateJokes function
rotateJokes();
