import Globe from "../components/Globe";

const Country = () => {
  return (
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
            <span className="country__description--active">1 country</span> with
            this calling code
          </p>
        </div>
        <div className="country description">
          <h4 className="code__title">Currency</h4>
          <h3 className="code__number">IDR</h3>
          <p className="country__description">
            <span className="country__description--active">1 country</span> with
            this CURRENCY
          </p>
        </div>
      </div>
    </section>
  );
};

export default Country;
