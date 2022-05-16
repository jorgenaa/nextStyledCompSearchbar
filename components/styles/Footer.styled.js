import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: white;
    min-height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem
`
export const FooterContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: start;


    li {
        margin-bottom: 0.5rem
        border-bottom-width: 0px;
        list-style: none;
        &:hover {
            border-bottom-width: 2px;
            border-color: white;
            color: white;
            transition-delay: 75ms;
            transition-duration: 100ms;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
    }

    h3 {
        font-weight: semibold;
        letter-spacing: 1px;
    }

    span {
        padding-right: 4px;
    }
`