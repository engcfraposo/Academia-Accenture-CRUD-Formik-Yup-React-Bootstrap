/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Styled } from './styles';

function Container({children, title, size}) {
  switch (size) {
    case "lg":
        return (
            <Styled.ContainerLG>
                <Styled.Title>{title}</Styled.Title>
                {children}
            </Styled.ContainerLG>
        )
    case "md":
        return (
            <Styled.ContainerMD>
                <Styled.Title>{title}</Styled.Title>
                    {children}
            </Styled.ContainerMD>
        )
      default:
          return null
  }
}

export default Container;