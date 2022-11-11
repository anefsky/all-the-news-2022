import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import { fetchStoriesFromLocalStorage, fetchStoriesFromNYTimes } from "./api";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState("arts");

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    if (hash !== "undefined") {
      console.log(" hash::", hash);
      setSection(hash);
    } else {
      setSection("arts");
    }
  }, []);

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
      <Nav navItems={navItems} setSection={setSection} section={section} />
      <Stories stories={stories} section={section} />
    </>
  );
}

export default App;
