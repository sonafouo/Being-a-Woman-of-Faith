'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Heart, Star, Book, Users, Crown, CircleDot, Shield} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import NavBar from '@/components/ui/nav-bar';
import HeroSection from '@/components/ui/hero-section';
import {QuestionsSection} from '@/components/ui/questions-section';
import { useTranslation } from '@/hooks/use-translation';

const MarriedWomenSpace: React.FC = () => {
	const { t } = useTranslation();

	const sections = [
		{
			id: 'introduction',
			icon: <Star className='w-5 h-5 text-yellow-500' />,
		},
		{
			id: 'identity',
			icon: <Crown className='w-5 h-5 text-pink-500' />,
		},
		{
			id: 'meaning',
			icon: <Book className='w-5 h-5 text-purple-500' />,
		},
		{
			id: 'marriage',
			icon: <Heart className='w-5 h-5 text-red-500' />,
		},
		{
			id: 'submission',
			icon: <Shield className='w-5 h-5 text-blue-500' />,
		},
		{
			id: 'faithWalk',
			icon: <CircleDot className='w-5 h-5 text-green-500' />,
		},
		{
			id: 'emotions',
			icon: <Users className='w-5 h-5 text-orange-500' />,
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50'>
			<NavBar title={t('categories.marriedWoman.title')} iconColor='yellow' />

			<main className='max-w-4xl mx-auto px-4 py-8'>
				<HeroSection pageKey="marriedWoman" />

				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.2}}>
					<Card className='mb-8 modern-card'>
						<CardContent className='p-6'>
							<Accordion type='single' collapsible className='space-y-4'>
								{sections.map((section) => (
									<AccordionItem key={section.id} value={section.id}>
										<AccordionTrigger className='text-lg font-medium'>
											<div className='flex items-center space-x-4'>
												{section.icon}
												<div className='text-left'>
													<div className='font-semibold'>
														{section.id === 'introduction' && t('categories.marriedWoman.sections.introduction.title')}
														{section.id === 'identity' && t('categories.marriedWoman.sections.identity.title')}
														{section.id === 'meaning' && t('categories.marriedWoman.sections.meaning.title')}
														{section.id === 'marriage' && t('categories.marriedWoman.sections.marriage.title')}
														{section.id === 'submission' && t('categories.marriedWoman.sections.submission.title')}
														{section.id === 'faithWalk' && t('categories.marriedWoman.sections.faithWalk.title')}
														{section.id === 'emotions' && t('categories.marriedWoman.sections.emotions.title')}
													</div>
													<div className='text-sm text-gray-500'>
														{section.id === 'introduction' && t('categories.marriedWoman.sections.introduction.subtitle')}
														{section.id === 'identity' && t('categories.marriedWoman.sections.identity.subtitle')}
														{section.id === 'meaning' && t('categories.marriedWoman.sections.meaning.subtitle')}
														{section.id === 'marriage' && t('categories.marriedWoman.sections.marriage.subtitle')}
														{section.id === 'submission' && t('categories.marriedWoman.sections.submission.subtitle')}
														{section.id === 'faithWalk' && t('categories.marriedWoman.sections.faithWalk.subtitle')}
														{section.id === 'emotions' && t('categories.marriedWoman.sections.emotions.subtitle')}
													</div>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className='text-gray-600 space-y-4 pt-4'>
											{(section.id === 'introduction' ? t('categories.marriedWoman.sections.introduction.content') :
											  section.id === 'identity' ? t('categories.marriedWoman.sections.identity.content') :
											  section.id === 'meaning' ? t('categories.marriedWoman.sections.meaning.content') :
											  section.id === 'marriage' ? t('categories.marriedWoman.sections.marriage.content') :
											  section.id === 'submission' ? t('categories.marriedWoman.sections.submission.content') :
											  section.id === 'faithWalk' ? t('categories.marriedWoman.sections.faithWalk.content') :
											  t('categories.marriedWoman.sections.emotions.content')).map((paragraph: string, i: number) => (
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

export default MarriedWomenSpace;
