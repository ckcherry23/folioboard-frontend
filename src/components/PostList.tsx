import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';
import PostPreview from './PostPreview';

const PostList: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <ul>
                <PostPreview/>
            </ul>
        </div>
    );
};

export default PostList;
