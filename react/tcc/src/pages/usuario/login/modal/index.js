import { useEffect, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;

    display: ${props => props.show === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    z-index: 100;

  .content {
    margin-top: -10px;
    background-image: url('./assets/images/fundo-login.png');
    background-repeat: no-repeat;
    background-size: 100em;
    padding: 1em;
  }

  animation: ${props => props.show === true ? 'show_animation' : 'none'} .3s forwards;
  animation-delay: .1s;
  
  @keyframes show_animation {
    100% {
      background-color: rgba(0,0,0,0.6);
    }
  }
  
`




export default function Modal(props) {
  const [show, setShow] = useState(false);


  useEffect(() => {
    setShow(props.options.show);
  }, [props.options.show])
  
  
  function hide(e) {
    if(e.currentTarget !== e.target ) 
      return;

    props.options.show = false;
    setShow(false);
  }

  
  return (
    <Container show={show} onClick={hide}>
        <div className="content">
          {props.children}
        </div>
    </Container>
  )
}