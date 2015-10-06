/**
 * Author:
 * Fabz
 */

// require("./libs/skrollr");
// require("./libs/picturefill");


// Create a closure to maintain scope of the '$' and FBZ (Kickoff)
;(function(FBZ, $) {

	$(function() {
		// Any globals go here in CAPS (but avoid if possible)

		// follow a singleton pattern
		// (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

		FBZ.control.init();

	});// END DOC READY
	
	FBZ.model = {
		// add your data here 
		
		windowH	: 0, //browser screen 
		windowW	: 0,

		stageH	: window.innerHeight, //total document size
		stageW	: window.innerWidth,

		client_id: 'cf0c628e13d2d7087884b7d70549b2f6',
		client_secret: '0b31e6c87216b4f1561c9c3871c70a7a'

		
	};

	FBZ.view = {

		// add dom elements here
		$stage 		:$(window),
		$header		:$('header'),
		$container	:$('container'),
		$footer		:$('footer')
	};

	FBZ.control = {
		// add function here
		init : function () {
			console.debug('SoundCloud integration is running');
			FBZ.control.SCConnect();
		},


		getHeight : function (obj) {

			var value = obj.height();
			return value;
		},

		getWidth : function(obj) {

			var value = obj.width();
			return value;
		},
		defineStage : function ( ) { 

			FBZ.model.stageH = FBZ.control.getHeight(FBZ.view.$stage);
			FBZ.model.stageW = FBZ.control.getWidth(FBZ.view.$stage);
		}, 

		SCConnect : function () { 

			console.log(SC);
			SC.initialize({
				client_id: 'YOUR_CLIENT_ID',
				redirect_uri: 'http://example.com/callback'
			});
		}
	};
	// Example module
	/*
	FBZ.MyExampleModule = {
		init : function () {
			FBZ.MyExampleModule.setupEvents();
		},

		setupEvents : function () {
			//do some more stuff in here
		}
	};
	*/

})(window.FBZ = window.FBZ || {}, jQuery);
