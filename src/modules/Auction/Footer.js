import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Kevin Harger Horse Auctions. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Horses</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Staff</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
