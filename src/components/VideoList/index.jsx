import React, {useEffect} from "react";
import {Link, useLocation, useParams, useNavigate} from "react-router-dom";

function VideoList() {
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
			// videoUrl: "https://img.youtube.com/vi/GHkW6RFMQSU/hqdefault.jpg",
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
			// videoUrl: "https://img.youtube.com/vi/qjHnaUsrkNQ/hqdefault.jpg",
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

	let {id} = useParams();
	let videoInfo = videos.find((video) => video.id == id);
	let otherVideos = videos.filter((video) => video.id != id);
	let location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	if (videoInfo) {
		return (
			<div className="flex w-full gap-3">
				<div className="w-full px-4 pt-4">
					<div className="w-full h-[28em]">
						<img
							className="object-cover w-full h-full rounded-md"
							src={videoInfo.videoUrl}
						/>
					</div>
					<p className="mt-1 text-3xl text-white">{videoInfo.title}</p>
					<div className="flex items-start gap-4 mt-2">
						<div className="w-12 h-12 bg-blue-300 rounded-full"></div>
						<div className="text-white">
							<p className="text-base text-gray-400">{videoInfo.channel}</p>
							<p className="text-sm text-gray-400">{videoInfo.views}</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 pt-4 pr-4">
					{otherVideos.map((video) => (
						<Link to={`/video/${video.id}`}>
							<div className="w-[21.25em] cursor-pointer">
								<div>
									<img
										className="object-cover w-full h-[12.2em] rounded-md"
										src={video.videoUrl}
									/>
								</div>
								<div>
									<p className="mt-1 text-sm text-white">{video.title}</p>
									<p className="text-[0.75em] text-gray-400">{video.channel}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		);
	}
	return <div>Video topilmadi</div>;
}

export default VideoList;
