import { CSSProperties } from "@material-ui/styles";
import txtConstants from "constants/index";
import { useState } from "react";
import { Comment } from "types/model/Comment";
import colors from "utils/colors";
import CommentItem from "./CommentItem";

const styles = {
  inputEmail: {
    width: "100%",
    height: 40,
    paddingLeft: 8,
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: 4,
  },
  inputContent: {
    width: "100%",
    paddingLeft: 8,
    border: "1px solid rgb(234, 234, 234)",
  },
  btnComment: {
    backgroundColor: colors.baseOrange,
    border: "none",
    padding: "8px 16px 8px 16px",
    borderRadius: 4,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 32,
  } as CSSProperties,
};

const CommentComponent = () => {
  const [commentData, setCommentData] = useState<Comment[]>([]);
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
    event.preventDefault();
  };

  const handleChangeContent = (event: any) => {
    setContent(event.target.value);
    event.preventDefault();
  };

  const handleSubmitComment = (event: any) => {
    event.preventDefault();
    const value: Comment = {
      id: Date.now(),
      email: email,
      content: content,
    };

    setCommentData((oldData) => [...oldData, value]);
    setEmail("");
    setContent("");
  };

  return (
    <>
      <h4>{txtConstants.comment}</h4>
      <form onSubmit={handleSubmitComment}>
        <div className="mb-2">
          <h6 style={{ marginBottom: 0 }}>{txtConstants.email}</h6>
          <input
            onChange={(event) => handleChangeEmail(event)}
            value={email}
            required
            type="text"
            name={txtConstants.email}
            style={styles.inputEmail}
          />
        </div>
        <div className="mb-2">
          <h6 style={{ marginBottom: 0 }}>{txtConstants.comment}</h6>
          <textarea
            onChange={(event) => handleChangeContent(event)}
            value={content}
            required
            name={txtConstants.comment}
            rows={5}
            cols={50}
            style={styles.inputContent}
          ></textarea>
        </div>

        <input
          type="submit"
          style={styles.btnComment}
          value={txtConstants.submit}
        />
      </form>
      {commentData.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CommentComponent;
