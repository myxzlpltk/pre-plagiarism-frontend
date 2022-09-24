import React from "react";
import {scroller} from "react-scroll";

const HeroSection = () => {
	const onClickCTA = () => scroller.scrollTo("how-it-works", {duration: 500, offset: -80});
	return (
		<section className="container mx-auto hero lg:py-10">
			<div className="hero-content flex-col lg:flex-row">
				<img src="/svg/audit.svg" alt="Logo" className="max-w-sm lg:mr-5" />
				<div>
					<h1 className="text-5xl font-bold">Pra-Plagiarisme Validator</h1>
					<p className="py-6">
						Aplikasi yang akan mengecek dokumen anda sebelum anda mengirimkan ke sistem plagiarisme.
						Sistem ini mencegah manipulasi terhadap sistem plagiarisme.
					</p>
					<button onClick={onClickCTA} className="btn btn-primary">Cari tahu cara kerjanya</button>
				</div>
			</div>
		</section>
	);
};

HeroSection.propTypes = {};

export default HeroSection;
