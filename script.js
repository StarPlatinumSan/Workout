const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

const workoutImage = document.querySelector(".workoutImage");

const bentover = document.getElementById("bent-over-row");
const dbrow = document.getElementById("db-row");
const reverseFly = document.getElementById("bent-over-reverse-fly");
const benchDips = document.getElementById("bench-dips");
const hammer = document.getElementById("hammer-curl");
const shoulderPress = document.getElementById("shoulder-press");
const overhead = document.getElementById("overhead");

let seconds = 0;
let interval;

start.addEventListener("click", () => {
	timer.style.backgroundColor = "#0095ff";

	clearInterval(interval);
	seconds = 0;
	timer.textContent = "00:00";

	interval = setInterval(() => {
		seconds++;
		timer.textContent = formatTime(seconds);
	}, 1000);
});

pause.addEventListener("click", () => {
	timer.style.backgroundColor = "#1d1d1d";
	clearInterval(interval);
});

reset.addEventListener("click", () => {
	timer.style.backgroundColor = "#1d1d1d";

	clearInterval(interval);
	seconds = 0;
	timer.textContent = "00:00";
});

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function setActiveButton(button) {
	const buttons = document.querySelectorAll(".day");
	buttons.forEach((btn) => {
		btn.classList.remove("active");
	});
	button.classList.add("active");
}

function showImage(image) {
	const workoutImage = document.querySelector(".workoutImage");
	workoutImage.classList.remove("invisible");
	workoutImage.src = image;
}

workoutImage.addEventListener("click", () => {
	workoutImage.classList.add("invisible");
});

bentover.addEventListener("click", () => {
	showImage("assets/bentover.jpg");
});

dbrow.addEventListener("click", () => {
	showImage("assets/dbrow.jpg");
});

reverseFly.addEventListener("click", () => {
	showImage("assets/bentoverreverse.jpg");
});

benchDips.addEventListener("click", () => {
	showImage("assets/benchdips.webp");
});

hammer.addEventListener("click", () => {
	showImage("assets/hammer.webp");
});

shoulderPress.addEventListener("click", () => {
	showImage("assets/shoulderpress.webp");
});

overhead.addEventListener("click", () => {
	showImage("assets/overhead.webp");
});

const buttons = document.querySelectorAll(".day");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const workouts = document.querySelectorAll(".workout");
		workouts.forEach((workout) => {
			workout.classList.add("hidden");
		});

		const activeButton = document.querySelector(".active");
		if (activeButton.id === "push") {
			workouts[0].classList.remove("hidden");
		} else if (activeButton.id === "pull") {
			workouts[1].classList.remove("hidden");
		} else if (activeButton.id === "fullBody") {
			workouts[2].classList.remove("hidden");
		}
	});
});
