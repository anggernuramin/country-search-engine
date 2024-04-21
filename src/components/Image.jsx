const Image = ({ src, country }) => {
  return <img className="country__image" src={src} alt={country} />;
};

export default Image;
