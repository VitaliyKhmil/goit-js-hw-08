import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const key = 'videoplayer-current-time';
const startTime = localStorage.getItem(key) || 0;

player.setCurrentTime(startTime);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(key, data.seconds);
  }, 1000)
);


