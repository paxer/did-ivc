import Service from '@ember/service';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
  emitSearchCharTyped(char) {
    this.trigger('searchCharTyped', char);
  }
});
