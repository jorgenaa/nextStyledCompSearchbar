import React, { useState, useContext } from 'react'; 
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import SuggestionResult from './SuggestionResult';
import { Searchbar } from '../styles/Searchbar.styled'
import { useClickOutside } from '../../hooks/useClickOutside';

const Typeahead = ({albums}) => {

	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const onChange = (e) => {
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = albums.filter((item) =>
            item.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(userInput);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e, value) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        //router.push('/specific/' + value.id);
      };

      const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
          setInput(filteredSuggestions[activeSuggestionIndex]);
          setActiveSuggestionIndex(0);
          setShowSuggestions(false);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestionIndex === 0) {
            return;
          }
    
          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
            return;
          }
    
          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };

    let domNode = useClickOutside(() => {
      setShowSuggestions(false);
    });

	return (
		<>
			<Searchbar ref={domNode}>
				<input
					type="text"
					placeholder="Search..."
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={input}
				/>
				<span><FaSearch /></span>
			</Searchbar>
			{showSuggestions && input && <SuggestionResult filteredSuggestions={filteredSuggestions} onClick={onClick} />}
		</>
	);
};



export default Typeahead;
