
import React from 'react';

import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal/Modal';
import Title from 'antd/lib/typography/Title'

interface IPageHeaderProps {
  title: string;
  visible: boolean,
  onSubmit: (values: any) => void;
  onCancel: () => void
}

const CustomModal: React.FC<IPageHeaderProps> = ({ title, visible, children, onSubmit, onCancel }) => {
  const [form] = useForm()
  const onSubmitWithReset = (values:any ) => {
    form.resetFields()
    onSubmit(values)
  }
  return (<div>
  <Modal
    title={title}
    centered
    visible={visible}
    footer={null}
    onCancel={onCancel}
  >
     <Form onFinish={onSubmitWithReset} form={form}>
    <Title style={{textAlign: "center"}}>{title}</Title>
    <br />
    {children}
      <FormItem style={{textAlign: 'right'}}>
          <Button htmlType="button" onClick={onCancel} size="large" style={{marginRight: "30px", width: "120px"}}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" size="large" style={{width: "120px"}}>
            Save
          </Button>
        </FormItem>
      </Form>
  </Modal>
</div>

)}
export default CustomModal