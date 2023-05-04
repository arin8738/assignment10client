import React, { useEffect, useState } from "react";
import SingleChefCard from "./SingleChefCard";
// import SingleChefCard from "./SingleChefCard";
// import { HashLoader, FadeLoader } from "react-spinners";

const ChefsSection = () => {
  const [loading, setLoading] = useState(true);

  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch("https://chef-recipe-hunter-server-tau.vercel.app/chef-data")
      .then((res) => res.json())
      .then((data) => setChefData(data));
        // console.log(chefData);
        setLoading(false);
  }, []);

  return (
    <div>
      <div className="mx-auto">
        <div className="text-center pt-8 pb-5 md:pt-24 md:pb-20">
          <p className="text-xl font-medium text-my-primary">
            Team of Restaurant
          </p>
          <h3 className="text-4xl font-semibold mt-3">
            Meet Our Professionals
          </h3>
        </div>

        {!loading ? (
        <div className="px-4 md:px-32 mx-auto grid grid-cols-1 md:grid-cols-3">
            {chefData.map((d) => (
              <SingleChefCard key={d.id} d={d}></SingleChefCard>
            ))}
          </div>
        ) : (
          
          <div>
            {/* <FadeLoader color="#c6a87d" className="mx-auto my-5"/> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default ChefsSection;