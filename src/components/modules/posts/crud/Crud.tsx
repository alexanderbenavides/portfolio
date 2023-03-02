import { PostList } from "../PostsList";
import './Crud.scss';
import { Input, Button } from "../../../shared/form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../../../redux/actions";
import { PostModel } from "../../../../models/components/modules";
const formDataDefault = { title: '', content: '', img: '', id: '', class: ''};
export function PostCrud() {
  const dispacth = useDispatch();
  const dataToEdit:PostModel.PostData  = useSelector(({data}: any) => data.dataToEdit);
  const [formData, setFormData] = useState(formDataDefault);

  useEffect(() => {
    if (dataToEdit.title) {
      setFormData(dataToEdit);
    }
  }, [dataToEdit]);


  const handleInput = (value: string, type: 'title' | 'content' | 'img') => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  }

  const submitForm = (e: any) => {
    e.preventDefault();
    if (checkImage(formData.img)) {
      setFormData(formDataDefault);    
      dispacth(postAction({...formData, id: dataToEdit.id ? dataToEdit.id : Date.now().toString()}, dataToEdit.id ? 'UPDATE_POST' : 'SAVE_POST'));
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
        <h3>Create a post</h3>
        <form onSubmit={submitForm}>
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
      <PostList />
    </section>
  );
  }
  
  