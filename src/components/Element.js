import React, { Component } from 'react'
import { Container, Header, Button, Icon, Label, Segment, Divider, Flag, List } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

class Element extends Component {
    render() {

        return <Container className="ui raised very padded text" style={{ marginTop: 50 + "px" }}>
            <Header as="h2">Elements</Header>
            <p>
              Pour en savoir plus voici le lien de {"  "}
              <a href="https://react.semantic-ui.com" target="_blank" rel="noopener noreferrer">
                {" "}
                React Semantic UI
              </a>
            </p>
            <p>Buttons</p>
            <div>
              <Button>Default</Button>
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>
              <Button.Group>
                <Button animated>
                  <Button.Content visible>Prev</Button.Content>
                  <Button.Content hidden>
                    <Icon name="left arrow" />
                  </Button.Content>
                </Button>

                <Button animated>
                  <Button.Content visible>Next</Button.Content>
                  <Button.Content hidden>
                    <Icon name="right arrow" />
                  </Button.Content>
                </Button>
              </Button.Group>
            </div>
            <div style={{ marginTop: 10 + "px" }}>
              <Button as="div" labelPosition="right">
                <Button icon>
                  <Icon name="heart" />
                  Like
                </Button>
                <Label as="a" basic pointing="left">
                  1,024
                </Label>
              </Button>
              <Button as="div" labelPosition="left">
                <Label as="a" basic pointing="right">
                  512
                </Label>
                <Button icon>
                  Fork
                  <Icon name="fork" />
                </Button>
              </Button>
              <Button as="div" labelPosition="right">
                <Button color="red" icon>
                  <Icon name="heart" />
                  Like
                </Button>
                <Label as="a" color="red" basic pointing="left">
                  1,024
                </Label>
              </Button>
              <Button as="div" labelPosition="left">
                <Label as="a" color="blue" basic pointing="right">
                  512
                </Label>
                <Button color="blue" icon>
                  Fork
                  <Icon name="fork" />
                </Button>
              </Button>
            </div>
            <div style={{ marginTop: 10 + "px" }}>
              <Button inverted color="olive">
                Olive
              </Button>
              <Button inverted color="green">
                Green
              </Button>
              <Button inverted color="teal">
                Teal
              </Button>
              <Button inverted color="blue">
                Blue
              </Button>
              <Button inverted color="purple">
                Purple
              </Button>
              <Button inverted color="pink">
                Pink
              </Button>
              <Button inverted color="brown">
                Brown
              </Button>
            </div>
            <div style={{ marginTop: 10 + "px" }}>
              <Button.Group>
                <Button>un</Button>
                <Button.Or text="ou" />
                <Button positive>deux</Button>
              </Button.Group> <Button.Group>
                <Button>Un</Button>
                <Button.Or />
                <Button>Deux</Button>
                <Button.Or />
                <Button>Trois</Button>
              </Button.Group>
            </div>
            <div style={{ marginTop: 10 + "px" }}>
              <Segment padded>
                <Button primary fluid>
                  Login
                </Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>
                  Sign Up Now
                </Button>
              </Segment>
            </div>
            <p>Flags</p>
            <div style={{ marginTop: 10 + "px" }}>
              <Segment>
                <Flag name="cg" />
                <Flag name="ca" />
                <Flag name="sn" />
                <Flag name="cm" />
                <Flag name="ci" />
                <Flag name="bi" />
                <Flag name="bf" />
                <Flag name="bw" />
                <Flag name="bj" />
                <Flag name="ao" />
                <Flag name="dz" />
                <Flag name="af" />
                <Flag name="cf" />
                <Flag name="td" />
                <Flag name="cd" />
                <Flag name="et" />
                <Flag name="fr" />
                <Flag name="ga" />
                <Flag name="gm" />
                <Flag name="gh" />
                <Flag name="gn" />
                <Flag name="gw" />
                <Flag name="ke" />
                <Flag name="ml" />
              </Segment>
            </div>
            <p>Header</p>
            <div style={{ marginTop: 10 + "px" }}>
              <Header as="h2" icon>
                <Icon name="settings" />
                Parametres de compte
                <Header.Subheader>
                  Modifier les parametres du compte.
                </Header.Subheader>
              </Header>
              <Header as="h2" icon textAlign="center">
                <Icon name="users" circular />
                <Header.Content>Liste d'amis</Header.Content>
              </Header>
            </div>
            <p>Menu Arbre</p>
            <div style={{ marginTop: 10 + "xp" }}>
              <List>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>src</List.Header>
                    <List.Description>
                      Source files for project
                    </List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name="folder" />
                        <List.Content>
                          <List.Header>site</List.Header>
                          <List.Description>
                            Your site's theme
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="folder" />
                        <List.Content>
                          <List.Header>themes</List.Header>
                          <List.Description>
                            Packaged theme files
                          </List.Description>
                          <List.List>
                            <List.Item>
                              <List.Icon name="folder" />
                              <List.Content>
                                <List.Header>default</List.Header>
                                <List.Description>
                                  Default packaged theme
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="folder" />
                              <List.Content>
                                <List.Header>my_theme</List.Header>
                                <List.Description>
                                  Packaged themes are also available in
                                  this folder
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="file" />
                        <List.Content>
                          <List.Header>theme.config</List.Header>
                          <List.Description>
                            Config file for setting packaged themes
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>dist</List.Header>
                    <List.Description>
                      Compiled CSS and JS files
                    </List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name="folder" />
                        <List.Content>
                          <List.Header>components</List.Header>
                          <List.Description>
                            Individual component CSS and JS
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="file" />
                  <List.Content>
                    <List.Header>semantic.json</List.Header>
                    <List.Description>
                      Contains build settings for gulp
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </Container>;
    }
}

export default Element;