import React from 'react'
import { HeaderContainer, HeaderH1, HeaderP,Headerli } from './InputContainer' 
import { Route, Link } from 'react-router-dom';
import Cores from './Cores';
 
 

function App({ slideUp }){
   return (
   <div>
     <HeaderContainer slideUp={slideUp}>
       <HeaderH1>여기는 홈입니다.</HeaderH1>
       <HeaderP>메뉴</HeaderP>
      <HeaderP>메뉴</HeaderP>
      <HeaderP>
         메뉴
      <Headerli>1</Headerli>
      </HeaderP>
      <HeaderP>메뉴</HeaderP>            
     </HeaderContainer>
     <Link to="/Cores" target="blank">하이</Link>
     <Route path="/Cores" component={Cores} exact/>
   </div>
   )
}
export default App;
