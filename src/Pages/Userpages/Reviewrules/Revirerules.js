import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotelcart from '../Hotelcart/Hotelcart';
import Rulesone from './Rulesone';
import Rulestwo from './Rulestwo';
import Rulethree from './Rulethree';
import { useLocation} from 'react-router-dom'
import Usernavber from '../UserNavbar/Usernavber';
const Revirerules = () => {
    const [ruleone, setRuleone] = useState(true)
    const [ruletwo, setRuletwo] = useState(false)
    const [rulethree, setRulethree] = useState(false);
    const {state} = useLocation();
    const ClickHandler = (rule) => {
        if(rule === 'one')
        {
            setRuleone(false)
            setRuletwo(true)
        }
        if(rule === 'two')
        {
            setRuleone(false)
            setRuletwo(false)
            setRulethree(true)
        }
        if(rule === 'three')
        {
            setRuleone(false)
            setRuletwo(false)
            alert('this is three')
        }
    }
    const DisagreeHandler = () => {
        alert('disagree')
    }
    console.log('totaldata', state.alldata)
    const rule = true
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Row className="justify-content-center">
                <Col className="p-3" lg={7} md={6} sm={12}>
                    {ruleone && <Rulesone formsdata={state.data} totaldata={state.alldata} ClickHandler={ClickHandler}  ></Rulesone>}
                    {ruletwo && <Rulestwo ClickHandler={ClickHandler}></Rulestwo>}
                    {rulethree && <Rulethree ClickHandler={ClickHandler} ></Rulethree>}
                    <button onClick={DisagreeHandler} className="btn btn-dark my-4">DisAgree</button>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Hotelcart rule={rule} formsdata={state.data} totaldata={state.alldata}></Hotelcart>
                </Col>
            </Row>
        </div>
    );
};

export default Revirerules;