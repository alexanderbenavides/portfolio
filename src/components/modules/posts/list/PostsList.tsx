import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostModel } from "../../../../models/components/modules";
import { ReducerModel } from "../../../../models/redux";
import { postAction } from "../../../../redux/actions";
import { Utils } from "../../../../utils";
import { Button, Icon } from "../../../shared/form";
import './PostsList.scss';
export function PostsList(props: PostModel.Props) {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const posts: PostModel.JsonData[] = useSelector(({data}: ReducerModel.Selector) => data.posts);  

  useEffect(() => {
    const items: PostModel.JsonData[] = JSON.parse(localStorage.getItem(Utils.POSTS_STORAGE_KEY) || '[]');    
    if (items.length > 0) {
      dispacth(postAction(items, 'READ_POSTS'));
    }
  }, [dispacth]);

  const seeDetails = (data: PostModel.JsonData) => {
    console.log('raaaaaaaaaaa');
    
    if (props.hideActionIcons) {
      navigate(`posts/${data.id}`);
    } else {
      dispacth(postAction(data, 'READ_POST'));
    }
  }

  const handleRemove = (e: Event, data: PostModel.JsonData) => {
    e.stopPropagation();
    dispacth(postAction(data, 'DELETE_POST'));
  }

  const handleEdit = (e: Event, data: PostModel.JsonData) => {
    e.stopPropagation();
    dispacth(postAction(data, 'EDIT_POST'));
  }

  const goToPosts = () => {
    navigate('/posts');
  }

    return (
      <section className="posts">
        <article>
          <h3>Posts</h3>
          <ul className= {posts.length > 0 ? 'mh-400': ''}>
            {
              posts.map((data, index) => (
                <li 
                  key={'post' + index.toString()}
                  className={props.hideActionIcons ? '' : data.class}
                  onClick={() => seeDetails(data)}
                >
                  <Icon 
                    name="fa-sharp fa-regular fa-circle" 
                  />
                  {data.title}
                  {
                    !props.hideActionIcons && 
                    <div className="flex-end">
                      <Icon 
                       name="fa-solid fa-trash"
                       color="#f00"
                       onClick={(e: Event)=> handleRemove(e, data)} 
                      />
                      <Icon 
                       name="fa-solid fa-pencil"
                       color="#fbb85f"
                       onClick={(e: Event)=> handleEdit(e, data)} 
                      />
                    </div> 
                  }
                 
               </li>
              ))
            }
          </ul>
          {
            props.hideActionIcons && 
            <div className="place-center">
              <Button ariaLabel="" type="submit" text={posts.length > 0 ? 'See all posts' : 'Create a post'} onClick={goToPosts}/>
            </div>

          }

        </article>
      </section>
    );
  }
  
  