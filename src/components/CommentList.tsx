import CommentItem from './CommentItem';
import Comment from '../types/Comment';
import { Fade } from '@material-ui/core';

import React from 'react';

type Props = {
    styled: boolean;
};

const CommentList: React.FC<Props> = ({ styled }: Props) => {
    const comments: Comment[] = [
        {
            id: 1,
            body:
                'Could implement light mode!',
            author: 'Benedict',
            timestamp: new Date(2022, 10, 28, 10, 33, 30),
        },
        {
            id: 2,
            body: 'Tell a story',
            author: 'Casey',
            timestamp: new Date(2022, 11, 1, 11, 11, 11),
        },
        {
            id: 3,
            body: "Try harder",
            author: 'Duuet',
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
        },
    ];

    return (            
        <Fade in={true} timeout={2000}>
            <ul>
                {comments.map((comment) => (
                    <CommentItem comment={comment} styled={styled} key={comment.id} />
                ))}
            </ul>
        </Fade>
    );
};

export default CommentList;
