import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts'
import Form from './components/Form/Form';
import image from './assets/memories.png';
import useStyles from './style';

const App = () => { 
    const style = useStyles();
    const disptach = useDispatch();
    useEffect(() => {
        disptach(getPosts)
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <Container maxWidth='lg'>
            <AppBar className={style.appBar} position='static' color='inherit'>
                <Typography className={style.heading} variant='h2' align='center'>Memories</Typography>
                <img className={style.image} src={image} alt='memories' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;