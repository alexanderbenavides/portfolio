import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PostModel } from "../../../../models/components/modules";
import { Input } from "../../form";
import './Header.scss';
export function Header() {
  const posts: PostModel.PostData[] = useSelector(({data}: any) => data.posts);
  const activeClassName = "underline";
  
  const submitForm = (evt?: any) => {
    evt?.preventDefault();
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img src="https://cdn.pixabay.com/photo/2017/01/12/17/11/post-it-1975179_1280.png" alt="Logo" loading="lazy"/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  About
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="posts">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <form className="form" onSubmit={submitForm}>
          <Input 
            id="user"
            label="Search Post"
            value={undefined}
            autocomplete={
              {
                templateFilter: 'title',
                templateRedirect: 'id',
                data: posts
              }
            }
          />
      </form>
    </header>
  );
}

