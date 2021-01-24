import { useMutation } from '@apollo/client';
import notification from 'antd/lib/notification/index';


import { CREATE_COMMENT } from '../fragments/comment';

interface ICreateCommentProps {
    name: string,
    email: string,
    body: string
}

const useCreateComment = () => {
    const [createComment, { error }] = useMutation<any, any>(CREATE_COMMENT)
    if (error) {
        console.log('Create comment error', error)
        notification.error({
            message: 'Create comment problem',
            placement: 'bottomRight'
        })
    };

    const createNewComment = async (values: ICreateCommentProps) => {
        await createComment({ variables: { input: { ...values} } }).then((data: any) => {
        data?.data.createComment ? notification.success({
            message: `Create comment succesfully with id ${data?.data.createComment.id}`,
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