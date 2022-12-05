import React, { useState, useEffect } from 'react';
import DATA from './data.js';
import LOGO from '../src/images/slb-logo.svg';
import FLAG from '../src/images/portuguese-flag.png';

const Search = () => {
	/* SCROLL TO TOP STARTS */
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 900) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	/* FILTER PLAYER STARTS */
	const [filter, setFilter] = useState('');

	const searchText = (event) => {
		setFilter(event.target.value);
	};

	const inputedText = DATA.playersMainData.filter((item) => {
		return ['name', 'number', 'position'].some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filter.toString().toLowerCase())
		);
	});

	return (
		<section>
			{/* CLUB DETAILS */}

			<div className="py-4 pl-4 bg-slate-200">
				<div className="flex flex-row align-center">
					<span className="inline-block">
						<h1 className="text-slate-600 font-bold lg:text-4xl md:text-3xl text-[20px]">
							Sport Lisboa e Benfica
						</h1>
					</span>
					<span className="inline-block">
						<img
							src={LOGO}
							alt="sport lisboa e benfica logotype"
							className="lg:w-[55px] lg:h-[55px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] ml-4 mr-6"
						/>
					</span>
				</div>

				<div className="flex flex-wrap">
					<span className="block py-2">Portugal</span>
					<img
						src={FLAG}
						className="w-[25px] h-[25px] ml-2 my-auto"
						alt="Portuguese Flag"
					/>
				</div>
				<p className="font-bold mt-2">Coach: Roger Schmidt</p>
				<p className="font-bold mt-2">President: Rui Costa</p>
			</div>

			{/* PLAYER DETAILS */}

			<div className="grid grid-cols-1 py-2 mb-1">
				<p className="font-bold text-2xl text-center mt-6 uppercase">
					Find your favorite SLB player
				</p>
				<span className="text-center py-2 mb-6">Season 2022/2023</span>

				<div id="animated-div" className="py-12">
					<input
						type="text"
						className="w-[90%] md:w-[450px] lg:w-[620px] mx-auto my-4 py-3 cursor-pointer pl-2 border border-[#C30000]"
						value={filter}
						onChange={searchText.bind(this)}
						placeholder="Type a name, number or field position..."
					/>
				</div>

				{/* DISPLAY RESULTS FOUND */}
				{inputedText.length > 0 && (
					<div className="py-8 text-center">
						<p className="text-[#c30000] font-bold text-[30px]">
							{inputedText.length > 1
								? `SLB Team | ${inputedText.length} players found`
								: `${inputedText.length} Player found!`}
						</p>
					</div>
				)}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{inputedText.map((player, index) => {
					return (
						<div
							key={index}
							className="w-full mx-auto p-4 border border-slate-200"
						>
							<div className="py-2">
								<p className="w-full font-bold text-4xl md:text-5xl lg:text-6xl text-[#C30000] pb-4">
									{player.number}
								</p>
								<p className="font-bold mb-6 text-1xl md:text-2xl lowercase">
									{player.position}
								</p>
								<img
									src={player.photo}
									alt={player.name}
									className="w-[50%] md:w-[60%] lg:w-[350px] mx-auto"
								/>
							</div>

							<div className="h-[110px]">
								<p className="w-full font-300 text-center uppercase py-4 overflow-hidden sm:text-1xl md:text-3xl">
									{player.name}
								</p>
							</div>

							<p className="text-left uppercase font-bold">{player.country}</p>

							<div className="py-3">
								<p className="text-sm text-left">{`Born in: ${player.DOB}`}</p>
								<p className="text-md text-left">{`Playing for SLB since: ${player.inBenficaSince}`}</p>
							</div>
						</div>
					);
				})}
			</div>

			{/* USER ERROR MESSAGE */}
			{inputedText.length < 1 && (
				<div className="py-8 flex-1">
					<p className="text-center font-bold text-2xl">
						I cannot find that player! You sure SLB hired him already? 🤣
					</p>
					<img
						src={LOGO}
						className="w-[200px] mx-auto mt-8"
						alt="Sport Lisboa e Benfica Portugal"
					/>
				</div>
			)}

			{showButton && (
				<button onClick={scrollToTop} className="back-to-top">
					{' '}
					&#8679; {/* &#8679; is used to create the upward arrow */}
				</button>
			)}
		</section>
	);
};

export default Search;
