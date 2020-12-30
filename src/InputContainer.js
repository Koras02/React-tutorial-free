import styled, { keyframes, css } from 'styled-components';

export const HeaderContainer = styled.div`
   width: 100%;
   padding:2%;
   border:1px solid #000;
   box-sizing: border-box;
   background: gray;

   &:hover{
      transition: 3s;
      background-color:red;
      color:blue
   }
   &:active{
      color:red;
   }
   animation-duration: 0.25s;
   animation-timing-function: ease-out;
   animation-fill-mode: forwards;

   }

   ${props => 
     props.disapper && 
       css`
          animation-name: ${slideUp};
      `}
      
      `

export const HeaderH1 = styled.div`
   color:#000;
   display:block;
   
`

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
  
`
 
export const HeaderP = styled.div`
  color:blue;
  border: 1px solid red;
  padding: 0% 10% 0% 10%;
  display: inline-flex;
  float:right;
  text-align: center;
  @media screen and (max-width:1024px) {
     color:red;
  }

  &:hover{
     color:white;
  }
`

export const Headerli = styled.div`
  color:red;
  display:none;

  @media screen and (max-width:1024px) {
     color:red;
  }

`