const SvgButton = ({src, onClick, alt}) => {
  return(
    <button onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  )
}

export default SvgButton;