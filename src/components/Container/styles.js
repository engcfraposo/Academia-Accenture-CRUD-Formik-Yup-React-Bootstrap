import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

const ContainerMD = styled.div`
    margin: 150px 0;
    width: 900px;
    height: 100%;
    background-color: ${mixins.colors.secondary};
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 25px;
    align-items: top;
    justify-content: center;
    padding: 50px;
`

export const Styled = {
    ContainerMD,
    ContainerLG: styled(ContainerMD)`
        margin: 5% 0;
        width: 90%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: none;
    `,
    Title: styled.h1`
        height: 100px;
        display: flex;
        flex-direction: row;
        color: ${mixins.colors.primary};
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
    `
}