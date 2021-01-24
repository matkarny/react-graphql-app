import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';


import { DELETE_COMMENT } from '../fragments/comment';



const useDeleteComment = (id: string) => {
    const [deleteComment, { error }] = useMutation<any, any>(DELETE_COMMENT)
    if (error) {
        console.log('Delete comment error', error)
        notification.error({
            message: 'Delete comment problem',
            placement: 'bottomRight'
        })
    };

    const deleteCommentById = async () => {
        await deleteComment({ variables: { id: parseInt(id) } }).then((data: any) => {
        data?.data.deleteComment ? notification.success({
            message: 'Deleted comment succesfully',
            placement: 'bottomRight'
        }) : notification.error({
            message: 'Deleted comment failed',
            placement: 'bottomRight'
        })
    });
    }
    return { deleteCommentById }
        ;
}
export default useDeleteComment