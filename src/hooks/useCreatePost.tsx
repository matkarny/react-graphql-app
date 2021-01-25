import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';

import { CREATE_POST } from '../fragments/post';
import { IPost } from '../interfaces/post';

interface ICreatePostProps {
    title: string,
    body: string
}

interface ICreatePostVars{
    createPost: IPost
}

interface ICreatePropsVars{
    input: ICreatePostProps
        
}

const useCreatePost = () => {
    const [createPost, { error }] = useMutation<ICreatePostVars,ICreatePropsVars>(CREATE_POST)
    if (error) {
        console.log('Create post error', error)
        notification.error({
            message: 'Create post problem',
            placement: 'bottomRight'
        })
    };

    const createNewPost = async (values: ICreatePostProps) => {
        await createPost({ variables: { input: { ...values} } }).then((data) => {
        data?.data?.createPost ? notification.success({
            message: `Created post with id ${data.data.createPost.id}`,
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