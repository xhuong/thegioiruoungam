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
        <h3 className="news_card_heading">Nhung Hươu Có Tác Dụng Gì? Công Dụng Của Nhung Hươu Với Sức Khỏe?</h3>
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
          Nhung hươu hay lộc nhung chính là sừng non của con hươu đực. Vào mỗi cuối mùa hè hàng năm, sừng hươu rụng đi
          và mùa xuân năm sau chỗ đó sẽ mọc lên sừng mới. Sừng hươu mới mọc sẽ rất mềm, mặt ngoài phủ đầy lông, sờ vào
          êm như nhung nên người ta gọi là nhung hươu. Vậy tác dụng nhung hươu như thế nào?
        </Link>

        <Button className="mx-auto hidden-xs hidden-sm" textTransform="uppercase" type="primary" size="md-btn">
          Đọc tin
        </Button>
        <Button
          className="mx-auto  hidden-md hidden-lg hidden-xl hidden-xxl"
          textTransform="uppercase"
          type="secondary"
          size="full-btn"
        >
          Đọc tin
        </Button>
      </div>
    </div>
  );
}

export default NewsCard;
