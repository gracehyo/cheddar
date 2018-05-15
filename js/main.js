// 001 side nav
// $('.hamburger').on('click', function() {
// 	$('.sidebar').addClass('active');
// 	});

// // Step 5: Remove the "active" class from the "sidebar" when the "x" is clicked.
// $('.close').on('click', function() {
// 	$('.sidebar').removeClass('active');
// 	});

// 001 dropdown nav


// 002 sticky nav + 
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance scrolled is: ' + distanceScrolled);
	if ($(window).scrollTop() > 700) {
		$('.nav').addClass('scrolled');
	} else {
		$('.nav').removeClass('scrolled');
	}

//003 fade in	
		if ($(window).scrollTop() > 50) {
		$('.content1-1').addClass('content-ease');
	} 

		if ($(window).scrollTop() > 60) {
		$('.content1-2').addClass('content-ease');
	} 

		if ($(window).scrollTop() > 70) {
		$('.content1-3').addClass('content-ease');
	} 
		});


//04 subscribe modal
// $('#subscribe').on('click', function () {
// 	$('.modal').addClass('open');
// });

// $('#close').on('click', function () {
// 	$('.modal').removeClass('open');
// });

//05 bootstrap responsive: tablet & mobile 