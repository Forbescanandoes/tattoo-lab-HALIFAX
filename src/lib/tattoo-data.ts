export interface ArtistWork {
  title: string;
  size: string;
  hours: number;
}

export interface Artist {
  id: string;
  name: string;
  full: string;
  photo: string;
  chair: string;
  specimen: string;
  spec_letter: string;
  years: number;
  needles: string;
  rate: number;
  minHours: number;
  minCharge: number;
  status: string;
  bio: string;
  works: ArtistWork[];
}

export const ARTISTS: Artist[] = [
  {
    id: "adrienne",
    name: "ADRIENNE",
    full: "ADRIENNE GRAY",
    photo: "/artists/adrienne-gray.webp",
    chair: "01",
    specimen: "A · LINEWORK",
    spec_letter: "A",
    years: 7,
    needles: "3RL / 9RL",
    rate: 140,
    minHours: 1,
    minCharge: 140,
    status: "ACCEPTING BOOKINGS",
    bio: "Single needle linework, geometric scaffolds, and the kind of micro script that only reads clean at a hand's distance. Ornamental motifs pulled tight against the skin's natural lines.",
    works: [
      { title: "FIDUCIAL · 03", size: '4" × 4"', hours: 4 },
      { title: "ORNAMENT BAND", size: "forearm", hours: 6 },
      { title: "SCRIPT · LATIN", size: "sternum", hours: 3 },
    ],
  },
  {
    id: "prerna",
    name: "PRERNA",
    full: "PRERNA PERU",
    photo: "/artists/prerna-peru.webp",
    chair: "02",
    specimen: "B · BLACK-AND-GREY",
    spec_letter: "B",
    years: 12,
    needles: "MAG / 11RL",
    rate: 180,
    minHours: 2,
    minCharge: 360,
    status: "BY CONSULT",
    bio: "Twelve years of stipple, washes, and architectural realism. Specialises in large scale anatomical studies. Books out two months ahead; consults required.",
    works: [
      { title: "ATLAS · UPPER ARM", size: "half-sleeve", hours: 14 },
      { title: "MOTH STUDY", size: "thigh", hours: 9 },
      { title: "TIDE LINE", size: "back panel", hours: 22 },
    ],
  },
  {
    id: "vivek",
    name: "VIVEK",
    full: "VIVEK DIVINE",
    photo: "/artists/vivek-divine.webp",
    chair: "03",
    specimen: "C · TRADITIONAL",
    spec_letter: "C",
    years: 9,
    needles: "9RL / 7M",
    rate: 150,
    minHours: 1,
    minCharge: 150,
    status: "ACCEPTING BOOKINGS",
    bio: "American traditional, refracted. Bold lines, saturated fills, but a palette that's been gently moved off axis — burnt iodine, oxidised green, ink black.",
    works: [
      { title: "DAGGER · CLASSIC", size: '5" × 2"', hours: 3 },
      { title: "ROSE · IODINE", size: "forearm", hours: 4 },
      { title: "SWALLOW PAIR", size: "chest", hours: 5 },
    ],
  },
];

export interface Work {
  seed: number;
  img?: string;
  artist: string;
  duration: string;
  needle: string;
  specimenNo: number;
}

export const BLACKGREY_WORKS: Work[] = [
  { seed: 0, img: "/works/tiger-realism.png",    artist: "JUNI A.",   duration: "11H 30M", needle: "MAG",   specimenNo: 7  },
  { seed: 1, img: "/works/wolf-portrait.png",    artist: "JUNI A.",   duration: "8H 20M",  needle: "MAG",   specimenNo: 12 },
  { seed: 2, img: "/works/angel-warrior.png",    artist: "JUNI A.",   duration: "14H 10M", needle: "11RL",  specimenNo: 18 },
  { seed: 4,                                     artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 20 },
  { seed: 3, img: "/works/deer-memorial.png",    artist: "JUNI A.",   duration: "9H 45M",  needle: "MAG",   specimenNo: 24 },
  { seed: 4, img: "/works/lion-geometric.png",   artist: "JUNI A.",   duration: "12H 50M", needle: "MAG",   specimenNo: 29 },
  { seed: 5, img: "/works/samurai-oni.png",      artist: "JUNI A.",   duration: "7H 10M",  needle: "MAG",   specimenNo: 33 },
  { seed: 9,                                     artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 36 },
  { seed: 6, img: "/works/ghostface.png",        artist: "JUNI A.",   duration: "4H 30M",  needle: "11RL",  specimenNo: 38 },
  { seed: 7, img: "/works/hawk-arabic.png",      artist: "JUNI A.",   duration: "4H 15M",  needle: "11RL",  specimenNo: 42 },
  { seed: 0, img: "/works/wizard-keyboard.png",  artist: "JUNI A.",   duration: "5H 40M",  needle: "MAG",   specimenNo: 47 },
  { seed: 1, img: "/works/couple-woods.png",     artist: "JUNI A.",   duration: "6H 20M",  needle: "MAG",   specimenNo: 53 },
  { seed: 11,                                    artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 56 },
  { seed: 2, img: "/works/anchor-forearm.png",   artist: "JUNI A.",   duration: "3H 30M",  needle: "MAG",   specimenNo: 58 },
  { seed: 3, img: "/works/knight-arrow.png",     artist: "JUNI A.",   duration: "3H 50M",  needle: "MAG",   specimenNo: 64 },
  { seed: 4, img: "/works/fairy-moon.png",       artist: "JUNI A.",   duration: "3H 05M",  needle: "3RL",   specimenNo: 69 },
  { seed: 5, img: "/works/shark-forearm.png",    artist: "JUNI A.",   duration: "2H 20M",  needle: "3RL",   specimenNo: 73 },
  { seed: 7,                                     artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 76 },
  { seed: 6, img: "/works/bolt-10mm.png",        artist: "JUNI A.",   duration: "2H 50M",  needle: "9RL",   specimenNo: 78 },
  { seed: 7, img: "/works/you-can-script.png",   artist: "MILO H.",   duration: "1H 10M",  needle: "3RL",   specimenNo: 84 },
  { seed: 0, img: "/works/wine-couples.png",     artist: "MILO H.",   duration: "2H 40M",  needle: "3RL",   specimenNo: 89 },
];

