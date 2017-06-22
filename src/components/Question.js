import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react';

const styles = {
    root: {
        marginTop: '5%'
    }
}

const Question = (props) => {
    return (
        <Grid centred style={styles.root}>
            <Grid.Column centred width={5}>
            <h3>What is this plant?</h3>
            <div><img src={props.imageUrl} alt="Whats this?" height="300" width="300" /></div>
            <Form width='500'>
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