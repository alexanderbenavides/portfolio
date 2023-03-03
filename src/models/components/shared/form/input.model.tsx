import { PostModel } from "../../modules";

export namespace InputModel {
    export interface Props {
        id: string;
        label: string;
        onInput?: Function;
        autocomplete?: AutoComplete;
        isTextArea?: boolean;
        value?: string;
    }

    export interface AutoComplete {
        templateFilter: 'title';
        templateRedirect: 'id';
        data: PostModel.JsonData[]
    }
}