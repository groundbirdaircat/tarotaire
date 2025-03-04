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
    sign: ['aquarius', 'aries'],
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
      'With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.\nIn his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage.'
  },
  {
    name: 'The Magician',
    image: 'themagician.jpeg',
    rank: 1,
    suit: 'major',
    planet: 'mercury',
    element: 'air',
    sign: ['gemini', 'virgo'],
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
      'A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician\'s right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change "unto the Ogdoad." The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.'
  },
  {
    name: 'The High Priestess',
    image: 'thehighpriestess.jpeg',
    rank: 2,
    suit: 'major',
    planet: 'moon',
    element: 'water',
    sign: ['cancer'],
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
      'She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.\nIn a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.'
  },
  {
    name: 'The Empress',
    image: 'theempress.jpeg',
    rank: 3,
    suit: 'major',
    planet: 'venus',
    element: 'earth',
    sign: ['taurus', 'libra'],
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
      'A princely figure carrying a drawn sword. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.'
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
      'The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that "where I am, you also may be."\nIt is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared.'
  },
  {
    name: 'Wheel Of Fortune',
    image: 'wheeloffortune.jpeg',
    rank: 10,
    suit: 'major',
    planet: 'jupiter',
    element: 'fire',
    sign: ['sagittarius'],
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
      'The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life.\nThe figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit.'
  },
  {
    name: 'The Tower',
    image: 'thetower.jpeg',
    rank: 16,
    suit: 'major',
    planet: 'mars',
    element: 'fire',
    sign: ['aries', 'scorpio'],
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
      'It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that "except the Lord build the house, they labour in vain that build it."\nThere is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question.'
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
      'Life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it.\nThe last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form.'
  },
  {
    name: 'The Sun',
    image: 'thesun.jpeg',
    rank: 19,
    suit: 'major',
    planet: 'sun',
    element: 'fire',
    sign: ['leo'],
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
      'The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child.\nBut the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity.'
  },
  {
    name: 'judgment',
    image: 'judgment.jpeg',
    rank: 20,
    suit: 'major',
    planet: 'pluto',
    element: 'fire',
    sign: ['aries', 'scorpio'],
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
      'The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.\nHerein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance.'
  },
  {
    name: 'The World',
    image: 'theworld.jpeg',
    rank: 21,
    suit: 'major',
    planet: 'saturn',
    element: 'earth',
    sign: ['capricorn', 'sagittarius'],
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
    description: 'Maidens in a garden-ground with cups uplifted, as if pledging one another.'
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
    description: 'Children in an old garden, their cups filled with flowers.'
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
    description: 'A hand--issuing, as usual, from a cloud--holds up a pentacle.'
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
    description: 'Two mendicants in a snow-storm pass a lighted casement.'
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
    description: 'An artist in stone at his work, which he exhibits in the form of trophies.'
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
    description: 'A hoodwinked female figure balances two swords upon her shoulders.'
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
    description: 'Three swords piercing a heart; cloud and rain behind.'
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
    description: 'The effigy of a knight in the attitude of prayer, at full length upon his tomb.'
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
    description: 'A prostrate figure, pierced by all the swords belonging to the card.'
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
    description: 'A hand issuing from a cloud grasps a stout wand or club.'
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
    description: 'A man oppressed by the weight of the ten staves which he is carrying.'
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
      'The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne.'
  }
];
