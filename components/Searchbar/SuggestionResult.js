import React from 'react'
import { SearchbarOptions, NoSuggestions } from '../styles/Searchbar.styled'
import s from './Searchbar__options.module.css'

const SuggestionsListComponent = ({filteredSuggestions, activeSuggestionIndex, onClick}) => {
    return filteredSuggestions.length ? (
      <SearchbarOptions>
        {filteredSuggestions.map((item, index) => {
          let className;
          
          if (index === activeSuggestionIndex) {
            className = `${s['searchBar__options-item']}`;
          }
          return (
            <li className={className} key={item.id} onClick={(e) => onClick(e, item)}>
              {item.title}
            </li>
          );
        })}
      </SearchbarOptions>
    ) : (
      <NoSuggestions>
        <em>No suggestions</em>
      </NoSuggestions>
    );
  };

  export default SuggestionsListComponent;