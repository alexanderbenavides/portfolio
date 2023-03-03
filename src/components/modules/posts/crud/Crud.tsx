import { PostContent } from '../content/PostContent';
import './Crud.scss';
import { Input, Button } from "../../../shared/form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../../../redux/actions";
import { PostModel } from "../../../../models/components/modules";
import { formatDate } from "../../../../utils";
import { ReducerModel } from '../../../../models/redux';
const formDataDefault = { title: '', content: '', img: '', id: '', class: ''};
export function PostCrud() {
  const dispacth = useDispatch();
  const postFormData: PostModel.JsonData  = useSelector(({data}: ReducerModel.Selector) => data.postFormData);
  const [formData, setFormData] = useState(formDataDefault);

  useEffect(() => {
    if (postFormData.title) {
      setFormData(postFormData);
    }
  }, [postFormData]);


  const handleInput = (value: string, type: 'title' | 'content' | 'img') => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  }

  const submitForm = (e: Event) => {
    e.preventDefault();
    if (checkImage(formData.img)) {
      setFormData(formDataDefault);    
      dispacth(postAction(
        {
          ...formData,
          id: postFormData.id ? postFormData.id : Date.now().toString(),
          createdAt: formatDate(new Date()),
        },
          postFormData.id ? 'UPDATE_FORM_POST' : 'SAVE_POST')
      );
    } else {
      alert('Enter a valid img url');
    }
  
  }

  const checkImage = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  return (
    <section className="crud-container">
      <article className="form">
        <h3>{postFormData.id ? 'Edit Post' : 'Create post'}</h3>
        <form onSubmit={(e) => submitForm(e.nativeEvent)}>
          <article className="form-container">
            <div className="form-control">
              <Input 
                id="title"
                label="Title"
                value={formData.title}
                onInput={(e: string) => handleInput(e, 'title')}
              />
            </div>
            <div className="form-control">
              <Input 
                id="content"
                label="Content"
                value={formData.content}
                isTextArea onInput={(e: string) => handleInput(e, 'content')}
              />
            </div>
            <div className="form-control">
              <Input
                id="url"
                label="Img Url"
                value={formData.img}
                onInput={(e: string) => handleInput(e, 'img')}
              />
            </div>
            <div className="form-control button-center">
              <Button
                ariaLabel="save Post"
                text="Save Post" type="submit"
                disabled={!formData.content || !formData.title || !formData.img}
              />
            </div>
          </article>
        </form>
      </article>
      <PostContent />
    </section>
  );
}
  
  