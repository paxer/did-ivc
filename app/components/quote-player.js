import Component from '@ember/component';
import { inject } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  audio: null,

  actions: {
    play(quote) {
      $('ul#quotes_list li').removeClass('active');
      this.$('li').addClass('active');
      $('img#ded_image').fadeIn();

      this.get('audio').src = `/assets/sounds/${quote}.mp3`;
      this.get('audio').play();

      this.get('audio').onended = () => {
        this.$('li').removeClass('active');
        $('img#ded_image').fadeOut();
      };
    }
  }
});
