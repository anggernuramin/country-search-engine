import Globe from "../components/Globe";
import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { fetchData } from "../libs/fetchData";

const Country = () => {
  const { name } = useParams();
  const [state, setState] = useState({
    data: [],
    codes: [],
    currencys: [],
    dataCurrency: [],
    lengthCurrency: [],
    dataCollingCode: [],
    lengthCollingCode: [],
    hoveredCurrencyIndex: null,
    showTooltip: false,
    isLoading: false,
    isShowCollingCode: false,
  });

  const {
    data,
    codes,
    dataCurrency,
    lengthCurrency,
    dataCollingCode,
    lengthCollingCode,
    hoveredCurrencyIndex,
    showTooltip,
    isLoading,
    isShowCollingCode,
  } = state;

  useEffect(() => {
    (async () => {
      try {
        setState((prevState) => ({ ...prevState, isLoading: true }));
        const data = await fetchData("v3.1/name", name);
        setState((prevState) => ({
          ...prevState,
          data: data,
          isLoading: false,
        }));
      } catch (error) {
        console.log(error.message);
        setState((prevState) => ({ ...prevState, isLoading: false }));
      }
    })();
  }, [name]);

  const fetchCollingCode = async (codes) => {
    try {
      const promises = codes.map(async (code) => {
        try {
          const data = await fetchData("v2/callingcode", code);
          return data;
        } catch (error) {
          console.log(`Error fetching data for code ${code}:`, error);
          return null;
        }
      });
      const collingCodeData = await Promise.all(promises);
      setState((prevState) => ({
        ...prevState,
        dataCollingCode: collingCodeData,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dataCollingCode.length > 0) {
      const lengths = dataCollingCode.map((item) =>
        Array.isArray(item) ? item.length : 0
      );
      setState((prevState) => ({
        ...prevState,
        lengthCollingCode: prevState.lengthCollingCode.concat(lengths),
      }));
    }
  }, [dataCollingCode]);

  const fetchCurrency = async (currencys) => {
    try {
      const promises = currencys.map(async (currency) => {
        try {
          const data = await fetchData("v2/currency", currency);

          return data;
        } catch (error) {
          console.log(`Error fetching data for code ${currency}:`, error);
          return null;
        }
      });

      const currencyDate = await Promise.all(promises);
      setState((prevState) => ({
        ...prevState,
        dataCurrency: currencyDate,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (dataCurrency.length > 0) {
      const lengths = dataCurrency.map((item) =>
        Array.isArray(item) ? item.length : 0
      );
      setState((prevState) => ({
        ...prevState,
        lengthCurrency: prevState.lengthCurrency.concat(lengths),
      }));
    }
  }, [dataCurrency]);

  const handleMouseEnter = (index, data = "") => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, hoveredCurrencyIndex: index }));
      if (data === "collingCode") {
        setState((prevState) => ({
          ...prevState,
          isShowCollingCode: true,
          showTooltip: false,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          isShowCollingCode: false,
          showTooltip: true,
        }));
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        hoveredCurrencyIndex: null,
        showTooltip: false,
        isShowCollingCode: false,
      }));
    }, 100);
  };

  useEffect(() => {
    if (data.length > 0) {
      const codes = data.map(
        (item) => `${item?.idd?.root.replace("+", "")}${item?.idd?.suffixes[0]}`
      );
      const currencys = data.map((item) => Object.keys(item.currencies)[0]);
      setState((prevState) => ({ ...prevState, codes, currencys }));
      fetchCollingCode(codes);
      fetchCurrency(currencys);
    }
  }, [data]);

  return (
    <section>
      <Button route={"/"} />

      {isLoading ? (
        <p className="text--error">Loading . . .</p>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <div className="regency">
              <div className="flex-start">
                <h2 className="regency__header">{item?.name?.common}</h2>
                <Image src={item?.flags?.png} country={item?.name?.common} />
              </div>

              <ul className="regency__list ">
                {item?.altSpellings?.map((item, index) => (
                  <li key={index} className="regency__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="wrapper-country">
              <Card shadow="shadow" overflowHidden="overflow-hidden">
                <h4 className="code__title">LatLong</h4>
                <div className="wrapper__code__number code__suffix">
                  {item?.latlng?.map((code, index) => (
                    <h3 key={index} className="code__number">
                      {code}
                      {index !== item?.latlng.length - 1 && <span>, </span>}
                    </h3>
                  ))}
                </div>
                <Globe />
              </Card>
              <Card shadow="shadow" description="description">
                <p className="description__title">
                  Capital :{" "}
                  <span className="description__data">{item?.capital[0]}</span>
                </p>
                <p className="description__title">
                  Region :{" "}
                  <span className="description__data">{item?.region}</span>
                </p>
                <p className="description__title">
                  SubRegion :{" "}
                  <span className="description__data">{item?.subregion}</span>
                </p>
              </Card>
              <Card>
                <h4 className="code__title">Calling Code</h4>
                <h3 className="code__number code__suffix">
                  {item?.idd?.root.replace("+", "")}
                  {item?.idd?.suffixes?.map((suffix, index) => (
                    <span key={index}>
                      {suffix}
                      {index !== item?.idd?.suffixes?.length - 1 && (
                        <span>, </span>
                      )}
                    </span>
                  ))}
                </h3>
                <div className="country__description">
                  <div
                    onMouseEnter={() => handleMouseEnter(index, "collingCode")}
                    onMouseLeave={handleMouseLeave}
                    className="country__description--active"
                  >
                    {lengthCollingCode[index]} country
                    {isShowCollingCode &&
                      hoveredCurrencyIndex === index &&
                      (dataCollingCode.length > 0 ? (
                        <ul className="currency__List">
                          {dataCollingCode.map((innerArray, indexs) => (
                            <React.Fragment key={indexs}>
                              {Array.isArray(innerArray) &&
                                innerArray.map((item, innerIndex) => (
                                  <React.Fragment key={innerIndex}>
                                    {item?.callingCodes?.includes(
                                      codes[index]
                                    ) && (
                                      <li className="currency__item">
                                        {item?.name}
                                      </li>
                                    )}
                                  </React.Fragment>
                                ))}
                            </React.Fragment>
                          ))}
                        </ul>
                      ) : null)}
                  </div>{" "}
                  with this calling code
                </div>
              </Card>
              <Card description="description" className="country description">
                <h4 className="code__title">Currency</h4>
                <h3 className="code__number">
                  {Object.keys(item.currencies)[0]}
                </h3>
                <div className="country__description">
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="country__description--active"
                  >
                    {lengthCurrency[index]} country
                    {showTooltip &&
                      hoveredCurrencyIndex === index &&
                      (lengthCurrency.length > 0 ? (
                        <ul className="currency__List">
                          {dataCurrency[index]
                            .slice(0, lengthCurrency[index])
                            .map((item, innerIndex) => (
                              <li className="currency__item" key={innerIndex}>
                                {item.name}
                              </li>
                            ))}
                        </ul>
                      ) : null)}
                  </div>{" "}
                  with this currency
                </div>
              </Card>
            </div>
          </div>
        ))
      ) : (
        "Data Not Found"
      )}
    </section>
  );
};

export default Country;