export const COLOR_WORKS: Work[] = [
  { seed: 0, img: "/works/kobe.png",            artist: "REK O.",    duration: "10H 30M", needle: "MAG",   specimenNo: 6  },
  { seed: 1, img: "/works/mermaid-lantern.png", artist: "REK O.",    duration: "9H 20M",  needle: "9RL",   specimenNo: 14 },
  { seed: 5,                                    artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 17 },
  { seed: 2, img: "/works/anubis.png",          artist: "REK O.",    duration: "7H 45M",  needle: "9RL",   specimenNo: 21 },
  { seed: 3, img: "/works/anchor-crown.png",    artist: "REK O.",    duration: "6H 15M",  needle: "9RL",   specimenNo: 27 },
  { seed: 4, img: "/works/screaming-hand.png",  artist: "REK O.",    duration: "3H 40M",  needle: "7M",    specimenNo: 35 },
  { seed: 10,                                   artist: "SCHEMATIC", duration: "—",       needle: "DRAFT", specimenNo: 39 },
  { seed: 5, img: "/works/sunflower.png",       artist: "REK O.",    duration: "2H 50M",  needle: "7M",    specimenNo: 41 },
  { seed: 6, img: "/works/chili-molecule.png",  artist: "REK O.",    duration: "2H 20M",  needle: "3RL",   specimenNo: 48 },
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  cat: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    cat: "PRICING",
    items: [
      {
        q: "How does your pricing work?",
        a: "We charge by our time, not by piece. Every design is unique, and each artist has their own hourly rate based on style, speed, and detail — so your final cost reflects the actual time spent creating your piece. Pricing is completely transparent with no hidden fees; you'll always know what you're paying for before your session begins.",
      },
      {
        q: "What does a small / medium / large tattoo cost?",
        a: "The tiers on our home page are examples to give you a general idea of tattoo costs in Halifax — not exact quotes. Small pieces (1–2 hours) start around $150. Medium pieces (3–5 hours) start around $500. Large work (6+ hours; sleeves, back pieces) starts around $1,000. Your final price depends on complexity, placement, and the artist's expertise.",
      },
      {
        q: "How do I get an exact quote?",
        a: "Submit a brief on the Book page with a description, reference images, placement, and approximate size. We reply within 48 hours with a quoted session length, the artist's hourly rate, and an estimated total.",
      },
    ],
  },
  {
    cat: "BEFORE",
    items: [
      {
        q: "How do I book?",
        a: "Submit a brief on the Book page. We reply within 48 hours with a quote, session length, and an artist match if you didn't pick one. A small nonrefundable deposit secures the slot and is applied to your final balance.",
      },
      {
        q: "Do you take walk ins?",
        a: "Walk ins are accepted Saturday afternoons, subject to chair availability. First come, first inked. Anything custom or larger than a small piece needs a consult first.",
      },
      {
        q: "What if I'm under 18?",
        a: "We don't tattoo minors. No exceptions, even with parental consent.",
      },
    ],
  },
  {
    cat: "DURING",
    items: [
      {
        q: "How long is a session?",
        a: "Small pieces fit in 1–2 hours. Medium pieces run 3–5. Large work runs 6+ hours and is usually split across multiple sessions; we'll tell you up front.",
      },
      {
        q: "Can I bring a friend?",
        a: "One guest is fine. We have a small lounge. More than one, please ask first.",
      },
      {
        q: "Should I eat beforehand?",
        a: "Yes. A real meal, two hours before. Bring water and a snack for breaks. Don't show up hung over — we'll reschedule.",
      },
    ],
  },
  {
    cat: "AFTER",
    items: [
      {
        q: "How do I heal it?",
        a: "Full aftercare sheet is emailed after your session and a printed copy goes home with your aftercare kit. Two weeks of fragrance free moisturiser, no soaking, no direct sun, no gym for five days.",
      },
      {
        q: "Do you do touch ups?",
        a: "Free touch up within 6 months on small and medium pieces, and within 1 year on large work — on the original tattoo. Beyond that, your artist's hourly rate applies with a one hour minimum.",
      },
      {
        q: "What about cover ups or rework?",
        a: "We do them. Bring photos of the existing piece, in good light, when you submit your brief. Some pieces are easier covered than others; we'll be honest.",
      },
    ],
  },
];
