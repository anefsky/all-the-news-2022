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
      console.log('**** api call');
      fetchStoriesFromNYTimes(section, setStories, stopLoading);
    } else {
      console.log('**** from local storage');
      fetchStoriesFromLocalStorage(section, setStories, stopLoading);
    }
    // setTimeout(
    //   stopLoading, 2000
    // );
  }, [section]);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <Loader show={loading}/>
      <Header siteTitle="All the News that Fits We Print" />
      <Nav navItems={navItems} setSection={setSection} section={section} />
      <Stories stories={stories} section={section} />
    </>
  );
}

export default App;
