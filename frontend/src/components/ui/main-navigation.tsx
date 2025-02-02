'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSwitcher } from './language-switcher';

export function MainNavigation() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">WoF</span>
          </Link>
          <div className="flex gap-6">
            <Link
              href="#mission"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              {t('navigation.mission')}
            </Link>
            <Link
              href="#gospel"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              {t('navigation.gospel')}
            </Link>
            <Link
              href="#who-am-i"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              {t('navigation.whoAmI')}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
              {t('navigation.joinUs')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
