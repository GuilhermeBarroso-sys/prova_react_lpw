import styled from 'styled-components';

export const Container = styled.header`
  margin-top:100px;
  width:100%;
  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const HeaderContent = styled.div`
  max-width:1000px;
  display:flex;
  width: 100%;
  background:#222423;
  border: 1px solid #222423;
  border-radius:2px;
  text-align:center;
  justify-content: center;
  align-items: center;
  p {
    color:var(--shape);
  }
`

export const Content = styled.div`
  width:30%;
  max-width:1000px;
  display:flex;
  background-color:var(--shape);
  border-radius:2px;
  flex-direction: column;
  justify-content: center;
`

export const LocalAndDatetime = styled.div`
  margin-top:10px;
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
export const Datetime = styled.div`
  width:100%;
  text-align:center;
  p {
    margin: 2px 0;
    font-size:1rem;
    align-items:center;
   }
   margin-bottom:5px;
`

export const Local = styled.div`
  margin-top:5px;
  width:100%;
  text-align:center;
  p {
    font-size:1rem;
    align-items:center;
  }
`
export const Footer = styled.div `
  margin-top:15px;
  border-top: 1px solid #222423;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const ButtonContainer = styled.div`
  display:flex;
  align-items: center;
  height:30px;
  justify-content: space-around;
  width:100%;
`
/**Crie um componente Dashboard para listar as informações nome do evento,
local, dia da semana e horário, deverá ser listado num formato de post (como o
instagram) e na parte inferior ter o botão de Excluir, Like e Dislike */