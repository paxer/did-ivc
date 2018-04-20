import Component from '@ember/component';

export default Component.extend({
  isActive: false,
  audio: null,

  actions: {
    play(quote) {
      this.get('audio').src = `/assets/sounds/${quote}.mp3`;
      this.get('audio').play();
    }
  }
});
