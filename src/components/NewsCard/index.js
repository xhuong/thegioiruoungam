import { SlClock } from "react-icons/sl";
import { VscCommentDiscussion } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./index.scss";

function NewsCard() {
  return (
    <div className="news_card">
      <div className="news_card_image_wrapper">
        <img src={require("../../assets/images/news/nhung_huou.png")} alt="" />
      </div>
      <div className="news_card_content">
        <h3 className="news_card_heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat dolore laborum?
        </h3>
        <div className="news_card_info">
          <p className="news_card_time">
            <SlClock />
            <span>03/06/2023</span>
          </p>
          <p className="news_card_comment">
            <VscCommentDiscussion />
            <span>0 Bình luận</span>
          </p>
        </div>
        <Link className="news_card_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptas beatae ab. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At quaerat maiores nam? Lorem ipsum dolor sit amet consectetur.
        </Link>

        <Button className="center-btn" textTransform="uppercase" type="primary" size="md-btn">
          Đọc tin
        </Button>
      </div>
    </div>
  );
}

export default NewsCard;
