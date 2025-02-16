import React from "react";
import Rows from "../Rows/Rows";
import requests from "../../Utils/requests";

function RowList() {
  return (
    <>
      <Rows
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title="trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Rows title="TV Shows" fetchUrl={requests.fetchTVShows} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList;
