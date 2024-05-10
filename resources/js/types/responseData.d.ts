export interface NewsResponse {
    id: number;
    title: string;
    content: string;
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
