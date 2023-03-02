import { PostModel } from "../../models/components/modules"
export interface Type {
    value: 'DELETE_POST' | 'EDIT_POST' | 'SAVE_POST' | 'READ_POST' | 'UPDATE_POST' | 'READ_POSTS' | 'SEARCH_POST';
};
export const actionsType = {
    DELETE_POST: 'DELETE_POST',
    EDIT_POST: 'EDIT_POST',
    SAVE_POST: 'SAVE_POST',
    READ_POST: 'READ_POST',
    SEARCH_POST: 'SEARCH_POST',
    UPDATE_POST: 'UPDATE_POST',
    READ_POSTS: 'READ_POSTS',
}

export const postAction = (payload: PostModel.PostData | PostModel.PostData[], type: Type['value']) => {
    return {
        payload,
        type: actionsType[type]
    }
}