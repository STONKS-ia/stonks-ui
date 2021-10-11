const replaceSpecialChars = (str: string) => {
 return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
  .replace(/([^\w]+|\s+)/g, '-') 
  .replace(/\+/g, '-') 
  .replace(/(^-+|-+$)/, ''); 
}

export default replaceSpecialChars;