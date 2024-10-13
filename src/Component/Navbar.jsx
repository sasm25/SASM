import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";
const MOBILE_NAV_ITEMS = [
	{ id: 0, navTitle: "home", to: "/" },
	{ id: 1, navTitle: "Committee", to: "/org-committee" },
	{ id: 2, navTitle: "Important Dates", to: "/imp-dates" },
	{ id: 3, navTitle: "Registration", to: "/registration" },
	{ id: 4, navTitle: "contact", to: "/contact" },
];
export default function Navbar() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const hideNavItemsVariant = {
		opened: {
			opacity: 0,
			y: "-100%",
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		closed: {
			opacity: 1,
			y: "0%",
			transition: {
				delay: 1.1,
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	const mobileMenuVariant = {
		opened: {
			y: "0%",
			transition: {
				delay: 0.15,
				duration: 1.1,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
		closed: {
			y: "-100%",
			transition: {
				delay: 0.35,
				duration: 0.63,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
	};

	const fadeInVariant = {
		opened: {
			opacity: 1,
			transition: {
				delay: 1.2,
			},
		},
		closed: { opacity: 0 },
	};

	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 1,
				staggerChildren: 0.18,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	const liVariant = {
		opened: {
			opacity: 1,
			y: "0%",
			transition: {
				duration: 0.29,
				ease: "easeOut",
			},
		},
		closed: {
			opacity: 0,
			y: "100%",
			transition: {
				duration: 0.25,
				ease: "easeInOut",
			},
		},
	};

	const fadeInStart = { opacity: 0 };
	const fadeInEnd = { opacity: 1 };
	const fadeInTransition = { duration: 1 };

	return (
		<>
			<motion.div
				initial="closed"
				animate={mobileNavOpen ? "opened" : "closed"}
				className="w-full text-white navb fixed text-xl p-2  py-4 max-sm:py-2 z-20 font-semibold flex justify-between items-center">
				<motion.div
					variants={hideNavItemsVariant}
					className="flex items-center">
					<img
						src="/images/Group 3.svg"
						className="h-16 w max-md:h-12 max-md:w-72 "
					/>
				</motion.div>
				<div className="items-center flex text-beige">
					<motion.div
						variants={hideNavItemsVariant}
						onClick={() => setMobileNavOpen(true)}
						className="uppercase text-[15px] cursor-pointer md:hidden mr-2">
						Menu
					</motion.div>

					<motion.div
						variants={mobileMenuVariant}
						className="fixed top-0 left-0 flex flex-col items-center w-full z-20 h-full bg-black">
						<motion.button
							variants={fadeInVariant}
							onClick={() => setMobileNavOpen(false)}
							className="self-end mt-8 mr-12 text-white bg-transparent border-none outline-none uppercase text-[15px] cursor-pointer">
							Close
						</motion.button>
						<motion.ul variants={ulVariant} className="mt-10 list-none">
							{MOBILE_NAV_ITEMS.map((navItem) => (
								<motion.li
									whileTap={{ scale: 0.95 }}
									key={navItem.id}
									className="my-5 overflow-hidden select-none cursor-pointer">
									<motion.div
										variants={liVariant}
										className="text-center capitalize text-[34px]">
										<NavLink
											onClick={() => setMobileNavOpen(false)}
											to={navItem.to}
											className={({ isActive }) =>
												`block py-2  ${
													isActive ? "text-white " : "text-gray-400"
												}  duration-200  `
											}>
											{navItem.navTitle}
										</NavLink>
									</motion.div>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
					<motion.div
						initial={fadeInStart}
						animate={fadeInEnd}
						transition={fadeInTransition}
						className="flex justify-center w-full mt-12"></motion.div>
				</div>

				<div
					className=" max-md:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="mobile-menu-2">
					<ul className="flex items-center  flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0 text-lg mr-2">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									`block py-2  ${
										isActive ? "text-white " : "text-gray-400"
									}  duration-200 border-b border-gray-100  lg:border-0   hover:text-white `
								}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/org-committee"
								className={({ isActive }) =>
									`block py-2 ${
										isActive ? "text-white " : "text-gray-400"
									}  duration-200 border-b border-gray-100  lg:border-0  hover:text-white `
								}>
								Committee
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/imp-dates"
								className={({ isActive }) =>
									`block py-2 ${
										isActive ? "text-white " : "text-gray-400"
									}  duration-200 border-b border-gray-100  lg:border-0  hover:text-white `
								}>
								Important Dates
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/registration"
								className={({ isActive }) =>
									`block py-2 ${
										isActive ? "text-white " : "text-gray-400"
									}  duration-200 border-b border-gray-100  lg:border-0  hover:text-white `
								}>
								Registration
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									`block py-2 ${
										isActive ? "text-white " : "text-gray-400"
									}  duration-200 border-b border-gray-100  lg:border-0  hover:text-white `
								}>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</motion.div>
		</>
	);
}
