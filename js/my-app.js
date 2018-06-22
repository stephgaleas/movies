// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'ios',
    modalTitle: 'Framework7',
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/deadpool/',
    	url: 'deadpool.html',
    	name: 'deadpool',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

