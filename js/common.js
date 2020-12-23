// initializing masonry
$(document).ready(function() {

	var $container = $(".row-masonry");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item",
			percentPosition: true
		});
		//$(".item").imagefill();
	});

$('[data-fancybox="gallery"]').fancybox({
	arrows: true
});
// protection from saving photos in the gallery
$('[data-fancybox]').fancybox({
	protect: true
});

// disabling context menu for images and dragging images
let img = document.getElementsByTagName('img');

for(let i in img)
{
	img[i].oncontextmenu = function() { return false; }
	img[i].ondragstart = function() { return false; };
}

	
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
});
