import { Modal } from "antd";

type ModalProps = {
  visible: boolean;
  title: string;
  content: any;
  handleOk: () => void;
  handleCancel: () => void;
};

const ModalCommon: React.FC<ModalProps> = (props) => {
  const { visible, title, content, handleOk, handleCancel } = props;
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  );
};

export default ModalCommon;
