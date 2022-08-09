import HomeBanner from "./../Components/HomeBanner/HomeBanner";
import PopularCategories from "./../Components/PopularCategories/PopularCategories";
import RecommendedProduct from "./../Components/RecommendedProduct/RecommendedProduct";
import DealOffer from "./../Components/DealOffer/DealOffer";
// import FamousProduct from "./../Components/FamousProduct/FamousProduct";
import FeaturedProduct from "./../Components/FeaturedProduct/FeaturedProduct";
import AppAdvertisement from "./../Components/AppAdvertisement/AppAdvertisement";
import DealBanner from "./../Components/DealBanner/DealBanner";
import MegaDeal from "./../Components/MegaDeal/MegaDeal";
import TopDeal from "./../Components/TopDeal/TopDeal";
import FeaturedSeller from "./../Components/FeaturedSeller/FeaturedSeller";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="page-wrapper">
        <HomeBanner />
        <PopularCategories />
        <RecommendedProduct />
        <DealOffer />

        {/* <FamousProduct /> */}
        <FeaturedProduct />
        <AppAdvertisement />
        <MegaDeal />
        <DealBanner />
        <TopDeal />
        <FeaturedSeller />
      </div>
    </Fragment>
  );
}
export default Home;
