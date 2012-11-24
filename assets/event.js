Lungo.Events.init({

	'tap section#second article' : function(){
		// Lungo.Notification.show('title','description','user', true, 5)
		// Lungo.Notification.loading();
		Lungo.Notification.success('titulo','tap to close','user')

		// setTimeout(Lungo.Notification.hide, 2000)
	},

	'swipeRight section#main article' :  function(){
		// Lungo.Router.aside("main", "features")
		Lungo.View.Aside.show("#features")
	},

	'swipeLeft section#main article' :  function(){
		// Lungo.Router.aside("main", "features")
		Lungo.View.Aside.hide()
	}



})