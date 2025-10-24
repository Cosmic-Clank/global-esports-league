import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import GamingCups from "../components/GamingCups";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Description from "@/components/Description";
import Socials from "@/components/Socials";

export default function Home() {
	return (
		<main className='min-h-screen text-white'>
			<Navbar />
			<Hero />

			<div className='divider' />

			<About />
			<GamingCups />
			<Description />
			<Socials />
			<Sponsors />

			<Footer />
		</main>
	);
}
