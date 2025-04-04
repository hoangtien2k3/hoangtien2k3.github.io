import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
    <div style={{ background: '#ff8100' }}>
      <div
        className={style.circleMenu}
        role="button"
        tabIndex="0"
        onKeyDown={toggleMenu}
        onClick={toggleMenu}
      >
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout
        className={`${style.navWrap} ${menu ? null : style.hidden} ${
          menu ? style.openMenu : null
        }`}
      >
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            <li className={style.navItem}>
              <Link
                to="/"
                onClick={toggleMenu}
                activeClassName={style.anchorActive}
              >
                About
              </Link>
            </li>
            <li className={style.navItem}>
              <Link
                to="/contact"
                onClick={toggleMenu}
                activeClassName={style.anchorActive}
              >
                Contact
              </Link>
            </li>
            {/*<li className={style.navItem}>*/}
            {/*  <Link*/}
            {/*    to="/blog"*/}
            {/*    onClick={toggleMenu}*/}
            {/*    activeClassName={style.anchorActive}*/}
            {/*  >*/}
            {/*    Blog*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li className={style.navItem}>*/}
            {/*  <Link*/}
            {/*    to="/tags"*/}
            {/*    onClick={toggleMenu}*/}
            {/*    activeClassName={style.anchorActive}*/}
            {/*  >*/}
            {/*    Tags*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className={style.navItem}>
              <a
                href="https://drive.google.com/file/d/1P9xZj1EU45KAkJMrci8sSaVgbsk9g789/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};
