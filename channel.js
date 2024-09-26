// Get the channel name and profile picture elements
const channelName = document.getElementById('channel-name');
const channelProfilePicture = document.getElementById('channel-profile-picture');

// Get the channel content and list elements
const channelContent = document.getElementById('channel-content');
const channelList = document.getElementById('channel-list-ul');

// Get the messaging bar elements
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');

// Add event listener to the send message button
sendMessageBtn.addEventListener('click', () => {
    // Get the message input value
    const message = messageInput.value;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    // Add the message element to the channel content
    channelContent.appendChild(messageElement);

    // Clear the message input value
    messageInput.value = '';
});

// Add event listener to the channel list
channelList.addEventListener('click', (e) => {
    // Get the clicked channel element
    const channelElement = e.target;

    // Get the channel name and profile picture
    const channelName = channelElement.textContent;
    const channelProfilePicture = channelElement.querySelector('img').src;

    // Update the channel name and profile picture
    document.getElementById('channel-name').textContent = channelName;
    document.getElementById('channel-profile-picture').src = channelProfilePicture;
});