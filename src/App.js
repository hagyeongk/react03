import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import { Nav, Navbar, Container,Card, Button } from 'react-bootstrap';
import Login from './Pages/Login';
import Phone from './Pages/Phone';
import Airpod from './Pages/Airpod';
import Smart from './Pages/Smart';
import Life from './Pages/Life';
import Join from './Pages/Join';
import { storeNew, storePhone, storeAir, storeSmart, storeLife } from './Pages/data';
import './Pages/Store.css';
import Detail from './Pages/Detail';
import { useState } from 'react';
import Cart from './Pages/Cart';
import { useDispatch } from 'react-redux';
import { addItem } from './Pages/store';






function App() {

    const navigate = useNavigate()
    const [best] = useState(storeNew)
    const dispatch = useDispatch()
   
   

   

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>YOPHORIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/Login')}}>Login</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Cart')}}>Cart</Nav.Link>
     
           
      
          </Nav>
        </Container>
      </Navbar>
      <p className='credit'>신용카드 결제 시 최대 12개월 할부 적용가능. <span className='credit_more'>더알아보기</span></p>

      <section className='lnb_box'>
        <div onClick={()=>{navigate('/Phone')}} className='phone'>
          <img src={process.env.PUBLIC_URL + '/images/phonebest03.jpg'} alt="phone" />
          <span>Phone Case</span>
        </div>
        <div onClick={()=>{navigate('/Airpod')}} className='air'>
          <img src={process.env.PUBLIC_URL + '/images/mainair07.jpg'} alt="air" />
          <span>Airpod</span>
        </div>
        <div onClick={()=>{navigate('/Smart')}} className='smart'>
          <img src={process.env.PUBLIC_URL + '/images/mainsmart06.jpg'} alt="smart" />
          <span>Smart</span>
        </div>
        <div onClick={()=>{navigate('/Life')}} className='life'>
          <img src={process.env.PUBLIC_URL + '/images/mainlife07.jpg'} alt="life" />
          <span>Life</span>
        </div>
      </section>


      <Routes>
        <Route path='/' element={
          <>
            <h1 className='yuphoria'>유포리아에서 나만의 스타일을 찾으세요 </h1>
            <h1 className="title">신제품</h1>

            <div className="new_box">
                {
                    storeNew.map((newStore,i)=>{
                        return(
                           <>
                           
                            <Card style={{ width: '18rem' }} className='new_card'>
                                <Link to={`/detail/${i}`}>
                                    <Card.Img variant="top" src={newStore.image} />
                                </Link>
                                <Card.Body>
                                    <Card.Title style={{fontSize:'20px'}}>{newStore.title}</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    {newStore.txt}<br/>{newStore.price}원
                                    </Card.Text>
                                    <Button variant="primary" className='btn_cart' onClick={()=>{dispatch(addItem({id:newStore.id, title:newStore.title, count:1, price:newStore.price}))}}>장바구니</Button>
                                    <Button variant="primary" className='btn_buy'>구매하기</Button>
                                </Card.Body>
                            </Card>
                            
                           </>
                        )
                    })
                }
            </div>

            <div className='main_box01'>
                <p> 마치 꿈속에서 본듯한 안젤라 로즈의 이미지를<br/> 몽환적인 무드로 풀어낸 유광 케이스입니다.<br/>
                오묘한 보랏빛과 푸른빛이 섞여 컬러감이<br/> 매력적인 제품입니다<br/>
                <h5 className='more' onClick={()=>{navigate('/Airpod')}}>더보기</h5>
                </p>
                <a href="#!" className="main01"><img src={process.env.PUBLIC_URL + '/images/airpod_detail_main01.jpg'} alt="main" /></a>
            </div>

            <h1 className="title">폰 케이스</h1>
            <div className="product_box">
                {
                    storePhone.map((phoneStore,i)=>{
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
            <h5 className="more" onClick={()=>{navigate('/Phone')}}>더알아보기</h5>

            <h1 className="title">에어팟 케이스</h1>
            <div className="product_box">
                {
                    storeAir.map((airStore,i)=>{
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
            <h5 className="more" onClick={()=>{navigate('/Airpod')}}>더알아보기</h5>

            <h1 className="title">스마트톡</h1>
            
            <div className="product_box">
                {
                    storeSmart.map((smartStore,i)=>{
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
            <h5 className="more" onClick={()=>{navigate('/Smart')}}>더알아보기</h5>

            <h1 className="title">라이프</h1>
            <div className="product_box">
                {
                    storeLife.map((lifeStore,i)=>{
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
            <h5 className="more" onClick={()=>{navigate('/Life')}}>더알아보기</h5>
                </>
        }></Route>
        <Route path='login' element={<Login />} />
        <Route path='phone' element={<Phone />} />
        <Route path='airpod' element={<Airpod />} />
        <Route path='smart' element={<Smart />} />
        <Route path='life' element={<Life />} />
        <Route path='join' element={<Join />} />
        <Route path='cart' element={<Cart />} />
        <Route path='detail/:id' element={<Detail best={best} />} />
      </Routes>

      <footer className="footer">
            <ul>
                <li><a href="#!">회사소개</a></li>
                <li><a href="#!">이용약관</a></li>
                <li><a href="#!">개인정보취급방침</a></li>
                <li><a href="#!">이용안내</a></li>
                <li><a href="#!">제휴문의</a></li>
            </ul>

            <div class="footer_bottom">
                <ul class="btm01">
                    <li>Customer Center<br/>070-123-4567</li>
                    <li>
                        <span class="price_end">평일 오전 </span>10:00 ~ 오후  5:00 <br/>
                        <span class="price_end">점심 오후 </span>12:00 ~ 오후 1:30

                    </li>
                </ul>

                <ul class="btm02">
                    <li>Company Name: Yuphoria | Owner: JihaLim</li>
                    <li>Email: worldofyuphoria@gmail.com</li>
                    <li>Address: 서울특별시 중구 퇴계로 27길 40 B1층 </li>
                    <li>Business Registration Number: 012- 34 - 56789</li>
                    <li><a href="#!">안전구매 (에스크로)서비스 가맹점</a></li>
                    <li>Copyright Yuphoria All rights resserved</li>
                </ul>
            </div>
            </footer>


    </div>
  );
}
 
export default App;
