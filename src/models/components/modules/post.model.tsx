export namespace PostModel {
    export interface PostData {
        title: string;
        content: string;
        img: string;
        class: string;
        id: string;
    }

    export function Post() {
        return {
            title:  '',
            content:  '',
            img:  '',
            class:  '',
            id:  ''
        }
    }
}