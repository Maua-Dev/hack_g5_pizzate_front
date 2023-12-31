import '../pages/App_TelaLogin.css';
import { MainTitle, InputUser, LogUserBut, LogUserButAct } from '../styled-components/Text';
import { Container, InputContainer, LogContainer } from '../styled-components/container';

import raminho from '../images/raminho.png'
import { ImgTop, ImgBot } from '../styled-components/image';

function TelaLogin() {
  return (  
    <>
      <ImgTop src={raminho} alt={raminho}/>   
      <MainTitle>PIZZATE</MainTitle>

      <Container>

        <InputContainer>
        <InputUser type='text' placeholder='Usuário'></InputUser>
        <InputUser type='password' placeholder='Senha'></InputUser>
        </InputContainer>

        <LogContainer>
        <a href="/Coz" >     <LogUserBut>Login</LogUserBut>      </a> 
          <LogUserBut>Cadastre-se</LogUserBut>
        </LogContainer>

        <ImgBot src={raminho} alt={raminho}/>
   
        </Container>
    </>
  );
}

export default TelaLogin;
