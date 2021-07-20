import React from 'react';
import Logo from '../../assets/logo.png'
import { FiHome, FiLogOut } from 'react-icons/fi';
import { Styled } from './styles';
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const { signOut } = useAuth();
  const history = useHistory();
  const items = [
    {
      link: "/home", 
      icon: <FiHome color="#fff"/>
    }, 
  ]

  const handleClick = async () => {
    await signOut()
    history.push("/")
  }
  return (
  <Styled.Navbar>
    <Styled.Logo src={Logo}/>
    <Styled.NavArea>
        {items.map((item, key) => (
            <Styled.NavItem key={key} to={item.link}>
                {item.icon}
            </Styled.NavItem>
        ))}
        <Styled.NavButton onClick={handleClick}>
          <FiLogOut color="#fff" />
        </Styled.NavButton>
    </Styled.NavArea>
  </Styled.Navbar>
  );
}

export default Navbar;