import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
  <div class="header">
  <h1>{siteTitle}</h1>
  <p>{siteDescription}</p>
  </div>

  <div class="topnav">
  <Link to="/">Index</Link>
  <Link to="/hello-world">Hello World</Link>
  <Link to="/1984">1984</Link>
  <Link to="/minecraft">Minecraft - The Island</Link>
  <Link to="/sapiens">Sapiens</Link>
  <Link to="/daemon">Daemon</Link>
  <Link to="/moby-dick">Moby Dick</Link>
  <Link to="/20000">20.000 Leagues</Link>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
