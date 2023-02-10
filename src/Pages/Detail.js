

import { useParams } from "react-router-dom"
import styled from "styled-components"







const Button = styled.button`
    background-color: black;
    border: 0;
    color: #eee;
    padding: 5px 5px;
    border-radius: 5px;
        &:hover {
            background-color: #ccc;
            color: black;
        }
`




export default function Detail(props){

    const {best} = props
    const {id} = useParams()
  


    
    

    return(
        <>
            <h1>자세히 보기</h1>
            <h4>{best[id].title}</h4>
            <img src={best[id].image} alt="" style={{width: 286, height: 282}}/>
            <p>{best[id].txt}</p>
            <p>{best[id].price}원</p>
            <Button>장바구니</Button>
        </>
    )

}