import Carousel from "./Carousel";
import Popular from "./Popular";
import Cursor from "./Cursor";
import Search from "./search";
import Info from "./About/Info";
import Review from "./Review";

function Home() {
  const windows = window.innerWidth > 786;

  return (
    <div>
      <Cursor />
      <Search />
      <Carousel />
      <Popular />
      <Info />
      <Review />
    </div>
  );
}

export default Home;
