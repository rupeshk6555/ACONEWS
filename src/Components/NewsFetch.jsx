 
import React, { useState, useEffect } from "react";
import Card from "./Card";  
import PaginationButton from "./PaginationButton";  

const NewsFetch = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const apikey = "383b391ffa450d2d9427b301df39e1cc";  
        const baseUrl = "https://gnews.io/api/v4/";
        const url = searchQuery
          ? `${baseUrl}search?q=${encodeURIComponent(searchQuery)}&lang=en&country=us&max=10&page=${currentPage + 1}&apikey=${apikey}`
          : `${baseUrl}top-headlines?category=${category}&lang=en&country=us&max=10&page=${currentPage + 1}&apikey=${apikey}`;

        const response = await fetch(url);
        if (response.status === 403) {
          throw new Error(
            "API key is invalid or you do not have permission to access this resource.",
          );
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles || []);
        setPageCount(data.totalResults ? Math.ceil(data.totalResults / 10) : 0);  
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, searchQuery, currentPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {articles.length > 0 ? (
          articles.map((article, index) => <Card key={index} {...article} />)
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      <PaginationButton
        setCurrentPage={setCurrentPage}
        CurrentPage={currentPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default NewsFetch;
