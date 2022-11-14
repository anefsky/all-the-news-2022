import React from "react";
import Header from "../header";
import Nav from "../nav/";
import Stories from "../stories";
import Loader from "../loader";
import { Content } from "./styles";
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
      setSection(navItems[0]);
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
      <Content className={loading ? 'while-loading' : ''}>
        <Header siteTitle="All the News that Fits We Print" />
        <Nav navItems={navItems} setSection={setSection} section={section} />
        <Stories stories={stories} section={section} />
      </Content>
    </>
  );
}

export default App;
