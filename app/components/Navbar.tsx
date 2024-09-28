// app/components/Navbar.tsx
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src="/images/olympic-logo.png" alt="Olympic Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/medal-tally">Medal Tally</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  