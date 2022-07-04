export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1c39123df0mshda6c26cfce36b61p1b4614jsn3aa1868b16a7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};