import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_ASSIGNEES } from '../../queries/queryAssignee';
import { ADD_TASK } from '../../mutations/mutateTask';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function AddTaskModal({ boardId, visible, onClose, refetchBoard }) {
  let assignees = [];

  const { loading, data } = useQuery(GET_ALL_ASSIGNEES);
  if (!loading && data && data.assignees) assignees = data.assignees;

  const [addTask] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: refetchBoard, variables: { id: boardId } }],
    awaitRefetchQueries: true,
  });

  const submitTaskDetails = (values) => {
    addTask({
      variables: { input: { ...values, boardId } },
      ignoreResults: false,
    });

    onClose();
  };

  return (
    <Modal title='Add Task' visible={visible} onCancel={onClose} footer={null}>
      <Form {...layout} onFinish={submitTaskDetails}>
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input task name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[
            { required: true, message: 'Please input task description!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='assigneeIds'
          label='Assignee'
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select
            mode='multiple'
            placeholder='Please select assignees'
            allowClear
          >
            {assignees.length &&
              assignees.map((assignee) => (
                <Option key={assignee.id} value={assignee.id}>
                  {assignee.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddTaskModal;
