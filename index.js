window.addEventListener("load", function () {
	const stats = this.document.querySelectorAll('.stats')
	const header = document.querySelector(".header-banner");

	header.classList.remove("header-banner-hidden");



	window.addEventListener("scroll", function () {

    stats.forEach(function(el, key) {
      setTimeout(function() {
        el.classList.remove('hidden')
      }, 500 * key)
      
    })

		// stats.forEach(function (el, key) {
		// 	setTimeout(function () {
		// 		el.classList.remove("hidden");
		// 	}, 400 * key);
		// });


	});
});
