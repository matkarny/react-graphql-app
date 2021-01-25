import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';


import { CREATE_COMMENT } from '../fragments/comment';
import { IComment } from '../interfaces/comment';

interface ICreateCommentProps {
    name: string,
    email: string,
    body: string
}

interface ICreateCommentVars{
    input: ICreateCommentProps
        
}

interface ICreateCommentData {
    createComment: IComment
}

const useCreateComment = () => {
    const [createComment, { error }] = useMutation<ICreateCommentData, ICreateCommentVars>(CREATE_COMMENT)
    if (error) {
        console.log('Create comment error', error)
        notification.error({
            message: 'Create comment problem',
            placement: 'bottomRight'
        })
    };

    const createNewComment = async (values: ICreateCommentProps) => {
        await createComment({ variables: { input: { ...values} } }).then((data) => {

        data?.data?.createComment ? notification.success({
            message: `Create comment succesfully with id ${data.data.createComment.id}`,
            placement: 'bottomRight'
        }) : notification.error({
            message: 'Create comment failed',
            placement: 'bottomRight'
        })
    });
    }
    return { createNewComment }
}
export default useCreateComment