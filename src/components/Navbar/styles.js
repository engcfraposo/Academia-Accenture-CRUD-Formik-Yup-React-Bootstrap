import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Styled = {
  Navbar: styled.nav`
    position: relative;
    z-index: 1;  
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: 100px;
    height: 100%;
    padding: 0px 10px;
    background-color: ${mixins.colors.primary};
  `,
  NavArea: styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `,
  NavItem: styled(Link)`
    background: none;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    color: '#fff';
    z-index: 1;
  `,

  NavButton: styled.button`
    background: none;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    color: '#fff';
    z-index: 1;
  `,
  Logo: styled.img`
  margin: 40px 0;
  width: 47px;
  height: 52px;
  `,
}