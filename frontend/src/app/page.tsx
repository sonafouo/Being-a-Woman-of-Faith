'use client';

import {motion} from 'framer-motion';
import {useLanguage} from '@/contexts/language-context';
import {useTranslation} from '@/hooks/use-translation';
import {useRef, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {Sparkles, Heart, Book, Users, Globe, MessageCircle} from 'lucide-react';
import Link from 'next/link';
import styled from 'styled-components';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import ContactForm from '@/components/ui/contact-form';
import {useRouter} from 'next/navigation';

const StyledCard = styled.div`
  .card {
    width: 250px;
    height: 200px;
    padding: 1rem;
    background: rgba(255, 182, 193, 0.34);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.44);
    border-left: 2px rgba(255, 255, 255, 0.545) inset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
    transform: skewX(10deg);
    transition: 0.4s;
    overflow: hidden;
    color: black;
    font-size: 1.2rem;
  }

  .card:hover {
    height: 300px;
    transform: skew(0deg);
  }

  .align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }

  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .card h1 {
    text-align: center;
    margin: 1.3rem 0.3rem 0.3rem;
    color: #2a2a2a;
    font-family: 'Great Vibes';
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  }
`;

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const router = useRouter();
  const {language, setLanguage} = useLanguage();
  const { t } = useTranslation();
  
  const categories = [
    {
      icon: <Heart className='w-6 h-6' />,
      title: t('categories.teenager.title'),
      description: t('categories.teenager.description'),
      link: '/teenagers',
      image: '/images/categories/teenager.jpg',
    },
    {
      icon: <Book className='w-6 h-6' />,
      title: t('categories.youngWoman.title'),
      description: t('categories.youngWoman.description'),
      link: '/young-women',
      image: '/images/categories/young-woman.jpg',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: t('categories.marriedWoman.title'),
      description: t('categories.marriedWoman.description'),
      link: '/married-women',
      image: '/images/categories/married-woman.jpg',
    },
  ];

  const [showContactForm, setShowContactForm] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, sessionStorage.getItem('scrollPosition') ? parseInt(sessionStorage.getItem('scrollPosition') as string) : 0);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch('http://localhost:3001', { signal: controller.signal })
      .then((response) => response.json())
      .then(() => setApiError(false))
      .catch(() => {
        setApiError(true);
        console.log('API connection failed - continuing without backend features');
      })
      .finally(() => clearTimeout(timeoutId));

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const containerRef = useRef(null);
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-gray-800'>
      <nav className='fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='focus:outline-none'>
              <Sparkles className='w-8 h-8 text-blue-600' />
            </button>
            <div className='flex space-x-8'>
              <a
                href='#mission'
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll('mission');
                }}
                className='text-sm font-medium hover:text-blue-600 transition-colors'
              >
                {t('navigation.mission')}
              </a>
              <a
                href='#gospel'
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll('gospel');
                }}
                className='text-sm font-medium hover:text-blue-600 transition-colors'
              >
                {t('navigation.gospel')}
              </a>
              <a
                href='#categories'
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll('categories');
                }}
                className='text-sm font-medium hover:text-blue-600 transition-colors'
              >
                {t('navigation.whoAmI')}
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className='w-[100px]'>
                  <Globe className='w-4 h-4 mr-2' />
                  <SelectValue placeholder='Lang' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='en'>EN</SelectItem>
                  <SelectItem value='fr'>FR</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={() => router.push('/auth/signup')}
                className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors'
              >
                <Users className='w-4 h-4 mr-2' />
                {t('navigation.joinUs')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section
          ref={containerRef}
          className='min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat'
          style={{backgroundImage: 'url("/images/woman-of-faith.jpg")'}}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
          <motion.div
            variants={fadeInUpVariants}
            initial='hidden'
            animate='visible'
            transition={{duration: 0.8}}
            className='absolute inset-0 flex items-center justify-center'
          >
            <div className='text-center space-y-8 px-4 max-w-4xl mx-auto'>
              <motion.h1
                variants={fadeInUpVariants}
                initial='hidden'
                animate='visible'
                transition={{duration: 0.8}}
                className='text-5xl md:text-7xl font-bold tracking-tight text-white font-great-vibes'
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                variants={fadeInUpVariants}
                initial='hidden'
                animate='visible'
                transition={{duration: 0.8, delay: 0.2}}
                className='text-xl text-gray-200 max-w-2xl mx-auto'
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section id='mission' className='py-20 bg-gradient-to-b from-pink-50 to-purple-100'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-8 font-great-vibes'>
              {t('mission.title')}
            </h2>
            <motion.p
              variants={fadeInUpVariants}
              initial='hidden'
              animate='visible'
              transition={{duration: 0.8}}
              className='text-lg text-gray-600 mb-6'
            >
              {t('mission.content1')}
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              initial='hidden'
              animate='visible'
              transition={{duration: 0.8, delay: 0.2}}
              className='text-lg text-gray-600 mb-6 font-serif'
            >
              {t('mission.content2')}
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
              initial='hidden'
              animate='visible'
              transition={{duration: 0.8, delay: 0.4}}
              className='text-lg text-gray-600 mb-6 font-serif'
            >
              {t('mission.content3')}
            </motion.div>
          </div>
        </section>

        <section id='gospel' className='py-24 bg-gradient-to-b from-purple-200 to-pink-100 font-serif'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <motion.h1
              variants={fadeInUpVariants}
              initial='hidden'
              animate='visible'
              transition={{duration: 0.8}}
              className='text-3xl font-bold mb-12 text-center text-pink-800 font-great-vibes'
            >
              {t('gospel.title')}
            </motion.h1>
            <motion.div
              variants={fadeInUpVariants}
              initial='hidden'
              animate='visible'
              transition={{duration: 0.8, delay: 0.2}}
              className='space-y-6 text-lg text-gray-800 text-center'
            >
              <p>{t('gospel.content1')}</p>
              <p>{t('gospel.content2')}</p>
              <p>{t('gospel.content3')}</p>
              <p>{t('gospel.content4')}</p>
              <p>{t('gospel.content5')}</p>
            </motion.div>
          </div>
        </section>

        <section
          id='categories'
          ref={ref}
          className='py-24 bg-gradient-to-b from-purple-200 to-pink-200 text-white/90 font-family-greatvibes text-sm font-bold'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif'>
            <motion.div
              variants={fadeInUpVariants}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              transition={{duration: 0.8}}
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
            >
              {categories.map((category) => (
                <Link href={category.link} key={category.title}>
                  <a>
                    <StyledCard>
                      <div className='card'>
                        <div className='align'>
                          <span className='red' />
                          <span className='yellow' />
                          <span className='green' />
                        </div>
                        <h1>{category.title}</h1>
                        <p>{category.description}</p>
                      </div>
                    </StyledCard>
                  </a>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        <section id='contact' className='py-24 bg-gradient-to-b from-pink-200 to-purple-100'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <Card className='p-8'>
              <div className='flex flex-col items-center space-y-6'>
                <MessageCircle className='w-12 h-12 text-purple-500' />
                <h2 className='text-3xl font-bold font-great-vibes'>
                  {t('contact.title')}
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl'>{t('contact.description')}</p>
                <Button onClick={() => setShowContactForm(true)} variant='outline' className='text-lg'>
                  {t('contact.button')}
                </Button>
                {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
