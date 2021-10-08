import "./styles.css";
// fa is the reference to the font-awesome library
import { FaRegHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { ImCompass2 } from "react-icons/im";

export default function App() {
  return (
    <div className="App">
      <nav>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="brand"
        />
        <input style={{ textAlign: "center" }} placeholder="Search" />
        <div id="nav-icons">
          <AiFillHome className="nav-items" />
          <RiMessengerLine className="nav-items" />
          <ImCompass2 className="nav-items" />
          <FaRegHeart className="nav-items" />
          <img
            className="nav-items"
            style={{ borderRadius: "100%", width: "22px", height: "22px" }}
            src="https://source.unsplash.com/random"
            alt="story"
          />
        </div>
      </nav>

      <div className="container">
        <div id="doom-scrolling">
          <section id="stories">
            <div className="story">
              <img
                style={{
                  outline: "4px double #c45847",
                  borderRadius: "100%",
                  width: "56px",
                  height: "56px"
                }}
                src="https://source.unsplash.com/random"
                alt="story"
              />
              <p>Name</p>
            </div>
          </section>
          <section className="posts">
            <div className="post">
              <div className="post-header">
                <div className="user">
                  <img
                    style={{
                      borderRadius: "100%",
                      width: "32px",
                      height: "32px"
                    }}
                    src="https://source.unsplash.com/random"
                    alt="story"
                  />
                  <div className="username">username</div>
                </div>
                <div className="options">
                  <strong>...</strong>
                </div>
              </div>
              <img
                style={{ width: "100%", maxHeight: "35rem" }}
                src="https://source.unsplash.com/random"
                alt="post"
              />
            </div>
          </section>
        </div>

        <aside id="container-fix">
          <div id="switch-profile">
            <img
              style={{ borderRadius: "100%", width: "56px", height: "56px" }}
              src="https://source.unsplash.com/random"
              alt="story"
            />
            <div id="current-user">
              <p>username</p>
              <p>Name</p>
            </div>
            <p>
              <strong style={{ color: "#0095f6" }}>Switch</strong>
            </p>
          </div>
          <div id="suggestion">
            <h4 className="suggestion-heading">
              <p>Suggestions for You</p>
              <strong>See All</strong>
            </h4>
            <div className="suggest-profile">
              <img
                style={{ borderRadius: "100%", width: "32px", height: "32px" }}
                src="https://source.unsplash.com/random"
                alt="story"
              />
              <div id="current-user">
                <p>username</p>
                <p>Name</p>
              </div>
              <p>
                <small>
                  {" "}
                  <strong style={{ color: "#0095f6" }}>Follow</strong>
                </small>
              </p>
            </div>
            <div className="suggest-profile">
              <img
                style={{ borderRadius: "100%", width: "32px", height: "32px" }}
                src="https://source.unsplash.com/random"
                alt="story"
              />
              <div id="current-user">
                <p>username</p>
                <p>Name</p>
              </div>
              <p>
                <small>
                  {" "}
                  <strong style={{ color: "#0095f6" }}>Follow</strong>
                </small>
              </p>
            </div>
          </div>

          <small style={{ color: "gray" }}>
            About Help Press API Jobs Privacy Terms Locations Top Accounts
            Hashtags Language English
          </small>
          <footer>
            <small>© 2021 INSTAGRAM FROM FACEBOOK</small>
          </footer>
        </aside>
      </div>
    </div>
  );
}
