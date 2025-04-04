import { Search, ShoppingCart, AlignRightIcon } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='navbar shadow-sm px-4 z-50 relative text-[#f4f8fa]  uppercase'>
        {/* Left side: Logo */}
        <div tabIndex={0} className='navbar-start'>
          <a className='btn btn-ghost text-xl'>ShopApocalypse</a>
        </div>

        {/* Center Nav - Hidden on small screens */}
        <div tabIndex={0} className='navbar-center hidden xl:flex'>
          <a tabIndex={0} className='btn btn-ghost text-xl'>
            Home
          </a>
          <a tabIndex={0} className='btn btn-ghost text-xl'>
            Shop
          </a>
          <a tabIndex={0} className='btn btn-ghost text-xl'>
            About
          </a>
          <a tabIndex={0} className='btn btn-ghost text-xl'>
            Contact
          </a>
        </div>

        {/* Right Side: Cart & Mobile Menu */}
        <div className='navbar-end flex items-center gap-4'>
          {/* Search */}
          <div className='btn btn-ghost btn-circle hidden xl:flex'>
            <Search />
          </div>
          {/* Shopping Cart */}
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <ShoppingCart />
              <span className='badge badge-sm indicator-item'>0</span>
            </div>
          </div>

          {/* Mobile Dropdown - Visible only on small screens */}
          <div className='xl:hidden'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'
              onClick={() => setIsOpen(!isOpen)}
            >
              <AlignRightIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className='xl:hidden'>
        <MobileMenu isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Navbar;
