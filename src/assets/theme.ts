
function customTheme(theme: any) {
 return {
  ...theme,
  colors: {
   ...theme.colors,
   primary25: 'rgba(255,255,255,0)',
   primary: '#00bb76'
  }
 }
}
export default customTheme