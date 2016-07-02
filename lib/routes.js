FlowRouter.route( '/terms', {
  action: function() {
    // Do whatever we need to do when we visit http://app.com/terms.
    console.log( "Okay, we're on the Terms of Service page!" );
  },
  name: 'termsOfService' // Optional route name.
});

FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      main: 'home',
      navbar: 'navbar',
      footer: 'footer'
   } );
    console.log( "Okay, we're on the home page!" );
  },
  name: 'home' // Optional route name.
});



FlowRouter.route( '/dextrose', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      main: 'dextrose',
      navbar: 'navbar',
      footer: 'footer'
    } );
    console.log( "Okay, we're on the dextrose calculator page!" );
  },
  name: 'dextrose' // Optional route name.
});

FlowRouter.route( '/insulin', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      main: 'insulin',
      navbar: 'navbar',
      footer: 'footer'
    } );
  },
  name: 'insulin' // Optional route name.
});

FlowRouter.route( '/newpump', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      main: 'newpump',
      navbar: 'navbar',
      footer: 'footer'
    } );
  },
  name: 'insulin' // Optional route name.
});

FlowRouter.route( '/glucagon', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      main: 'glucagon',
      navbar: 'navbar',
      footer: 'footer'
    } );
  },
  name: 'glucagon' // Optional route name.
});
