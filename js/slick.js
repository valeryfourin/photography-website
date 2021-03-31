$('.multiple-items').slick({
    infinite: true,
    dots: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });