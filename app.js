Lungo.ready(function(){
	// Lungo.Router.aside("main","features")
	// setTimeout(function(){
	// 	Lungo.Router.aside("main","features")
	// },1000)
	// Lungo.Router.section("second")
	// Lungo.Router.article("main", "art-3")

	// Lungo.Element.count("section#main footer a:nth-child(1)", 50)
	Lungo.Element.progress("section#main form .progress", 10);
	setTimeout(function(){
		// Lungo.Element.count("section#main footer a:nth-child(1)", 50)
		// Lungo.Element.loading("section#main footer a:nth-child(1)", "white")
		Lungo.Element.progress("section#main form .progress", 90);
	}, 1000)

	// Lungo.Router.section("section#pull")
	// var showDialog = function(){alert("Refreshing");};
	// var config = {
	//     onPull: "Pull down to refresh",     //Text to show on pulling
	//     onRelease: "Release to...",         //Text to show on releasing
	//     onRefresh: "Loading...",            //Text to show on refreshing
	//     callback: showDialog                //Action to perform on refresh
	// };
	// Lungo.Element.Pull("#messages", config);

})

