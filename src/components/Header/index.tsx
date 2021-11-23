import { Container, Content } from "./styles";
import logo from '../../assets/react.svg'
import {BiAddToQueue} from 'react-icons/bi'
export function Header() {
  return(
    <Container>
      <Content>
        <img src = {logo} alt="logo"/>
        <BiAddToQueue 
          size ="25" 
          color="white"
          cursor="pointer"
        />
      </Content>
    </Container>
  )
}