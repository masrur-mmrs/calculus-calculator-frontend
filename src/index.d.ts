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

declare interface AlgebraInputTex {
    equation1: string;
    equation2: string;
    equation3: string;
}