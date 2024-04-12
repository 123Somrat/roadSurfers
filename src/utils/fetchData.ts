export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
    return undefined;
  }
};
