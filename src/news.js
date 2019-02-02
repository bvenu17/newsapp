const url =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3a677799bd33421abdcd2d277a71f5a9";

/*export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}*/
export async function getNews() {

return fetch(url).then(response => response.json()).then(json => json.articles);

}
