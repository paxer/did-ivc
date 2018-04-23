import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  audio: null,

  actions: {
    play(quote) {
      $('ul#quotes_list li').removeClass('active');
      this.$('li').addClass('active');
      $('img#ded_image').fadeIn();

      this.audio.src = `/assets/sounds/${quote}.mp3`;
      this.audio.play();

      this.audio.onended = () => {
        this.$('li').removeClass('active');
        $('img#ded_image').fadeOut();
      };
    }
  }
});
