(function() {
	function a() {
		var b = document.documentElement.clientWidth;
		b = b > 750 ? 750 : b;
		var c = b / 750 * 1;
		document.getElementsByTagName("html")[0].style.fontSize = c + "rem"
	}
	a();
	window.onresize = a
})();
