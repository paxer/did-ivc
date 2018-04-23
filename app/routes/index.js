import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  search: inject('search'),
  database: inject('database'),
  quotes: null,

  init() {
    this.search.on('searchCharTyped', this, 'filterQuotes');
    this.set('quotes', this.database.quotes);
    this._super(...arguments);
  },

  filterQuotes(char) {
    let controller = this.controllerFor('index');
    let filtered = this.quotes.filter(quote => quote.includes(char));
    controller.set('model', filtered);
  },

  model() {
    return this.quotes;
  }
});
