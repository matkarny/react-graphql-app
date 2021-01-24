import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';

import { DELETE_POST } from '../fragments/post';



const useDeletePost  = (id: string) => {
    const [deletePost, { error }] = useMutation<any, any>(DELETE_POST)
    if (error) {
        console.log('Delete post error', error)
        notification.error({
            message: 'Delete post problem',
            placement: 'bottomRight'
        })
    };

    const deletePostById = async () => {
        await deletePost({ variables: { id: parseInt(id) } }).then((data: any) => {
        data?.data.deletePost ? notification.success({
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