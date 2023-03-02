import { PostModel } from "../../models/components/modules";
import { Utils } from "../../utils";
import { actionsType } from "../actions";
const postsData: PostModel.PostData[] = [];
const postData: PostModel.PostData = {
    title: '',
    content: '',
    img: '',
    class: '',
    id: ''
};
const initialStatePosts = {
    posts: postsData,
    post: postData,
    dataToEdit: postData
}

export const rootReducer = (state = initialStatePosts, action: any) => {

    switch (action.type) {
        case actionsType.SAVE_POST:
            return saveReducer(state, action);
        case actionsType.UPDATE_POST:
            return updateReducer(state, action);
        case actionsType.DELETE_POST:            
            return deleteReducer(state, action);
        case actionsType.READ_POSTS:
            const post = (action.payload as PostModel.PostData[]).find(post => post.class === 'selected');        
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
            return findReducer(action, 'dataToEdit', state);
        default:            
            return state;
    }
}

const  saveReducer = (state = initialStatePosts, action: any) => {
    const posts = [...state.posts, action.payload];
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        dataToEdit: postData
    }
}

const  updateReducer = (state = initialStatePosts, action: any) => {
    const updatedPosts = state.posts.map(obj => {
        if (obj.id === action.payload.id) obj = action.payload;
        return obj;
    });
    const selectedPost = state.post.id === action.payload.id;
    saveToLocalStorage(updatedPosts);
    return {
        ...state,
        posts: [...updatedPosts],
        dataToEdit: postData,
        post: selectedPost ? action.payload : postData
    }
}

const deleteReducer = (state = initialStatePosts, action: any) => {
    const posts = state.posts.filter(post => post.id !== action.payload.id);
    const findPost = state.post.id === action.payload.id;
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        post: findPost ? postData : state.post
    }
}

const findReducer = (action: any, obj: 'post' | 'dataToEdit', state = initialStatePosts) => {
    const posts = state.posts.map(({...post}) => {
        post.class = '';
        if (post.id === action.payload.id) post.class = 'selected';
        return post;
    })
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        [obj]: action.payload ? action.payload : postData
    }
} 

const saveToLocalStorage = (posts: PostModel.PostData[]) => {
    localStorage.setItem(Utils.POSTS_STORAGE_KEY, JSON.stringify(posts));
}



