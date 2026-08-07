import React from "react";
import img404 from "../../assets/img404.png";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <img src={img404} alt="Error404" className="h-40 md:h-56" />
      <Link to={"/"} className="btn btn-accent rounded-lg px-5">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
