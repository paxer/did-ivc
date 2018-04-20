import Controller from '@ember/controller';

export default Controller.extend({
  audio: null,

  init() {
    this.set('audio', new Audio());
    this._super(...arguments);
  }
});
