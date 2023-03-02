export namespace PostModel {
    export interface JsonData {
        title: string;
        content: string;
        img: string;
        class: string;
        id: string;
        createdAt: string;
    }

    export interface Props {
        hideActionIcons?: boolean;
    }
}