import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

const PostPreviewCard: React.FC = () => {
    return (

        <li>
            <Link to="/post/1">{'Student front-end developer portfolio, please review!'}</Link>
            {' by Charisma'}
        </li>
    );
};

export default PostPreviewCard;
