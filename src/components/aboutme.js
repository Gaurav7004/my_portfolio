import React, { Component } from 'react';
import { CardTitle, Card, CardText, Button, CardMenu, IconButton, CardActions} from 'react-mdl';
class About extends Component {
  render()  {
    return(
        <div className="about-img">
        
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffc', height: '450px',width: '500px', background: 'url(https://images.fineartamerica.com/images-medium-large-5/morning-dawn-michael-pickett.jpg) center / cover'}} >Who Am I?</CardTitle>
                    <CardText style={{fontSize: 20}}>
                      I am a Computer Science and Technology enthusiast.
                    </CardText>
                    
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="" />
                    </CardMenu>
                  </Card> 

                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffc', height: '400px',width: '500px', background: 'url(https://media.pixcove.com/Q/6/8/Sunrise-Dawn-Vacation-Travel-Morning-Sunset-Orange-4044.jpg) center / cover'}} >What are my Interests?</CardTitle>
                    <CardText style={{fontSize: 20}}>
                      Machine Learning, AI and Blockchain.
                    </CardText>
                    
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="" />
                    </CardMenu>
                  </Card>

                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffc', height: '350px',width: '500px', background: 'url(https://s2.best-wallpaper.net/wallpaper/iphone/1504/Norway-fjord-summer-morning-dawn-red-sky_iphone_640x960.jpg) center / cover'}} >What are my Aspirations?</CardTitle>
                    <CardText style={{fontSize: 20}}>
                      Learning New Technologies.
                    </CardText>
                    
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="" />
                    </CardMenu>
                    </Card>

      </div>                
    )
  }
}

export default About;