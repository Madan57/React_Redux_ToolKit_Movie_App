import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const loading = useSelector((state) => state.movies.loading);
  const movieText = "Harry";
  const showText = "Friends";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      {/* <MovieListing /> */}
      {loading ? (
        <div style={{ fontSize: "20px", textAlign: "center", color: "#fff" }}>
          Loading...
        </div>
      ) : (
        <MovieListing />
      )}
    </div>
  );
};

export default Home;
