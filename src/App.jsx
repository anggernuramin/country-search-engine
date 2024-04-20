import Globe from "./components/Globe";

function App() {
  return (
    <>
      <main className="container">
        <h1 className="header">Country</h1>
        <div className="search">
          <input
            type="search"
            className="search__input"
            placeholder="Type any country name"
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
      </main>
      <section>
        <button className="btn">
          <i className="btn__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M11 5L4 12L11 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          Back To Home Page
        </button>
        <div className="regency">
          <h2 className="regency__header">Indonesia</h2>
          <ul className="regency__list ">
            <li className="regency__item">ID</li>
            <li className="regency__item">Republik indonesia</li>
            <li className="regency__item">Republik indonesia</li>
          </ul>
        </div>

        <div className="wrapper-country">
          <div className="country shadow">
            <h4 className="code__title">LatLong</h4>
            <h3 className="code__number">-5.0, 120.0</h3>
            <Globe />
          </div>
          <div className="country description shadow">
            <p className="description__title">
              Capital : <span className="description__data">Jakarta</span>
            </p>
            <p className="description__title">
              Region : <span className="description__data">Asia</span>
            </p>
            <p className="description__title">
              Capital : <span className="description__data">Jakarta</span>
            </p>
          </div>
          <div className="country  ">
            <h4 className="code__title">Calling Code</h4>
            <h3 className="code__number">62</h3>
            <p className="country__description">
              <span className="country__description--active">1 country</span>{" "}
              with this calling code
            </p>
          </div>
          <div className="country description">
            <h4 className="code__title">Currency</h4>
            <h3 className="code__number">IDR</h3>
            <p className="country__description">
              <span className="country__description--active">1 country</span>{" "}
              with this CURRENCY
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
