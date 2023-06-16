import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import MenuItem from './MenuItem';

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6 select-none">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-4 sm:mr-2">IMDb</span>
          <span className="text-base hidden sm:inline mr-4">Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
