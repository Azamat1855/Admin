import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
            {/* Sidebar content here */}
            <Link to={'/'}>
              <li><a className='text-[17px]'>Dashboard</a></li>
            </Link>
            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-[17px]">Products</div>
              <div className="collapse-content">
                <ul>
                  <Link to={'/products'}>
                    <li><a>Products</a></li>
                  </Link>
                  <Link to={'/products/create'}>
                    <li><a>Create Products</a></li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
