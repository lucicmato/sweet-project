import { PriceCard, ServiceItem, TeamMember } from '@/app/types/types';

export const servicesData: ServiceItem[] = [
  {
    title: 'Izrada kolača',
    description:
      'Naša slastičarska radionica s ljubavlju izrađuje domaće kolače prema tradicionalnim receptima i modernim\n' +
      '            slatkim trendovima.',
    imageSrc: '/img/section-services/service2.png',
  }, {
    title: 'Najbolje torte',
    description:
      'Specijalizirani smo za izradu torti po narudžbi koje spajaju prepoznatljiv izgled i bogat okus.',
    imageSrc: '/img/section-services/service1.png',
  },
  {
    title: 'Deserti',
    description:
      'Specijalizirani smo za izradu domaćih deserata, a posebno naših princez krafni s laganim tijestom i bogatim, kremastim punjenjem.',
    imageSrc: '/img/section-services/service3.png',
  },
  {
    title: 'Zajedno planiramo meni',
    description:
      'Zajedno s vama planiramo desertni meni kako bismo svaki detalj prilagodili vašim željama i prigodi.',
    imageSrc: '/img/section-services/service4.png',
  },
  {
    title: 'Recepti',
    description:
      'Naši provjereni recepti donose savršen spoj tradicije i kreativnosti, idealni za pripremu ukusnih domaćih deserata.',
    imageSrc: '/img/section-services/service5.png',
  },
  {
    title: 'Kućna dostava',
    description:
      'Vaše slastice sigurno i pažljivo dostavljamo na željenu adresu. Brinemo da svaki desert stigne svjež i netaknut, spreman za posluživanje.',
    imageSrc: '/img/section-services/service6.png',
  },
];

export const priceCardsData: PriceCard[] = [
  {
    imageSrc: '/img/section-prices/price1.png',
    priceLabel: '€ XX /kg',
    category: 'Kolači',
    description:
      'Cijene sitnih kolača ovise o vrsti, sastojcima i kompleksnosti izrade. U nastavku donosimo okvirne cijene po kilogramu:',
    items: [
      'Klasični domaći kolači (medena pita, mađarica, bajadera, kokos kocke, rum kuglice...): XX € / kg',
      'Premium kolači s luksuznim sastojcima (pistacija, cheesecake varijante, dekorirani zalogaji): XX € / kg',
      'Specijalni kolači (bezglutenski, keto, veganski): XX € / kg',
    ],
    buttonColor: 'red',
  },
  {
    imageSrc: '/img/section-prices/price2.png',
    priceLabel: '€ XX',
    category: 'Torta',
    description:
      'Cijena torte ovisi o veličini, okusu, dekoraciji i posebnim zahtjevima. Svaka torta izrađuje se po narudžbi, uz dogovor s vama.',
    items: [
      'Klasične torte (čokoladne, voćne, kombinacije kreme i biskvita): XX € / kg',
      'Dekorirane torte s temom (rođendani, dječje torte, jednostavni fondant detalji): XX € / kg',
      'Premium i svečane torte (vjenčanja, slojevite torte, zahtjevnija dekoracija, fondant obloge): XX € / kg',
    ],
    buttonColor: 'blue',
  },
  {
    imageSrc: '/img/section-prices/price3.png',
    priceLabel: '€ XX',
    category: 'Deserti',
    description:
      'Naši deserti su prava mala remek-djela slatkog užitka! Svaki zalogaj donosi bogatstvo okusa, pažljivo odabranih sastojaka i domaću pripremu.',
    items: [
      'Kolači u čašici',
      'Tiramisu',
      'Panna cotta',
      'Princes krafne',
    ],
    buttonColor: 'yellow',
  },
  {
    imageSrc: '/img/section-prices/price4.png',
    priceLabel: '€ XX',
    category: 'Posebne narudžbe',
    description:
      'Za posebne narudžbe kreiramo slastice po vašoj želji – birate okuse, boje, oblike i dekoracije.',
    items: [],
    buttonColor: 'green',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Ime i prezime',
    description: 'Strastvena slastičarka koja s ljubavlju pretvara ideje u nezaboravne deserte.',
    imageSrc: '/img/section-team/team1.png',
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/p/Slatko-i-to%C4%8Dka-100077599387672/',
        icon: '/img/section-team/instagramicon.png',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/_slatko_i_.tocka_/',
        icon: '/img/section-team/facebookicon.png',
      },
    ],
  },
];




