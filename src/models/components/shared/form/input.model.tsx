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
        templateFilter: string;
        templateRedirect: string;
        data: any[]
    }
}