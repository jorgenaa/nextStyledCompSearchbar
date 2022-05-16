import styled from 'styled-components'

export const Searchbar = styled.div`
    max-width: 500px;
    display: flex;
    margin: 1rem auto 0;
    z-index: 50;
    box-shadow: 0px 3px 6px grey;
    border-radius: 5px;
    position: relative;

    input {
        width: 100%;
		padding: 0.75em;
		background-color: white;
		border-radius: 5px;
		border: none;
		appearance: auto;
		outline: none;

    }
    span {
        font-size: 1.2rem;
		align-self: center;
		position: absolute;
		right: 10px;
		top: 5px;
    }
`
export const SearchbarOptions = styled.ul`
    margin: auto;
    z-index: 50;
    background-color: white;
    border-radius: 5px;
    border-top: 1px solid blue;
    max-width: 500px;
    text-align: left;
    padding: 0.75em;
    cursor: pointer;
    box-shadow: 0px 3px 6px $grey;

    li {
        max-width: 500px;
		background-color: white;
		color: $black;
		padding: 0.5rem;
		text-align: left;
		margin: 0 auto 0;
		cursor: pointer;
		overflow-y: auto;

        &:hover {
            background-color: lightBlue;
            color: black;
        }
    }

    li::nth-last-child(1) {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

export const NoSuggestions = styled.div`
    color: #999;  
    max-width: 500px;
    margin: 1rem auto;
`

