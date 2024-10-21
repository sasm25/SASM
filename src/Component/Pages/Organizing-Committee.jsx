/* eslint-disable react/prop-types */
import { CiLinkedin, CiMail } from "react-icons/ci";

const CommitteeSection = ({ title, members }) => {
	return (
		<div className="rounded-lg shadow-lg mb-6">
			<h2 className="text-2xl font-semibold mb-2 text-gray-200">{title}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{members.map((member, index) => (
					<div
						key={index}
						className="bg-black relative bg-opacity-25 p-4 rounded-md flex items-center shadow-sm shadow-blue-900">
						<div className="flex flex-row items-end w-full">
							<div className="flex-1">
								<p className="text-lg font-bold text-gray-100">
									{member.name}
								</p>
								<p className="text-sm text-blue-300">{member.position}</p>

								<div className="absolute flex flex-row right-2 top-[40%]">
									{member.Mail && (
										<a
											href={`mailto:${member.Mail}`}
											target="_blank"
											rel="noopener noreferrer">
											<CiMail className="ml-2 text-xl text-blue-300 hover:text-white" />
										</a>
									)}
									{member.Link && (
										<a
											href={member.Link}
											target="_blank"
											rel="noopener noreferrer">
											<CiLinkedin className="ml-2 text-xl text-blue-300 hover:text-white" />
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default function OrganizingCommittee() {
	const data = [
		{
			title: "Chief Patron",
			members: [
				{
					name: "Prof. D.K Singh",
					position:
						"Vice-Chancellor, Jharkhand University of Technology, Ranchi",
					Mail: "director@bitsindri.ac.in",
					Link: "https://www.linkedin.com/in/prof-pankaj-rai-2390038",
				},
			],
		},
		{
			title: "Patron",
			members: [
				{
					name: "Prof. Pankaj Rai",
					position: "Director, BIT Sindri",
					Mail: "director@bitsindri.ac.in",
					Link: "https://www.linkedin.com/in/prof-pankaj-rai-2390038",
				},
			],
		},
		{
			title: "Convener",
			members: [
				{
					name: "Prof. Prakash Kumar",
					position: "HOD,Prod & Ind.Engg, BIT Sindri",
					Mail: "prakashkr.prod@bitsindri.ac.in",
					Link: "https://www.linkedin.com/in/dr-prakash-kumar-231b86125",
				},
			],
		},
		{
			title: "Coordinators",
			members: [
				{
					name: "Dr. Sumanta Mukherjee",
					position: "Assistant Professor, PIE, 2k22, BIT Sindri",
					Mail: "sumanta.prod@bitsindri.ac.in",
				},
				{
					name: "Dr. Surya Narayan Panda",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "snpanda.prod@bitsindri.ac.in",
				},
			],
		},
		{
			title: "Co-Coordinators",
			members: [
				{
					name: "Mr. Kashif Hazan Kazmi",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "kashif.prod@bitsindri.ac.in",
				},
				{
					name: "Mr. Mukesh Chandra",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "mukesh.prod@bitsindri.ac.in",
					Link: "https://www.linkedin.com/in/mukesh-chandra-9772ba8a",
				},
			],
		},
		{
			title: "Conference Organising Committee",
			members: [
				{
					name: "Prof. Rajesh ",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "rakesh.prod@bitsindri.ac.in",
				},
				{
					name: "Mr. Abhishek Raj",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "abhishekraj.prod@bitsindri.ac.in",
				},
				{
					name: "Dr. Manowar Hussain",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "manowar.prod@bitsindri.ac.in",
				},
				{
					name: "Mr. A.R Ansari",
					position: "Assistant Professor, PIE, BIT Sindri",
					Mail: "aransari.prod@bitsindri.ac.in",
				},
			],
		},

		{
			title: "National Advisory Committee",
			members: [
				{
					name: "B. S. Sahay",
					position: "Director, IIM Jammu",
				},
				{
					name: "Prof. Sanjay Kumar",
					position:
						"Vice-Chancellor, Symbiosis University of Applied Science, Indore",
				},
				{
					name: "Prof. Sanjay Kumar",
					position: "Vice Chancellor of Amity University, Kolkata",
				},
				{
					name: "Sanjeev Singh",
					position: "General Manager, SAIL, Durgapur",
				},
				{
					name: "Ms. Kumud Sharma",
					position: "CEO, SuperSeva Services Pvt. Ltd",
				},
				{
					name: "Dr. Alok Kumar",
					position: "Assistant Professor, XLRI, JSR",
				},
				{
					name: "Anmol Srivastava",
					position: "Area Manager HRM, Tata Steel",
				},
			],
		},
		{
			title: "International Advisory Committee",
			members: [
				{
					name: "Stanislaw Legutko",
					position:
						"Professor, Department of Mechanical & Manufacturing Engineering",
				},
				{
					name: "Mr. Firoz Alam",
					position:
						"RMIT Professor, Australia ",
				},
				{
					name: "Prof. Grzegorz Krolczyk",
					position:
						"Director opole University, Poland",
				},
				{
					name: "Prof. Teresa Zielińska",
					position:
						"Proxy rector WUT, Poland ",
				},
				{
					name: "Prof. Ramjee Prasad",
					position: "Aalborg University, Denmark",
				},
				{
					name: "Prof. Subodha Kumar",
					position: "Texas A&M University, USA",
				},
				{
					name: "Prof. Jyoti Sinha",
					position: "The University of Manchester, UK",
				},
				{
					name: "Shailendra K Suman",
					position: "CEO, TVL International, USA",
				},
				{
					name: "Dr. Uma Shanker Jha",
					position: "Qualcomm, USA",
				},
				{
					name: "Dr. Raman Daga",
					position: "President, Metadyne, USA",
				},
				{
					name: "Dr. Sanjay Kumar Shukla",
					position: "Edith Cowan University, UK",
				},
			],
		},
		{
			title: "Scientific Advisory Committee",
			members: [
				{
					name: "Prof. K.K Singh",
					position: "IIT ISM Dhanbad, India",
				},
				{
					name: "Prof. B Oraon",
					position: "Jadavpur University, India",
				},
				{
					name: "Prof. S Chatterjee",
					position: "IIT Indore, India",
				},
				{
					name: "Prof. M Gopinath",
					position: "IIT Hyderabad, India",
				},
				{
					name: "Prof. Igor Drstvensek",
					position: "University of Maribor, Slovenia",
				},
				{
					name: "Prof. M.T Lee",
					position: "Industrial Technology Research Institute, Taiwan",
				},
				{
					name: "Somnath Chattopadhyaya",
					position: "IIT ISM, Department of Mechanical Engineering",
				},
			],
		},

		{
			title: "Student Coordinator Committee",
			members: [
				{
					name: "Piyush Ranjan",
					position: "PIE, 2k21, BIT Sindri",
					Mail: "piyushranjan5555@gmail.com",
					Link: "https://www.linkedin.com/in/sachin-kumar-gupta-1309",
				},
				{
					name: "Rishita Dutta ",
					position: "PIE, 2k21, BIT Sindri",
					Mail: "rishitadutta26@gmail.com	",
					Link: "https://www.linkedin.com/in/rishita-dutta-24a91824a",
				},
				{
					name: "Mrinjal Kumar Gupta  ",
					position: "PIE, 2k21, BIT Sindri",
					Mail: "mrinjalbit@gmail.com	",
					Link: "https://www.linkedin.com/in/mrinjalgupta ",
				},
				{
					name: "Sachin Kumar Gupta ",
					position: "PIE, 2k22, BIT Sindri",
					Mail: "sachinkg1309@gmail.com",
					Link: "https://www.linkedin.com/in/sachin-kumar-gupta-1309",
				},
				{
					name: "Syed Adnan Ahmad ",
					position: "PIE, 2k22, BIT Sindri",
					Mail: "ahmadadnan4312@gmail.com",
					Link: "https://www.linkedin.com/in/syedadnan03",
				},
				{
					name: "Harsh Bhargav ",
					position: "PIE, 2k22, BIT Sindri",
					Mail: "harshbhargav440@gmail.com",
					Link: "https://www.linkedin.com/in/harshbhargav",
				},
				{
					name: "Amit Kumar Mishra ",
					position: "PIE, 2k22, BIT Sindri",
					Mail: "amit744mishra@gmail.com",
					Link: "https://www.linkedin.com/in/amit-mishra-446367259",
				},
				{
					name: "Yash Kedia",
					position: "PIE, 2k22, BIT Sindri",
					Mail: "yashkd12790@gmail.com",
					Link: "https://www.linkedin.com/in/yash-kedia-589144255/",
				},
				{
					name: "Malay Srivastava ",
					position: "PIE, 2k23, BIT Sindri",
					Mail: "malaysrivastava547@gmail.com",
					Link: "https://www.linkedin.com/in/malay-srivastava-2a89b8284 ",
				},
				{
					name: "Nivedita Gupta ",
					position: "PIE, 2k23, BIT Sindri",
					Mail: "niveditagupta.2705@gmail.com",
					Link: "https://www.linkedin.com/in/nivedita-gupta-53960b290 ",
				},
			],
		},
		// Add more sections here as needed
	];

	return (
		<main className="text-white">
			<div className="containe w-[85%] mx-auto py-12 pt-32 min-h-[100vh]">
				<h1 className="text-4xl font-bold text-center mb-8 text-emerald-300">
					Committees
				</h1>
				{data.map((section, index) => (
					<CommitteeSection
						key={index}
						title={section.title}
						members={section.members}
					/>
				))}
			</div>
		</main>
	);
}
