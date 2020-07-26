import React from 'react';
import Pharmacist from '../../Components/Pharmacist/Pharmacist-Component';
import {Form, Control} from 'react-redux-form';
import {Row, Label, Col, Button} from 'reactstrap';
import './PharmacistLogIn-Styles.css';
import Axios from 'axios';

class PharmacistLogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogedIn: false
        };
        this.handlePharmacyLogInSubmit = this.handlePharmacyLogInSubmit.bind(this);
        this.toggleLogInSuccess = this.toggleLogInSuccess.bind(this);
        this.toggleLogOut = this.toggleLogOut.bind(this);
        this.handleReload = this.handleReload.bind(this);
    }

    handlePharmacyLogInSubmit(values){
        Axios.post('http://localhost:5000/pharmacy/login', {
            username: values.username.toString(),
            password: values.password.toString()
        })
        .then((response) => {
            if(response.data.success){
                this.toggleLogInSuccess();
            }
            else{
                alert(response.data.info);
            }
        })
        .catch(err => { console.log(err); });
    }

    toggleLogInSuccess(){
        this.setState({
            isLogedIn: true
        })
        
    }

    toggleLogOut(){
        this.setState({
            isLogedIn: false
        })
        this.handleReload();
    }

    handleReload(){
        window.location.reload();
    }
    render(){
        if (this.state.isLogedIn){
            return (
                <Pharmacist toggleLogOut={this.toggleLogOut}/>
            );
        }
        else {
            return(
                <div className='PharmacistLogIn'>
                    <h3>Pharmacist LogIn</h3>
                    <hr />
                    <Form model='pharmacistlogin' onSubmit={(values) => this.handlePharmacyLogInSubmit(values)}>
                        <Row className = 'form-group'>
                            <Label htmlFor='username'>UserName</Label>
                            <Col>
                                <Control.text model=".username" id="username" name="username"
                                    placeholder="User Name"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="Password">Password</Label>
                            <Col>
                                <Control.password model=".password" id="password" name="password"
                                    placeholder="Password"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Button type="submit" className='modalButton'>Log-In</Button>
                    </Form>
                </div>
            );
        }
    };
}

export default PharmacistLogIn;