export interface INews {
    id: number;
    titulo: string;
    description: string;
    date: number | string;
    premium: boolean;
    image: string;
    descriptionCurto?: string;
  }