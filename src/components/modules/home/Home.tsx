import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/form';
import { PostsList } from '../posts/list/PostsList';
import './Home.scss';
const { data } = require('../../../utils/lorem-data.json');

export function Home() {
  const navigate = useNavigate();
  
  const goToPosts = () => {
    navigate('/posts');
  }

  return (
    <div className='home-container'>
      <section className='home-content'>
        <article>
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/45/man-311326_1280.png" alt="Developer" loading="lazy"/>
        </article>
        <article>
          <div>
            <h3 className='intro mb-16'>I am</h3>
            <h1 className='fullname'>ALEXANDER BENAVIDES</h1>
            <p className='justify'>
              {data}
            </p>
          </div>
          <div>
            <Button ariaLabel="" type="submit" text="See posts" onClick={goToPosts}/>
          </div>
        </article>
        <article>
         <hr />
          <p className='p-16 text-center'>Follow me on YouTube</p>
          <iframe
            src='https://www.youtube.com/embed/zbFvJML8PS4'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </article>
        <article className='recent-post'>
         <hr />
         <p className='p-16 text-center'>My most recent posts</p>
         <PostsList hideActionIcons/>  
        </article>
      </section>
    </div>
  );
  }
  
  