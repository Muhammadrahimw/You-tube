import React from "react";

function Nav() {
	const videos = [
		{
			id: 1,
			title: "React Tutorial for Beginners",
			videoUrl: "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg",
			channel: "Codevolution",
			views: "1.2M views",
		},
		{
			id: 2,
			title: "Tailwind CSS Crash Course",
			videoUrl: "https://img.youtube.com/vi/UBOj6rqRUME/hqdefault.jpg",
			channel: "Traversy Media",
			views: "850K views",
		},
		{
			id: 3,
			title: "JavaScript ES6 Features",
			videoUrl: "https://img.youtube.com/vi/NCwa_xi0Uuc/hqdefault.jpg",
			channel: "Academind",
			views: "1.8M views",
		},
		{
			id: 4,
			title: "Understanding Redux",
			videoUrl: "https://img.youtube.com/vi/poQXNp9ItL4/hqdefault.jpg",
			channel: "Codevolution",
			views: "900K views",
		},
		{
			id: 5,
			title: "HTML & CSS Full Course",
			videoUrl: "https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg",
			channel: "freeCodeCamp",
			views: "3.4M views",
		},
		{
			id: 6,
			title: "Advanced React Patterns",
			videoUrl: "https://img.youtube.com/vi/GHkW6RFMQSU/hqdefault.jpg",
			channel: "The Net Ninja",
			views: "500K views",
		},
		{
			id: 7,
			title: "Node.js Crash Course",
			videoUrl: "https://img.youtube.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
			channel: "Traversy Media",
			views: "1.6M views",
		},
		{
			id: 8,
			title: "React Router 6 Tutorial",
			videoUrl: "https://img.youtube.com/vi/qjHnaUsrkNQ/hqdefault.jpg",
			channel: "The Net Ninja",
			views: "620K views",
		},
		{
			id: 9,
			title: "Responsive Web Design Tutorial",
			videoUrl: "https://img.youtube.com/vi/srvUrASNj0s/hqdefault.jpg",
			channel: "freeCodeCamp",
			views: "2.1M views",
		},
		{
			id: 10,
			title: "Next.js Full Course",
			videoUrl: "https://img.youtube.com/vi/0ZJgIjIuY7U/hqdefault.jpg",
			channel: "Academind",
			views: "300K views",
		},
		{
			id: 11,
			title: "TypeScript for Beginners",
			videoUrl: "https://img.youtube.com/vi/BCg4U1FzODs/hqdefault.jpg",
			channel: "Programming with Mosh",
			views: "700K views",
		},
		{
			id: 12,
			title: "Building REST APIs with Express",
			videoUrl: "https://img.youtube.com/vi/L72fhGm1tfE/hqdefault.jpg",
			channel: "Traversy Media",
			views: "650K views",
		},
	];

	return (
		<section className="flex flex-col">
			<div className="flex flex-wrap gap-3">
				<div className="px-4 py-2 text-sm text-black bg-white rounded-full cursor-pointer">
					All
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Gaming
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Music
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					J-Pop
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Manga
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Mixes
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Stop Motion
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Live
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Religious recitation
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Minecraft modding
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Action-adventure games
				</div>
				<div className="px-4 py-2 text-sm text-white bg-[#272727] rounded-full cursor-pointer">
					Vocal Music
				</div>
			</div>
			<div className="grid grid-cols-4 gap-4 pt-4">
				{videos.map((video) => (
					<div key={video.id} className="w-full cursor-pointer">
						<div className="w-full h-36">
							<img
								className="object-cover w-full h-full rounded-md"
								src={video.videoUrl}
								alt=""
							/>
						</div>
						<div className="flex items-start gap-4 mt-2">
							<div className="w-8 h-8 bg-blue-300 rounded-full"></div>
							<div className="text-white">
								<p className="">{video.title}</p>
								<p className="text-sm text-gray-400">{video.channel}</p>
								<p className="text-sm text-gray-400">{video.views}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Nav;
