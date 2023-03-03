import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostModel } from "../../../../models/components/modules";
import { ReducerModel } from "../../../../models/redux";
import { postAction } from "../../../../redux/actions";
import { Utils } from "../../../../utils";
import './Post.scss';
export function Post() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const postData : PostModel.JsonData = useSelector(({data}: ReducerModel.Selector) => data.post);
  useEffect(() => {
    const items: PostModel.JsonData[] = JSON.parse(localStorage.getItem(Utils.POSTS_STORAGE_KEY) || '[]');    
    if (items.length > 0) {
      const item = items.find(obj => obj.id === id);      
      if (item) {
        dispacth(postAction(item, 'SEARCH_POST'));
      };
    }
  }, [dispacth, id]);

  return (
    <section className="post-container">
      {
        postData.title && 
        <article>
          <h3> {postData.title} </h3>
          <img src={postData.img} alt="post" loading="lazy"/>
          <p className="mt-16 content">{postData.content}</p>
          <p className="mt-16 text-center">{postData.createdAt}</p>
        </article>
      }
    </section>
  );

}
  
  