const SvgPL = (width, height) => {
  return (
    <svg
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="cut-circle">
          <circle cx={256} cy={256} r={256} />
        </clipPath>
      </defs>

      <path
        fill="#d80027"
        d="m0 256 256.4-44.3L512 256v256H0z"
        clipPath="url(#cut-circle)"
      />
      <path fill="#fff" d="M0 0h512v256H0z" clipPath="url(#cut-circle)" />
    </svg>
  );
};

export default SvgPL;
