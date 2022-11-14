import React from "react";
import Header from "../header";
import Nav from "../nav/";
import Stories from "../stories";
import Loader from "../loader";
import { fetchStoriesFromLocalStorage, fetchStoriesFromNYTimes } from "../../api";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState("arts");

  const stopLoading = () => setLoading(false);

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
      fetchStoriesFromNYTimes(section, setStories, stopLoading);
    } else {
      fetchStoriesFromLocalStorage(section, setStories, stopLoading);
    }
  }, [section]);

  return (
    <>
      {loading ? <Loader /> : null}
      <div className={loading ? 'while-loading' : ''}>
        <Header siteTitle="All the News that Fits We Print" />
        <Nav navItems={navItems} setSection={setSection} section={section} />
        <Stories stories={stories} section={section} />
      </div>
    </>
  );
}

export default App;
