'use client';

import { MessageCircle } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import { useTranslation } from "@/hooks/use-translation";

export function QuestionsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-gradient-to-b from-pink-200 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Card className="p-8">
          <div className="flex flex-col items-center space-y-6">
            <MessageCircle className="w-12 h-12 text-purple-500" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Great Vibes' }}>{t('contact.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('contact.description')}
            </p>
            <Button
              onClick={() => alert('Contact form coming soon!')}
              variant="outline"
              className="text-lg"
            >
              {t('contact.button')}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
