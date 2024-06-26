const Header = () => {
  return (
    <header>
      <div className="header-left">
        <p>My balance</p>
        <span>$921.48</span>
      </div>
      <div className="header-right">
        <div className="logo">
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
