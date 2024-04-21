import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setData([]);
      const req = await fetch(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      const res = await req.json();
      if (res.status === 404) {
        setErrorMessage("Data Not Found");
        setData([]);
        throw new Error("Data Not Found");
      }
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setErrorMessage("");
      fetchData();
    } else {
      setErrorMessage("");
      setData([]);
    }
  }, [searchQuery]);

  return (
    <main className="container">
      <h1 className="header">Country</h1>
      <div className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Type any country name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <i className="search__icon">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.875 3.75C14.0299 3.75 16.0965 4.60602 17.6202 6.12976C19.144 7.65349 20 9.72012 20 11.875C20 13.8875 19.2625 15.7375 18.05 17.1625L18.3875 17.5H19.375L25.625 23.75L23.75 25.625L17.5 19.375V18.3875L17.1625 18.05C15.6882 19.3085 13.8134 19.9999 11.875 20C9.72012 20 7.65349 19.144 6.12976 17.6202C4.60602 16.0965 3.75 14.0299 3.75 11.875C3.75 9.72012 4.60602 7.65349 6.12976 6.12976C7.65349 4.60602 9.72012 3.75 11.875 3.75ZM11.875 6.25C8.75 6.25 6.25 8.75 6.25 11.875C6.25 15 8.75 17.5 11.875 17.5C15 17.5 17.5 15 17.5 11.875C17.5 8.75 15 6.25 11.875 6.25Z"
              fill="#C8C8C8"
            />
          </svg>
        </i>
      </div>
      {isLoading ? (
        <p className="data__country text--center">Loading. . .</p>
      ) : null}
      {errorMessage ? (
        <p className="data__country text--error">{errorMessage}</p>
      ) : null}
      {data.length > 0 ? (
        <ul className="data__country">
          {data.slice(0, 5).map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="data__country__item"
                  to={`/country/${item?.name?.common}`.toLowerCase()}
                >
                  {item?.name?.common}
                </Link>
              </li>
            );
          })}{" "}
        </ul>
      ) : null}
    </main>
  );
};

export default Home;
