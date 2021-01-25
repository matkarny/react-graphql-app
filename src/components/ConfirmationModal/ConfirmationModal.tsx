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
    bodyStyle={{ height: "150px", verticalAlign: "center" }}
  >
    <Title style={{ textAlign: "center", padding: "50px 0" }} level={3}>{`Do you want to ${actionKind}?`}</Title>
  </Modal>
</div>

)
export default ConfirmationModal