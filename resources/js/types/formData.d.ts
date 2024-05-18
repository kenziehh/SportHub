export interface NewsForm {
    title: string;
    content: string;
    author: string;
    category: string;
    image_url: File | null;
    // release_date: string;
}

export interface AthleteForm {
    name: string;
    image_url: File | null;
    team_id: number;
    country: string;
    sport_category: string;
}
