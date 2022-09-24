import React from "react";
import MethodCard from "./MethodCard";

const HowItWorksSection = () => {
	const images = ["/img/method2.jpg", "/img/method2.jpg", "/img/method5.jpg", "/img/method5.jpg"];
	const [activeMethod, setActiveMethod] = React.useState(0);

	return (
		<section className="bg-how-it-works bg-cover bg-no-repeat text-white" id="how-it-works">
			<div className="backdrop-blur-2xl">
				<div className="container mx-auto py-20 px-10">
					<h2 className="text-4xl font-bold text-center mb-2">Bagaimana Cara Kerjanya?</h2>
					<h5 className="font-light text-center mb-20">
						Kami memeriksa dokumen anda berdasarkan berbagai macam manipulasi.
					</h5>
					<div className="flex flex-wrap">
						<div className="basis-5/12 pt-10">
							<MethodCard title="Teks Ilusif" description="Mengubah warna teks menjadi putih seolah-olah spasi"
													active={activeMethod === 0} onClick={() => setActiveMethod(0)} />
							<MethodCard title="Gambar Paragraf" description="Mengubah bagian paragraf menjadi gambar"
													active={activeMethod === 1} onClick={() => setActiveMethod(1)} />
							<MethodCard title="Teks Tersembunyi" description="Menyembunyikan teks spam dibalik gambar"
													active={activeMethod === 2} onClick={() => setActiveMethod(2)} />
							<MethodCard title="Font Palsu" description="Menggunakan font palsu untuk mengubah teks"
													active={activeMethod === 3} onClick={() => setActiveMethod(3)} />
						</div>
						<div className="basis-7/12">
							<img src={images[activeMethod]} alt="Metode" className="max-w-full rounded-xl" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
