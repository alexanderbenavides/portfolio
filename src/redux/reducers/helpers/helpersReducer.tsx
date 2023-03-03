import { PostModel } from "../../../models/components/modules";
import { ReducerModel } from "../../../models/redux";
import { Utils } from "../../../utils";
import { initialStatePosts, postData } from "./initialStateReducer";

export const  saveReducer = (state = initialStatePosts, action: ReducerModel.PostAction) => {
    const posts = [...state.posts, action.payload];
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        postFormData: postData
    }
}

export const  updateReducer = (state = initialStatePosts, action: ReducerModel.PostAction) => {
    const updatedPosts = state.posts.map(obj => {
        if (obj.id === action.payload.id) obj = action.payload;
        return obj;
    });
    const selectedPost = state.post.id === action.payload.id;
    saveToLocalStorage(updatedPosts);
    return {
        ...state,
        posts: [...updatedPosts],
        postFormData: postData,
        post: selectedPost ? action.payload : postData
    }
}

export const deleteReducer = (state = initialStatePosts, action: ReducerModel.PostAction) => {
    const posts = state.posts.filter(post => post.id !== action.payload.id);
    const findPost = state.post.id === action.payload.id;
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        post: findPost ? postData : state.post
    }
}

export const findReducer = (action: ReducerModel.PostAction, obj: 'post' | 'postFormData', state = initialStatePosts) => {
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

const saveToLocalStorage = (posts: PostModel.JsonData[]) => {
    localStorage.setItem(Utils.POSTS_STORAGE_KEY, JSON.stringify(posts));
}