import { PostModel } from "../../models/components/modules";
import { formatDate, Utils } from "../../utils";
import { actionsType } from "../actions";
const postsData: PostModel.JsonData[] = [];
const postData: PostModel.JsonData = {
    title: '',
    content: '',
    img: '',
    class: '',
    id: '',
    createdAt: formatDate(new Date())
};
const initialStatePosts = {
    posts: postsData,
    post: postData,
    postFormData: postData
}

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

const  saveReducer = (state = initialStatePosts, action: any) => {
    const posts = [...state.posts, action.payload];
    saveToLocalStorage(posts);
    return {
        ...state,
        posts,
        postFormData: postData
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
        postFormData: postData,
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

const findReducer = (action: any, obj: 'post' | 'postFormData', state = initialStatePosts) => {
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



