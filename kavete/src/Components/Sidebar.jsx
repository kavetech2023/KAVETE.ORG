import { Link } from 'react-router-dom';
import k from '../assets/logo.png';
 

function Sidebar() {
  return (
    <div className="hidden lg:w-64 md:flex md:w-16 bg-white fixed top-0 left-0 h-full bg-secondary-color p-4 shadow-md flex-col z-50 transition-all overflow-y-scroll">
      <div className="sidebar-top flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
        <div className="sidebar-brand flex items-center gap-2">
          <img src={k} alt="Logo" className="h-8 w-8" />
          <span className="sidebar-brand-text text-uppercase font-bold text-primary-color">Kavete.org</span>
        </div>
        </Link>
        <button className="sidebar-close-btn flex items-center justify-center bg-gray-300 w-8 h-8 shadow-sm text-gray-500 rounded-md">
          <i className="fa fa-times"></i>
        </button>
      </div>

      <div className="sidebar-body flex-1 flex flex-col justify-between">
        <div className="sidebar-menu">
          <a href="#" className="menu-item mb-2">
            <div className="menu-link flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100">
              <div className="menu-link-icon flex items-center">
                <i className="fa fa-home text-gray-500"></i>
              </div>
              <span className="menu-link-text hidden sm:inline-block text-gray-700">Dashboard</span>
            </div>
          </a>
          <a href="#" className="menu-item mb-2">
            <div className="menu-link flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100">
              <div className="menu-link-icon flex items-center">
                <i className="fa fa-home text-gray-500"></i>
              </div>
              <span className="menu-link-text hidden sm:inline-block text-gray-700">Dashboard</span>
            </div>
          </a>
          <a href="#" className="menu-item mb-2">
            <div className="menu-link flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100">
              <div className="menu-link-icon flex items-center">
                <i className="fa fa-home text-gray-500"></i>
              </div>
              <span className="menu-link-text hidden sm:inline-block text-gray-700">Dashboard</span>
            </div>
          </a>

          {/* Other menu items */}
        </div>

        <div className="sidebar-menu2 mt-auto">
          {/* Additional menu items */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;