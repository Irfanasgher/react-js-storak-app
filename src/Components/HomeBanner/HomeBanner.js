import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { baseUrl } from "../../Routes/apiRoutes";
import "./HomeBanner.scss";

function HomeBanner({ name, onClick }) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    homeBanner();
  }, []);
  const homeBanner = async (e) => {
    await axios
      .get("/admin/website/banners")
      .then((response) => {
        const bannerData = response.data.banners;

        setBanner(bannerData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <section className="home-banner">
      <div className="top-banner">
        <img src="/images/top-banner.jpg" />
      </div>
      <Slider {...settings}>
        {banner.map(function (data, id) {
          return (
            <div className="banner-home" key={id}>
              <Link to="#">
                <img
                  src={`${baseUrl}admin/images/banners/website/org/${data.image}`}
                  alt="slider"
                />
              </Link>
            </div>
            // <div className="home-banner-main" key={id}>
            //   <div className="container">
            //     <div className="row">
            //       <div className="col-6">
            //         <div className="banner-content">
            //           <h2>{data.title}</h2>
            //           <h3>{data.description}</h3>
            //           <ul>
            //             <li>
            //               <Link to="#">
            //                 <img src="images/andriod-icon.svg" alt="andriod" />
            //               </Link>
            //             </li>
            //             <li>
            //               <Link to="#">
            //                 <img src="images/apple-icon.svg" alt="apple" />
            //               </Link>
            //             </li>
            //           </ul>
            //         </div>
            //       </div>
            //       <div className="col-6">
            //         <div className="banner-image">
            //           <img
            //             src={`${baseUrl}admin/images/banners/website/org/${data.image}`}
            //             alt="slider"
            //           />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </Slider>
    </section>
  );
}
export default HomeBanner;
