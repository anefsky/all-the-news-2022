import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import { fetchStoriesFromLocalStorage, fetchStoriesFromNYTimes } from "./api";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const section = "travel";

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem(section)) {
      fetchStoriesFromNYTimes(section, setStories);
    } else {
      fetchStoriesFromLocalStorage(section, setStories);
    }
    setLoading(false);
  }, [section]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header siteTitle="All the News that Fits We Print" />
      <Nav navItems={navItems} />
      <Stories stories={stories} />
    </>
  );
}

export default App;
