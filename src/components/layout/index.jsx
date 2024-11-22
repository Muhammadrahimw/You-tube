import React from "react";
import "../elements/index.css";
import {Link, Outlet} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {RiMovieLine} from "react-icons/ri";
import {MdSubscriptions} from "react-icons/md";
import {MdHistory} from "react-icons/md";
import {MdPlaylistPlay} from "react-icons/md";
import {MdOutlineVideoLibrary} from "react-icons/md";
import {MdOutlineWatchLater} from "react-icons/md";
import {AiOutlineLike} from "react-icons/ai";
import {FiDownload} from "react-icons/fi";
import {AiOutlineScissor} from "react-icons/ai";
import {FaYoutube} from "react-icons/fa";
import {FaMicrophone, FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Layout() {
	const navigate = useNavigate();
	const navigating = (id) => {
		navigate(`/${id}`);
	};
	return (
		<main className="flex">
			<section className="px-4 py-4 nav w-[17em]">
				<div
					onClick={() => navigating(`home`)}
					className="flex items-center gap-[0.1em] text-3xl w-2xl logo pb-4 cursor-pointer">
					<FaYoutube className="text-3xl text-red-500" />
					<p className="tracking-tighter text-white">YouTube</p>
				</div>
				<div className="parts">
					<div
						onClick={() => navigating(`home`)}
						className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<AiFillHome className="text-2xl text-white " /> <p>Home</p>
					</div>
					<div
						onClick={() => navigating(`*`)}
						className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<RiMovieLine className="text-2xl text-white" /> Shorts
					</div>
					<div
						onClick={() => navigating(`*`)}
						className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<MdSubscriptions className="text-2xl text-white" /> Subscriptions
					</div>
				</div>
				<hr className="my-4 border border-gray-700 hr" />
				<div className="parts">
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<MdHistory className="text-2xl text-white" /> History
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<MdPlaylistPlay className="text-2xl text-white" /> Playlists
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<MdOutlineVideoLibrary className="text-2xl text-white" /> Your
						videos
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<MdOutlineWatchLater className="text-2xl text-white" /> Watch later
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<AiOutlineLike className="text-2xl text-white" /> Liked videos
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<FiDownload className="text-2xl text-white" /> Downloads
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<AiOutlineScissor className="text-2xl text-white" /> Your clips
					</div>
				</div>
				<hr className="my-4 border border-gray-700 hr" />
				<div className="parts">
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<p>Subscriptions</p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Alan Becker</p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Dream</p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Acapella Presents</p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Indila News</p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Indila Fans </p>
					</div>
					<div className="text-white flex items-center gap-[1.5em] py-2 pl-2">
						<div className="w-6 h-6 bg-blue-400 rounded-full"></div>
						<p>Crunchyroll</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center justify-start w-full py-4 search">
				<div className="flex items-center gap-3 mb-4 w-[50%] mr-[10em]">
					<input
						type="text"
						placeholder="Search"
						className="flex-1 p-2 pl-4 text-white placeholder-gray-400 bg-transparent border border-[#272727] rounded-full outline-none"
					/>
					<FaSearch className="text-white cursor-pointer" />
					<FaMicrophone className="text-white cursor-pointer" />
				</div>
				<Outlet />
			</section>
		</main>
	);
}

export default Layout;
