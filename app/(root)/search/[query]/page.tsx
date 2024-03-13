import Navbar from "@components/Navbar";
import SearchResult from "@components/SearchResult";
import React from "react";

const SearchPage = ({ params }: { params: { query: string } }) => {
  const query = params.query;
  return (
    <>
      <Navbar />
      <SearchResult query={query} />
    </>
  );
};

export default SearchPage;
