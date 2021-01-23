
import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import Title from 'antd/lib/typography/Title'

interface IPageHeaderProps {
  actionKind: string;
  visible: boolean,
  onOk: () => void;
  onCancel: () => void
}

const ConfirmationModal: React.FC<IPageHeaderProps> = ({ actionKind, visible, onOk, onCancel }) => (<div>
  <Modal
    centered
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    bodyStyle={{height: "150px", verticalAlign: "center"}}
  >
    <br />
    <br />
    <Title style={{textAlign: "center"}} level={3}>{`Do you want to ${actionKind}?`}</Title>
    <br />
    <br />
  </Modal>
</div>

)
export default ConfirmationModal