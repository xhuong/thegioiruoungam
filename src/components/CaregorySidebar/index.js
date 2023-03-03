import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
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
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/nhung_huou.png")} alt="" />
            </div>
            Nhung hươu
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
        <li className="category_item">
          <Link className="category_item_link">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/ca_ngua.png")} alt="" />
            </div>
            Cá ngựa
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CaregorySidebar;
