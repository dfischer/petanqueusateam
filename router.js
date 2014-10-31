Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/thankyou', function() {
  this.render('thankyou')
});

Router.route('/', function () {
  this.render('Home', {
    data: function () { return true }
  });
});
