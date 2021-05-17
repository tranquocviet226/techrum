import { Comment } from "types/model/Comment";
import { formatDate } from "utils/function";

type Props = {
  item: Comment;
};

const CommentItem: React.FC<Props> = (props) => {
  const { item } = props;
  const email = item?.email || "";
  const content = item?.content || "";

  return (
    <>
      <div
        className="solid-bg d-flex"
        style={{ borderBottom: "1px solid #eaeaea", alignItems: "center" }}
      >
        <img
          alt=""
          src="https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=60&d=mm&r=g"
          style={{ height: 80, width: 80, borderRadius: 40, marginRight: 16 }}
        />
        <div>
          <h6 style={{ marginBottom: 0, color: "1c1c24" }}>{email}</h6>
          <p style={{ marginBottom: 8, color: "#333333" }}>
            {formatDate(Date.now())}
          </p>
          <p>{content}</p>
          <p></p>
        </div>
      </div>
      {/* <div style={{ height: 1, width: "100%", backgroundColor: "gray" }}></div> */}
    </>
  );
};

export default CommentItem;
