import {
    AthleteResponse,
    HighlightResponse,
    MatchResponse,
    Meta,
    NewsResponse,
    PaginationLink,
    TeamResponse,
} from "./responseData";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    news: {
        data: NewsResponse[];
        meta: Meta;
    };
    newsData: {
        data: NewsResponse;
    };
    match: MatchResponse[];
    //     data: MatchResponse[];
    //     // meta: Meta;
    // };
    matchData: MatchResponse;
    teams: {
        data: TeamResponse[];
        meta: Meta;
    };
    teamData: {
        data: TeamResponse;
    };
    athletes: {
        data: AthleteResponse[];
        meta: Meta;
    };
    athleteData: {
        data: AthleteResponse;
    };
    highlight: {
        data: HighlightResponse[];
        meta: Meta;
    };
    pagination: {
        next_url: string;
        prev_url: string;
    };
};
