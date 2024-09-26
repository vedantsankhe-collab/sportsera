// Get the profile picture input and button elements
const profilePictureInput = document.getElementById('profile-picture-input');
const capturePictureBtn = document.getElementById('capture-picture-btn');
const profilePicture = document.getElementById('profile-picture');

// Add an event listener to the profile picture input element
profilePictureInput.addEventListener('change', (e) => {
    // Get the selected file
    const file = profilePictureInput.files[0];

    // Create a FileReader to read the file
    const fileReader = new FileReader();

    // Add an event listener to the FileReader
    fileReader.addEventListener('load', (e) => {
        // Set the profile picture src attribute to the file data
        profilePicture.src = e.target.result;
    });

    // Read the file as a data URL
    fileReader.readAsDataURL(file);
});

// Add an event listener to the capture picture button
capturePictureBtn.addEventListener('click', () => {
    // Create a MediaStream