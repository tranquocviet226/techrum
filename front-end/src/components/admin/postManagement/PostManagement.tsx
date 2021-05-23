import { makeStyles } from "@material-ui/core";
import { deletePostById } from "actions/admin/postAction";
import { getPostFind } from "actions/user/postAction";
import txtConstants from "constants/index";
import paths from "constants/path";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ComponentType } from "types/common/componentTypes";
import { FindPostBody, Post } from "types/model/Post";
import colors from "utils/colors";
import ModalCommon from "../common/Modal/ModalCommon";
import PostItem from "./PostItem";

const useStyles = makeStyles({
  btnCreate: {
    backgroundColor: colors.baseOrange,
    border: "none",
    borderRadius: 8,
    padding: 10,
    color: "white",
    cursor: "pointer",
  },
});

type Props = {
  managementPosts: Post[];
};

const PostManagement: React.FC<Props> = (props) => {
  const { managementPosts } = props;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<number>();

  useEffect(() => {
    getAllPost();
  }, []);

  const handleGoCreate = () => {
    history.push({ pathname: paths.ADMIN + paths.POST_CREATE });
  };

  const getAllPost = () => {
    const body: FindPostBody = {
      total_result: 20,
      page: 1,
    };
    dispatch(getPostFind(ComponentType.MANAGEMENT_POSTS, body));
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setVisible(true);
  };

  const handleOk = () => {
    if (deleteId) {
      dispatch(deletePostById(deleteId, ComponentType.MANAGEMENT_POSTS));
    }
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <ModalCommon
        title={txtConstants.deletePost}
        content={txtConstants.confirm}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <div className="d-flex justify-content-between">
        <button onClick={handleGoCreate} className={classes.btnCreate}>
          CREATE POST
        </button>
        <button className={classes.btnCreate}>SEARCH</button>
      </div>

      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Thumbnail</td>
            <td>Title</td>
            <td>Views</td>
            <td>Status</td>
            <td>Created</td>
            <td>Options</td>
          </tr>
          {managementPosts.map((item) => (
            <PostItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
        </tbody>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Thumbnail</td>
            <td>Title</td>
            <td>Views</td>
            <td>Status</td>
            <td>Created</td>
            <td>Options</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostManagement;
