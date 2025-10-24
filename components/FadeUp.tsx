"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {
	className?: string;
	children: React.ReactNode;
	stagger?: boolean;
};

export default function FadeUp({ className = "", children, stagger = false }: Props) {
	const duration = 0.5;
	const gap = 0.2; // delay between children when staggered

	if (!stagger) {
		return (
			<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration }} viewport={{ once: true }} className={className}>
				{children}
			</motion.div>
		);
	}

	const items = React.Children.toArray(children);

	return (
		<div className={className}>
			{items.map((child, i) => (
				<motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration, delay: i * gap }} viewport={{ once: true }}>
					{child}
				</motion.div>
			))}
		</div>
	);
}
