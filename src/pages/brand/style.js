import { styled } from 'styled-components';
import { flexCenter } from './../../global/common';

const S = {};

S.Div1 = styled.div`

    width: 100%;
    height : 785px;
    ${flexCenter}
`
S.Div2 = styled.div`


    width: 100%;
    height : 800px;
    ${flexCenter}
`
S.Div3 = styled.div`

    width :100%;
    height : 975px;
    white-space : pre-line;
   ${flexCenter}
    font-size: ${({theme})=> theme.FONT_SIZE["h3"]};
    line-height: normal;
`

export default S;