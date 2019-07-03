import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""

        }
    }

    render() {
        return (
        <div class="App-header">
            <div id="container">
                <Form>
                    <h1>Login form</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                   <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        )
    }
}
