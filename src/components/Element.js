import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

class Element extends Component {
    render() {
        return <Container className="ui raised very padded text segment">
            <Header as="h2">Elements</Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit repudiandae odit iste consectetur quaerat dolore porro perspiciatis asperiores aut voluptates ut unde vitae eveniet aliquid officia, culpa a sed.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus nihil ipsa fugiat deleniti, asperiores laboriosam ut error nisi nesciunt veritatis dolor enim harum repellendus. Fugit blanditiis totam soluta aut?</p>
        </Container>;
    }
}

export default Element;