const socket = io(); // Connect to the WebSocket server

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesContainer = document.getElementById('messages');

// Send message when the button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chatMessage', message); // Send message to server
        messageInput.value = ''; // Clear input field
    }
});

// Listen for incoming messages and display them
socket.on('chatMessage', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesContainer.appendChild(messageElement);
});
