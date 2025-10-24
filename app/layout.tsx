import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Gulf Esports League",
		template: "%s | Gulf Esports League",
	},
	description: "Gulf Esports League (GEL) — Regional competitive esports across the Gulf. Weekly tournaments, prize pools, ranking system and a grand season finale. Join players across League of Legends, Valorant and more.",
	keywords: ["Gulf Esports League", "Gulf esports", "esports tournaments", "weekly tournaments", "prize pool", "League of Legends", "Valorant", "gaming community"],
	authors: [{ name: "Gulf Esports League", url: "https://gulfesportsleague.com" }],
	openGraph: {
		title: "Gulf Esports League — Weekly Tournaments & Prize Pools",
		description: "Compete in regional esports cups — sign up for weekly tournaments, earn points, win prizes and reach the grand season finale.",
		url: "https://gulfesportsleague.com",
		siteName: "Gulf Esports League",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Gulf Esports League - competitive regional esports",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Gulf Esports League — Weekly Cups & Prizes",
		description: "Join Gulf Esports League: weekly competitive cups, prize pools, and a lively gaming community across the region.",
		images: ["/og-image.png"],
		creator: "@GulfEsports",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			"index": true,
			"follow": true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	metadataBase: new URL("https://gulfesportsleague.com"),
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${bebasNeue.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
