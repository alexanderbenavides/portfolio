import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/form';
import './Home.scss';
export function Home() {
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate('/posts');
  }

  return (
    <div className='home-container'>
      <section>
        <article>
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/45/man-311326_1280.png" alt="Developer" loading="lazy"/>
        </article>
        <article>
          <div>
            <p>I am</p>
            <h1>ALEXANDER BENAVIDES</h1>
            <p className='justify'>
              Software Engineer and Frontend developer with 4 years of experience developing web applications using Html, CSS, JavaScript, 
              TypeScript, React.js, Vue.js, Angular 2 +, Web components, Progressive web apps and mocrifrontends. Strong experience with frontend 
              mostly with angular and some experience with backend using LAMP stack: Linux, Apache, MYSQL and PHP. 
              I have worked for startups and consultants. I consider myself as a technology and learning enthusiast, 
              and able to work with a diverse and agile team. In love with JavaScript and its front end frameworks and libraries.
            </p>
          </div>
          <div>
            <Button ariaLabel="" type="submit" text="Posts" onClick={goToPosts}/>
          </div>
        </article>
      </section>
      <section className='media'>
        <iframe
          src={`https://www.youtube.com/embed/zbFvJML8PS4`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </section>
    </div>
  );
  }
  
  