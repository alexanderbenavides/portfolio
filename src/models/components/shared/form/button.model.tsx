export namespace ButtonModel {
    export interface Props {
        ariaLabel: string;
        type?: 'button' | 'submit' | 'reset';
        text: string;
        hasIcon?: boolean;
        disabled?: boolean;
        onClick?: Function;
    }
}