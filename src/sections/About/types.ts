export type Thechnologie = {
    id: number;
    code: string;
}

export interface AboutProps {
    technologies?: Array<Thechnologie>
}