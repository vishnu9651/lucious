function navbar(){
    return`    <div id="totalnav">
    <div id="border">
        <div>
            <p>Why Licious?</p>
        <p>Download App </p>
        <p></p>
    </div>
    <div>
        <p>FSSC 22000 Certification</p>
        <p>About Us</p>
        <p>Careers @Licious</p>
        <p>Contact Us</p>
    </div>
    </div>
    <div id="navbar">
   <div>     <img src="https://www.licious.in/img/rebranding/licious-logo.svg"/></div>

<div id="location"><img src="https://www.licious.in/img/rebranding/location_icon.svg"/>
    <div>
        <select id="option">
            <option value="delhi">delhi</option>
            <option value="lucknow">lucknow</option>
            <option value="varanasi">varanasi</option>
            <option value="bangluru">bangluru</option>
        </select>
        </div>
</div>


<div id="search">
<input type="text" placeholder="Serch for any delicious product" />
<span>
    <i class="fa-solid fa-magnifying-glass"></i>
</span>
</div>
<div id="">
<div id="login">
    <div><a href="login.html">
<img src="https://www.licious.in/img/rebranding/profile_icon.svg"/>
    </div>
    <div id="logtext">login</a></div>
</div>
</div>
<div id="cart">
    <div id="cartd"><a href="cart.html"><img src="https://www.licious.in/img/rebranding/cart_icon.svg"/></a></div>

<div id="number"></div>
</div>    
</div>
</div>
`
}
export default navbar