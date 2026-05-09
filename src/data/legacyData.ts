export interface LegacyCardData {
  id: number;
  title: string;
  bg: string;
  text: string;
  description: string[];
  image: string;
  rotate: number;
}

export const legacyCards: LegacyCardData[] = [
  {
    id: 1,
    title: "Pioneers",
    bg: "bg-black",
    text: "text-white",
    description: [
      "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    rotate: 4,
  },
  {
    id: 2,
    title: "Award Winning",
    bg: "bg-mint",
    text: "text-gray-900",
    description: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
    rotate: 8,
  },
  {
    id: 3,
    title: "Speed",
    bg: "bg-white",
    text: "text-gray-900",
    description: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    ],
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
    rotate: 12,
  },
];
