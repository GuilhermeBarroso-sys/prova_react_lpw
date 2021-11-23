import { ButtonContainer, Container, Content, Datetime, Footer, HeaderContent, Local, LocalAndDatetime } from "./styles";
import {BiTrash, BiLike, BiDislike} from 'react-icons/bi'
export function Dashboard() {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <p>Bike aro 29</p>
        </HeaderContent>
        <LocalAndDatetime>
          <Datetime>
            <strong>Data da compra</strong>
            <p>Domingo</p>
            <p>28/11/2021 15:00</p>
          </Datetime>
          <Local>
            <strong>Local</strong>
            <p>Americanas </p>
          </Local>
        </LocalAndDatetime>
        <Footer>
          <ButtonContainer>
            <BiLike cursor="pointer" color="green"/>
            <BiDislike cursor="pointer" color="#bf3730"/>
            <BiTrash cursor="pointer" color="red"/>

          </ButtonContainer>
        </Footer>
      </Content>
      <Content>
        <HeaderContent>
          <p>Mochila</p>
        </HeaderContent>
        <LocalAndDatetime>
          <Datetime>
            <strong>Data da compra</strong>
            <p>Sexta-Feira</p>
            <p>26/11/2021 11:00</p>
          </Datetime>
          <Local>
            <strong>Local</strong>
            <p>Submarino </p>
          </Local>
        </LocalAndDatetime>
        <Footer>
          <ButtonContainer>
            <BiLike cursor="pointer" color="green"/>
            <BiDislike cursor="pointer" color="#bf3730"/>
            <BiTrash cursor="pointer" color="red"/>

          </ButtonContainer>
        </Footer>
      </Content>
      <Content>
        <HeaderContent>
          <p>Computador Gamer</p>
        </HeaderContent>
        <LocalAndDatetime>
          <Datetime>
            <strong>Data da compra</strong>
            <p>Quinta-Feira</p>
            <p>25/11/2021 18:00</p>
          </Datetime>
          <Local>
            <strong>Local</strong>
            <p>Kabum</p>
          </Local>
        </LocalAndDatetime>
        <Footer>
          <ButtonContainer>
            <BiLike cursor="pointer" color="green"/>
            <BiDislike cursor="pointer" color="#bf3730"/>
            <BiTrash cursor="pointer" color="red"/>

          </ButtonContainer>
        </Footer>
      </Content>
    </Container>
  )
}
/**Crie um componente Dashboard para listar as informações nome do evento,
local, dia da semana e horário, deverá ser listado num formato de post (como o
instagram) e na parte inferior ter o botão de Excluir, Like e Dislike */