import React from 'react';
import './footer.scss';

const Footer = () => {
  return(
    <footer className="site-footer">
      <div className="grid-x grid-margin-y grid-margin-x">
        <p className="cell">Find me on <a href="https://github.com/justarhymes" target="social">Github</a>, <a href="http://stackexchange.com/users/2619791/justin-king" target="social">StackExchange</a>, and <a href="https://angel.co/justarhymes" target="social">AngelList</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
