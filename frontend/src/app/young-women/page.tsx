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
import { useTranslation } from '@/hooks/use-translation';

const YoungWomanSpace: React.FC = () => {
	const { t } = useTranslation();

	const sections = [
		{
			id: 'identity',
			icon: <Heart className='w-5 h-5 text-pink-500' />,
		},
		{
			id: 'journey',
			icon: <Target className='w-5 h-5 text-blue-500' />,
		},
		{
			id: 'rebecca',
			icon: <Star className='w-5 h-5 text-yellow-500' />,
		},
		{
			id: 'dina',
			icon: <Book className='w-5 h-5 text-purple-500' />,
		},
		{
			id: 'purity',
			icon: <Shield className='w-5 h-5 text-green-500' />,
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-50 to-pink-50'>
			<NavBar title={t('categories.youngWoman.title')} iconColor='purple' />

			<main className='max-w-4xl mx-auto px-4 py-8'>
				<HeroSection pageKey="youngWoman" />

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
														{section.id === 'identity' && t('categories.youngWoman.sections.identity.title')}
														{section.id === 'journey' && t('categories.youngWoman.sections.journey.title')}
														{section.id === 'rebecca' && t('categories.youngWoman.sections.rebecca.title')}
														{section.id === 'dina' && t('categories.youngWoman.sections.dina.title')}
														{section.id === 'purity' && t('categories.youngWoman.sections.purity.title')}
													</div>
													<div className='text-sm text-gray-500'>
														{section.id === 'identity' && t('categories.youngWoman.sections.identity.subtitle')}
														{section.id === 'journey' && t('categories.youngWoman.sections.journey.subtitle')}
														{section.id === 'rebecca' && t('categories.youngWoman.sections.rebecca.subtitle')}
														{section.id === 'dina' && t('categories.youngWoman.sections.dina.subtitle')}
														{section.id === 'purity' && t('categories.youngWoman.sections.purity.subtitle')}
													</div>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className='text-gray-600 space-y-4 pt-4'>
											{(section.id === 'identity' ? t('categories.youngWoman.sections.identity.content') :
											  section.id === 'journey' ? t('categories.youngWoman.sections.journey.content') :
											  section.id === 'rebecca' ? t('categories.youngWoman.sections.rebecca.content') :
											  section.id === 'dina' ? t('categories.youngWoman.sections.dina.content') :
											  t('categories.youngWoman.sections.purity.content')).map((paragraph: string, i: number) => (
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
