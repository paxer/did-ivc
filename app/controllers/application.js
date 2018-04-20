import Controller from '@ember/controller';
import {inject} from '@ember/service';

export default Controller.extend({
  search: inject('search'),

  actions: {
    search(char) {
      this.get('search').emitSearchCharTyped(char);
    }
  },
});
