export default (scoreText, score, speedText, speed, timeText, timedEvent) => {
  let seconds = Math.round(timedEvent.getElapsedSeconds());
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds - minutes * 60;
  let finalTime = str_pad_left(minutes, '0', 1) + ':' + str_pad_left(remainingSeconds, '0', 2);
  timeText.setText(finalTime);
  speedText.setText(speed);
  scoreText.setText(score);
};

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}
