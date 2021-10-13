const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    padding: 20,
    cursor: 'pointer',
  }),
  menu: provided => ({ ...provided, zIndex: 9999 }),
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
export default customStyles;