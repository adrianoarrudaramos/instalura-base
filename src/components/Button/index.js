import styled, { css, ThemeConsumer } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: white;
    background-color: ${function(props) {
        const variant = props.variant;
        //return props.theme.colors.primary.main.color;
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${function(props) {
        //return props.theme.colors.primary.main.contrastText;
        return get(props.theme, `colors.${props.variant}.contrastText`);
    }};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${function(props) {
        //console.log('<Button />', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`));
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

`;