import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipies from "./Recipies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../header/nav";

const ChefDetails = () => {
  const details = useLoaderData();

  const { id, name, picture, bio, likes, experience, recipes, recipesList } =
    details;

  //   console.log(details);
  const notify = (recipeName) =>
    toast(`${recipeName}  added to favorite!`, {
      closeButton: true, // enable close button
    });
  return (
    <div>
        <Nav></Nav>
      <div className="text-black ">
        <div
          
          className="md:px-32 h-full w-full py-24 px-4 box-border bg-base-300"
        >
          <div className="md:flex items-center justify-center">
            <div className="mr-9">
              <h2 className="text-6xl font-semibold my-5">{name}</h2>
              <div className="">
                <p className="md:w-80 mb-4">{bio}</p>
                <p className="text-my-primary">Recipes: {recipes}</p>
                <p className="my-4 text-my-primary">
                  {experience} Years of experience
                </p>
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
                    className="relative text-my-primary"
                  >
                    {likes} Likes
                  </p>
                </p>
                {/* <p className="text-my-primary">{likes} Likes</p> */}
              </div>
            </div>
            <div>
              <img className=""
                style={{
                  borderRadius: "10%",
                  height: "450px",
                  width: "600px",
                  margin: "10px 0",
                }}
                src={picture}
                alt=""
              />
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="  md:px-32 md:py-10 bg-base-300"
       
      >
        <div className="text-center  pb-5 md:pt-24 md:pb-20">
          <p className="text-lg font-medium text-my-primary">Explore</p>
          <h3 className="text-4xl font-semibold ">Delicious Recipies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {recipesList.map((recipies) => (
            <Recipies
              key={recipies.recipeNumber}
              recipies={recipies}
              notify={notify}
            ></Recipies>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChefDetails;