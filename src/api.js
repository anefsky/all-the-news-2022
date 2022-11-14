const fetchUrl = "https://api.nytimes.com/svc/topstories/v2/";
const nytapi = "i2FHN2hEpIDDiWNORGgF0ukGvNqKtqga";

export async function fetchStoriesFromLocalStorage(section, setStories, stopLoading) {
  await setStories(JSON.parse(localStorage.getItem(section)));
  stopLoading();
}

export async function fetchStoriesFromNYTimes(section, setStories, stopLoading) {
  try {
    let response = await fetch(`${fetchUrl}${section}.json?api-key=${nytapi}`);
    let data = await response.json();
    localStorage.setItem(section, JSON.stringify(data.results));
    setStories(JSON.parse(localStorage.getItem(section)));
  } catch (error) {
    console.error(error);
  } finally {
    stopLoading();
  }
}
