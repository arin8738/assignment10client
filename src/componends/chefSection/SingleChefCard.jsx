
import React from "react";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const SingleChefCard = ({ d }) => {
  // console.log(d);
  return (
    <div>
      <div className="card w-96 my-4 bg-my-primary border-1 mx-auto">
        <figure>
          <img src={d.picture} alt="car!" />
          {/* <LazyLoadImage
          delayTime="600s"
                effect="blur"
                  alt={"hjh"}
                  // height= "300px"
                  src={d.picture} // use normal <img> attributes as props
                  // width= "300px"
                /> */}
        </figure>
        <div className="card-body bg-base-300">
          <h2 className="card-title">{d.name}</h2>
          <div>
            <p>Numbers of recipes: {d.recipes}</p>
            <p className="my-1">{d.experience} Years of experience</p>
            <p className="flex items-center">
              <p className="flex-grow-0 text-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e64242"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </p>
              <p
                style={{ bottom: "1px", marginLeft: "2px" }}
                className="relative"
              >
                {d.likes} Likes
              </p>
            </p>
          </div>
          <div className="card-actions justify-end ">
            <Link to={`/chef-details/${d.id}`}>
              <button className="btn glass btn-outline text-black hover:btn-accent">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;

