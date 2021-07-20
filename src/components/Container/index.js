/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Styled } from './styles';

function Container({children, title, size}) {
  switch (size) {
    case "lg":
        return (
            <Styled.containerLG>
                <Styled.Title>{title}</Styled.Title>
                {children}
            </Styled.containerLG>
        )
    case "sm":
        return (
            <Styled.containerSM>
                <Styled.Title>{title}</Styled.Title>
                    {children}
            </Styled.containerSM>
        )
      default:
          break;
  }
}

export default Container;