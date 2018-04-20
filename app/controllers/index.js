import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this.set('audio', new Audio());
    this._super(...arguments);
  }
});
