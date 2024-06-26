import React from 'react'
import styled from 'styled-components'

const Login = (props) => {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/Images/cta-logo-one.svg' alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Description> Get premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 13/10/2023, the price of Disney+ and the Disney Bundle will increase by $1.  </Description>
                <CTALogoTwo src='/Images/cta-logo-two.png' alt=""/>

            </CTA>
            <BgImage/>
        </Content>
    </Container>
  )
}



const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    
`

const BgImage =  styled.div`
    height: 100%;
    background-image: url('/Images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;

`

const CTA = styled.div`
    /* margin-bottom: 2vw;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function:ease-out ;
    opacity: 0.2s; */

    width: 100%; 
     display: flex;
    flex-direction: column; 
    max-width: 650px;
`
const CTALogoOne = styled.img`
    margin-bottom:12px ;
    max-width: 650px;
    min-height: 1px;
    display: block;
    width: 100%;


`

const SignUp = styled.a`
    font-weight:bold ;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 36px;
    padding: 30px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }

    



`
const Description = styled.p`
    color: hsla(0,0%,95.3%, 1);
    font-size: 14px;
    margin:  0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;

`

const CTALogoTwo = styled.img`
    margin-bottom:20px ;
    margin-top: 15px;
    max-width: 650px;
    
    min-height: 1px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;


`

export default Login
