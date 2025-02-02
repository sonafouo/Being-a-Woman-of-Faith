import { englishTranslations } from './english';
import { frenchTranslations } from './french';

type BibleVerses = {
  [key: string]: {
    [key: string]: string;
  };
};

// LSG 1910 Bible verses
const bibleVerses: BibleVerses = {
  en: {
    '1_peter_1_1_2': 'Peter, an apostle of Jesus Christ, to the strangers scattered throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia, Elect according to the foreknowledge of God the Father, through sanctification of the Spirit, unto obedience and sprinkling of the blood of Jesus Christ: Grace unto you, and peace, be multiplied.',
    '2_cor_5_7': 'For we walk by faith, not by sight',
    'romans_6_6': 'Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin.',
    'colossians_2_15': 'And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.',
  },
  fr: {
    // LSG 1910 translations
    '1_peter_1_1_2': "Pierre, apôtre de Jésus Christ, à ceux qui sont étrangers et dispersés dans le Pont, la Galatie, la Cappadoce, l'Asie et la Bithynie, et qui sont élus selon la prescience de Dieu le Père, par la sanctification de l'Esprit, afin qu'ils deviennent obéissants, et qu'ils participent à l'aspersion du sang de Jésus Christ: que la grâce et la paix vous soient multipliées!",
    '2_cor_5_7': 'Car nous marchons par la foi et non par la vue',
    'romans_6_6': 'sachant que notre vieil homme a été crucifié avec lui, afin que le corps du péché fût détruit, pour que nous ne soyons plus esclaves du péché;',
    'colossians_2_15': "il a dépouillé les dominations et les autorités, et les a livrées publiquement en spectacle, en triomphant d'elles par la croix.",
  }
};

type Translations = {
  [key: string]: {
    navigation: {
      mission: string;
      gospel: string;
      whoAmI: string;
      joinUs: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    mission: {
      title: string;
      content1: string;
      content2: string;
      content3: string;
    };
    gospel: {
      title: string;
      content1: string;
      content2: string;
      content3: string;
      content4: string;
      content5: string;
    };
    teenagers: {
      welcome: {
        title: string;
        description: string;
      };
      sections: {
        introduction: {
          title: string;
          subtitle: string;
          content: string[];
        };
        spirituality: {
          title: string;
          subtitle: string;
          content: string[];
        };
        physicalHealth: {
          title: string;
          subtitle: string;
          content: string[];
        };
        mentalHealth: {
          title: string;
          subtitle: string;
          content: string[];
        };
        practicalGuidance: {
          title: string;
          subtitle: string;
          content: string[];
        };
      };
    };
    categories: {
      teenager: {
        title: string;
        description: string;
      };
      youngWoman: {
        title: string;
        description: string;
        welcome: {
          title: string;
          description: string;
        };
        sections: {
          identity: {
            title: string;
            subtitle: string;
            content: string[];
          };
          journey: {
            title: string;
            subtitle: string;
            content: string[];
          };
          rebecca: {
            title: string;
            subtitle: string;
            content: string[];
          };
          dina: {
            title: string;
            subtitle: string;
            content: string[];
          };
          purity: {
            title: string;
            subtitle: string;
            content: string[];
          };
        };
      };
      marriedWoman: {
        title: string;
        description: string;
        welcome: {
          title: string;
          description: string;
        };
        sections: {
          introduction: {
            title: string;
            subtitle: string;
            content: string[];
          };
          identity: {
            title: string;
            subtitle: string;
            content: string[];
          };
          meaning: {
            title: string;
            subtitle: string;
            content: string[];
          };
          marriage: {
            title: string;
            subtitle: string;
            content: string[];
          };
          submission: {
            title: string;
            subtitle: string;
            content: string[];
          };
          faithWalk: {
            title: string;
            subtitle: string;
            content: string[];
          };
          emotions: {
            title: string;
            subtitle: string;
            content: string[];
          };
        };
      };
    };
    contact: {
      title: string;
      description: string;
      button: string;
      form: {
        title: string;
        name: string;
        email: string;
        message: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        sending: string;
        send: string;
        success: string;
        successMessage: string;
        error: string;
        errorMessage: string;
        validationError: string;
        fillFields: string;
        invalidEmail: string;
        invalidEmailMessage: string;
      };
    };
  };
};

// Update the gospel content3 with Bible verses
englishTranslations.gospel.content3 += ' ' + bibleVerses.en['1_peter_1_1_2'];
frenchTranslations.gospel.content3 += ' ' + bibleVerses.fr['1_peter_1_1_2'];

export const translations: Translations = {
  en: englishTranslations,
  fr: frenchTranslations,
};
