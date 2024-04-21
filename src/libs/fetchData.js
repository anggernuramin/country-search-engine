export const fetchData = async (resource, query) => {
  try {
    const req = await fetch(`https://restcountries.com/${resource}/${query}`);
    const data = await req.json();
    return data;
  } catch (error) {
    return error;
  }
};
