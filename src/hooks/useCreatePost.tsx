import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';

import { CREATE_POST } from '../fragments/post';

interface ICreatePostProps {
    title: string,
    body: string
}

const useCreatePost = () => {
    const [createPost, { error }] = useMutation<any, any>(CREATE_POST)
    if (error) {
        console.log('Create post error', error)
        notification.error({
            message: 'Create post problem',
            placement: 'bottomRight'
        })
    };

    const createNewPost = async (values: ICreatePostProps) => {
        console.log(values, "create")
        await createPost({ variables: { input: { ...values} } }).then((data: any) => {
            console.log(data)
        data?.data.createPost ? notification.success({
            message: `Created post with id ${data?.data.createPost.id}`,
            placement: 'bottomRight'
        }) : notification.error({
            message: 'Create post failed',
            placement: 'bottomRight'
        })
    });
    }
    return { createNewPost }
}
export default useCreatePost