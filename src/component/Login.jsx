import React, { useState } from 'react'
import styled from 'styled-components'
import user from '../image/user.png';
import password from '../image/password.png';
import emaiicon from '../image/email.png';
const Container=styled.div`
    width: 50%;
    margin: auto;
    /* background-color: #043e68;
    box-shadow: 2px 02px 6px 4px 0px -3px 6px 0px ; */
/* From https://css.glass */
background: rgba(255, 255, 255, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.3px);
-webkit-backdrop-filter: blur(7.3px);
border: 1px solid rgba(255, 255, 255, 0.34);
    border-radius: 20px;
    @media (max-width: 600px) {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  
  }
`
const Img=styled.img`
    width: 30px;
    margin: 0px 25px;
`
const Input=styled.input`
    width: 70%;
    text-align: center;
    padding: 8px 0px;
    border-radius: 10px;
    margin: 5px 0px;
    background: transparent;
    height: 40px;
    outline: none;
    border: none;
    color: white;
    @media (max-width: 600px) {
    width: 100%;
  }
    
`
const Title=styled.h3`
    font-size: 25px;
    text-transform: capitalize;
    text-align: center;
    color: white;
    padding:20px 0px 0px 0px;
`;
const User=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 80%;
    background-color: #f0eeee;
    margin:15px auto;
    border-radius: 20px;
    @media (max-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;
const Buttongroup =styled.div`
   display :flex;
   justify-content: center;
   align-items: center;
`;

const Span=styled.div`
    text-align: center;
    color: #fdffff;
    cursor: pointer;
`;
const Login = () => {
    const [action,setaction]=useState("Signup");

  return (
    <>
<Container>
    <form action="" >
        <Title>{action}</Title>
        <User>
        {action==="login"?<></>:<><Img src={user}/>
        <Input type="text" placeholder='enter your name' name='fname' /></>}
        </User>
        <User>
        <Img src={emaiicon}/>
        <Input type="email" placeholder='enter your email' name='email' />
        </User>
        <User>
        <Img src={password}/>
        <Input type="password" placeholder='enter your password' name='password' />
        </User>
        
        {
            action==="sign up"?<></>:<> <Span>forget password click here</Span></>
        }
           
        
    </form>
    <Buttongroup>
        <>
        <button className={action==="login"?"submit gray":"submit" } onClick={()=>{setaction("sign up")}} >sign up</button>
        <button className={action==="sign up"?"submit gray":"submit" } onClick={()=>{setaction("login")}}>log in</button>
        </>
        </Buttongroup>
</Container>

    </>
  )
}

export default Login