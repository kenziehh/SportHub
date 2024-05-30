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

export interface MatchResponse {
    away_score: 1;
    away_team: string;
    away_team_logo: string;
    category: string;
    highlights: string[];
    home_score: number;
    home_team: string;
    home_team_logo: string;
    id: number;
    place: string;
    tournament_name: string;
    match_datetime: string;
}

export interface HighlightResponse {
    id: number;
    title: string;
    sport_match_id: number;
    description: string;
    video_url: string;
}
