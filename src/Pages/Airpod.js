import { airCase, storeAir } from "./data"
import { Card, Button } from "react-bootstrap"


export default function Airpod(){
    return(
        <>
            <h1 className="title">Best</h1>

            <div className="product_box">
                {
                    storeAir.map((airStore)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product'>
                                <Card.Img variant="top" src={airStore.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{airStore.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {airStore.txt}<br/>{airStore.price}원
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
                    airCase.map((caseAir)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product2'>
                                <Card.Img variant="top" src={caseAir.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{caseAir.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {caseAir.txt}<br/>{caseAir.price}원
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