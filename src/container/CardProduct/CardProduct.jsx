import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import '../Product/Product.css'

export default class CardProduct extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    render() {
        return (
            <Card className="my-5 m-auto" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/A1101103.jpg" />
                <Card.Body>
                    <Card.Title>Ayam Utuh Frozen 0.8-0.9 Kg [isi 1 Ekor]</Card.Title>
                    <Card.Title className="text-warning">
                        Rp. 31.500
                    </Card.Title>
                    
                    <Button className="count-btn mx-1 ml-3" variant="primary" onClick={this.handleMinus}>-</Button>
                    <Button className="ml-1 value-btn" variant="primary" value={this.state.order}>{this.state.order}</Button>
                    <Button className="count-btn mx-1 ml-2" variant="primary" onClick={this.handlePlus}>+</Button>
                </Card.Body>
            </Card>
        )
    }
}
