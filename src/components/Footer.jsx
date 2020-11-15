import React from 'react';

const YEAR = new Date().getFullYear();
function Footer() {
  return (<footer><p>Copyright ⓒ {YEAR}</p></footer>);
}

export default Footer;