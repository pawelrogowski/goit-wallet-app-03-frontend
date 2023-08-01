function lockScreenOrientation() {
  if (window.screen.orientation && window.screen.orientation.lock) {
    window.screen.orientation.lock('portrait');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  lockScreenOrientation();
});
