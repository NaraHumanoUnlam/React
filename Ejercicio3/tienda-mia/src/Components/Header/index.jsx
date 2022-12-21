import './style.css';

function Header({ numberOfProducts }) {
    return (
      <header className="header"> 
      <img src=""/>
      <div className="companyName">
        Art Store {numberOfProducts} 
      </div>
      </header>
    );
}

export default Header;