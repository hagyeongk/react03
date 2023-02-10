import './Login.css'

export default function Join(){
    return(
        <div>
            
            <h1>회원가입</h1>

            <div className="join_box">
                <p className="join_title">아이디</p>
                <input type="text" name="id" id="id" />
                <p className="join_title">이름</p>
                <input type="text" name="name" id="name" />
                <p className="join_title">비밀번호</p>
                <input type="password" name="pw" id="pw" />
                <p className="join_title">비밀번호 확인</p>
                <input type="password" name="pw2" id="pw2" />
                <p className="join_title">휴대폰 번호</p>

                <div className='phone_box'>
                    <select name="phone" id="phone">
                        <option value="1" >010</option>
                        <option value="2">011</option>
                        <option value="3">017</option>
                    </select>
                    <input type="tel" name="tel1" id="tel1" /> 
                    <input type="tel" name="tel2" id="tel2" /> 
                </div>

                <p className="join_title">생년월일</p>

                <div style={{ height:'40px', marginBottom:'30px'}}>
                    <select name="year" id="phone">
                        <option value="0"> 생년</option> 
                        <option value="1">1990</option>
                        <option value="2">1991</option>
                        <option value="3">1992</option>
                        <option value="4">1993</option>
                        <option value="5">1994</option>
                    </select>
                   
                    <select name="month" id="tel1">
                        <option value="0">월</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                    </select>
                  
                    <select name="date" id="tel2">
                        <option value="0">일</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                    </select>
                    
                </div>
                
                <div className="agree_box"></div>
                    <label htmlFor="all" className='agree'><input type="checkbox" name="all" id="all" onClick={()=>{
                        if(true){
                            document.getElementById('must1').checked = true;
                            document.getElementById('must2').checked = true;
                            document.getElementById('choose').checked = true;
                        }
                            
                        



                    }}/> 모두 동의합니다</label>

                    <label htmlFor="must1" className='agree'><input type="checkbox" name="must1" id="must1" /> (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.</label>

                    <label htmlFor="must2" className='agree'><input type="checkbox" name="must2" id="must2" /> (필수) 만 14세 이상입니다. 
                    <p className='agree_txt'>만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를<br/> 취소 할 수 있습니다.</p>
                    </label>

                    <label htmlFor="choose" className='agree'><input type="checkbox" name="choose" id="choose" /> (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
                    <p className='agree_txt'>회원은 언제든지 회원 정보에서 수신 거부로 변경할 수 있습니다.</p>
                    </label>
                    <button className='write_finish' onClick={()=>{
                        let result = window.confirm('가입하시겠습니까?')
                        if(result === true ){
                            alert('가입이 완료되었습니다.')
                            window.location.href=('http://localhost:3000')
                        } else {
                            alert('가입이 취소되었습니다.')
                            window.location.reload()
                            document.querySelector('#id').focus()
                        }

                    }}>가입하기</button>

            </div>
        
        
        </div>

            

        
    )
}