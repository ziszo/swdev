
	app.controller('PageController', function(){
		console.log('PageController running...');
	});

	app.controller('HeaderController', function(){
		console.log('HeaderController running...');
	});

	app.controller('BodyController', function(){
		this.fourColumns = [
			{
				'image': 'directory.png',
				'title': 'Directory',
				'subtitle1': 'Map View, Locations,',
				'subtitle2': 'Companies, Vendors',
				'overview':  'Pellentesque ac dui elit. Ut sollicitudin faucibus tellus ut rutrum. Nam pretium fringilla dignissim.'
			},
			{
				'image': 'real-estate.png',
				'title': 'Real Estate',
				'subtitle1': 'Listings, Recently Sold Market',
				'subtitle2': 'Stats, List A Data Center',
				'overview':  'Pellentesque ac dui elit. Ut sollicitudin faucibus tellus ut rutrum. Nam pretium fringilla dignissim.'
			},
			{
				'image': 'employment.png',
				'title': 'Employment',
				'subtitle1': 'Data Center Jobs,',
				'subtitle2': 'Post A Job',
				'overview':  'Pellentesque ac dui elit. Ut sollicitudin faucibus tellus ut rutrum. Nam pretium fringilla dignissim.'
			},
			{
				'image': 'deals.png',
				'title': 'Deals',
				'subtitle1': 'Colocation, Cloud, Dedicated',
				'subtitle2': 'Servers, Hardware, Post A Deal',
				'overview':  'Pellentesque ac dui elit. Ut sollicitudin faucibus tellus ut rutrum. Nam pretium fringilla dignissim.'
			}
		];
	});

	app.controller('BodyBoxController', function(){
		this.modal_off = true;
	});

	app.controller('FooterController', function(){
		
	});