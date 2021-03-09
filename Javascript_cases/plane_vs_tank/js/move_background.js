//Moving background
let bg1 = document.querySelector('#bg1');
let bg2 = document.querySelector('#bg2');

let timerBg = setInterval(() => {
	bg1.style.top = bg1.offsetTop + 1 + 'px';
	bg2.style.top = bg2.offsetTop + 1 + 'px';
	
	if(bg1.offsetTop >= 768) {
		bg1.style.top = '-768px';
	}
	if(bg2.offsetTop >= 768) {
		bg2.style.top = '-768px';
	}
}, 10);

//Move the airplane
let oAirplane = document.querySelector("#airplane");
let oMainScreen = document.querySelector('#mainScreen');

function handleAirplaneMoving (e) {
	let basicX = e.pageX;
	let basicY = e.pageY;

	document.onmousemove = function(e) {
		let currentX = e.pageX;
		let currentY = e.pageY;
		let moveX = currentX - basicX;
		let moveY = currentY - basicY;
		basicX = currentX;
		basicY = currentY;

		let currentLeft = oAirplane.offsetLeft + moveX;
		let currentTop = oAirplane.offsetTop + moveY;

		if(currentLeft <= 0) {
			currentLeft = 0;
		}
		if(currentTop <= 0) {
			currentTop = 0;
		}
		if(currentLeft >= 403) {
			currentLeft = 403;
		}
		if(currentTop >= (768 - 82)) {
			currentTop = 686;
		}

		oAirplane.style.left = currentLeft  + "px";
		oAirplane.style.top = currentTop + "px";
	}
}

oAirplane.addEventListener("click", handleAirplaneMoving);

// create and move the bullet
let timerBullet = setInterval(() => {
	let bullet = document.createElement("div");
	bullet.className = "bullet";
	oMainScreen.appendChild(bullet);
	bullet.style.left = oAirplane.offsetLeft + 52 + 'px';
	bullet.style.top = oAirplane.offsetTop - 15 + 'px';

	let timerBulletFly = setInterval(() => {
		bullet.style.top = bullet.offsetTop - 10 + 'px';
		if(bullet.offsetTop <= -20) {
			clearInterval(timerBulletFly);
			oMainScreen.removeChild(bullet);
		}
	}, 50);

	bullet.timer = timerBulletFly;

}, 1000);

// create and move the tank
let timerTank = setInterval(() => {
	let tank = document.createElement("div");
	tank.className = "tank";
	tank.style.left = randomNumber(55, 457) + 'px';
	tank.style.top = 0;
	oMainScreen.appendChild(tank);

	let timerTankFall = setInterval(() => {
		tank.style.top = tank.offsetTop + 40 + 'px';
		if(tank.offsetTop >= 788) {
			clearInterval(timerTankFall);
			oMainScreen.removeChild(tank);
		} 
	},600);

	tank.timer = timerTankFall;
}, 1500);

//checkCollision
let timerAttack = setInterval(() => {
	let bullets = document.querySelectorAll(".bullet");
	let tanks = document.querySelectorAll(".tank");

	for(let i = 0; i < bullets.length; i++) {
		for(let j = 0; j < tanks.length; j++) {
			let b = bullets[i];
			let t = tanks[j];
			if(checkCollision(b, t)) {
				clearInterval(b.timer);
				clearInterval(t.timer);
				oMainScreen.removeChild(b);
				oMainScreen.removeChild(t);
				break;
			}
		}
	}
}, 100);

// check collision between tank and airplane
let timerBreak = setInterval(() => {
	let tanks = document.querySelectorAll('.tank');

	for(let i = 0; i < tanks.length; i++) {
		if(checkCollision(tanks[i], oAirplane)) {
			for(let j = 0; j < 100; j++) {
				clearInterval(j);
			}
		} 
	}
}, 100);