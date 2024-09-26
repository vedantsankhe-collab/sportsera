function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('profile-picture').src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function capturePicture() {
    const constraints = {
        video: {
            facingMode: "user" // Use the front camera
        }
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            const captureButton = document.createElement('button');
            captureButton.textContent = "Take Snapshot";
            document.body.appendChild(video);
            document.body.appendChild(captureButton);

            captureButton.onclick = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 100; // Set desired width
                canvas.height = 100; // Set desired height
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageUrl = canvas.toDataURL();
                document.getElementById('profile-picture').src = imageUrl;
                stream.getTracks().forEach(track => track.stop()); // Stop the video stream
                document.body.removeChild(video); // Remove the video
                document.body.removeChild(captureButton); // Remove the button
            };
        })
        .catch((error) => {
            console.error("Error accessing camera: ", error);
        });
}

function handleSubmit(event) {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Channel created!');
}
