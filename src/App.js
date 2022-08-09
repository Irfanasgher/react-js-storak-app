import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Partials/Header/Header";
import Footer from "./Partials/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Forget from "./Pages/Auth//Forget/Forget";
import WishList from "./Pages/WishList/WishList";
import CatProduct from "./Pages/CatProduct/CatProduct";
import SubCatProduct from "./Pages/SubCatProduct/SubCatProduct";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import ScrollToTop from "./Partials/ScrollToTop";
import Profile from "./Pages/Profile/UserProfile/UserProfile";
import Order from "./Pages/Profile/Order/Order";
import FollowedStore from "./Pages/Profile/FollowedStore/FollowedStore";
import ProfileAddress from "./Pages/Profile/Address/Address";
import Review from "./Pages/Profile/Review/Review";
import Question from "./Pages/Profile/Question/Question";
import Returns from "./Pages/Profile/Returns/Returns";
import VendorLanding from "./Pages/VendorLanding/VendorLanding";
import SearchProduct from "./Pages/SearchProduct/SearchProduct";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Blog from "./Pages/Blog/Blog";
import Thankyou from "./Pages/Thankyou/Thankyou";
import VendorStore from "./Pages/VendorStore/VendorStore";
import ContactUs from "./Pages/ContactUs/ContactUs";
import VendorFeaturedProduct from "./Pages/VendorStore/VendorFeaturedProduct/VendorFeaturedProduct";
import VendorRatedSaleProduct from "./Pages/VendorStore/VendorRatedSaleProduct/VendorRatedSaleProduct";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forget-password">
            <Forget />
          </Route>
          <div>
            <Header />
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/wish-list">
              <WishList />
            </Route>
            <Route path="/cat-product/:id">
              <CatProduct />
            </Route>
            <Route path="/sub-cat-product">
              <SubCatProduct />
            </Route>
            <Route path="/product-detail/:id">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/profile/manage-profile">
              <Profile />
            </Route>
            <Route path="/profile/order">
              <Order />
            </Route>
            <Route path="/profile/followed-store">
              <FollowedStore />
            </Route>
            <Route path="/profile/review">
              <Review />
            </Route>
            <Route path="/profile/question">
              <Question />
            </Route>
            <Route path="/profile/address">
              <ProfileAddress />
            </Route>
            <Route path="/profile/return">
              <Returns />
            </Route>
            <Route path="/vendor-landing">
              <VendorLanding />
            </Route>
            <Route path="/search-product">
              <SearchProduct />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/thankyou">
              <Thankyou />
            </Route>
            <Route path="/store">
              <VendorStore />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/store-featured-product">
              <VendorFeaturedProduct />
            </Route>
            <Route path="/store-top-rated-product">
              <VendorRatedSaleProduct />
            </Route>
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
