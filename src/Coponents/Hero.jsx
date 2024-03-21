import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-116px)] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to ByteBlaze</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center gap-5">
            <Link to="/blogs">
              <button className="btn btn-outline btn-primary">
                Read Blogs
              </button>
            </Link>
            <Link to="/bookmarks">
              <button className="btn btn-outline btn-secondary">
                Bookmarks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
