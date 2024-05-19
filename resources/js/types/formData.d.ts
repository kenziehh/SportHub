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

export interface TeamForm {
    name: string;
    team_logo: File | null;
    country: string;
    sport_category: string;
    station: string;
}
