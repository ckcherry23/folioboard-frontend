import PostList from '../components/PostList';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <h3>
                {"Welcome to FolioBoard!"}
            </h3>
            <h4>
                {"This forum is made for developers to ask for portfolio" +
                    " reviews and also give feedback on other's portfolios."}
            </h4>
            <br />
            <PostList />
        </>
    );
};

export default Home;
