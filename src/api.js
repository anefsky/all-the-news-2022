const fetchUrl = "https://api.nytimes.com/svc/topstories/v2/";
const nytapi = "RuG9N6lD1Xss81PdRbmhuiJHjuiPEt6R";

export function fetchStoriesFromLocalStorage(section, setStories) {
  setStories(JSON.parse(localStorage.getItem(section)));
}

export async function fetchStoriesFromNYTimes(section, setStories) {
  try {
    let response = await fetch(`${fetchUrl}${section}.json?api-key=${nytapi}`);
    let data = await response.json();
    localStorage.setItem(section, JSON.stringify(data.results));
    setStories(JSON.parse(localStorage.getItem(section)));
  } catch (error) {
    console.error(error);
  }
}
