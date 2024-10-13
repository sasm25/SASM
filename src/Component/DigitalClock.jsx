import React, { useState, useEffect } from "react";

function DigitalClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthsOfYear = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const day = daysOfWeek[time.getDay()];
	const month = monthsOfYear[time.getMonth()];
	const date = time.getDate();
	const dateSuffix = (date) => {
		if (date > 3 && date < 21) return "th";
		switch (date % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	};
	const year = time.getFullYear();
	const hours = time.getHours() % 12 || 12;
	const minutes = String(time.getMinutes()).padStart(2, "0");
	const seconds = String(time.getSeconds()).padStart(2, "0");
	const ampm = time.getHours() >= 12 ? "PM" : "AM";

	return (
		<div className="text-lg text-white font-semibold bg-[#202f5b] w-full ">
			<span>{`${day}. ${month} ${date}${dateSuffix(date)}, ${year}`}</span>
			<span
				style={{
					marginLeft: "10px",
					padding: "5px",
					color: "#ffffff",
					borderRadius: "5px",
				}}>
				{`${hours}:${minutes}:${seconds} ${ampm}`}
			</span>
		</div>
	);
}

export default DigitalClock;
