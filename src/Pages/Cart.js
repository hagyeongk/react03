
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount,subCount, deleteItem } from './store';


export default function Cart(){

    const state= useSelector((state)=>{return state}) 
    const dispatch = useDispatch()
 

    return(
        <>
            <Table striped>
                <thead>
                    <tr>
                    <th>품번</th>
                    <th>제품명</th>
                    <th>수량</th>
                    <th>증감</th>
                    <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((item,i)=>{
                            return(
                                <>
                                    <tr key={i}>
                                        <td>{state.cart[i].id}</td>
                                        <td>{state.cart[i].title}</td>
                                        <td>{state.cart[i].count}</td>
                                        <td>
                                            <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
                                            <button onClick={()=>{dispatch(subCount(state.cart[i].id))}}>-</button>
                                            <button onClick={()=>{dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                                        </td>
                                        <td>{state.cart[i].price * state.cart[i].count}</td>
                                    </tr>

                                    

                                </>
                                
                            )
                        })
                    }

                    
                </tbody>
            </Table>
        
        
        
        </>
    )
}