declare interface StepsResponse {
    simplified: string;
    steps: Steps[];
    result: string;
}

declare interface Steps {
    number: number;
    text: string;
    math: string;
};