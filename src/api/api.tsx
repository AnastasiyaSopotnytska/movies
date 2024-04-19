export const getMoviesData = async (title: string) => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=d65832ca`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
