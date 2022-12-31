import '../App.css';

import React from 'react';
import PostPreviewCard from './PostPreviewCard';

const PostList: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <ul>
                <PostPreviewCard />
            </ul>
        </div>
    );
};

export default PostList;
