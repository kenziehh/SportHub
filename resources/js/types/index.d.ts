import {
    AthleteResponse,
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
    match: {
        data: MatchResponse[];
        meta: Meta;
    };
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
};
