export interface NewsResponse {
    id: number;
    title: string;
    content: string;
    category: string;
    author: string;
    image_url: string;
    release_date: string;
}
export interface PaginationLink {
    active: boolean;
    label: string;
    url: string;
}
export interface Meta {
    links: PaginationLink[];
}
export interface MatchResponse {
    id: number;
    away_image: string;
    away_score: number;
    away_team: string;
    category: string;
    home_image: string;
    home_score: number;
    home_team: string;
    match_datetime: string;
    place: string;
}

export interface TeamResponse {
    id: number;
    name: string;
    team_logo: string;
    country: string;
    sport_category: string;
    station: string;
}

export interface AthleteResponse {
    id: number;
    name: string;
    image_url: string;
    team_id: number;
    country: string;
    sport_category: string;
}
