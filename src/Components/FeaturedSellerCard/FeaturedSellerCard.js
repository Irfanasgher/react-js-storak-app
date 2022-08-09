import { baseUrl } from "../../Routes/apiRoutes";

import "./FeaturedSellerCard.scss";

function FeaturedSellerCard(props) {
  return (
    <div className="featured-seller-card">
      <div className="featured-seller-image">
        <img
          src={`${baseUrl}admin/images/stores/cover/md/${props?.data?.cover_image}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/default-image.jpg";
          }}
          alt="Vendor Cover Picture"
        />
      </div>
      <div className="featured-seller-detail">
        <div className="featured-seller-logo-image">
          <img
            src={`${baseUrl}admin/images/stores/logo/md/${props?.data?.logo_image}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-image.jpg";
            }}
            alt="Vendor logo"
          />
        </div>

        <h2>{props?.data.store_name}</h2>
        <p>{props?.data.tag_line}</p>
      </div>
    </div>
  );
}
export default FeaturedSellerCard;
