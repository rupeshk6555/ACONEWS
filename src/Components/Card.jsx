import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, url }) => {
  return (
    <Link to={url} className="block">
      <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full object-cover"
        />
        <div className="flex h-[200px] flex-col p-4 pb-1">
          <h2 className="truncate text-xl font-semibold">{title}</h2>
          <p className="line-clamp-3 text-gray-700">{description}</p>

          <button className="mt-3 w-[145px] items-center justify-start rounded-full bg-black px-2 py-2 text-white hover:bg-green-500">
            Read more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
