import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { BsChevronDown } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { FlagIcon } from 'react-flag-kit';




const DropdownPro = ({ options, defaultOption, onSelect, chevron, faDown, left, minWidth, color, className, dbClass, overide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
//   const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if(defaultOption){
      // setSelectedOption(defaultOption[0] || defaultOption);
      setSelectedOption(defaultOption);
    }
    else return;
  }, [])
  

  return (
    <div className={`relative w-full  `}>
      <button
        className={"w-full xs:h-[60px] md:h-[75px] flex flex-row items-center justify-between xs:text-base sm:text-lg md:text-xl  font-Satoshi  border-2 focus:border-3 border-black rounded-md px-4 "}
        onClick={handleToggle}>

        <span className={`flex flex-row items-center text-left xs:leading-5 md:leading-6 font-semibold gap-4 justify-start `}>
          {selectedOption ? selectedOption.label : ''}
        </span>
        
        {chevron && <BsChevronDown size={30}  className={`w-10 transition-all duration-300 ease-in-out  ${isOpen ? '-rotate-180' : ''}`}  />}
      </button>

      {isOpen && (
        <ul className={`absolute no-scroll left-0 top-[100%] shadow-lg ${minWidth ? `min-w-[${minWidth}]`  : 'w-full' } text-left z-20 `}>
          {options?.map((option) => (
            <li
              className={`px-5 relative font-Satoshi text-left xs:text-base md:text-2xl font-medium bg-white hover:bg-grey xs:leading-5 md:leading-6 flex items-center  w-full xs:h-[60px] md:h-[80px] cursor-pointer rounded-xl justify-start 
              transition-all duration-300 ease-in-out ${selectedOption.label == option.label ? 'shuku': ''}`}
              key={option.value}
              onClick={() => {
                handleSelect(option);
                console.log(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownPro;

DropdownPro.propTypes = {
    options: PropTypes.arr,
    defaultOption: PropTypes.any,
    onSelect: PropTypes.func,
    chevron: PropTypes.bool,
    faDown: PropTypes.bool,
    left: PropTypes.bool,
    minWidth: PropTypes.string,
    dbClass: PropTypes.string
}