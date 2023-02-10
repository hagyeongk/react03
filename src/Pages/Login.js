import './Login.css'

export default function Login(){
    return(
        <>
            <h1>로그인</h1>

            <div className="login_box">
                <p className='login_title'>아이디</p>
                <input type="text" name="id" id="id" />
                <p className='login_title'>비밀번호</p>
                <input type="password" name="pw" id="pw" />
            </div>

            <button className='log_btn' onClick={()=>{
                const id = 'hagyeong'
                const pw = '1234'
                const userId = document.getElementById('id').value
                const userPw = document.getElementById('pw').value
                
                if(id === userId && pw === userPw) {
                    alert('환영합니다!')
                    window.location.href=('http://localhost:3000')
                } else if(id === userId && pw !== userPw) {
                    alert('비밀번호가 일치하지 않습니다')
                    window.location.reload()
                } else if(id !== userId && pw === userPw) {
                    alert('아이디가 일치하지 않습니다')
                    window.location.reload()
                } else  {
                    if(id !== userId && pw !== userPw)
                    alert('아이디와 비밀번호 모두 일치하지 않습니다')
                    window.location.reload()
                } 
                

            }}>로그인</button>

            <button className='join_btn' onClick={()=>{
                window.location.href=('http://localhost:3000/Join')
            }}>회원가입</button>

        </>
    )
    
    
}