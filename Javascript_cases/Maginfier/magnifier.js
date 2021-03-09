function $(id) {
	return document.getElementById(id);
}
window.onload = function() {
	let largebox = $("largebox");
	let largeimage = $("largeimage");
	let middlebox = $("middlebox");
	let middleimage = $("middleimage");
	let smallbox = $("smallbox");
	let smallimages = smallbox.getElementsByTagName('img');
	let shadow = $("shadow");
	let preventcover = $("preventcover");

	for(let i = 0; i < smallimages.length; i++) {
		smallimages[i].onmouseover = function() {
			for(let j = 0; j < smallimages.length; j++) {
				smallimages[j].className = '';
			}
			this.className = 'current';
			largeimage.src = `img/big-${i + 1}.jpg`;
			middleimage.src = `img/mid-${i + 1}.jpg`;
		}
	}

	preventcover.onmouseenter = function() {
		largeimage.style.display = "block";
    shadow.style.display = "block";
	}
	preventcover.onmouseout = function() {
		largeimage.style.display = "none";
    shadow.style.display = "none";
	}

	preventcover.onmousemove = function(e) {
		let shadowHeight = shadow.offsetHeight;
		let shadowWidth = shadow.offsetWidth;

		let currentLeft = e.offsetX - shadowWidth / 2;
		let currentTop = e.offsetY - shadowHeight / 2;

		if(currentLeft < 0) {
			currentLeft = 0;
		}
		if(currentTop < 0) {
			currentTop = 0;
		}

		let shadowMaxLeft = middlebox.offsetWidth - shadow.offsetWidth;
		let shadowMaxTop = middlebox.offsetHeight - shadow.offsetHeight;
		if(currentLeft > shadowMaxLeft) {
			currentLeft = shadowMaxLeft;
		}
		if(currentTop > shadowMaxTop) {
			currentTop = shadowMaxTop;
		}

		shadow.style.left = currentLeft + 'px';
		shadow.style.top = currentTop + 'px';

		let largeimageLeft = - currentLeft / middlebox.offsetWidth * (largeimage.offsetWidth);
		let largeimageTop = - currentTop / middlebox.offsetHeight * (largeimage.offsetHeight);

		largeimage.style.left = largeimageLeft + 'px';
		largeimage.style.top = largeimageTop + 'px';
	}
}