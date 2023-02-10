import { storeSmart, smartTok } from "./data"
import { Card, Button } from "react-bootstrap"

export default function Smart(){
    return(
        <>
            <h1 className="title">Best</h1>
            <div className="product_box">
                {
                    storeSmart.map((smartStore)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product'>
                                <Card.Img variant="top" src={smartStore.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{smartStore.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {smartStore.txt}<br/>{smartStore.price}원
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
                    smartTok.map((tok)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product2'>
                                <Card.Img variant="top" src={tok.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{tok.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {tok.txt}<br/>{tok.price}원
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