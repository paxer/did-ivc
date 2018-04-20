import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let quotes = [
      'а, ведь я так и понял, что мудила',
      'адвокат - это тот же гад',
      'башка твоя с плеч на этой неделе отлетает как кочан капусты'
    ];

    return quotes
  }
});
