
// creating a change for using lodash.throttle
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// play the video from the time recorded in localStorage
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurreddf
            break;
    }
});

// add/refresh data in localStorage
player.on('timeupdate', throttle((dataTimeUpdate) => {
    localStorage.setItem("videoplayer-current-time", `${dataTimeUpdate.seconds}`);
}, 1000)
);

