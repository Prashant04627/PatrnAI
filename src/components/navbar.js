
function Navbar(){
    return (
        <>
        
        <section >
        {" "}
        <div className="navbar">
          <div className="logo">
            {" "}
            <a href="/"> AIPATRN</a>
          </div>

          <div className="nav-btn">
            <a className="active" href="/">
              {" "}
              Home Page
            </a>
            <a href="/About"> About Us</a>
            <a href="/Generator"> Generator</a>
            <a href="/features"> Features</a>
            <a href="/Pricing"> Pricing-plan</a>
            <a href="/collection"> Collection-2023</a>
            <a href="/Blog"> Blog-News</a>
            <a href="/career"> Career</a>
          </div>
          <div>
            {" "}
            <button className="menu-btn"> Menu </button>{" "}
          </div>
        </div>
        <div>
          
          <img className="star" src="./images/icons.png" alt="star" />{" "}
        </div>
        <div>
          
          <img className="line" src="./images/line-curve.png" alt="line" />{" "}
        </div>
      </section>
        
        
        </>
    )
}
export default Navbar;