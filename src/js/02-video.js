import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = 'videoplayer-current-time';
const startTime = localStorage.getItem(KEY) || 0;

player.setCurrentTime(startTime);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(KEY, data.seconds);
  }, 1000)
);


