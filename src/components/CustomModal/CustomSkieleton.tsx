
import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import Title from 'antd/lib/typography/Title'

const CustomModal = ()  => ( <div>
              <Modal
        title="Modal 1000px width"
        centered
        visible={true}
        onOk={() => console.log(false)}
        onCancel={() => console.log(false)}
        width={1000}
      >
        <Title> Tytuł </Title>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
        </div>
    
)
export default CustomModal