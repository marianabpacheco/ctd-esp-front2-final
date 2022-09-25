export type NewsCardProps = {
    image: string;
    title: string;
    date: number | string;
    shortDescription?: string;
    setModal: () => void;
}