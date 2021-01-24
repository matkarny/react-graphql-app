import { useQuery } from '@apollo/client';
import notification from 'antd/lib/notification/index';
import { GET_POST_DATA } from '../fragments/post';
import { IPostDetailsData } from '../interfaces/post';


const useFetchPost = (postId: string) => {
    const { loading, error, data } = useQuery<IPostDetailsData>(GET_POST_DATA, {
        variables: {
            postId
        }
    });
    if (error) {
        console.log('fetch post error', error)
        notification.error({
            message: 'Fetch post data problem',
            placement: 'bottomRight'
        })
    };
    const username = data?.post.user.username
    const post = data?.post
    const comments = data?.post.comments.data

    return { loading, username, post, comments }
        ;
    ;
}
export default useFetchPost

