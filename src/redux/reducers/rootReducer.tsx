import { PostModel } from "../../models/components/modules";
import { actionsType } from "../actions";
import { deleteReducer, findReducer, saveReducer, updateReducer } from "./helpers/helpersReducer";
import { initialStatePosts, postData } from "./helpers/initialStateReducer";
export const rootReducer = (state = initialStatePosts, action: any) => {
    switch (action.type) {
        case actionsType.SAVE_POST:
            return saveReducer(state, action);
        case actionsType.UPDATE_FORM_POST:
            return updateReducer(state, action);
        case actionsType.DELETE_POST:            
            return deleteReducer(state, action);
        case actionsType.READ_POSTS:
            const post = (action.payload as PostModel.JsonData[]).find(post => post.class === 'selected');        
            return {
                ...state,
                posts: action.payload,
                post: post ? post : postData
            };
        case actionsType.SEARCH_POST:
            return {
                ...state,
                post: action.payload
            };
        case actionsType.READ_POST:
            return findReducer(action, 'post', state);
        case actionsType.EDIT_POST:  
            return findReducer(action, 'postFormData', state);
        default:            
            return state;
    }
}



