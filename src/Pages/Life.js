import { storeLife, life } from "./data"
import { Card, Button } from "react-bootstrap"

export default function Life(){
    return(
        <>
            <h1 className="title">Best</h1>
            <div className="product_box">
                {
                    storeLife.map((lifeStore)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product'>
                                <Card.Img variant="top" src={lifeStore.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{lifeStore.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {lifeStore.txt}<br/>{lifeStore.price}원
                                    </Card.Text>
                                    <Button variant="primary" className='btn_cart'>장바구니</Button>
                                    <Button variant="primary" className='btn_buy'>구매하기</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>


            <h1 className="title">All</h1>
        
            <div className="product_box2">
                {
                    life.map((life)=>{
                        return(
                            <Card style={{ width: '18rem' }} className='product2'>
                                <Card.Img variant="top" src={life.image} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{life.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {life.txt}<br/>{life.price}원
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