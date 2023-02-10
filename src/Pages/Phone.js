import { storePhone, phoneCase } from "./data"
import { Card, Button } from "react-bootstrap"
import './Phone.css'

export default function Phone(){
    return(
        <>
            <h1 className="title">Best</h1>

            <div className="product_box">
                {
                    storePhone.map((phoneStore)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product'>
                                <Card.Img variant="top" src={phoneStore.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{phoneStore.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {phoneStore.txt}<br/>{phoneStore.price}원
                                    </Card.Text>
                                    <Button variant="primary" className='btn_cart'>장바구니</Button>
                                    <Button variant="primary" className='btn_buy'>구매하기</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

            <h1 className="title">ALL</h1>  
            <div className="product_box2">
                {
                    phoneCase.map((casePhone)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product2'>
                                <Card.Img variant="top" src={casePhone.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{casePhone.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {casePhone.txt}<br/>{casePhone.price}원
                                    </Card.Text>
                                    <Button variant="primary" className='btn_cart'>장바구니</Button>
                                    <Button variant="primary" className='btn_buy'>구매하기</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>




        </>
    )
}