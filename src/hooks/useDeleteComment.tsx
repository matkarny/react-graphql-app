import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';


import { DELETE_COMMENT } from '../fragments/comment';
import { IIdVars } from '../interfaces/vars';

interface IDeleteCommentData {
        deleteComment: boolean
    }

const useDeleteComment = (id: string) => {
    const [deleteComment, { error }] = useMutation<
    IDeleteCommentData, 
    IIdVars>(DELETE_COMMENT)
    if (error) {
        console.log('Delete comment error', error)
        notification.error({
            message: 'Delete comment problem',
            placement: 'bottomRight'
        })
    };

    const deleteCommentById = async () => {
        await deleteComment({ variables: { id } }).then( data  => {
        data?.data?.deleteComment ? notification.success({
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