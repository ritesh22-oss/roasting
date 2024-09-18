// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const jokesContainer = document.getElementById('jokesContainer');
    const jokesSection = document.getElementById('jokesSection');
    const nextButton = document.querySelector('.nextButton');
    const roastMore = document.getElementById('roastMore');
    const sorryScreen = document.getElementById('sorryScreen');

    const jokes = [
        { setup: "Why do you always look like you're straight out of a horror movie?", punchline: "Because Dracula called, and he’s demanding his wardrobe and hairstyle back. Even the night itself is terrified of your look.." },
        { setup: "Ever wonder why you always win an argument with me?", punchline: "Because your arguments are like a chemical reaction with unstable elements, You’re a mix of hydrogen and chlorine—volatile and explosive, but ultimately just a salty disaster" },
        { setup: "Why do you always lose things?", punchline: "Because your memory is like a broken Python loop—while(True): lose_everything. Even import common_sense couldn’t fix your if-statements." },
        { setup: "Why do you look like you've walked straight out of a vampire movie?", punchline: "Because even Dracula would turn away, afraid you’d suck the life out of him." },
        { setup: "Why does your brain have the same density as your knee?", punchline: "Because according to basic physics, mass and intelligence are inversely proportional and your brain seems to be approaching zero mass..If brain and knees had a competition, your knee would win by sheer inertia." },
        { setup: "Why does your idea of a workout involve lifting snacks to your mouth?", punchline: "Because your fitness routine is just as effective as your cooking skills—nonexistent." },
        { setup: "Your laziness is so legendary", punchline: "Because even a sloth would look at you and say, 'Come on, pick up the pace!' Do you need a sleep study to confirm you’re in REM 24/7?." },
        { setup: "Why do you take forever to get ready?", punchline: "Because every time you look in the mirror, it has to prepare itself for the shock." },
        { setup: "Why does your idea of style resemble a circus tent?", punchline: "Because your fashion choices are so loud, even the clowns are jealous." },
        { setup: "Why do you need more sleep?", punchline: "Because beauty rest hasn't kicked in yet." }
    ];

    let jokeIndex = 0;

    function showJokes() {
        jokesSection.innerHTML = '';

        const joke = jokes[jokeIndex];
        if (joke) {
            const jokeDiv = document.createElement('div');
            jokeDiv.classList.add('joke');
            jokeDiv.innerHTML = `
                <p>${joke.setup}</p>
                <button class="askWhy">Ask why?</button>
                <p class="punchline" style="display: none;">${joke.punchline}</p>
            `;
            jokesSection.appendChild(jokeDiv);
        }
    }

    function handleWhyClick(e) {
        const punchline = e.target.nextElementSibling;
        punchline.style.display = 'block';
    }

    function showRoastMore() {
        roastMore.style.display = 'block';
    }

    // Loading screen removal and show jokes
    let progress = 0;
    const loadingBar = document.querySelector('.bar');

    function updateLoadingBar() {
        if (progress < 100) {
            progress += 1;
            loadingBar.style.width = progress + '%';
            setTimeout(updateLoadingBar, 30); // Adjust speed as needed
        } else {
            // Hide loading screen and show jokes
            loadingScreen.style.display = 'none';
            jokesContainer.style.display = 'block';
            showJokes(); // Load initial joke
        }
    }

    updateLoadingBar();

    // Event Listener for 'Ask why?' buttons
    jokesSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('askWhy')) {
            handleWhyClick(e);
        }
    });

    // Event Listener for 'Next Joke' button
    nextButton.addEventListener('click', () => {
        jokeIndex += 1;
        if (jokeIndex < jokes.length) {
            showJokes();
        } else {
            showRoastMore();
        }
    });

    // Event Listeners for roast more options
    document.getElementById('sorryBro').addEventListener('click', () => {
        jokesContainer.style.display = 'none';
        sorryScreen.style.display = 'block';
    });

    document.getElementById('continueRoast').addEventListener('click', () => {
        jokeIndex = 0; // Reset joke index
        jokesSection.innerHTML = '';
        showJokes();
        roastMore.style.display = 'none';
    });
});
