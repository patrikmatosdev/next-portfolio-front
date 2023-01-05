export type Thechnologie = {
    id: number;
    code: string;
    percent: number;
}

export interface AboutProps {
    technologies?: Array<Thechnologie>
}