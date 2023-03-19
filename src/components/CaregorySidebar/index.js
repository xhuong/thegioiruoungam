import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { GiBee, GiBeerBottle } from "react-icons/gi";
import "./index.scss";

function CaregorySidebar() {
  return (
    <div className="category">
      <h4 className="category_heading">
        <FaDashcube />
        Danh mục sản phẩm
      </h4>
      <ul className="category_list">
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/home.png")} alt="" />
            </div>
            Giới thiệu
          </Link>
        </li>
        <li className="category_item active">
          <Link className="category_item_link" to="/shop">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/nhung_huou.png")} alt="" />
            </div>
            Cao nhung hươu
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link" to="/shop">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/nhung_huou.png")} alt="" />
            </div>
            Cao hươu
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link" to="/shop">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/nhung_huou.png")} alt="" />
            </div>
            Cao ban long
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link" to="/shop">
            <div className="category_item_image_wrappper">
              <GiBeerBottle />
            </div>
            Rượu huyết nhung hươu
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link" to="/shop">
            <div className="category_item_image_wrappper">
              <GiBee />
            </div>
            Mật ong rừng
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CaregorySidebar;
