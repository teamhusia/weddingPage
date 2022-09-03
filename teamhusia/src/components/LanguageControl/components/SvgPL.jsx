const SvgPL = (width, height) => {
  return(
    <svg 
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%"
    style={{borderRadius: "50%"}} viewBox="0 0 512 512">
      <path fill="#d80027" d="m0 256 256.4-44.3L512 256v256H0z"/>
      <path fill="#fff" d="M0 0h512v256H0z"/>
    </svg>
  )
}

export default SvgPL;