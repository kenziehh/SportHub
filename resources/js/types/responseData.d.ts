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
    // id: number;
    // home_team: string;
    // home_score: number;
    // home_team_logo: string;
    // away_team: string;
    // away_score: number;
    // away_team_logo: string;
    // place: string;
    // category: string;
    // tournament_name: string;
    // highlights: string[];
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
}
