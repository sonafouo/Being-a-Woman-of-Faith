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
    '1_peter_1_1_2': 'Pierre, apôtre de Jésus Christ, à ceux qui sont étrangers et dispersés dans le Pont, la Galatie, la Cappadoce, l\'Asie et la Bithynie, et qui sont élus selon la prescience de Dieu le Père, par la sanctification de l\'Esprit, afin qu\'ils deviennent obéissants, et qu\'ils participent à l\'aspersion du sang de Jésus Christ: que la grâce et la paix vous soient multipliées!',
    '2_cor_5_7': 'Car nous marchons par la foi et non par la vue',
    'romans_6_6': 'sachant que notre vieil homme a été crucifié avec lui, afin que le corps du péché fût détruit, pour que nous ne soyons plus esclaves du péché;',
    'colossians_2_15': 'il a dépouillé les dominations et les autorités, et les a livrées publiquement en spectacle, en triomphant d\'elles par la croix.',
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
      };
      marriedWoman: {
        title: string;
        description: string;
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

export const translations: Translations = {
	en: {
		navigation: {
			mission: 'Mission',
			gospel: 'Gospel',
			whoAmI: 'Who am I?',
			joinUs: 'Join Us',
		},
		hero: {
			title: 'Being a Woman of Faith',
			subtitle: 'A life full of purpose',
		},
		mission: {
			title: 'Our Mission',
			content1:
				'We are women young and old having one thing in common our faith in God through the Lord Jesus, desiring to empower women with wisdom to live a fulfilled life no matter what stage she may found herself.',
			content2:
				'Being rooted in Christ our Lord we want to bring light into the darkness of this world to help our fellow women live a life by faith. For we walk by faith and not by sight. ' + bibleVerses.en['2_cor_5_7'],
			content3: 'Our strength comes from the Lord, so in Him we trust and we hope our content will bless and richly empower you!',
		},
		teenagers: {
			welcome: {
				title: "Welcome, Dear Teenager",
				description: "You are at a pivotal point in your life, standing between childhood and womanhood. This is a special time filled with opportunities for growth and discovery."
			},
			sections: {
				introduction: {
					title: "Introduction",
					subtitle: "Your Special Time of Growth",
					content: [
						"You are at a pivotal point in your life, standing between childhood and womanhood. The decisions you make now can have a significant impact on your future.",
						"You are full of energy and, for many, still under parental care. Surrounded by friends, this is a time when a lot can happen.",
						"This is a unique period in your life filled with opportunities and challenges. Let's explore how to navigate this time with wisdom and grace."
					]
				},
				spirituality: {
					title: "Your Spirituality",
					subtitle: "Finding Your Identity in Christ",
					content: [
						"This is the genesis of your identity. Without a spiritual foundation, you may face physical and mental challenges. You were created by a loving God who desires to make you His daughter. He has already paid the ultimate sacrifice for you.",
						"Will you open your heart and accept the sacrifice of Jesus? Will you give Him full control over your will?",
						"If your identity is in Christ, you will not be swayed by seasonal or societal changes because you will know who you are. You will understand the greatness of your Heavenly Father and how precious you are to Him.",
						"The decision to follow Him and learn about Him through His Word (the Bible) and prayer is a significant step in your life, and it is beneficial to make this commitment while you are still a teenager."
					]
        },
        physicalHealth: {
          title: "Physical Health",
          subtitle: "Understanding Your Body's Changes",
          content: [
            "You are at a point where many changes are occurring in a phase called puberty. Your appearance becomes more feminine, and here's what you need to know:",
            "• First, don't panic! All changes are normal—you're not alone, we all went through this",
            "• You're growing taller than your male peers, and that's completely normal. This growth spurt will slow down by age 16",
            "• Your breasts are starting to develop, so you might need a bra to feel more comfortable and presentable",
            "• Your biological clock is starting with menstruation. Let your mom know when it happens and use a calendar app to track your cycle",
            "• Your daily calorie requirement has increased to 2200 calories. Focus on essential nutrients like calcium, iron, zinc, and vitamin D",
            "• Balance your diet with dairy and green veggies while limiting candies, fast food, and sodas",
            "• Stay physically active and balance screen time with sports, reading, and household chores"
          ]
        },
        mentalHealth: {
          title: "Mental Health",
          subtitle: "Nurturing Your Mind and Spirit",
          content: [
            "Your mind is going through many transformations as you experience numerous changes and challenges while your brain is still maturing.",
            "If you feel anxious, have trouble sleeping, or feel sad, don't keep it to yourself — talk to God about your feelings and open up to a trusted parent.",
            "Fill your mind with God's word, not the lies of the enemy.",
            "In today's world of social media and peer pressure, comparison and low self-esteem can become significant problems. Remember, you were created uniquely by your heavenly father for a purpose in Christ.",
            "Trust that all things work together for your good, and remember that God, your heavenly father, is aware of everything happening in your life."
          ]
        },
        practicalGuidance: {
          title: "Practical Steps",
          subtitle: "Making the Most of This Season",
          content: [
            "Focus on Your Education:",
            "• Your brain is at a stage where learning comes easily",
            "• Make the most of it and do your best in your studies",
            "",
            "Seek a Good Relationship with God:",
            "• Use these relatively stress-free years to know God more",
            "• Study His Word (the Bible) and pray regularly",
            "• Desire to please Him in everything you do",
            "",
            "Be Close to Your Parents:",
            "• No one on earth can love you more than your parents",
            "• Confide in them about your emotional and physical struggles",
            "• Don't rely on age mates as counselors—they're as inexperienced as you",
            "",
            "Choose the Right Friends:",
            "• Surround yourself with Christian friends who share your goals",
            "• Avoid friends who make you feel inferior",
            "• Don't rush into things meant for the future",
            "",
            "Develop Your Talents:",
            "• Explore activities like music, art, sports, or writing",
            "• Keep yourself productively occupied after school"
          ]
        }
      }
    },
		gospel: {
			title: 'The Gospel of Jesus',
			content1:
				'We acknowledge that we cannot do anything on our own and that any power to do good comes from God. Jesus died to reunite us to God and renders one to be born again and be as a living sacrifice unto God.',
			content2:
				'We are born sold to sin and slave to sin and we cannot be freed from sin without Christ. Whatever good thing God ask us to do is after we have been regenerated that we can do it fully.',
			content3: 'You are a child of God when you are regenerated by His spirit which leads you to obedience 1 Peter 1:1-2.',
			content4: 'Jesus our Lord has gotten victory over sin and over any dominion or authority in this world so we walk in this victory daily.',
			content5:
				'This is the foundation of our work and the source of any strength to do any advice you will find in this website. We hope you begin from this foundation as you follow us.',
		},
		categories: {
			teenager: {
				title: 'Teenager',
				description: 'Navigate your faith journey during these transformative years',
			},
			youngWoman: {
				title: 'Young Woman',
				description: "Discover God's purpose for your single season",
			},
			marriedWoman: {
				title: 'Married Women',
				description: 'Build a Christ-centered marriage and home',
			},
		},
		contact: {
			title: 'Have any questions?',
			description: "Feel free to write to us - we'll be delighted to answer you as the Lord leads us.",
			button: 'Contact Us',
			form: {
				title: 'Contact Us',
				name: 'Name',
				email: 'Email',
				message: 'Message',
				namePlaceholder: 'Your name',
				emailPlaceholder: 'your.email@example.com',
				messagePlaceholder: 'How can we help you?',
				sending: 'Sending...',
				send: 'Send Message',
				success: 'Success!',
				successMessage: "Your message has been sent. We'll get back to you soon!",
				error: 'Error',
				errorMessage: 'Failed to send message. Please try again.',
				validationError: 'Validation Error',
				fillFields: 'Please fill in all fields',
				invalidEmail: 'Invalid Email',
				invalidEmailMessage: 'Please enter a valid email address',
			},
		},
	},
	fr: {
		navigation: {
			mission: 'Mission',
			gospel: 'Évangile',
			whoAmI: 'Qui suis-je ?',
			joinUs: 'Rejoignez-nous',
		},
		hero: {
			title: 'Être une Femme de Foi',
			subtitle: 'Une vie pleine de sens',
		},
		mission: {
			title: 'Notre Mission',
			content1:
				'Nous sommes des femmes jeunes et âgées ayant une chose en commun : notre foi en Dieu à travers le Seigneur Jésus, désirant donner aux femmes la sagesse de vivre une vie épanouie, quel que soit le stade où elle se trouve.',
			content2:
				'Enracinées en Christ notre Seigneur, nous voulons apporter la lumière dans les ténèbres de ce monde pour aider nos sœurs à vivre une vie de foi. Car nous marchons par la foi et non par la vue.',
			content3: 'Notre force vient du Seigneur, alors nous lui faisons confiance et nous espérons que notre contenu vous bénira et vous enrichira !',
		},
		teenagers: {
			welcome: {
				title: "Bienvenue, Chère Adolescente",
				description: "Tu es à un moment charnière de ta vie, entre l'enfance et la féminité. C'est une période spéciale remplie d'opportunités de croissance et de découverte."
			},
			sections: {
				introduction: {
					title: "Introduction",
					subtitle: "Ton Temps Spécial de Croissance",
					content: [
						"Tu es à un moment charnière de ta vie, entre l'enfance et la féminité. Les décisions que tu prends maintenant peuvent avoir un impact significatif sur ton avenir.",
						"Tu es pleine d'énergie et, pour beaucoup, encore sous la protection parentale. Entourée d'amis, c'est une période où beaucoup de choses peuvent arriver.",
						"C'est une période unique dans ta vie, remplie d'opportunités et de défis. Explorons ensemble comment naviguer dans cette période avec sagesse et grâce."
					]
				},
				spirituality: {
					title: "Ta Spiritualité",
					subtitle: "Trouver Ton Identité en Christ",
					content: [
						"C'est la genèse de ton identité. Sans fondement spirituel, tu peux faire face à des défis physiques et mentaux. Tu as été créée par un Dieu aimant qui désire faire de toi Sa fille. Il a déjà payé le sacrifice ultime pour toi.",
						"Ouvriras-tu ton cœur et accepteras-tu le sacrifice de Jésus ? Lui donneras-tu le contrôle total de ta volonté ?",
						"Si ton identité est en Christ, tu ne seras pas influencée par les changements saisonniers ou sociétaux car tu sauras qui tu es. Tu comprendras la grandeur de ton Père Céleste et à quel point tu es précieuse pour Lui.",
						"La décision de Le suivre et d'apprendre à Le connaître à travers Sa Parole (la Bible) et la prière est une étape importante dans ta vie, et il est bénéfique de prendre cet engagement pendant que tu es encore adolescente."
					]
        },
        physicalHealth: {
          title: "Santé Physique",
          subtitle: "Comprendre les Changements de Ton Corps",
          content: [
            "Tu es à un stade où de nombreux changements se produisent dans une phase appelée puberté. Ton apparence devient plus féminine, et voici ce que tu dois savoir :",
            "• D'abord, ne panique pas ! Tous les changements sont normaux—tu n'es pas seule, nous sommes toutes passées par là",
            "• Tu grandis plus vite que tes camarades masculins, et c'est tout à fait normal. Cette poussée de croissance ralentira vers 16 ans",
            "• Tes seins commencent à se développer, tu pourrais donc avoir besoin d'un soutien-gorge pour te sentir plus à l'aise",
            "• Ton horloge biologique commence avec les menstruations. Parles-en à ta maman quand ça arrive et utilise une application pour suivre ton cycle",
            "• Tes besoins caloriques quotidiens ont augmenté à 2200 calories. Concentre-toi sur les nutriments essentiels comme le calcium, le fer, le zinc et la vitamine D",
            "• Équilibre ton alimentation avec des produits laitiers et des légumes verts tout en limitant les bonbons, la restauration rapide et les sodas",
            "• Reste physiquement active et équilibre le temps passé devant les écrans avec du sport, de la lecture et des tâches ménagères"
          ]
        },
        mentalHealth: {
          title: "Santé Mentale",
          subtitle: "Nourrir Ton Esprit et Ton Âme",
          content: [
            "Ton esprit traverse de nombreuses transformations alors que tu vis de nombreux changements et défis pendant que ton cerveau continue de se développer.",
            "Si tu te sens anxieuse, as du mal à dormir ou te sens triste, ne garde pas ça pour toi — parle à Dieu de tes sentiments et confie-toi à un parent de confiance.",
            "Remplis ton esprit de la parole de Dieu, pas des mensonges de l'ennemi.",
            "Dans le monde actuel des réseaux sociaux et de la pression des pairs, la comparaison et le manque de confiance en soi peuvent devenir des problèmes importants. Souviens-toi que tu as été créée de manière unique par ton père céleste pour un but en Christ.",
            "Aie confiance que toutes choses concourent à ton bien, et rappelle-toi que Dieu, ton père céleste, est conscient de tout ce qui se passe dans ta vie."
          ]
        },
        practicalGuidance: {
          title: "Conseils Pratiques",
          subtitle: "Tirer le Meilleur de Cette Saison",
          content: [
            "Concentre-toi sur Tes Études :",
            "• Ton cerveau est à un stade où l'apprentissage est plus facile",
            "• Profites-en et donne le meilleur de toi-même dans tes études",
            "",
            "Recherche une Bonne Relation avec Dieu :",
            "• Utilise ces années relativement sans stress pour mieux connaître Dieu",
            "• Étudie Sa Parole (la Bible) et prie régulièrement",
            "• Désire Lui plaire dans tout ce que tu fais",
            "",
            "Sois Proche de Tes Parents :",
            "• Personne sur terre ne peut t'aimer plus que tes parents",
            "• Confie-leur tes difficultés émotionnelles et physiques",
            "• Ne compte pas sur tes camarades du même âge comme conseillers—ils sont aussi inexpérimentés que toi",
            "",
            "Choisis les Bonnes Amitiés :",
            "• Entoure-toi d'amis chrétiens qui partagent tes objectifs",
            "• Évite les amis qui te font sentir inférieure",
            "• Ne te précipite pas dans des choses destinées au futur",
            "",
            "Développe Tes Talents :",
            "• Explore des activités comme la musique, l'art, le sport ou l'écriture",
            "• Occupe-toi de manière productive après l'école"
          ]
        }
      }
    },
		gospel: {
			title: "L'Évangile de Jésus",
			content1:
				"Nous reconnaissons que nous ne pouvons rien faire par nous-mêmes et que tout pouvoir de faire le bien vient de Dieu. Jésus est mort pour nous réunir à Dieu et nous permet de naître de nouveau et d'être comme un sacrifice vivant pour Dieu.",
			content2:
				"Nous sommes nés vendus au péché et esclaves du péché et nous ne pouvons être libérés du péché sans Christ. Tout ce que Dieu nous demande de faire, c'est après avoir été régénérés que nous pouvons le faire pleinement.",
			content3: "Vous êtes un enfant de Dieu lorsque vous êtes régénéré par Son esprit qui vous conduit à l'obéissance: " + bibleVerses.fr['1_peter_1_1_2'],
			content4:
				'Jésus notre Seigneur a obtenu la victoire sur le péché et sur toute domination ou autorité dans ce monde, alors nous marchons dans cette victoire quotidiennement.',
			content5:
				"C'est le fondement de notre travail et la source de toute force pour suivre les conseils que vous trouverez sur ce site. Nous espérons que vous commencerez par cette base en nous suivant.",
		},
		categories: {
			teenager: {
				title: 'Adolescente',
				description: 'Naviguez dans votre parcours de foi pendant ces années de transformation',
			},
			youngWoman: {
				title: 'Jeune Femme',
				description: 'Découvrez le dessein de Dieu pour votre saison de célibat',
			},
			marriedWoman: {
				title: 'Femmes Mariées',
				description: 'Construisez un mariage et un foyer centrés sur Christ',
			},
		},
		contact: {
			title: 'Avez-vous des questions ?',
			description: "N'hésitez pas à nous écrire - nous serons ravis de vous répondre selon la direction du Seigneur.",
			button: 'Contactez-nous',
			form: {
				title: 'Contactez-nous',
				name: 'Nom',
				email: 'Email',
				message: 'Message',
				namePlaceholder: 'Votre nom',
				emailPlaceholder: 'votre.email@exemple.com',
				messagePlaceholder: 'Comment pouvons-nous vous aider ?',
				sending: 'Envoi en cours...',
				send: 'Envoyer le message',
				success: 'Succès !',
				successMessage: 'Votre message a été envoyé. Nous vous répondrons bientôt !',
				error: 'Erreur',
				errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
				validationError: 'Erreur de validation',
				fillFields: 'Veuillez remplir tous les champs',
				invalidEmail: 'Email invalide',
				invalidEmailMessage: 'Veuillez entrer une adresse email valide',
			},
		},
	},
};
