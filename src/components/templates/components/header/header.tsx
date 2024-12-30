'use client';

import React, { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar setShowSidebar={setShowSidebar} />
    </>
  );
};
export default Header;
