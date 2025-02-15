import type { Card, ElementName } from '$models/cards';
import { Color } from '$classes/color';

const images: Record<string, { default: string }> = import.meta.glob(
  '$lib/assets/card-images/*.jpeg',
  {
    eager: true,
    query: {
      enhanced: true
    }
  }
);

export function getImageUrl(filename: string) {
  const key = Object.keys(images).find(path => path.includes(filename));
  return key ? images[key].default : undefined;
}

export const elementColorMap = new Map<ElementName, string>([
  ['air', Color.neutral200],
  ['earth', Color.green600],
  ['water', Color.sky600],
  ['fire', Color.orange600]
]);

export const allCards: Card[] = [
  {
    name: 'The Fool',
    image: 'thefool.jpeg',
    rank: 0,
    suit: 'major',
    planet: 'uranus',
    element: 'air',
    sign: [],
    meanings: {
      upright: ['new beginnings', 'innocence', "beginner's luck", 'improvisation', 'inexperience'],
      reversed: [
        'recklessness',
        'taken advantage of',
        'inconsideration',
        'naivety',
        'lack of direction',
        'chaos'
      ]
    },
    type: 'major',
    description:
      "The card suggests that your investments have the potential to yield positive results. The Fool signifies new beginnings, taking risks, and embracing unconventional approaches. It encourages you to trust your instincts and explore new opportunities. However, it's important to exercise caution and avoid recklessness.\n\nThe Fool card indicates that success may come through a sense of adventure and learning from both positive and negative outcomes. Overall, the card implies that your investments have a promising outlook, but the ultimate result will depend on your willingness to embrace the journey and make informed decisions.",
    description2:
      'With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.\nIn his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage.'
  },
  {
    name: 'The Magician',
    image: 'themagician.jpeg',
    rank: 1,
    suit: 'major',
    planet: 'mercury',
    element: 'air',
    sign: [],
    meanings: {
      upright: [
        'determined',
        'skillfulness',
        'resourceful',
        'confidence',
        'potential',
        'transformation'
      ],
      reversed: [
        'trickery',
        'deception',
        'illusions',
        'out of touch',
        'manipulative',
        'poor planning',
        'confusion'
      ]
    },
    type: 'major',
    description:
      "The card suggests that your trades have the potential to yield successful results. The Magician represents power, skill, and manifestation of goals. It signifies that you have the necessary tools and abilities to make your investments profitable. This card encourages you to utilize your intellect, creativity, and resourcefulness to your advantage.\n\nBy harnessing your potential and making strategic decisions, you can manifest positive outcomes in your crypto trades. However, it's important to remember that the ultimate result will depend on your actions, choices, and market conditions. The Magician card indicates that you have the ability to influence and shape the outcome of your trades through your knowledge and skills.",
    description2:
      'A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician\'s right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change "unto the Ogdoad." The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.'
  },
  {
    name: 'The High Priestess',
    image: 'thehighpriestess.jpeg',
    rank: 2,
    suit: 'major',
    planet: 'moon',
    element: 'water',
    sign: [],
    meanings: {
      upright: [
        'intuitive',
        'unconscious',
        'inner voice',
        'spirituality',
        'mystery',
        'divine feminine'
      ],
      reversed: ['secrets', 'mystery', 'lack of understanding', 'selfishness', 'hidden agendas']
    },
    type: 'major',
    description:
      "According to The High Priestess tarot card, your trades have the potential to yield mysterious and intuitive results. Trust your instincts, tap into hidden knowledge, and explore alternative perspectives to make informed decisions. The card suggests that unseen factors may influence your investments, and embracing your intuition can lead to profitable outcomes.\n\nHowever, remember that the High Priestess card doesn't guarantee specific results; success depends on your ability to navigate the market's mysteries using a blend of rational analysis and intuitive insights.",
    description2:
      'She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.\nIn a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.'
  },
  {
    name: 'The Empress',
    image: 'theempress.jpeg',
    rank: 3,
    suit: 'major',
    planet: 'venus',
    element: 'earth',
    sign: [],
    meanings: {
      upright: ['motherly', 'fertility', 'nature', 'beauty', 'abundance', 'compassion'],
      reversed: [
        'dependence',
        'smothering',
        'neglectful',
        'unhealthy relationships',
        'creative block'
      ]
    },
    type: 'major',
    description:
      "According to The Empress tarot card, your trades have the potential to yield abundant and fruitful results. The Empress represents growth, nurturing, and prosperity. This card suggests that your investments may bring about positive outcomes and financial abundance. \n\nTo maximize your chances of success, it advises you to adopt a nurturing mindset and approach your trades with patience and care. Trust your in stincts and tap into your creativity when making decisions in the crypto market. By finding a harmonious balance between intuition and practicality, you can create favorable conditions for your investments to flourish.\n\nHowever, it's important to note that the Empress card does not guarantee specific outcomes. The actual results will depend on your actions, strategies, and the overall market conditions. Nevertheless, by embracing a nurturing mindset and making informed choices, you increase the likelihood of achieving prosperous results in your trading endeavors.",
    description2:
      'A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.\nIn another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth.'
  },
  {
    name: 'The Emperor',
    image: 'theemperor.jpeg',
    rank: 4,
    suit: 'major',
    planet: 'mars',
    element: 'fire',
    sign: ['aries'],
    meanings: {
      upright: ['leadership', 'promotion', 'structure', 'law and order'],
      reversed: ['tyranny', 'rigidity', 'coldness', 'abuse of power', 'loss of control']
    },
    type: 'major',
    description:
      'The Emperor tarot card represents authority, structure, and stability. It symbolizes a time of taking control and establishing a solid foundation for your trades. This card suggests that your investments have the potential to yield positive results through a disciplined and structured approach. It encourages you to exercise leadership and make well-informed decisions based on careful analysis and strategic planning.\n\nBy setting clear boundaries and maintaining a sense of control, you can create a stable framework for success in your trades. However, it is important to remain adaptable to market conditions and make adjustments as necessary to ensure continued growth and prosperity.',
    description2:
      'He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams\' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta.\nIt should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are "full of strange experience," but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy.'
  },
  {
    name: 'The Hierophant',
    image: 'thehierophant.jpeg',
    rank: 5,
    suit: 'major',
    planet: 'venus',
    element: 'earth',
    sign: ['taurus'],
    meanings: {
      upright: ['tradition', 'conformity', 'morality', 'ethics', 'marriage'],
      reversed: ['rebellion', 'subversiveness', 'new approaches', 'freethinking']
    },
    type: 'major',
    description:
      "According to The Hierophant tarot card, your trades have the potential to yield structured and traditional results. The Hierophant represents conformity, tradition, and established systems. This card suggests that your investments may benefit from following established guidelines and adopting a conservative approach.\n\nTo increase the likelihood of success, it advises seeking guidance from experienced individuals or experts in the crypto market. The Hierophant encourages adhering to established strategies, rules, and regulations when making trading decisions. By aligning yourself with trusted sources of knowledge and respecting traditional trading methods, you can navigate the market more effectively.\n\n However, it's important to note that the Hierophant card does not guarantee specific outcomes. The actual results will depend on your ability to apply traditional principles while considering market dynamics and adapting when necessary. By maintaining a balance between tradition and flexibility, seeking expert advice, and making informed decisions, you can enhance the potential for successful results in your trades.",
    description2:
      'He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.\nHe is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression.'
  },
  {
    name: 'The Lovers',
    image: 'thelovers.jpeg',
    rank: 6,
    suit: 'major',
    planet: 'mercury',
    element: 'air',
    sign: ['gemini'],
    meanings: {
      upright: ['partnerships', 'duality', 'union', 'choices', 'romance', 'sexuality'],
      reversed: [
        'infidelity',
        'separation',
        'loss of balance',
        'one-sidedness',
        'disharmony',
        'misalignment of values'
      ]
    },
    type: 'major',
    description:
      "According to 'The Lovers' tarot card, your trades have the potential to yield harmonious and positive results. The Lovers represent partnership, alignment, and choices based on personal values. This card suggests that your investments may thrive when you make decisions that resonate with your beliefs and values. It encourages you to consider both financial and emotional aspects of your trades, seek harmony, and make choices that align with your true desires.\n\nCollaboration and finding common ground with others in the crypto market may contribute to favorable outcomes. Trust your instincts, stay true to yourself, and make informed decisions to increase the likelihood of achieving positive results. However, it's important to note that the Lovers card does not guarantee specific outcomes. The actual results will depend on your ability to make decisions in alignment with your values and navigate the market with integrity.",
    description2:
      'The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath.\nThe suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism.'
  },
  {
    name: 'The Chariot',
    image: 'thechariot.jpeg',
    rank: 7,
    suit: 'major',
    planet: 'moon',
    element: 'water',
    sign: ['cancer'],
    meanings: {
      upright: [
        'control',
        'will power',
        'victory',
        'assertion',
        'determination',
        'journey',
        'drive'
      ],
      reversed: [
        'travel issues',
        'lack of control and direction',
        'aggression',
        'lack of willpower',
        'distraction',
        'lack of direction',
        'failure'
      ]
    },
    type: 'major',
    description:
      "According to 'The Chariot' tarot card, your trades have the potential to yield victory and success. The Chariot represents determination, willpower, and assertiveness. It suggests that through focused and disciplined efforts, you can overcome challenges and obstacles in the crypto market. By setting clear goals, devising strategic plans, and executing them confidently, you increase your chances of achieving triumphant outcomes.\n\nHowever, it's important to note that the Chariot card does not guarantee specific results. Your ultimate success will depend on your ability to maintain focus, adapt to changing circumstances, and make informed decisions. Approach your trades with determination, discipline, and adaptability to enhance the potential for positive results.",
    description2:
      'An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.'
  },
  {
    name: 'Strength',
    image: 'thestrength.jpeg',
    rank: 8,
    suit: 'major',
    planet: 'sun',
    element: 'fire',
    sign: ['leo'],
    meanings: {
      upright: ['courage', 'compassion', 'self-control', 'sacrifice', 'patience'],
      reversed: ['selfishness', 'weakness', 'self-doubt', 'lack of self-discipline', 'dishonor']
    },
    type: 'major',
    description:
      "According to 'Strength' tarot card, your trades have the potential to yield strength and resilience. The Strength card represents courage, inner power, and the ability to overcome challenges. It suggests that by harnessing your inner strength and staying focused, you can navigate the crypto market with confidence and determination. This card advises you to trust your abilities, remain calm in turbulent times, and persistently pursue your investment goals.\n\nHowever, it's important to remember that the Strength card does not guarantee specific outcomes. Your ultimate success will depend on your ability to stay strong, make informed decisions, and adapt to market conditions. Approach your trades with confidence, trust in your abilities, and remain resilient to enhance the potential for positive results.",
    description2:
      'A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation.\nThese higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon.'
  },
  {
    name: 'The Hermit',
    image: 'thehermit.jpeg',
    rank: 9,
    suit: 'major',
    planet: 'mercury',
    element: 'earth',
    sign: ['virgo'],
    meanings: {
      upright: [
        'contemplation',
        'searching',
        'soul-searching',
        'introspection',
        'being alone',
        'inner guidance'
      ],
      reversed: ['isolation', 'loneliness', 'withdrawal', 'lost your way', 'misguidance']
    },
    type: 'major',
    description:
      "according to 'The Hermit' tarot card, your trades may yield introspection and solitude. The Hermit represents wisdom, self-reflection, and seeking inner guidance. This card suggests that your investments may benefit from taking a step back, reflecting on your strategies, and seeking a deeper understanding of the crypto market.\n\nIt advises prioritizing self-analysis and introspection in your trading decisions. The Hermit encourages you to seek solitude to refine your strategies and make well-informed choices. By trusting your inner wisdom and taking a cautious approach, you can navigate the market more effectively.\n\nHowever, it's important to note that the Hermit card does not guarantee specific results. The actual outcomes will depend on your ability to embrace introspection, integrate your learnings, and make informed decisions. Approach your trades with wisdom, take time for reflection, and make thoughtful choices to increase the likelihood of favorable results.",
    description2:
      'The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that "where I am, you also may be."\nIt is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared.'
  },
  {
    name: 'Wheel Of Fortune',
    image: 'wheeloffortune.jpeg',
    rank: 10,
    suit: 'major',
    planet: 'jupiter',
    element: 'fire',
    sign: [],
    meanings: {
      upright: [
        'change',
        'cycles',
        'inevitable fate',
        'turning point',
        'luck',
        'destiny',
        'chance'
      ],
      reversed: [
        'no control',
        'clinging to control',
        'bad luck',
        'interruption',
        'unexpected events',
        'disappointment'
      ]
    },
    type: 'major',
    description:
      "According to 'Wheel of Fortune' tarot card, your trades may yield unpredictable results. The Wheel of Fortune represents cycles and changes in life, indicating that your investments may be subject to the ups and downs of the crypto market. This card advises you to embrace both opportunities and challenges that come your way, as luck and circumstances play a role in your trading outcomes. It suggests being adaptable and open to new possibilities.\n\nKeep in mind that external factors can influence your trades, so staying informed and making flexible decisions is crucial. However, it's important to note that the Wheel of Fortune card does not guarantee specific results. The actual outcomes will depend on various factors and your ability to navigate the changes effectively.",
    description2:
      "In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel's vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement.\nBehind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane."
  },
  {
    name: 'Justice',
    image: 'justice.jpeg',
    rank: 11,
    suit: 'major',
    planet: 'venus',
    element: 'earth',
    sign: ['libra'],
    meanings: {
      upright: ['justice', 'responsibility', 'decisions', 'cause and effect', 'equity', 'truth'],
      reversed: [
        'unfairness',
        'lack of accountability',
        'dishonesty',
        'unaccountability',
        'unintentional error',
        'bias'
      ]
    },
    type: 'major',
    description:
      "According to the 'Justice' tarot card, your trades may yield fair and balanced results. The Justice card represents fairness, truth, and accountability. It suggests that your investments will be influenced by the principle of cause and effect.\n\nTo increase your chances of success, the card advises making decisions based on careful analysis and objective reasoning, while considering ethical and legal aspects. By acting with integrity and fairness in your trading, you create the conditions for just outcomes.\n\nHowever, it's important to note that the Justice card does not guarantee specific results. The actual outcomes will depend on your ability to make informed decisions, consider multiple perspectives, and adapt to the market's fairness and fluctuations.\n\nApproach your trades with integrity, seek fair dealings, and make informed choices to increase the likelihood of achieving favorable and balanced results.",
    description2:
      'As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it outside the few considerations collected in the first part, to which the reader is referred.\nIt will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice open into one world and the pillars of the High Priestess into another.'
  },
  {
    name: 'The Hanged Man',
    image: 'thehangedman.jpeg',
    rank: 12,
    suit: 'major',
    planet: 'neptune',
    element: 'water',
    sign: ['pisces'],
    meanings: {
      upright: ['sacrifice', 'release', 'martyrdom', 'surrendering', 'letting go', 'metamorphosis'],
      reversed: [
        'stalling',
        'needless sacrifice',
        'fear of sacrifice',
        'fear of change',
        'immobilization',
        'blockage',
        'hesitation in decision making',
        'egotism'
      ]
    },
    type: 'major',
    description:
      "According to 'The Hanged Man' tarot card, your trades may yield a period of suspension, sacrifice, and gaining a new perspective. The Hanged Man represents a time of pause and surrender, encouraging you to let go of old strategies or beliefs that may no longer serve you. By embracing this period of suspension and adopting an open mind, you can gain valuable insights and potentially achieve successful outcomes in your investments.\n\nHowever, it's important to note that the Hanged Man card does not guarantee specific results. The actual outcomes will depend on your ability to embrace the period of suspension, surrender to new perspectives, and make informed decisions as you navigate the crypto market. Approach your trades with patience, adaptability, and a willingness to let go of control to increase the likelihood of positive results.",
    description2:
      'The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross. There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon; (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death. It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Éliphas Lévi did not know the meaning, which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card a of prudence, a card of the Great Work, a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation, in one of its aspects, between the Divine and the Universe.\nHe who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection.'
  },
  {
    name: 'Death',
    image: 'death.jpeg',
    rank: 13,
    suit: 'major',
    planet: 'pluto',
    element: 'water',
    sign: ['scorpio'],
    meanings: {
      upright: [
        'rebirth',
        'endings',
        'change',
        'transformation',
        'transition',
        'letting go',
        'walking away from something',
        'cyclicality',
        'new beginnings'
      ],
      reversed: [
        'resistance to change',
        'personal transformation',
        'inner purging',
        'fear of change',
        'stagnation',
        'decay',
        'depression'
      ]
    },
    type: 'major',
    description:
      "According to the 'Death' tarot card, your trades may yield transformation, endings, and new beginnings. The Death card represents significant change and letting go of the old. It advises releasing attachments to outdated strategies or investments that no longer serve you. Embracing change and being adaptable can lead to positive outcomes in the long run.\n\nThe card suggests the potential for rebirth and renewal, signaling the need to let go of certain investments or approaches to make room for new opportunities. However, it's important to note that the Death card does not guarantee specific results. Your success will depend on your ability to embrace change, let go of the old, and make informed decisions as you navigate the crypto market. Approach your trades with an open mind and embrace transformation to increase the likelihood of positive results and new beginnings.",
    description2:
      'The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end.\nThere should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest.'
  },
  {
    name: 'Temperance',
    image: 'temperance.jpeg',
    rank: 14,
    suit: 'major',
    planet: 'jupiter',
    element: 'fire',
    sign: ['sagittarius'],
    meanings: {
      upright: [
        'balance',
        'moderation',
        'patience',
        'purpose',
        'meaning',
        'combinations',
        'harmony',
        'alchemy'
      ],
      reversed: [
        'imbalance',
        'excess',
        'self-healing',
        're-alignment',
        'extremes',
        'disruption',
        'chaos'
      ]
    },
    type: 'major',
    description:
      "According to the `Temperance` tarot card, your trades may yield balance, moderation, and harmony. The Temperance card represents finding the middle path and blending different elements together. It advises seeking a balanced approach, practicing moderation, and adapting to market conditions. By finding equilibrium between risk and caution, intuition and analysis, you increase the likelihood of positive outcomes. The card suggests that patient and steady trading, along with a harmonious mindset, can lead to favorable results. \n\nHowever, it's important to note that the Temperance card does not guarantee specific results. Your success will depend on your ability to find balance, exercise moderation, and make informed decisions. Approach your trades with a calm and balanced mindset, seek equilibrium in your strategies, and make choices that reflect a harmonious approach to increase the likelihood of favorable results.",
    description2:
      'A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.\nSo also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.'
  },
  {
    name: 'The Devil',
    image: 'thedevil.jpeg',
    rank: 15,
    suit: 'major',
    planet: 'saturn',
    element: 'earth',
    sign: ['capricorn'],
    meanings: {
      upright: [
        'excess',
        'greed',
        'shadow self',
        'attachment',
        'addiction',
        'restriction',
        'sexuality',
        'fear',
        'materialism'
      ],
      reversed: [
        'release',
        'enlightenment',
        'acceptance',
        'inspiration',
        'freedom',
        'divorce',
        'determination',
        'restoring control'
      ]
    },
    type: 'major',
    description:
      "According to `The Devil` tarot card, your trades may yield entrapment, illusions, and negative outcomes. The Devil represents temptation, materialism, and being bound by unhealthy patterns or dependencies. This card suggests that your investments may be influenced by greed, impulsive decision-making, or falling into harmful practices.\n\nIt warns against making choices based solely on immediate gratification or following the herd mentality. The Devil card signifies the need to break free from limiting beliefs and take responsibility for your actions in the crypto market. By recognizing and releasing unhealthy attachments, you can avoid negative consequences and work towards more positive outcomes.\n\nHowever, it's important to note that the Devil card does not dictate a fixed result. Your ultimate outcome will depend on your ability to resist temptation, make informed decisions, and break free from harmful patterns. Approach your trades with caution, practice self-discipline, and seek clarity to increase the likelihood of achieving more favorable results.",
    description2:
      'The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life.\nThe figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit.'
  },
  {
    name: 'The Tower',
    image: 'thetower.jpeg',
    rank: 16,
    suit: 'major',
    planet: 'mars',
    element: 'fire',
    sign: [],
    meanings: {
      upright: [
        'sudden change',
        'upheaval',
        'disaster',
        'overthrow of existing circumstances',
        'destruction',
        'ruin',
        'revelation'
      ],
      reversed: [
        'avoidance of disaster',
        'fear of suffering',
        'manipulation',
        'trapped in suffering',
        'loss',
        'illness'
      ]
    },
    type: 'major',
    description:
      "According to `The Tower` tarot card, your trades may yield unexpected and disruptive results. The Tower represents sudden change, upheaval, and the breaking down of existing structures. It signifies a period of turmoil and transformation in your investment journey.\n\nThis card advises you to be prepared for unforeseen events that may shake the foundations of your trades. It signifies the need to adapt quickly to unexpected circumstances and make necessary adjustments. While the Tower represents a challenging period, it also presents an opportunity for growth and rebuilding.\n\nThe ultimate outcome will depend on your ability to navigate the upheaval and embrace change. It's important to remain resilient, seek opportunities amidst chaos, and make informed decisions in response to the new circumstances. Approach your trades with flexibility and adaptability to increase the likelihood of positive outcomes even in the face of disruption.",
    description2:
      'Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that "except the Lord build the house, they labour in vain that build it."\nThere is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question.'
  },
  {
    name: 'The Star',
    image: 'thestar.jpeg',
    rank: 17,
    suit: 'major',
    planet: 'uranus',
    element: 'air',
    sign: ['aquarius'],
    meanings: {
      upright: [
        'hope',
        'faith',
        'rejuvenation',
        'serenity',
        'inspiration',
        'calm',
        'optimism',
        'rebirth'
      ],
      reversed: [
        'faithlessness',
        'discouragement',
        'insecurity',
        'hopelessness',
        'disconnection',
        'unrealistic expectations'
      ]
    },
    type: 'major',
    description:
      "According to `The Star` tarot card, your trades may yield hope, inspiration, and positive outcomes. The Star represents a guiding light, offering a sense of optimism and renewal. It signifies that your investments have the potential to bring about positive changes and fulfill your aspirations.\n\nThis card advises you to stay focused on your goals and have faith in your abilities. It encourages you to trust the process and remain optimistic, even during challenging times. The Star suggests that by maintaining a positive mindset, being open to new possibilities, and aligning your actions with your aspirations, you can attract favorable results in your crypto trades. It symbolizes a sense of divine guidance and offers reassurance that your efforts will be rewarded.\n\nHowever, it's important to note that the Star card does not guarantee specific outcomes. The actual results will depend on your actions, market conditions, and your ability to stay committed to your goals. Embrace the hope and inspiration offered by the Star, stay aligned with your vision, and make informed decisions to increase the likelihood of positive and fulfilling results in your crypto trades.",
    description2:
      'A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l\'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are "Waters of Life freely" and "Gifts of the Spirit."\nThe summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx.'
  },
  {
    name: 'The Moon',
    image: 'themoon.jpeg',
    rank: 18,
    suit: 'major',
    planet: 'neptune',
    element: 'water',
    sign: ['pisces'],
    meanings: {
      upright: ['unconscious', 'illusions', 'intuition', 'dreams', 'fantasy', 'fears', 'mystery'],
      reversed: [
        'confusion',
        'fear',
        'misinterpretation',
        'deception',
        'anxiety',
        'unfounded fear',
        'enlightenment'
      ]
    },
    type: 'major',
    description:
      'According to `The Moon` tarot card, your trades may yield results that are influenced by intuition, emotions, and the subconscious. The Moon represents the realm of the unknown, illusions, and hidden influences. It suggests that your investments may be subject to fluctuations and uncertainties in the crypto market. It advises you to trust your instincts and tap into your intuition when making trading decisions.\n\nHowever, be cautious of deceptive or misleading information and seek clarity through thorough research and analysis. The Moon reminds you to navigate the market with awareness, adaptability, and a balanced approach to emotions. While the outcomes may be unpredictable, by staying connected to your intuition and being mindful of the hidden aspects, you can make more informed choices to increase the likelihood of favorable results in your trades.',
    description2:
      'The distinction between this card and some of the conventional types is that the moon is increasing on what is called the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it.\nThe last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form.'
  },
  {
    name: 'The Sun',
    image: 'thesun.jpeg',
    rank: 19,
    suit: 'major',
    planet: 'sun',
    element: 'fire',
    sign: [],
    meanings: {
      upright: [
        'joy',
        'success',
        'celebration',
        'positivity',
        'vitality',
        'attainment',
        'material happiness',
        'achievement'
      ],
      reversed: [
        'negativity',
        'depression',
        'sadness',
        'superficiality',
        'excess',
        'overindulgence'
      ]
    },
    type: 'major',
    description:
      'According to `The Sun` tarot card, your trades are likely to yield success, positivity, and abundance. The Sun represents joy, vitality, and favorable outcomes. It signifies a period of growth and flourishing in your investments.\n\nThis card advises you to have confidence in your abilities and embrace a positive mindset. It suggests that your investments have the potential to bring you happiness and financial rewards. The Sun card encourages you to seize opportunities, bask in the spotlight, and let your investments shine brightly.\n\nOverall, `The Sun` tarot card indicates that your trades are likely to yield optimistic and prosperous results. Embrace positivity, trust your instincts, and make informed decisions to enhance the potential for successful outcomes in the crypto market.',
    description2:
      'The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child.\nBut the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity.'
  },
  {
    name: 'judgment',
    image: 'judgment.jpeg',
    rank: 20,
    suit: 'major',
    planet: 'pluto',
    element: 'fire',
    sign: [],
    meanings: {
      upright: [
        'judgment',
        'rebirth',
        'inner calling',
        'absolution',
        'awakening',
        'renewal',
        'resurrection',
        'reevaluation'
      ],
      reversed: [
        'lack of self awareness',
        'doubt',
        'self loathing',
        'refusal of self-examination',
        'stunted personal growth'
      ]
    },
    type: 'major',
    description:
      "According to `The Judgment` tarot card, your trades may yield a significant period of evaluation, accountability, and potential rebirth. This card represents a call to reflect on your past choices and actions, and to make decisions based on a higher level of awareness. It signifies that your investments may undergo a period of scrutiny, where past decisions and their consequences will be brought to light.\n\nThis is an opportunity to assess your trading strategies, learn from any mistakes, and make adjustments for a fresh start. The Judgment card suggests that by embracing this period of evaluation and taking responsibility for your actions, you can potentially experience a rebirth and make more informed decisions that lead to positive outcomes in your trades.\n\nHowever, it's important to note that the Judgment card does not guarantee specific results. Your ultimate success will depend on your willingness to honestly assess your past choices, learn from them, and make well-informed decisions moving forward in the crypto market. Approach your trades with a sense of accountability and embrace this opportunity for growth and transformation.",
    description2:
      'I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.\nHerein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance.'
  },
  {
    name: 'The World',
    image: 'theworld.jpeg',
    rank: 21,
    suit: 'major',
    planet: 'saturn',
    element: 'earth',
    sign: [],
    meanings: {
      upright: [
        'completion',
        'integration',
        'accomplishment',
        'travel',
        'fulfillment',
        'wholeness',
        'harmony',
        'achievement'
      ],
      reversed: [
        'incompletion',
        'no closure',
        'lack of harmony',
        'lack of closure',
        'lack of fulfillment',
        'delayed success',
        'failed plans',
        'stagnation',
        'emptiness'
      ]
    },
    type: 'major',
    description:
      "According to `The World` tarot card, your trades are likely to yield successful and fulfilling results. The World represents completion, achievement, and wholeness. It signifies that your investments have the potential to reach a state of fulfillment and accomplishment. This card suggests that you have come full circle in your trading journey, and you are on the verge of experiencing positive outcomes and rewards. It signifies a sense of unity and integration, indicating that your trades may align with your overall goals and aspirations.\n\nThe World card encourages you to celebrate your achievements and embrace the opportunities that lie ahead. It represents a culmination of your efforts and suggests that your investments have the potential to make a significant impact in the crypto market. However, it's important to continue to stay grounded, adapt to changes, and maintain a balanced approach to sustain your success in the long term.",
    description2:
      'As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side.\nIt has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi.'
  },
  {
    name: 'Ace of Cups',
    image: 'aceofcups.jpeg',
    rank: 1,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['proposal', 'marriage', 'intuition', 'spirituality', 'new feelings', 'love'],
      reversed: ['self-love', 'emotional loss', 'codependency', 'lack of trust', 'emptiness']
    },
    type: 'minor',
    description:
      "The `Ace of Cups` tarot card suggests that your trades may yield new opportunities and emotional fulfillment. This card represents the potential for new beginnings, abundance, and positive energy. It advises you to approach your investments with an open heart, allowing your intuition and emotions to guide you. The Ace of Cups signifies the potential for joy, fulfillment, and financial rewards in your trades.\n\nHowever, it's important to remember that the card does not guarantee specific results. The actual outcomes will depend on your ability to embrace new opportunities, listen to your intuition, and make informed decisions. Approach your trades with an open heart and align them with your highest values to increase the likelihood of positive and fulfilling results.",
    description2:
      'The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana.'
  },
  {
    name: 'Two of Cups',
    image: 'twoofcups.jpeg',
    rank: 2,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'partnership',
        'mutual attraction',
        'compatibility',
        'union',
        'marriage',
        'romantic love',
        'unity',
        'connection'
      ],
      reversed: ['imbalance', 'broken communication', 'clashing values', 'disconnection', 'tension']
    },
    type: 'minor',
    description:
      "According to the `Two of Cups` tarot card, your trades may yield positive and harmonious results. The Two of Cups represents partnerships, connections, and mutual benefits. It suggests that collaborating with others and seeking shared goals can enhance your chances of success in trading. By fostering open communication, trust, and emotional connections, you can create a sense of harmony and balance in your investments.\n\n However, it's important to note that the Two of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to cultivate strong partnerships, communicate effectively, and make informed decisions. Approach your trades with a collaborative mindset, seek mutually beneficial arrangements, and nurture healthy relationships to increase the likelihood of favorable results.",
    description2:
      "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place."
  },
  {
    name: 'Three of Cups',
    image: 'threeofcups.jpeg',
    rank: 3,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'friendship',
        'community',
        'happiness',
        'forgiveness',
        'reunion',
        'celebration',
        'joy',
        'support'
      ],
      reversed: [
        'overindulgence',
        'gossip',
        'isolation',
        'loneliness',
        'party-crashing',
        'disruption',
        'conflict in community',
        'an affair'
      ]
    },
    type: 'minor',
    description:
      "The `Three of Cups` tarot card suggests that your trades may yield positive and joyful results. This card represents celebration, friendship, and abundance. It indicates that your investments have the potential to bring about a sense of harmony, shared success, and fulfillment.\n\nThe card advises you to cultivate connections and collaborate with others in your trading endeavors. By working together and celebrating achievements, you can enhance your trading outcomes and create a supportive network.\n\nHowever, it's important to remember that the Three of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to foster relationships, collaborate effectively, and make informed decisions in the crypto market.",
    description2: 'Maidens in a garden-ground with cups uplifted, as if pledging one another.'
  },
  {
    name: 'Four of Cups',
    image: 'fourofcups.jpeg',
    rank: 4,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'disillusioned',
        'missed opportunities',
        'regret',
        'remorse',
        'apathy',
        'discontent',
        'boredom',
        'disconnectedness'
      ],
      reversed: ['sudden awareness', 'choosing happiness', 'acceptance', 'moving on']
    },
    type: 'minor',
    description:
      'the `Four of Cups` tarot card, it suggests that your trades may yield a sense of contemplation and introspection. The Four of Cups represents a period of reflection, where you may find yourself feeling dissatisfied or uninterested with the current investment opportunities presented to you. It indicates a need to reassess your priorities and consider whether there are better options available.\n\n This card advises you to look beyond what is immediately in front of you and remain open to new possibilities. It urges you to examine your emotional state and desires in relation to your investments. It may be a time to take a step back, reevaluate your strategies, and consider whether there are alternative opportunities that align better with your goals.',
    description2:
      'A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment.'
  },
  {
    name: 'Five of Cups',
    image: 'fiveofcups.jpeg',
    rank: 5,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'loss',
        'grief',
        'self-pity',
        'disappointment',
        'regret',
        'sadness',
        'remorse',
        'trauma',
        'heartbreak'
      ],
      reversed: ['acceptance', 'moving on', 'finding peace', 'forgiveness', 'healing']
    },
    type: 'minor',
    description:
      " The `Five of Cups` tarot card suggests that your trades may yield feelings of disappointment or loss. The Five of Cups represents a period of emotional upheaval and focusing on past failures or missed opportunities. It signifies that there may be setbacks or challenges in your investments, leading to a sense of regret or disillusionment. \n\nHowever, it's important to note that the Five of Cups also carries a message of learning and resilience. While there may be disappointment, it encourages you to acknowledge and process those emotions, but not dwell on them. It advises you to shift your focus from what went wrong to what can still be salvaged or learned from the situation.",
    description2:
      'A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration. Reversed: News, alliances, affinity, consanguinity, ancestry, return, false projects'
  },
  {
    name: 'Six of Cups',
    image: 'sixofcups.jpeg',
    rank: 6,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['nostalgia', 'innocence', 'family', 'kindness', 'creativity', 'protection'],
      reversed: ['boredom', 'stuck in the past', 'stagnation', 'leaving home']
    },
    type: 'minor',
    description:
      "The `Six of Cups` tarot card suggest, that your trades may bring about a sense of nostalgia and past influences. The card suggests that your trades could be influenced by past experiences, memories, or connections. It could indicate a potential for revisiting familiar strategies or seeking opportunities rooted in the past. \n\nHowever, it's important to note that the prediction is based on symbolic interpretation and not an absolute guarantee of specific outcomes. The actual results will depend on various factors, including market conditions and your trading decisions.",
    description2: 'Children in an old garden, their cups filled with flowers.'
  },
  {
    name: 'Seven of Cups',
    image: 'sevenofcups.jpeg',
    rank: 7,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'opportunities',
        'new possibilities',
        'fantasy',
        'illusions',
        'meditation',
        'decisions'
      ],
      reversed: [
        'lack of purpose',
        'diversion',
        'confusion',
        'lack of fulfillment',
        'temptation',
        'overwhelmed by choice'
      ]
    },
    type: 'minor',
    description:
      "The `Seven of Cups` tarot card suggest, that the trader may face a period of confusion and overwhelming choices in their trades. The Seven of Cups represents a multitude of options and possibilities, but it also warns of the need for clarity and discernment.\n\n It suggests that the trader should be cautious and avoid getting lost in unrealistic or deceptive opportunities. It's important for the trader to carefully evaluate each option, stay focused on their goals, and make informed decisions to navigate through the complexity and make the most of their trading endeavors.",
    description2:
      'Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
  },
  {
    name: 'Eight of Cups',
    image: 'eightofcups.jpeg',
    rank: 8,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['disappointment', 'abandonment', 'withdrawal', 'escapism', 'disillusionment'],
      reversed: [
        'hopelessness',
        'unfinished business',
        'avoidance',
        'fear of change',
        'aimless drifting',
        'stagnation'
      ]
    },
    type: 'minor',
    description:
      'The `Eight of Cups` tarot card suggest, that your trades may involve leaving behind certain investments or ventures. The Eight of Cups represents a period of transition and the need for emotional detachment from current circumstances. It implies that you may feel compelled to move on from certain trades or investment strategies in search of something more fulfilling or aligned with your goals.\n\nThe card advises you to trust your instincts and listen to your inner voice. It signifies that it might be necessary to let go of certain opportunities or investments that no longer serve you in order to pursue new paths and experiences.\n\nOverall, the prediction with the `Eight of Cups` card suggests a time of change and the need to explore new possibilities in your trading journey. It indicates that by leaving behind what no longer serves you, you can find greater fulfillment and growth in your future trades.',
    description2:
      'A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern.'
  },
  {
    name: 'Nine of Cups',
    image: 'nineofcups.jpeg',
    rank: 9,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'satisfaction',
        'emotional stability',
        'luxury',
        'self-sufficiency',
        'wish fulfillment',
        'happiness',
        'success',
        'gratitude'
      ],
      reversed: [
        'lack of inner joy',
        'smugness',
        'self-satisfaction',
        'indulgence',
        'gloating',
        'dissatisfaction',
        'materialism'
      ]
    },
    type: 'minor',
    description:
      'The `Nine Of Cups` tarot card suggests , that your trades have the potential to bring you fulfillment, satisfaction, and a sense of abundance. This card represents wishes fulfilled, emotional satisfaction, and overall positive outcomes. It suggests that your investments may lead to favorable results, bringing you joy and contentment.',
    description2:
      "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects."
  },
  {
    name: 'Ten of Cups',
    image: 'tenofcups.jpeg',
    rank: 10,
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['blessings', 'divine love', 'family', 'harmony', 'alignment', 'joy', 'bliss'],
      reversed: ['domestic strife', 'broken home', 'shattered dreams', 'misalignment of values']
    },
    type: 'minor',
    description:
      'The `Ten of Cups` tarot card suggests , that your trades would be positive and fruitful. The Ten of Cups represents emotional fulfillment, harmony, and joy. It suggests that your investments have the potential to bring about a sense of contentment and satisfaction. This card indicates that your trades may lead to successful outcomes, not just in terms of financial gains, but also in terms of overall happiness and fulfillment.',
    description2:
      'Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond.'
  },
  {
    name: 'Page of Cups',
    image: 'pageofcups.jpeg',
    rank: 'page',
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['happy surprise', 'dreams', 'sensitivity', 'intuitive messages', 'creativity'],
      reversed: ['emotional immaturity', 'insecurity', 'disappointment', 'creative block']
    },
    type: 'minor',
    description:
      'The `Page of Cups` tarot card suggests that your trades may bring opportunities for emotional growth and new beginnings. The Page of Cups represents youthful enthusiasm, creativity, and the emergence of new ideas. It suggests that by approaching your trades with an open heart and a willingness to explore innovative strategies, you can potentially uncover profitable ventures or untapped potential in the crypto market.\n\nThis card encourages you to embrace your intuition, nurture your passions, and be open to unexpected opportunities that may arise. However, keep in mind that the Page of Cups card does not guarantee specific results, but rather signifies a potential for positive emotional and creative development in your trading journey.',
    description2:
      'A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form.'
  },
  {
    name: 'Knight of Cups',
    image: 'knightofcups.jpeg',
    rank: 'knight',
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['idealist', 'romantic', 'emotional', 'imaginative', 'sensitive'],
      reversed: ['moodiness', 'disappointment', 'heartbreak', 'sadness']
    },
    type: 'minor',
    description:
      "The `Knight of Cups` tarot card suggests that your trades may be guided by your emotional instincts, and there is potential for positive outcomes if you follow your heart and make decisions based on your intuition. It suggests that by combining your emotions with practicality and a balanced approach, you can navigate the crypto market successfully.\n\nHowever, it's important to note that the Knight of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to harness your emotions effectively, make informed decisions, and maintain a level-headed approach in the face of market volatility.",
    description2:
      'Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision.'
  },
  {
    name: 'Queen of Cups',
    image: 'queenofcups.jpeg',
    rank: 'queen',
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: [
        'loving',
        'empathic',
        'intuitive',
        'psychic',
        'calm',
        'spiritual',
        'compassionate',
        'tenderhearted'
      ],
      reversed: ['self-care', 'martyrdom', 'emotional manipulation', 'insecurity', 'dependency']
    },
    type: 'minor',
    description:
      'The `Queen of Cups` card suggests that your investments may yield emotional fulfillment and intuitive success. The Queen of Cups represents emotional intelligence, compassion, and intuitive wisdom.\n\n It suggests that by tapping into your intuition, understanding your emotions, and making decisions from a place of empathy and compassion, you can navigate the crypto market with positive outcomes. Trust your instincts, remain emotionally balanced, and cultivate a deep understanding of the market to increase the likelihood of favorable results.',
    description2:
      'Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream.'
  },
  {
    name: 'King of Cups',
    image: 'kingofcups.jpeg',
    rank: 'king',
    suit: 'cups',
    planet: null,
    element: 'water',
    sign: ['cancer', 'scorpio', 'pisces'],
    meanings: {
      upright: ['wisdom', 'understanding', 'focus', 'balance', 'peacefulness', 'diplomacy'],
      reversed: ['coldness', 'moodiness', 'volatile', 'immature', 'overreaction', 'manipulative']
    },
    type: 'minor',
    description:
      'The `King of Cups` suggests that your trades may result in emotional balance, intuitive decision-making, and potential financial success. The King of Cups represents emotional intelligence, stability, and a calm approach to your investments. It indicates that by tapping into your intuition and maintaining a balanced mindset, you have the potential to make wise decisions and achieve positive outcomes in the crypto market.',
    description2:
      'He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards.'
  },
  {
    name: 'Ace of Pentacles',
    image: 'aceofpentacles.jpeg',
    rank: 1,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['opportunity', 'prosperity', 'manifestation', 'wealth', 'abundance', 'new venture'],
      reversed: ['lost opportunity', 'missed chance', 'bad investment', 'lack of foresight']
    },
    type: 'minor',
    description:
      "The `Ace of Pentacles` suggests that your trades have the potential to yield new financial opportunities and material abundance. The Ace of Pentacles represents the beginning of prosperity and the manifestation of wealth. It suggests that your investments may lead to favorable outcomes, such as financial stability and growth. This card encourages you to seize these opportunities and make practical and grounded decisions in your trading activities.\n\n However, it's important to note that the card doesn't guarantee specific results, and the actual outcome will depend on various factors such as market conditions and your own actions. Approach your trades with a focused mindset, take advantage of the potential opportunities, and make informed choices to increase the likelihood of positive results.",
    description2: 'A hand--issuing, as usual, from a cloud--holds up a pentacle.'
  },
  {
    name: 'Two of Pentacles',
    image: 'twoofpentacles.jpeg',
    rank: 2,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['balance', 'adaptability', 'time management', 'priorities'],
      reversed: ['loss of balance', 'disorganized', 'overwhelmed', 'disarray', 'over-committed']
    },
    type: 'minor',
    description:
      'The `Two of Pentacles` card suggests that your trades may involve balancing multiple financial responsibilities and finding harmony amidst changing circumstances. This card suggests that you will need to juggle different aspects of your investments, adapt to market fluctuations, and make practical decisions to maintain stability. The prediction implies that your ability to find balance and manage your resources wisely will be key to navigating the crypto market successfully.',
    description2:
      'A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed.'
  },
  {
    name: 'Three of Pentacles',
    image: 'threeofpentacles.jpeg',
    rank: 3,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['teamwork', 'collaboration', 'learning', 'implementation'],
      reversed: ['disharmony', 'disorganization', 'group conflict', 'working alone']
    },
    type: 'minor',
    description:
      "The `Three of pentacles` suggests that your trades would be positive. The Three of Pentacles represents collaboration, skill, and success in your endeavors. It suggests that your trades have the potential to be fruitful, especially if you are willing to work with others and utilize your expertise.\n\n This card signifies the importance of teamwork, attention to detail, and honing your craft. It indicates that your efforts may be recognized, leading to rewards and progress in your trading journey. Overall, the tarot reader's prediction would be that your trades have the potential for success and prosperity.",
    description2:
      'A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest.'
  },
  {
    name: 'Four of Pentacles',
    image: 'fourofpentacles.jpeg',
    rank: 4,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['conservativism', 'frugality', 'security', 'scarcity', 'control', 'restraint'],
      reversed: ['over-spending', 'greed', 'materialism', 'selfishness', 'poverty', 'unstable']
    },
    type: 'minor',
    description:
      "The `Four of Pentacles` represents a tendency to hold onto resources and maintain a secure financial position. It implies that you may be inclined to be cautious and reluctant to take risks in your trading activities. The card advises you to prioritize stability, financial security, and the preservation of your assets.\n\n However, it also indicates a potential need to find a balance between holding onto what you have and exploring new opportunities for growth. It suggests that while it's important to be mindful of financial stability, being too rigid or overly protective may hinder your potential for greater gains. Therefore, it is recommended to consider finding a balance between preserving your resources and taking calculated risks to maximize your trading outcomes.",
    description2:
      'A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has.'
  },
  {
    name: 'Five of Pentacles',
    image: 'fiveofpentacles.jpeg',
    rank: 5,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['isolation', 'insecurity', 'worry', 'financial loss', 'poverty'],
      reversed: ['recovery', 'charity', 'improving health', 'spiritual poverty']
    },
    type: 'minor',
    description:
      "The `Five of Pentacles` card suggest that your trades, the prediction would suggest potential financial challenges or difficulties. The Five of Pentacles represents a period of financial strain, scarcity, or feeling left out in the cold. It indicates that there may be losses or setbacks in your investments, and you might experience a sense of financial instability. \n\nHowever, it's important to note that the Tarot is not an absolute predictor of the future, and outcomes can be influenced by various factors. While the Five of Pentacles card suggests potential financial challenges, it is still within your power to take proactive steps, seek guidance, and adapt your strategies to improve the situation.",
    description2: 'Two mendicants in a snow-storm pass a lighted casement.'
  },
  {
    name: 'Six of Pentacles',
    image: 'sixofpentacles.jpeg',
    rank: 6,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['charity', 'sharing', 'giving', 'sharing wealth', 'generosity', 'receiving'],
      reversed: ['power and domination', 'strings attached', 'stinginess', 'self-care']
    },
    type: 'minor',
    description:
      "The `Six of Pentacles` card suggests that your trades may experience a fair and balanced exchange. The Six of Pentacles represents generosity, reciprocity, and the flow of resources. It suggests that your trades have the potential to result in mutually beneficial outcomes, where you may receive support or assistance from others while also sharing your abundance with those in need. \n\nThis card indicates that your investments may lead to a harmonious and equitable distribution of wealth. However, it's important to note that the Six of Pentacles does not guarantee specific results. The actual outcomes will depend on various factors, including your actions, market conditions, and interactions with others. Approach your trades with a spirit of fairness, generosity, and integrity to increase the likelihood of positive and mutually beneficial results.",
    description2:
      'A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart.'
  },
  {
    name: 'Seven of Pentacles',
    image: 'sevenofpentacles.jpeg',
    rank: 7,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: [
        'long-term view',
        'sustainable results',
        'perseverance',
        'investment',
        'diligence',
        'hard work'
      ],
      reversed: ['lack of rewards', 'distractions', 'disruption', 'questioned investments']
    },
    type: 'minor',
    description:
      "The `Seven of Pentacles` card suggests that your trades would likely suggest a period of evaluation and patience. The Seven of Pentacles represents a time of reflection, assessing your investments, and waiting for the results to unfold. It indicates that your trades may require a patient approach, allowing your investments to grow and develop over time.\n\n The card advises you to review your progress, make necessary adjustments, and trust in the process of your investments. While it doesn't provide specific outcomes, it suggests that with careful assessment and patience, your trades have the potential to yield positive results in the long run.",
    description2:
      'A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there.'
  },
  {
    name: 'Eight of Pentacles',
    image: 'eightofpentacles.jpeg',
    rank: 8,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['mastery', 'skill development', 'diligence', 'passion', 'standards'],
      reversed: ['lack of passion', 'uninspired', 'lack of ambition', 'no motivation']
    },
    type: 'minor',
    description:
      'The `Eight of Pentacles` card while you, as a crypto trader, ask about your trades, the prediction would be that your trades will likely result in focused effort, skill development, and potential financial gains. \n\nThe Eight of Pentacles represents dedication, hard work, and honing your expertise. It suggests that by putting in consistent effort, focusing on improving your skills, and staying committed to your trades, you have the potential to achieve success and financial growth in the crypto market.',
    description2: 'An artist in stone at his work, which he exhibits in the form of trophies.'
  },
  {
    name: 'Nine of Pentacles',
    image: 'nineofpentacles.jpeg',
    rank: 9,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: [
        'fruits of labor',
        'rewards',
        'luxury',
        'self-sufficiency',
        'financial independence'
      ],
      reversed: [
        'reckless spending',
        'living beyond means',
        'false success',
        'living off others',
        'termination'
      ]
    },
    type: 'minor',
    description:
      'The `Nine of Pentacles` card suggests that your trades have the potential to yield financial abundance and independent success. The Nine of Pentacles represents a time of prosperity, self-sufficiency, and reaping the rewards of your hard work. It indicates that your investments may result in financial stability and a sense of personal accomplishment.\n\nThis card encourages you to trust in your abilities, maintain a disciplined approach, and enjoy the fruits of your labor. It suggests that your trades may lead to a favorable outcome with the potential for financial growth and security.',
    description2:
      'A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being.'
  },
  {
    name: 'Ten of Pentacles',
    image: 'tenofpentacles.jpeg',
    rank: 10,
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['wealth', 'financial security', 'family', 'long-term success', 'legacy'],
      reversed: ['fleeting success', 'financial failure', 'lack of stability', 'lack of resources']
    },
    type: 'minor',
    description:
      'The `Ten of Pentacles` card suggests that your trades have the potential to bring substantial financial stability and long-term wealth. The Ten of Pentacles represents a culmination of material abundance, prosperity, and generational wealth. It suggests that your investments may yield significant returns and contribute to a solid financial foundation for yourself and possibly future generations. This card indicates that your trades have the potential to create a lasting and prosperous outcome, bringing you financial security and success in the crypto market.',
    description2:
      "A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child's hand is on one of them."
  },
  {
    name: 'Page of Pentacles',
    image: 'pageofpentacles.jpeg',
    rank: 'page',
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['manifestation', 'ambition', 'desire', 'financial opprotunity'],
      reversed: ['procrastination', 'lack of progress', 'greediness', 'laziness']
    },
    type: 'minor',
    description:
      "The `Page of Pentacles` card suggest that your trades as a crypto trader would be that there is potential for new financial opportunities and growth. The Page of Pentacles represents a young and ambitious individual who is eager to learn and apply their skills in practical ways.\n\n It suggests that by being diligent, focused, and open to learning, your trades have the potential to yield positive results, such as new investment prospects or profitable ventures. The card encourages you to approach your trades with a beginner's mindset, seeking knowledge and being willing to put in the necessary effort to achieve your financial goals.",
    description2:
      'A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him.'
  },
  {
    name: 'Knight of Pentacles',
    image: 'knightofpentacles.jpeg',
    rank: 'knight',
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: [
        'efficiency',
        'hard work',
        'responsibility',
        'focus',
        'determination',
        'productivity',
        'routine'
      ],
      reversed: [
        'boredom',
        'laziness',
        'obsession with work',
        'work without reward',
        'feeling overwhelmed'
      ]
    },
    type: 'minor',
    description:
      'The `Knight of Pentacles` card suggests that with your trades you can expect steady and reliable progress. The Knight of Pentacles represents a methodical and disciplined approach, suggesting that your investments will yield gradual growth and stability. This card indicates that by focusing on long-term strategies, being diligent in your research, and taking a patient and practical approach, you have the potential to achieve financial stability and tangible results in your trades.',
    description2:
      'He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein.'
  },
  {
    name: 'Queen of Pentacles',
    image: 'queenofpentacles.jpeg',
    rank: 'queen',
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: [
        'practicality',
        'creature comforts',
        'financial security',
        'generosity',
        'matriarchal'
      ],
      reversed: ['jealousy', 'smothering', 'self care', 'financially dependent']
    },
    type: 'minor',
    description:
      'The `Queen of Pentacles` card suggest that your investments will likely bring stability, abundance, and financial success. The Queen of Pentacles represents a person or energy associated with practicality, nurturing, and material wealth. It suggests that your trading endeavors have the potential to generate positive outcomes, growth, and a strong foundation for your financial goals. It indicates that you may experience fruitful returns and a sense of security in your investment ventures.',
    description2:
      'The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein.'
  },
  {
    name: 'King of Pentacles',
    image: 'kingofpentacles.jpeg',
    rank: 'king',
    suit: 'pentacles',
    planet: null,
    element: 'earth',
    sign: ['taurus', 'virgo', 'capricorn'],
    meanings: {
      upright: ['abundance', 'prosperity', 'security', 'wealth', 'leadership'],
      reversed: ['financially inept', 'greed', 'spending problems', 'stubborn', 'indulgence']
    },
    type: 'minor',
    description:
      'The `King of Pentacles` card suggests that your trades are likely to yield success, financial stability, and abundance. The `King of Pentacles` represents wealth, mastery, and practicality. It signifies that your investments have the potential to bring fruitful results and solid returns. This card suggests that you have the skills, knowledge, and expertise to make wise financial decisions in the crypto market. It advises you to approach your trades with a practical mindset, focus on long-term gains, and utilize your resources effectively. Overall, the prediction is that your trades have a high probability of leading to prosperous outcomes.',
    description2:
      "The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money."
  },
  {
    name: 'Ace of Swords',
    image: 'aceofswords.jpeg',
    rank: 1,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: [
        'breakthroughs',
        'new ideas',
        'clarity',
        'success',
        'sharp mind',
        'cutting through confusion'
      ],
      reversed: ['confusion', 'brutality', 'chaos', 'clouded judgement']
    },
    type: 'minor',
    description:
      "The `Ace of Swords` card suggests that your trades have the potential to yield success, clarity, and breakthroughs. The Ace of Swords represents a new beginning, intellectual power, and the ability to make decisive and strategic decisions. It indicates that your trading activities may be marked by sharp insight, clear thinking, and a strong sense of purpose.\n\n This card signifies that you have the mental acuity and determination to overcome challenges and achieve your goals in the crypto market. It advises you to harness your intellectual prowess, embrace new opportunities, and take calculated risks to optimize your results. However, it's important to remember that tarot readings are interpretive, and the actual outcomes of your trades will depend on various factors and your own actions in the market.",
    description2:
      'A hand issues from a cloud, grasping as word, the point of which is encircled by a crown.'
  },
  {
    name: 'Two of Swords',
    image: 'twoofswords.jpeg',
    rank: 2,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['indecision', 'stalemate', 'impasse', 'avoidance', 'weighing options'],
      reversed: ['confusion', 'lesser of two evils', 'information overload', 'tension']
    },
    type: 'minor',
    description:
      "The Two of Swords represents a situation where you may feel stuck, unable to move forward or make clear decisions. It suggests a period of uncertainty and conflicting options.\n\nThis card suggests that you are currently facing a dilemma in your trading decisions. It could be related to conflicting information, market volatility, or uncertainty about which path to take. The card advises you to carefully weigh your options, gather more information, and find a way to reconcile opposing factors before making any major trading decisions.\n\nHowever, it's important to note that the `Two of Swords` card does not provide a definitive outcome. The actual result of your trades will depend on your ability to confront the decision at hand, seek clarity, and make informed choices. The Tarot reader's prediction serves as a reminder to address the challenges and seek a resolution to move forward in your trading journey.",
    description2: 'A hoodwinked female figure balances two swords upon her shoulders.'
  },
  {
    name: 'Three of Swords',
    image: 'threeofswords.jpeg',
    rank: 3,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['grief', 'suffering', 'heartbreak', 'sorrow', 'emotional pain'],
      reversed: [
        'recovery',
        'forgiveness',
        'moving on',
        'releasing baggage',
        'optimism',
        'legging go of pain'
      ]
    },
    type: 'minor',
    description:
      "The `Three of Swords` card suggests that in your trades this would be a period of heartache, pain, or difficulties. This card suggests that your investments may face challenges or setbacks that could potentially result in emotional turmoil or loss. It advises you to be prepared for difficult circumstances and to approach your trades with caution and careful consideration.\n\n However, it's important to remember that tarot readings are subjective and should be taken as guidance rather than a definitive prediction of the future. It's always wise to make decisions based on your own research, analysis, and risk assessment in the crypto market.",
    description2: 'Three swords piercing a heart; cloud and rain behind.'
  },
  {
    name: 'Four of Swords',
    image: 'fourofswords.jpeg',
    rank: 4,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: [
        'rest',
        'relaxation',
        'restoration',
        'contemplation',
        'recuperation',
        'meditation',
        'recovery'
      ],
      reversed: ['restlessness', 'burnout', 'stress', 'exhaustion', 'repeating mistakes']
    },
    type: 'minor',
    description:
      'The `Four of Swords` card suggests this would be a period of rest, recuperation, and taking a break from active trading. It indicates that the best course of action at this time might be to step back and allow yourself some time for introspection and recharging.\n\n The card suggests that pushing forward with trades may not yield the desired results, and instead, it advises you to focus on self-care and regaining a sense of balance before resuming your trading activities.',
    description2: 'The effigy of a knight in the attitude of prayer, at full length upon his tomb.'
  },
  {
    name: 'Five of Swords',
    image: 'fiveofswords.jpeg',
    rank: 5,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['sneakiness', 'conflict', 'defeat', 'competition', 'ego', 'win at all costs'],
      reversed: [
        'lingering resentment',
        'desire to reconcile',
        'forgiveness',
        'moving on',
        'releasing baggage'
      ]
    },
    type: 'minor',
    description:
      'The `Five of Swords` card suggests potential conflict, competition, or challenges in your trades. The card indicates that you may encounter situations where you need to be cautious of deceit, manipulation, or unhealthy competition within the crypto market. It advises you to be strategic, maintain a sense of integrity, and carefully assess your decisions to navigate these challenging circumstances.',
    description2:
      'A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field.'
  },
  {
    name: 'Six of Swords',
    image: 'sixofswords.jpeg',
    rank: 6,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['transition', 'change', 'rite of passage', 'gradual movement', 'release'],
      reversed: [
        'emotional baggage',
        'unresolved issues',
        'resistance to change',
        'difficulty moving on'
      ]
    },
    type: 'minor',
    description:
      'The `Six of Swords` card suggests that your trades will bring about a period of transition, moving away from difficulties towards calmer waters. The card suggests that by making strategic decisions and leaving behind challenging situations, you can navigate towards a more stable and positive trading experience. This indicates a potential improvement in your trading journey, where you may find smoother sailing and a sense of relief from previous obstacles.',
    description2:
      'A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength.'
  },
  {
    name: 'Seven of Swords',
    image: 'sevenofswords.jpeg',
    rank: 7,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: [
        'betrayal',
        'deception',
        'getting away with something',
        'acting strategically',
        'self-interest',
        'sneaking around'
      ],
      reversed: [
        'imposter syndrome',
        'deceit',
        'coming clean',
        'releasing guilt and shame',
        'getting away with nothing',
        'confrontation'
      ]
    },
    type: 'minor',
    description:
      'The `Seven of Swords` suggests that your trades may involve an element of deception, risk, or potential loss. The card suggests a need for caution and vigilance, as there could be hidden agendas, unethical practices, or potential theft in the trading environment. It advises you to be mindful of your actions, conduct thorough research, and take appropriate measures to protect your assets and interests. The Seven of Swords serves as a reminder to be skeptical of overly promising or questionable opportunities and to maintain a keen awareness of potential risks in your trading endeavors.',
    description2:
      'A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand.'
  },
  {
    name: 'Eight of Swords',
    image: 'eightofswords.jpeg',
    rank: 8,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['imprisonment', 'entrapment', 'victim', 'negative thoughts'],
      reversed: ['self-limiting beliefs', 'inner critic', 'open to new perspectives', 'freedom']
    },
    type: 'minor',
    description:
      'The `Eight of Swords` card suggest that your trades may experience a sense of feeling restricted or trapped in your investment endeavors. It signifies potential obstacles, limitations, or self-imposed restrictions that could hinder your progress or decision-making process.\n\nThis card advises you to examine any self-limiting beliefs or fears that may be holding you back. It urges you to challenge these constraints and seek ways to break free from the perceived limitations. By taking a proactive approach, seeking alternative perspectives, and overcoming self-doubt, you can navigate the challenges and find a path towards greater freedom and success in your trades.\n\nIn summary, the presence of the `Eight of Swords` card indicates the potential for feeling trapped or restricted in your trading journey. However, it also encourages you to confront and overcome these limitations by exploring new strategies and gaining a fresh perspective, ultimately leading to a path of greater freedom and success.',
    description2:
      'A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage.'
  },
  {
    name: 'Nine of Swords',
    image: 'nineofswords.jpeg',
    rank: 9,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['hopelessness', 'anxiety', 'trauma', 'depression', 'worry', 'fear', 'nightmares'],
      reversed: ['secrets', 'release of fear', 'deep-seated concern', 'inner turmoil']
    },
    type: 'minor',
    description:
      "The `Nine of Swords` card suggests that your investments may lead to feelings of worry, anxiety, or stress. The card serves as a cautionary sign to be mindful of potential challenges or difficulties. However, it's important to remember that tarot readings provide guidance, not fixed outcomes. By remaining calm, seeking support, and making informed choices, you can navigate the challenges and work towards more positive results.",
    description2:
      'One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation.'
  },
  {
    name: 'Ten of Swords',
    image: 'tenofswords.jpeg',
    rank: 10,
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['failure', 'defeat', 'deep wounds', 'loss', 'crisis', 'betrayal'],
      reversed: ['recovery', 'rebirth', 'moving on', 'restoration']
    },
    type: 'minor',
    description:
      "The `Ten of Swords` card suggest that your trades may experience significant challenges or setbacks. The Ten of Swords represents a sense of defeat, betrayal, or reaching a low point in a situation. It signifies that your investments may face obstacles or unexpected negative outcomes.\n\nHowever, it's important to remember that Tarot predictions are not absolute and can be influenced by various factors. It's advisable to seek further guidance or explore different strategies to mitigate potential risks and navigate the challenging times in your trading journey.",
    description2: 'A prostrate figure, pierced by all the swords belonging to the card.'
  },
  {
    name: 'Page of Swords',
    image: 'pageofswords.jpeg',
    rank: 'page',
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['curiosity', 'mental energy', 'innovation', 'thirst for knowledge'],
      reversed: ['manipulation', 'deception', 'haste', 'haphazard action']
    },
    type: 'minor',
    description:
      'The `Page of Swords` card suggest that your trades will require careful analysis, strategic planning, and an alert mindset. You should stay informed about market trends, be proactive in your decision-making, and adapt quickly to changes. By remaining curious, open-minded, and willing to take calculated risks, you can increase your chances of success in the crypto market.',
    description2:
      'A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment.'
  },
  {
    name: 'Knight of Swords',
    image: 'knightofswords.jpeg',
    rank: 'knight',
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['action', 'impulse', 'defense of beliefs', 'ambitious'],
      reversed: ['lack of direction', 'restless', 'unpredictability', 'impulsive']
    },
    type: 'minor',
    description:
      "The `Knight of Swords` card suggest that your trades may involve a period of rapid action, assertiveness, and taking risks. The Knight of Swords represents an ambitious and driven energy, indicating that you might pursue your trades with determination and a bold approach.\n\nHowever, it's important to exercise caution and ensure that you also consider the potential risks and consequences associated with impulsive decision-making. The card advises you to maintain a balance between swift action and careful consideration to achieve success in your trading endeavors.",
    description2:
      'He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart.'
  },
  {
    name: 'Queen of Swords',
    image: 'queenofswords.jpeg',
    rank: 'queen',
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: ['complexity', 'perceptive', 'clear minded', 'impartial', 'independent'],
      reversed: ['cold hearted', 'cruel', 'bitter', 'unforgiving', 'resentful', 'isolation']
    },
    type: 'minor',
    description:
      'The `Queen of Swords` card suggest that your trades would need careful analysis, strategy, and maintaining a rational and objective approach. The Queen of Swords represents a sharp intellect, clear communication, and a focus on logic and reason. This card indicates that success in your trades will depend on your ability to make informed decisions based on thorough research and critical thinking.\n\nThe Queen of Swords encourages you to approach your trades with a level-headed mindset, relying on facts and data rather than emotions. By employing your analytical skills and maintaining a disciplined approach, you have the potential to make wise choices and achieve favorable outcomes in your investments.',
    description2:
      'Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power.'
  },
  {
    name: 'King of Swords',
    image: 'kingofswords.jpeg',
    rank: 'king',
    suit: 'swords',
    planet: null,
    element: 'air',
    sign: ['gemini', 'libra', 'aquarius'],
    meanings: {
      upright: [
        'head over heart',
        'disciplined',
        'truthful',
        'just',
        'mental clarity',
        'authority',
        'intellect'
      ],
      reversed: ['manipulative', 'cruel', 'weakness of character', 'abuse of power']
    },
    type: 'minor',
    description:
      "The `King of Swords` card suggest that your trades would likely be that you will experience a period of strategic decision-making, rationality, and intellectual prowess. The King of Swords represents a strong and analytical mindset, indicating that your trades may be influenced by a logical and calculated approach. It suggests that you have the potential to make informed and decisive choices in your investments, relying on your knowledge and expertise.\n\nThis card also signifies the importance of clear communication and assertiveness in your trading endeavors. In summary, the tarot reader's prediction with the `King of Swords` card suggests that your trades will be driven by logic, strategic thinking, and effective decision-making.",
    description2:
      'He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office.'
  },
  {
    name: 'Ace of Wands',
    image: 'aceofwands.jpeg',
    rank: 1,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'creation',
        'willpower',
        'inspiration',
        'desire',
        'vision',
        'beginnings',
        'potential'
      ],
      reversed: [
        'lack of energy',
        'lack of passion',
        'lack of direction',
        'decreased libido',
        'lack of creativity'
      ]
    },
    type: 'minor',
    description:
      'The `Ace of Wands` card suggest that your trades have the potential to bring about new opportunities, creativity, and growth. The Ace of Wands represents the spark of inspiration, entrepreneurial spirit, and the initiation of successful ventures. It signifies that your trading activities may lead to exciting prospects, innovative ideas, and the potential for significant returns. It encourages you to take bold and decisive actions, harness your enthusiasm, and seize the opportunities that come your way. This card indicates that your trading journey holds promise and potential for successful outcomes.',
    description2: 'A hand issuing from a cloud grasps a stout wand or club.'
  },
  {
    name: 'Two of Wands',
    image: 'twoofwands.jpeg',
    rank: 2,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'discovery',
        'future planning',
        'making decisions',
        'progress',
        'entrepreneurship',
        'having a long term vision',
        'opportunity'
      ],
      reversed: [
        'personal goals',
        'fear of change',
        'playing safe',
        'bad planning',
        'lack of direction',
        'personal goals are unclear'
      ]
    },
    type: 'minor',
    description:
      "The `Two of Wands` card suggests that your trades would be a potential for future success and expansion. The Two of Wands represents making plans, envisioning opportunities, and taking bold steps towards your goals. It suggests that your trades have the potential to yield positive outcomes, growth, and new possibilities. It advises you to seize opportunities, trust your instincts, and take calculated risks in order to achieve your desired results. However, it's important to note that the actual outcome will depend on your actions, decisions, and market conditions. Embrace the card's message of confidence and forward-thinking as you navigate the crypto market.",
    description2:
      'A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side.'
  },
  {
    name: 'Three of Wands',
    image: 'threeofwands.jpeg',
    rank: 3,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'progress',
        'expansion',
        'preparation',
        'forethought',
        'enterprise',
        'trade',
        'negotiation',
        'good things to come',
        'rapid growth'
      ],
      reversed: [
        'obstacles',
        'lack of progress',
        'delays',
        'frustration',
        'lack of growth',
        'lack of expansion',
        'bad things to come'
      ]
    },
    type: 'minor',
    description:
      "The `Three of Wands` card suggests that your trades have the potential for expansion, growth, and successful outcomes. The Three of Wands signifies taking a proactive approach, having a strategic vision, and being ready to explore new horizons in your investments. It suggests that your trades may lead to opportunities for long-term success, both in terms of financial gains and personal development. However, it's important to note that the actual results will depend on your ability to seize these opportunities, make informed decisions, and adapt to the evolving market conditions.",
    description2:
      "A calm, stately personage, with his back turned, looking from a cliff's edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them."
  },
  {
    name: 'Four of Wands',
    image: 'fourofwands.jpeg',
    rank: 4,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'relaxation',
        'celebration',
        'harmony',
        'marriage',
        'home',
        'community',
        'peace',
        'tranquility'
      ],
      reversed: [
        'lack of support',
        'transient home',
        'community conflict',
        'domestic disharmony',
        'inner harmony'
      ]
    },
    type: 'minor',
    description:
      'The `Four of Wands` card suggests that with your trades you can expect a period of stability, success, and celebration. The Four of Wands represents a time of achievement, harmony, and a solid foundation in your investments. It suggests that your trades have the potential to bring about positive outcomes, financial stability, and a sense of accomplishment. This card indicates that your efforts in the crypto market will likely be rewarded and that you may experience a period of fruitful results. Overall, the prediction is that your trades have the potential to yield favorable and prosperous outcomes.',
    description2:
      'From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house.'
  },
  {
    name: 'Five of Wands',
    image: 'fiveofwands.jpeg',
    rank: 5,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'competition',
        'rivalry',
        'conflict',
        'strife',
        'tension',
        'disagreement',
        'arguments'
      ],
      reversed: [
        'avoidance of conflict',
        'respecting differences',
        'conflict avoidance',
        'conflict resolution',
        'tension release'
      ]
    },
    type: 'minor',
    description:
      "The `Five of Wands` card, suggests that your trades may encounter competition, conflicts, or obstacles in your trading journey. The card indicates a period of challenges and disagreements within the market or among fellow traders. However, it's important to remember that the `Five of Wands` card does not guarantee specific outcomes. The actual results will depend on your ability to navigate the competitive landscape, overcome conflicts, and find ways to stand out amidst the challenges. Approach your trades with resilience, strategic thinking, and the willingness to adapt to increase the likelihood of favorable results.",
    description2:
      'A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the'
  },
  {
    name: 'Six of Wands',
    image: 'sixofwands.jpeg',
    rank: 6,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: ['victory', 'success', 'public reward', 'progression', 'triumph', 'pride'],
      reversed: [
        'excess pride',
        'lack of recognition',
        'punishment',
        'lack of progress',
        'opposition',
        'fall from grace',
        'egotism'
      ]
    },
    type: 'minor',
    description:
      'The `Six of Wands` card suggests that your trades will be successful and bring you recognition and victory. The Six of Wands symbolizes triumph, achievement, and public recognition for your efforts. It suggests that your trades have the potential to yield positive outcomes and be met with acclaim from others. Overall, the prediction indicates that your investments have a high chance of being successful and bringing you significant rewards.',
    description2:
      'A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side.'
  },
  {
    name: 'Seven of Wands',
    image: 'sevenofwands.jpeg',
    rank: 7,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'challenge',
        'protection',
        'perseverance',
        'defensiveness',
        'maintaining control',
        'standing your ground',
        'show of strength'
      ],
      reversed: [
        'give up',
        'destruction',
        'fatigue',
        'overwhelmed',
        'exhaustion',
        'surrender',
        'lack of confidence'
      ]
    },
    type: 'minor',
    description:
      'The `Seven of Wands` card suggest that you will face challenges and competition in the crypto market. The card indicates that you will need to defend your position and assert yourself amidst potential obstacles. However, it also implies that with determination, resilience, and strategic decision-making, you have the ability to overcome these challenges and come out on top.',
    description2:
      'A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below.'
  },
  {
    name: 'Eight of Wands',
    image: 'eightofwands.jpeg',
    rank: 8,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: ['alignment', 'air travel', 'action', 'movement', 'quick decisions'],
      reversed: [
        'panic',
        'waiting',
        'slowdown',
        'frustration',
        'miscommunication',
        'resisting change'
      ]
    },
    type: 'minor',
    description:
      "The `Eight of Wands` card, suggests that your trades would be swift and decisive action. The Eight of Wands represents a period of rapid progress, momentum, and opportunities coming your way. It suggests that your trades have the potential for quick movement, possibly resulting in profitable outcomes.\n\nThis card encourages you to seize the moment and act swiftly, as it signifies favorable conditions and an accelerated pace in the crypto market. However, it's important to note that the interpretation of tarot cards is subjective, and the actual outcomes of your trades will depend on various factors. Approach your trades with attentiveness, make informed decisions, and take advantage of the opportunities that arise to increase the likelihood of positive results.",
    description2:
      'The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold.'
  },
  {
    name: 'Nine of Wands',
    image: 'nineofwands.jpeg',
    rank: 9,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: ['resilience', 'courage', 'test of faith', 'persistence', 'boundaries', 'grit'],
      reversed: [
        'hesitation',
        'defensiveness',
        'timidness',
        'wounded',
        'weariness',
        'hesitation',
        'feeling battered',
        'paranoia'
      ]
    },
    type: 'minor',
    description:
      'The `Nine of Wands` card suggest that your trades may encounter challenges and obstacles. The Nine of Wands represents resilience, perseverance, and the need to stay vigilant in the face of adversity. It indicates that you may need to protect your investments, be prepared for potential setbacks, and remain determined to overcome any obstacles that come your way. \n\nDespite the challenges, the card encourages you to stay committed to your goals and trust in your ability to navigate through difficulties. By maintaining your resilience and adaptability, you can increase the likelihood of successfully overcoming the hurdles and achieving positive outcomes in your trades.',
    description2:
      'The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade.'
  },
  {
    name: 'Ten of Wands',
    image: 'tenofwands.jpeg',
    rank: 10,
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: ['accomplishment', 'responsibility', 'burden', 'hard work', 'stress', 'completion'],
      reversed: [
        'inability to delegate',
        'overwork',
        'straining',
        'taking on too much',
        'avoiding responsibility',
        'burnt out',
        'overstressed',
        'release'
      ]
    },
    type: 'minor',
    description:
      'The `Ten of Wands` card suggest that your trades may result in a heavy burden or overwhelming workload. It indicates that you might encounter challenges and responsibilities that could become exhausting and take a toll on your well-being. The card advises you to be mindful of taking on too much and to find ways to manage the stress that may arise from your trading activities. By maintaining a balanced approach and seeking support when needed, you can navigate the demands of trading more effectively.',
    description2: 'A man oppressed by the weight of the ten staves which he is carrying.'
  },
  {
    name: 'Page of Wands',
    image: 'pageofwands.jpeg',
    rank: 'page',
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'inspiration',
        'ideas',
        'discovery',
        'free spirit',
        'freedom',
        'limitless potential',
        'exploration'
      ],
      reversed: [
        'lack of direction',
        'discovery',
        'new approaches',
        'procrastination',
        'spiritual path'
      ]
    },
    type: 'minor',
    description:
      'The `Page of Wands` card suggest that your trading will likely be in new opportunities where you will have enthusiasm, and potential for growth. The Page of Wands represents a fresh start, creative energy, and the willingness to explore new ventures. It suggests that your trades may bring about exciting prospects and a sense of passion in your investment journey. This card encourages you to embrace the enthusiasm, take calculated risks, and be open to innovative approaches. It signifies that by staying proactive, adaptable, and adventurous in your trading decisions, you may uncover promising avenues for success.',
    description2:
      'In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.'
  },
  {
    name: 'Knight of Wands',
    image: 'knightofwands.jpeg',
    rank: 'knight',
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'energy',
        'passion',
        'inspired action',
        'adventure',
        'restlessness',
        'lust',
        'travel',
        'impulsiveness',
        'action'
      ],
      reversed: [
        'selfishness',
        'no direction',
        'panic',
        'anger',
        'lack of control',
        'impulsiveness',
        'haste',
        'recklessness',
        'delays'
      ]
    },
    type: 'minor',
    description:
      "The `Knight of Wands` card suggests that your trades will be characterized by passion, energy, and a drive for action. The Knight of Wands signifies a period of taking bold and assertive steps in pursuit of your goals. It suggests that you will likely experience opportunities for growth and expansion in your trading activities. However, it's important to approach your trades with caution and ensure that you maintain a balance between enthusiasm and careful planning. The Knight of Wands encourages you to channel your energy and passion into focused and strategic actions to increase the likelihood of positive outcomes.",
    description2:
      'He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith.'
  },
  {
    name: 'Queen of Wands',
    image: 'queenofwands.jpeg',
    rank: 'queen',
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'confidence',
        'courage',
        'determination',
        'joy',
        'energy',
        'confidence',
        'independence',
        'cheer'
      ],
      reversed: ['frustration', 'introversion', 'insecurity', 'repressed energy', 'moodiness']
    },
    type: 'minor',
    description:
      'The `Queen of Wands` card suggests that your trades will likely result in confident and bold outcomes. The Queen of Wands represents a strong and determined individual who takes charge and exudes leadership qualities. It suggests that your investments may yield success through your ability to embrace opportunities, trust your instincts, and take decisive action. This card indicates that you have the potential to make significant strides in the crypto market by being passionate, assertive, and confident in your trading decisions.',
    description2:
      "The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic."
  },
  {
    name: 'King of Wands',
    image: 'kingofwands.jpeg',
    rank: 'king',
    suit: 'wands',
    planet: null,
    element: 'fire',
    sign: ['aries', 'leo', 'sagittarius'],
    meanings: {
      upright: [
        'natural-born leader',
        'visionary',
        'growth',
        'success',
        'entrepreneur',
        'spirituality',
        'motivation'
      ],
      reversed: ['impulsiveness', 'aggression', 'stubbornness', 'posessiveness', 'controlling']
    },
    type: 'minor',
    description:
      "The `King of Wands` card suggests that your trades would be one of ambition, energy, and success. The King of Wands represents a dynamic and confident leader who possesses entrepreneurial skills and a visionary mindset. This card suggests that your trades have the potential to be bold and profitable. It signifies that by harnessing your passion, taking decisive action, and leveraging your creativity, you can achieve significant success in your investments.\n\nHowever, it's important to remember that tarot readings are subjective and should be taken as guidance rather than absolute predictions. The actual outcomes will depend on your actions, market conditions, and other factors. Approach your trades with confidence, take calculated risks, and use your visionary skills to increase the likelihood of favorable results.",
    description2:
      'The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne.'
  }
];
