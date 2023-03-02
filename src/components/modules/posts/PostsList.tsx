import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostModel } from "../../../models/components/modules";
import { postAction } from "../../../redux/actions";
import { Utils } from "../../../utils";
import { Post } from "./post/Post";
import './PostList.scss';
export function PostList() {
  const dispacth = useDispatch();
  const posts: PostModel.PostData[] = useSelector(({data}: any) => data.posts);  

  useEffect(() => {
    const items: PostModel.PostData[] = JSON.parse(localStorage.getItem(Utils.POSTS_STORAGE_KEY) || '[]');    
    if (items.length > 0) {
      dispacth(postAction(items, 'READ_POSTS'));
    }
  }, [dispacth]);

  const seeDetails = (data: PostModel.PostData) => {
    dispacth(postAction(data, 'READ_POST'));
  }

  const handleRemove = (e: any, data: PostModel.PostData) => {
    e.stopPropagation();
    dispacth(postAction(data, 'DELETE_POST'));
  }

  const handleEdit = (e: any, data: PostModel.PostData) => {
    e.stopPropagation();
    dispacth(postAction(data, 'EDIT_POST'));
  }
    return (
      <section className="posts">
        <article>
          <h3>Posts</h3>
          <ul>
            {
              posts.map(data => (
                <li key={data.id} className={data.class} onClick={() => seeDetails(data)}>
                  <i className="fa-sharp fa-regular fa-circle"></i>
                  {data.title}
                  <div className="flex-end">
                    <i className="fa-solid fa-trash" onClick={(e)=> handleRemove(e, data)}></i>
                    <i className="fa-solid fa-pencil" onClick={(e)=> handleEdit(e, data)}></i>
                  </div>            
               </li>
              ))
            }
          </ul>
        </article>
        <article>
          <Post/>
        </article>
      </section>
    );
  }
  
  