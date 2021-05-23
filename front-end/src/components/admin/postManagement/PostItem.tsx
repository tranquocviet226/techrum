import { makeStyles } from "@material-ui/core";
import { MEDIA_URL } from "constants/index";
import paths from "constants/path";
import { useState } from "react";
import { useHistory } from "react-router";
import { Post } from "types/model";
import colors from "utils/colors";
import { formatDate } from "utils/function";

const useStyles = makeStyles({
  thumbnail: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  tr: {
    "&:hover": {
      "& td": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    },
    "& td": {
      backgroundColor: "#FFF",
      textAlign: "center",
    },
  },
  status: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  green: {
    backgroundColor: "green",
  },
  red: {
    backgroundColor: "red",
  },
  btnDelete: {
    color: colors.baseOrange,
    fontSize: 20,
    marginRight: 15,
    cursor: "pointer",
  },
  btnEdit: {
    color: "lightblue",
    fontSize: 20,
    cursor: "pointer",
  },
});

type ItemProps = {
  item: Post;
  handleDelete: (id: number) => void;
};

const PostItem: React.FC<ItemProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { item, handleDelete } = props;
  const ID = item?.id;
  const [thumbnail, setThumbnail] = useState(item?.background_url);
  const title = item?.title || "";
  const views = item?.views || 0;
  const updated_at = item?.updated_at || "";
  const is_active = item?.is_active || "";

  const handleImageError = () => {
    setThumbnail(MEDIA_URL.concat(item?.background_name));
  };

  const handleEdit = () => {
    history.push({ pathname: paths.ADMIN + paths.POST_CREATE, state: item });
  };

  return (
    <tr className={classes.tr}>
      <td>{ID}</td>
      <td>
        <img
          src={thumbnail}
          onError={handleImageError}
          className={classes.thumbnail}
        />
      </td>
      <td>{title}</td>
      <td>{views}</td>
      <td>
        <div
          className={
            is_active
              ? classes.green + " " + classes.status
              : classes.red + " " + classes.status
          }
        ></div>
      </td>
      <td>{formatDate(updated_at)}</td>
      <td>
        <i
          onClick={() => handleDelete(ID)}
          className={`fas fa-trash ${classes.btnDelete}`}
        ></i>
        <i
          onClick={handleEdit}
          className={`fas fa-edit ${classes.btnEdit}`}
        ></i>
      </td>
    </tr>
  );
};

export default PostItem;
