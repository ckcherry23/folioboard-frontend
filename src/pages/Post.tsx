import CommentList from '../components/CommentList';
import { Button, Card, CardContent, Fade, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import React from 'react';

const Post: React.FC = () => {
    const portfolioLink = 'ckcherry23.github.io'

    return (
        <div style={{ width: '30vw', margin: 'auto' }}>
            <Fade in={true} timeout={1000}>
                <Card>
                    <CardContent>
                        <Typography component="p">{'Viewing post:'}</Typography>
                        <Typography variant="h5" component="h5">
                            {'Student front-end developer portfolio, please review!'}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {'by Charisma'}
                        </Typography>
                        <a href={"https://" + portfolioLink} target="_blank" >
                            <Button variant="text" color="primary">
                                {`Visit portfolio at ${portfolioLink}`}
                            </Button>
                        </a>
                        <Typography variant="body2" component="p">
                            {'I am a Y3 CS student at NUS.'}
                        </Typography>
                    </CardContent>
                </Card>
            </Fade>
            <CommentList styled={true} />
            <Link to="/">
                <Button variant="contained" color="secondary">
                    {'Back to home'}
                </Button>
            </Link>
        </div>
    );
};

export default Post;
