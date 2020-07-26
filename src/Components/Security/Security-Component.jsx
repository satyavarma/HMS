import React from 'react';
import {Form, Control} from 'react-redux-form';
import {Row, Button, Input} from 'reactstrap';
import './Security-Styles.css';

class Security extends React.Component {
    render(){
        return(
            <div className='security'>
                <Row>
                    <h2>Security</h2>
                    <div className='gap'>
                        <pre>                                                  </pre>
                    </div>
                    <Button className='ButtonLogOut' onClick={this.props.toggleLogOut.bind(this)}>Log-Out</Button>
                </Row>
                <hr />
                <Form model='securityentry' className='formstyle'>
                    <div>
                        <Control.text model=".id" id="id" name="id"
                            placeholder="University ID"
                            className="form-control"/>
                    </div>
                    <div>
<label><pre>   <Input className='radio' name="action" type="radio" value="In"/>In</pre></label> <label><pre>   <Input className='radio' name="action" type="radio" value="Out"/>Out</pre></label>
                    </div>
                    <div>
                        <Button type="submit" className='modalButton'>Submit</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Security;