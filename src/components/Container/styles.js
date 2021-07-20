import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Styled = {
    containerSM: styled.div`
        margin: 150px 0;
        width: 900px;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-self: center;
        border-radius: 25px;
        align-items: top;
        justify-content: center;
        padding: 50px;
    `,
    containerLG: styled.div`
        margin: 5% 0;
        width: 90%;
        height: 100%;
        background-color: #fff;
        display: flex;
        align-self: center;
        border-radius: 25px;
        align-items: top;
        flex-direction: row;
        justify-content: center;
  `,  
    Title: styled.h1`
        margin: 50px 0;
        align-self: center;
        color: ${mixins.colors.primary};
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
    `
}