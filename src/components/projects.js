import React, {Componrnt, Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
        }

        toggleCategories() {

            if(this.state.activeTab === 0){
              return(
                <div className="projects-grid">
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Portfolio App #1</CardTitle>
                    <CardText>
                      This is my portfolio app.
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>                            
                </div>
        
        
              )
            } else if(this.state.activeTab === 1) {
              return (
                <div>
                    {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://i.pinimg.com/originals/de/fc/90/defc902aa5b20702bac8ef138b41fea2.jpg) center / cover'}} > </CardTitle>
                    <CardText>
                      This is an IOT based Smart Irrigation System
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card> 
                </div>
              )
            } else if(this.state.activeTab === 2) {
              return (
                <div>
                    {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNwTfR_EzAaexYd3KaQc6aeqJavT3LA3E3d-8itf6JmPLbXrpj&usqp=CAU) center / cover'}} >#Project 1</CardTitle>
                    <CardText>
                      This is a Smart Desktop AI Assistant
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card> 
                </div>
              )
            } else if(this.state.activeTab === 3) {
              return (
                <div>
                    {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://twilio-cms-prod.s3.amazonaws.com/images/django-dark.width-808.png) center / cover'}} >Django App #1</CardTitle>
                    <CardText>
                      Django APP
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card> 
                </div>
              )
            }
    }

    render() {
        return(
            <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>IOT</Tab>
          <Tab>Python</Tab>
          <Tab>Django</Tab>
          </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
            </div>
        )
    }
}

export default Projects;