import React from 'react';
import {Row, Button} from 'reactstrap';
import {Form, Control} from 'react-redux-form';
import './Doctor-Styles.css';

class Doctor extends React.Component{
    render(){
        return(
            <div className='doctor'>
                <Row>
                    <h2 className='subItem'>Doctor</h2>
                    <div className='gap'>
                        <pre>                                                  </pre>
                    </div>
                    <Button className='subItem' onClick={this.props.toggleLogOut.bind(this)}>Log-Out</Button>
                </Row>
                <hr />
                <Form model='doctorprescription'>
                    <div>
                        <Control.text model=".id" id="id" name="id"
                            placeholder="University ID"
                            className="form-control"/>
                    </div>
                    <p></p>
                    <div>
                        <Control.textarea model="prescription" id="prescription" name="prescription"
                            placeholder="prescription"
                            className="form-control"/>
                    </div>
                    <p></p>
                    <div>
                        <Button >Forward To pharmacy</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Doctor;