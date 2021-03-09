function randomNumber(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}

function checkCollision(obj1, obj2) {
	let leftSide1 = obj1.offsetLeft;
	let width1 = obj1.offsetWidth;
	let rightSide1 = obj1.offsetLeft + width1;

	let leftSide2 = obj2.offsetLeft;
	let width2 = obj2.offsetWidth;
	let rightSide2 = obj2.offsetLeft + width2; 

	let topSide1 = obj1.offsetTop;
	let height1 = obj1.offsetHeight;
	let bottomSide1 = obj1.offsetTop + height1;

	let topSide2 = obj2.offsetTop;
	let height2 = obj2.offsetHeight;
	let bottomSide2 = obj2.offsetTop + height2;

	let horizontalSafe = leftSide2 > rightSide1 || rightSide2 < leftSide1;
	let verticalSafe = topSide2 > bottomSide1 || bottomSide2 < topSide1;

	return !(horizontalSafe || verticalSafe);
}