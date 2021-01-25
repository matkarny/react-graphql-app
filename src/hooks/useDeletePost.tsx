import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';

import { DELETE_POST } from '../fragments/post';
import { IIdVars } from '../interfaces/vars';

interface IDeletePostData {
    deletePost: boolean
    }

const useDeletePost  = (id: string) => {
    const [deletePost, { error }] = useMutation<IDeletePostData, IIdVars>(DELETE_POST)
    if (error) {
        console.log('Delete post error', error)
        notification.error({
            message: 'Delete post problem',
            placement: 'bottomRight'
        })
    };

    const deletePostById = async () => {
        await deletePost({ variables: { id } }).then((data) => {
        data?.data?.deletePost ? notification.success({
            message: 'Deleted post succesfully',
            placement: 'bottomRight'
        }) : notification.error({
            message: 'Deleted post failed',
            placement: 'bottomRight'
        })
    });
    }
    return { deletePostById }
}
export default useDeletePost