export interface DefaultCardData {
  title: string;
  code: string;
  img: React.ReactNode;
}

export interface CardData extends DefaultCardData {
  subtitle: string;
}
