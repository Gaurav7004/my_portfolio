import React, {Componrnt, Component} from 'react';
import {Grid, Cell, } from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                <img           
                            //src="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"
                            src="data:image/jpeg;base64,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"
                            alt="file-not-showing"
                            className="avatar-img"
                            />
                </div>
    
                <h2 style={{paddingTop: '2em'}}>Gaurav Raj</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>I am a computer science engineer.</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Address</h5>
                <p>Qr-No. DT-2555, Tanki Side, Dhurwa, Ranchi-4</p>
                <h5>Phone</h5>
                <p>+91-7004249772</p>
                <h5>Email</h5>
                <p>graj499@gmail.com</p>
                <h5>Web</h5>
                <p>mywebsite.com</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
    
    
                <Education
                  startYear={2016}
                  endYear={2020}
                  schoolName="RITEE RAIPUR"
                   />
    
                
                  <hr style={{borderTop: '3px solid #e22947'}} />
    
                  <h2>Experience</h2>
    
                <Experience
                  startYear={2019}
                  endYear={2020}
                  jobName="Freelancer"
                  jobDescription="Machine Learning and Python projects."
                  />
    

                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Skills</h2>
                  <Skills
                    skill="Python"
                    progress={80}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={70}
                      />
                      <Skills
                        skill="ReactJS"
                        progress={70}
                        />
                        <Skills
                          skill="C/C++"
                          progress={60}
                          />
                          <Skills
                            skill="Machine Learning/ Deep Learning"
                            progress={75}
                            />
                            <Skills
                              skill="Blockchain"
                              progress={60}
                              />
                              <Skills
                              skill="AWS/GCP"
                              progress={60}
                              />
                            
    
    
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Resume;