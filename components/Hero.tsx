import { fetchTrending } from "@actions/movieData";
import React from "react";
import HeroCard from "./HeroCard";

const Hero = async () => {
  const trending = await fetchTrending();
  const randomNumber = Math.floor(Math.random() * trending.length);
  const trendingMovie = trending[randomNumber];
  return (
    <div>
      <HeroCard trendingMovie={trendingMovie} />
    </div>
  );
};

export default Hero;
