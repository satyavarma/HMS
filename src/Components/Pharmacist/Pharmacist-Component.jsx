import React from 'react';
import {Row, Button} from 'reactstrap';
import {Form, Control} from 'react-redux-form';
import './Pharmacist-Styles.css';

class Pharmacist extends React.Component{
    render(){
        return(
            <div className='pharmacist'>
                <Row>
                    <h2 className='subItem'>Pharmacy</h2>
                    <div className='gap'>
                        <pre>                                                  </pre>
                    </div>
                    <Button className='subItem' onClick={this.props.toggleLogOut.bind(this)}>Log-Out</Button>
                </Row>
                <hr />
                <Form model='pharmacysearch'>
                    <Row>
                        <div>
                        <Control.text model=".id" id="id" name="id"
                            placeholder="University ID"
                            className="form-control"/>
                        </div>
                        <div>
                            <pre>   <Button>Search</Button></pre>
                        </div>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default Pharmacist;