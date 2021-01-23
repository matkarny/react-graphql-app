
import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import Title from 'antd/lib/typography/Title'

interface IPageHeaderProps {
  title: string;
  visible: boolean,
  onOk: () => void;
  onCancel: () => void
}

const CustomModal: React.FC<IPageHeaderProps> = ({ title, visible, children, onOk, onCancel }) => (<div>
  <Modal
    title={title}
    centered
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
  >
    <Title style={{textAlign: "center"}}>{title}</Title>
    <br />
    {children}
  </Modal>
</div>

)
export default CustomModal