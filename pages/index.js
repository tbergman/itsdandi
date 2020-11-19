/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";

const Home = () => {
  return (
    <div
      sx={{
        variant: "wrapper",
      }}
    >
      <Navigation />
      <Footer />
    </div>
  );
};

export default Home;
