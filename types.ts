export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface MemberTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ClubEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'match' | 'gathering' | 'special';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}