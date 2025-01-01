// Grab elements from the DOM
const videoURLInput = document.getElementById('videoURL');
const getThumbnailButton = document.getElementById('getThumbnail');
const thumbnailDisplay = document.getElementById('thumbnailDisplay');
const thumbnailImage = document.getElementById('thumbnailImage');
const downloadLink = document.getElementById('downloadLink');

function extractVideoID(url) {
    // Handle different YouTube URL formats
    const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

getThumbnailButton.addEventListener('click', () => {
    const videoURL = videoURLInput.value.trim();
    const videoID = extractVideoID(videoURL);

    if (videoID) {
        // Construct the thumbnail URL
        const thumbnailURL = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
        thumbnailImage.src = thumbnailURL;
        downloadLink.href = thumbnailURL;

        thumbnailDisplay.classList.remove('hidden');
    } else {
        alert('Invalid YouTube URL. Please try again.');
    }
});
