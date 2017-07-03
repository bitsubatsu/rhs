import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react';
var Carousel = require('nuka-carousel');
// var Carousel = require('react-responsive-carousel').Carousel;

const styles = {
    root: {
        marginTop: '5%'
    }
}

const Question = (props) => {
    return (
        <Grid columns={1} style={styles.root}>
            <Grid.Column  width={5}>
            <h3>What is this plant?</h3>
            <Grid.Row height='500'>
                <Carousel width="800px">
                    {props.imageUrl.map(function(url, i) {
                            return (<img src={url} alt="Whats this?" />)
                        })
                    }
                </Carousel>
            </Grid.Row>
            <Form >
                <Form.Group widths='equal'>
                    <Form.Input label='Common Name' placeholder={props.commonName} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Latin Name' placeholder={props.latinName} />
                </Form.Group>
            </Form>
           
              <Button className="ui primary button" onClick={props.onNext}>Next</Button>
              </Grid.Column>
        </Grid>
    )
}

export default Question