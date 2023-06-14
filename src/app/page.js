import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
//const API_KEY = "dbafdc4f1cbf331c36974abc1fd9c6ce";
// console.log(3, API_KEY);

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/movie/550?api_key=dbafdc4f1cbf331c36974abc1fd9c6ce`
  // );
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`
  // );
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  //console.log(3333, results);
  return (
    // <h1 className="text-3xl text-sky-400/50 font-bold underline">Hello</h1>
    <div>
      <Results results={results} />
    </div>
  );
}
