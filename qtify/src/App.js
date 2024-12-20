import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "@mui/material/Container";
import CollapsableSection from "./components/CollapsableSection/CollapsableSection";
import TabSection from "./components/TabSection/TabSection";


const TOP_ALBUM_URL = `https://qtify-backend-labs.crio.do/albums/top`;
const NEW_ALBUM_URL = `https://qtify-backend-labs.crio.do/albums/new`;
const SONGS_URL = `https://qtify-backend-labs.crio.do/songs`;
const GENRE_URL = `https://qtify-backend-labs.crio.do/genres`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Container maxWidth="xl">
        {/* top album section */}
        <CollapsableSection
          title={"Top Albums"}
          isCollapsed={true}
          dataUrl={TOP_ALBUM_URL}
        />
        {/* new album section */}
        <CollapsableSection
          title={"New Albums"}
          isCollapsed={true}
          dataUrl={NEW_ALBUM_URL}
        />
        <TabSection 
          dataUrl={SONGS_URL}
          tabsUrl={GENRE_URL}
        />
      </Container>
    </div>
  );
}

export default App;
