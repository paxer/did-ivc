import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  title: null,
  searchChars: null,
  searchFunction: null,
  database: inject('database'),

  init() {
    let quotes = this.get('database').quotes;
    let title = quotes[Math.floor(Math.random() * quotes.length)];
    //
    this.set('title', title);

    this._super(...arguments);
  },

  actions: {
    searchByChar() {
      this.get('searchFunction')(this.get('searchChars'));
    }
  }
});
