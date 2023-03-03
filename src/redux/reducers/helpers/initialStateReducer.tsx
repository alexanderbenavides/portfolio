import { PostModel } from "../../../models/components/modules";
import { formatDate } from "../../../utils";

export const postsData: PostModel.JsonData[] = [];
export const postData: PostModel.JsonData = {
    title: '',
    content: '',
    img: '',
    class: '',
    id: '',
    createdAt: formatDate(new Date())
};
export const initialStatePosts = {
    posts: postsData,
    post: postData,
    postFormData: postData
}