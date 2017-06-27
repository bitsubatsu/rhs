import React from 'react'
import { Grid, Form, Button, Image } from 'semantic-ui-react';

const styles = {
    root: {
        marginTop: '5%'
    }
}

const Question = (props) => {
    return (
        <Grid centred columns={3} style={styles.root}>
            <Grid.Column centred width={5}>
            <h3>What is this plant?</h3>
            <Grid.Row height='500'>
            <Image src={props.imageUrl} alt="Whats this?" size='large' shape='rounded' />
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