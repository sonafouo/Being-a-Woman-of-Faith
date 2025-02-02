'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Heart, Star, Book, Users, Shield, Target} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import NavBar from '@/components/ui/nav-bar';
import HeroSection from '@/components/ui/hero-section';
import {QuestionsSection} from '@/components/ui/questions-section';

const YoungWomanSpace: React.FC = () => {
	const sections = [
		{
			id: 'identity',
			title: 'Your Identity in Christ',
			subtitle: 'Understanding Your True Worth',
			icon: <Heart className='w-5 h-5 text-pink-500' />,
			content: [
				"You aren't yet married and are preparing yourself for that stage of life while honing other areas. You may still be under parental care or, for many, already independent.",
				'This moment is crucial as it prepares you for marital life, independence, motherhood, and increased responsibility.',
				'Your identity is not defined by marriage or career but by being a daughter of the Most High God. Keep this in mind as we move forward.',
			],
		},
		{
			id: 'journey',
			title: 'Your Journey',
			subtitle: "Walking in God's Timing",
			icon: <Target className='w-5 h-5 text-blue-500' />,
			content: [
				"You may be completing your studies or already starting a career, and these may occupy most of your days. However, it doesn't end there.",
				'Remember that there is no lateness in any of these areas —education, marriage, or motherhood. As long as you are making the most of the opportunities presented to you, just keep moving forward with confidence.',
				'Our society has diverse views on these matters, but in this forum, we aim to uphold a more godly standard.',
			],
		},
		{
			id: 'rebecca',
			title: 'Learning from Rebecca',
			subtitle: 'A Story of Faith and Obedience',
			icon: <Star className='w-5 h-5 text-yellow-500' />,
			content: [
				'Rebecca (Genesis 24) was a young lady like you, living under parental care. Her behavior and good heart stand out in her story.',
				"She wasn't fetching water to be noticed; it was simply a household chore she was doing. She decided to fetch water for all the camels and even proposed them to come over to their house.",
				'In the process of obeying her parents (doing the will of God), she applied what she had learned from her parents and from God, and she obtained a husband—the only son of Abraham, the father of faith.',
				"You are not late in the eyes of God; He is preparing you for what He has in store for you. You need preparation for any task, so don't go through it with bitterness, but with joy through faith.",
			],
		},
		{
			id: 'dina',
			title: 'Learning from Dina',
			subtitle: 'Understanding the Dangers of Idleness',
			icon: <Book className='w-5 h-5 text-purple-500' />,
			content: [
				"Dina's story (Genesis 34) teaches us about the dangers of distraction and idleness.",
				'Unlike Rebecca who was diligent in her duties, Dina left her house aimlessly to see the city girls.',
				'The lesson here is clear: stay busy doing what God has given you to do. By doing so, you are learning and equipping yourself with the tools needed for your future duties.',
				"The devil uses idleness and distraction to lead young ladies astray. He does not come just to steal, but also to kill and destroy—don't give him access to any part of your life.",
			],
		},
		{
			id: 'purity',
			title: 'Sexual Purity',
			subtitle: 'Guarding Your Heart and Body',
			icon: <Shield className='w-5 h-5 text-green-500' />,
			content: [
				'Sexual purity goes beyond physical abstinence—it encompasses your thoughts and activities.',
				'If you are a Christian, you understand that our mind is a major gateway for sin. Sexual purity requires abstaining from any activity or thought which is sexually impure.',
				'Even if you came to know the Lord after losing your virginity or experiencing trauma, you can still become sexually pure. You are a new creature in Christ Jesus (1 Corinthians 5:12).',
				'We are required to offer ourselves as a living sacrifice unto God (Romans 12:1). God wants your body, soul, and mind to belong to Him wholly.',
			],
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-50 to-pink-50'>
			<NavBar title='Young Woman Space' iconColor='purple' />

			<main className='max-w-4xl mx-auto px-4 py-8'>
				<HeroSection
					title='Welcome, Dear Young Woman'
					description="This is a special season of preparation and growth. Let's discover God's purpose for your life together."
					imagePath='/images/young-woman-profile.jpg'
				/>

				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.2}}>
					<Card className='mb-8 modern-card'>
						<CardContent className='p-6'>
							<Accordion type='single' collapsible className='space-y-4'>
								{sections.map((section, index) => (
									<AccordionItem key={section.id} value={section.id}>
										<AccordionTrigger className='text-lg font-medium'>
											<div className='flex items-center space-x-4'>
												{section.icon}
												<div className='text-left'>
													<div className='font-semibold'>{section.title}</div>
													<div className='text-sm text-gray-500'>{section.subtitle}</div>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className='text-gray-600 space-y-4 pt-4'>
											{section.content.map((paragraph, i) => (
												<p key={i} className='leading-relaxed'>
													{paragraph}
												</p>
											))}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				</motion.div>

				<QuestionsSection />
			</main>
		</div>
	);
};

export default YoungWomanSpace;
