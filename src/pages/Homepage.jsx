import heroSliderData from "../assets/fake-data/hero-slider";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

const Homepage = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider 
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={3000}
      />
    </Helmet>
  );
};

export default Homepage;
