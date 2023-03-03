import { PostModel } from "../components/modules";

export namespace ReducerModel {
    export interface PostAction {
        type: string;
        payload?: PostModel.JsonData | any;
    }

    export interface Selector {
        data: ReducerSelector,
    }

    export interface ReducerSelector {
        posts: PostModel.JsonData[],
        post: PostModel.JsonData,
        postFormData: PostModel.JsonData
    }
}