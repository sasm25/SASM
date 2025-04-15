export default function ImpDates() {
	return (
		<div className=" w-full min-h-[100vh] flex items-center">
			<div className="bg-black bg-opacity-15 p-6 rounded-lg shadow-lg w-[90%] md:w-[65%] mx-auto m-10 ">
				<h2 className="text-3xl font-bold mb-4 text-center text-emerald-300">
					Important Dates
				</h2>
				<div className="space-y-4 text-white">
					<div className="flex justify-between items-center">
						<span className="font-medium">Full Paper Submission Start</span>
						<span className="flex items-center">
							<i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
							<span className="text-white">
								April 15, 2025
							</span>
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-medium">Full Paper Submission End</span>
						<span className="flex items-center">
							<i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
							<span className="text-red-600 font-semibold">
								Extended to April 20, 2025
							</span>
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-medium">Notification / Acceptance</span>
						<span className="flex items-center">
							<i className="fas fa-bell text-blue-600 mr-2"></i>
							<span className="text-white">
								April 20, 2025
							</span>
						</span>
					</div>
					{/* <div className="flex justify-between items-center">
						<span className="font-medium">Early Bird Registration Start</span>
						<span className="flex items-center">
							<i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
							<span className="text-white">
								30<sup>th</sup> May 202X
							</span>
						</span>
					</div> */}
					{/* <div className="flex justify-between items-center">
						<span className="font-medium">Camera Ready Paper</span>
						<span className="flex items-center">
							<i className="fas fa-check-circle text-blue-600 mr-2"></i>
							<span className="text-white">
								5<sup>th</sup> June 202X
							</span>
						</span>
					</div> */}
					<div className="flex justify-between items-center">
						<span className="font-medium">Last Date of Registration</span>
						<span className="flex items-center">
							<i className="fas fa-calendar-check text-blue-600 mr-2"></i>
							<span className="text-white">
								20<sup>th</sup> April 20, 2025
							</span>
						</span>
					</div>
				</div>
				{/* <div className="mt-4 text-center">
				<a
					href="https://cmt3.research.microsoft.com/"
					className="text-emerald-300 hover:underline">
					For Paper Submission Visit: https://cmt3.research.microsoft.com/
				</a>
			</div> */}
			</div>
		</div>
	);
}
