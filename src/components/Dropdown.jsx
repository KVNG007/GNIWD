import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { BsChevronDown } from 'react-icons/bs';
import { FlagIcon } from 'react-flag-kit';

const Dropdown = ({ options, onSelect, chevron, left, minWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="px-3 py-2 rounded-lg shadow-lg bg-white text-grey text-xs font-medium flex items-center gap-3"
        onClick={handleToggle}>
        {selectedOption && (
            selectedOption.iconCode && <FlagIcon code={selectedOption?.iconCode} size={24} className='w-5 h-5  rounded-full' />
        )}
        {selectedOption ? selectedOption.label : 'Select an option'}
        {chevron && <BsChevronDown  className='w-5 md:w-7'/>}
      </button>
      
      {isOpen && (
        <ul className={`absolute ${left ? 'left-0' : 'right-0'} top-11 bg-white shadow-lg ${minWidth ? `min-w-[${minWidth}]`  : 'w-full' } p-1 rounded-md text-sm text-center z-20`}>
          {options?.map((option) => (
            <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className='p-2 text-secondary hover:bg-gray-50 w-full border-b cursor-pointer flex gap-3 md:gap-2 items-center justify-center'
            >
            {option.iconCode && <FlagIcon code={option?.iconCode} size={24} className='w-5 h-5  rounded-full' />}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
    options: PropTypes.arr,
    onSelect: PropTypes.func,
    chevron: PropTypes.bool,
    left: PropTypes.bool,
    minWidth: PropTypes.string,
}