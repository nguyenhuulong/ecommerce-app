import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";
import banner from '../assets/images/banner.png'

const Homepage = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={3000}
      />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>top sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard 
                  key={index}
                  image01={item.image01}
                  image02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(8).map((item, index) => (
                <ProductCard 
                  key={index}
                  image01={item.image01}
                  image02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to='/catalog'>
           <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(12).map((item, index) => (
                <ProductCard 
                  key={index}
                  image01={item.image01}
                  image02={item.image02}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Homepage;
