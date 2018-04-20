import Service from '@ember/service';
import Ember from 'ember'

export default Service.extend(Ember.Evented, {
  emitSearchCharTyped(char) {
    this.trigger('searchCharTyped', char);
  }
});
