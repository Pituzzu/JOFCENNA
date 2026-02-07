import { ClubEvent, MemberTier, NewsItem } from "./types";

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "TRASFERTA A TORINO: JUVE VS INTER",
    excerpt: "Stiamo organizzando il pullman per il Derby d'Italia. Prenotazioni aperte fino al 20 del mese.",
    date: "25 OTT 2023",
    imageUrl: "https://picsum.photos/seed/juve1/800/600",
    category: "TRASFERTE"
  },
  {
    id: 2,
    title: "CENA SOCIALE DI NATALE",
    excerpt: "Unisciti a noi per la consueta cena di fine anno presso il Ristorante Il Mulino. Ospiti speciali e lotteria.",
    date: "12 DIC 2023",
    imageUrl: "https://picsum.photos/seed/dinner/800/600",
    category: "EVENTI"
  },
  {
    id: 3,
    title: "CAMPAGNA TESSERAMENTO 2023/24",
    excerpt: "Sono arrivate le nuove member card e i gadget ufficiali. Passa in sede per ritirare il tuo kit.",
    date: "01 SET 2023",
    imageUrl: "https://picsum.photos/seed/kit/800/600",
    category: "OFFICIAL CLUB"
  }
];

export const MEMBER_TIERS: MemberTier[] = [
  {
    name: "J1897 MEMBER",
    price: "€180",
    features: [
      "Welcome Pack Esclusivo J1897",
      "Accesso prioritario biglietteria",
      "Sconto 10% Store Ufficiale",
      "Eventi dedicati con Leggende",
      "Tessera Virtuale Fan Club Enna"
    ]
  },
  {
    name: "BLACK & WHITE MEMBER",
    price: "€65",
    features: [
      "Welcome Pack Black&White",
      "Prelazione biglietti home match",
      "Accesso eventi Club Enna",
      "Contest esclusivi",
      "Partecipazione trasferte organizzate"
    ],
    recommended: true
  },
  {
    name: "JUNIOR MEMBER",
    price: "€40",
    features: [
      "Per under 16",
      "Welcome Pack Junior",
      "Attività dedicate ai piccoli",
      "Sconti su scuola calcio estiva",
      "Gadget a sorpresa"
    ]
  }
];

export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    id: 1,
    title: "Juventus - Napoli",
    date: "08 Dicembre, 20:45",
    location: "Allianz Stadium / Visione in Sede",
    type: "match"
  },
  {
    id: 2,
    title: "Inaugurazione Nuova Sede",
    date: "15 Gennaio, 18:00",
    location: "Via Roma 117/119, Enna",
    type: "special"
  }
];

export const GALLERY_IMAGES = [
  "http://palestralc.altervista.org/img/1.jpeg",
  "http://palestralc.altervista.org/img/2.jpeg",
  "http://palestralc.altervista.org/img/3.jpeg",
  "http://palestralc.altervista.org/img/4.jpeg",
  "http://palestralc.altervista.org/img/5.jpeg",
  "http://palestralc.altervista.org/img/6.jpeg"
];