import React from 'react';
import { DropdownContainer, DropdownButton,DropdownList,DropdownItem, DropdownButton1, DropdownButton2,DropdownButton3 } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DropDown = ({ options, selectedOption, onOptionSelect }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      onOptionSelect(option);
      setIsOpen(false);
    };
    
    return (
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown} isSelected={selectedOption}>
          <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1}}>
            {selectedOption ? selectedOption.label : 'Action'}
          </span>
          
          <FontAwesomeIcon 
            icon={faChevronDown} 
            style={{
              display: 'flex',
              marginLeft: '2px',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
            }} 
            />
        </DropdownButton>
        {isOpen && (
          <DropdownList>
            {options.map(option => (
              <DropdownItem 
                key={option.value}
                isSelected={selectedOption && selectedOption.value === option.value}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
  
        <DropdownButton1 onClick={toggleDropdown} isSelected={selectedOption}>
          <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1}}>
            {selectedOption ? selectedOption.label : 'Normal'}
          </span>
          
          <FontAwesomeIcon 
            icon={faChevronDown} 
            style={{
              display: 'flex',
              marginLeft: '2px',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
            }} 
            />
        </DropdownButton1>
  
        <DropdownButton2 onClick={toggleDropdown} isSelected={selectedOption}>
          <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, color: '#333'}}>
            {selectedOption ? selectedOption.label : 'Value'}
          </span>
          
          <FontAwesomeIcon 
            icon={faChevronDown} 
            style={{
              display: 'flex',
              marginLeft: '2px',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
            }} 
            />
        </DropdownButton2>
  
        <DropdownButton3
          on3onClick={e => e.preventDefault()}
          disabled
          isSelected={selectedOption}
          styled={{ cursor: 'not-allowed', opacity: 0.6}}>
          <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1}}>
            {selectedOption ? selectedOption.label : 'Disabled'}
          </span>
          
          <FontAwesomeIcon 
            icon={faChevronDown} 
            style={{
              display: 'flex',
              marginLeft: '2px',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
            }} 
            />
        </DropdownButton3>
      </DropdownContainer>
    );
  
};

export default DropDown;