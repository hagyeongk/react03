

import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { addItem } from "./store"







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
    const dispatch = useDispatch()


    
    

    return(
        <>
            <h1>자세히 보기</h1>
            <h4>{best[id].title}</h4>
            <img src={best[id].image} alt="" style={{width: 286, height: 282}}/>
            <p>{best[id].txt}</p>
            <p>{best[id].price}원</p>
            <Button onClick={()=>{dispatch(addItem({id:best[id].id, title:best[id].title, count:1, price:best[id].price}))}}>장바구니</Button>
        </>
    )

}