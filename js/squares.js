if (Meteor.isClient) {
  // Template.hello.greeting = function () {
  //   return "Welcome to squares.";
  // };

  // Template.hello.events({
  //   'click input' : function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button");
  //   }
  // });

  Meteor.startup(function () {
  	for (var i=0; i<10; i++) {
  		$('#lgrid').append('<div class=\"height-11 padded\"><div class=\"bbox fullheight\"></div></div>');
  	}

  	for (var i=0; i<10; i++) {
  		$('#rugrid').append('<div class=\"bit-10 padded fullheight\"><div class=\"bbox fullheight\"></div></div>');
  	}

  	for (var i=0; i<100; i++) {
  		$('#mgrid').append('<div class=\"bit-10 padded height-11\"><div class=\"mbox fullheight\"></div></div>');
  	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}