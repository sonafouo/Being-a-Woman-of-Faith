import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/translations';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKeys = NestedKeyOf<typeof translations.en>;

export function useTranslation() {
  const { language } = useLanguage();

  const t = <K extends TranslationKeys>(key: K) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value;
  };

  return { t, language };
}
