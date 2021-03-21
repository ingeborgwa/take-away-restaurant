import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledBtn = styled.button`
    
    
    padding: ${props => props.theme.space[2]};
    margin: ${props => props.theme.space[2]};
    font-size: ${props => props.theme.fontSizes.p};
    border-radius:5px;
    background-color: ${props => props.theme.colors.yellow};
    color: $${props => props.theme.colors.black};

    &:hover {
        background-color:${props => props.theme.colors.white};
    }

`;

export default StyledBtn; 