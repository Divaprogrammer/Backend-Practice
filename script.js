const messages = document.querySelectorAll(".message");
let messageIndex = 0;
let letterIndex = 0;

function displayMessage() {
    if (messageIndex < messages.length) {
        const message = messages[messageIndex];
        message.style.display = "block"; // Show the message
        message.style.opacity = 1; // Reset the opacity

        const messageText = message.textContent;
        message.textContent = ""; // Clear the text

        function displayLetter() {
            if (letterIndex < messageText.length) {
                message.textContent += messageText.charAt(letterIndex);
                letterIndex++;
                setTimeout(displayLetter, 20); // Adjust the speed (milliseconds per letter)
            } else {
                setTimeout(fadeMessage, 200); // Hide the message after 0.2 seconds
            }
        }

        displayLetter();
    }
}

function fadeMessage() {
    const message = messages[messageIndex];
    let opacity = 1;
    const fadeInterval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeInterval); // Stop the fading animation
            message.style.display = "none"; // Hide the message
            messageIndex++;
            letterIndex = 0;
            setTimeout(displayMessage, 300); // Show the next message after 1 second
        } else {
            opacity -= 0.1;
            message.style.opacity = opacity;
        }
    }, 100); // Adjust the fading speed
}

displayMessage(); // Start displaying messages
