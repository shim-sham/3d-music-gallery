AFRAME.registerComponent('toggle-sound', {
  init: function () {
    var playing = false;
    var soundEl = this.el.querySelector('[sound]');
    var boxEl = this.el.querySelector('a-box');
    this.el.addEventListener('click', function () {
      if (playing) {
        soundEl.components.sound.stopSound();
        boxEl.setAttribute('position', { x: boxEl.object3D.position.x, y: 1.2, z: boxEl.object3D.position.z });
      } else {
        soundEl.components.sound.playSound();
        boxEl.setAttribute('position', { x: boxEl.object3D.position.x, y: 1.1, z: boxEl.object3D.position.z });

      }
      playing = !playing;
    });
  }
});
document.querySelectorAll('.record-player').forEach(function (el) {
  el.setAttribute('toggle-sound', '');
});