export const fetcher = (url: string) =>
  fetch(`${process.env.REACT_APP_API_URL}${url}`).then((res) => res.json());
