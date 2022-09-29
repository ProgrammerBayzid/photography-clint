import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-red-300	">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-bold">ACTIVE-GYM-CLUB</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/277572443_1325731787940448_6051411949920103477_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=250n8Zhh9AgAX8CtvBq&_nc_ht=scontent.fdac22-1.fna&oh=00_AT8x4BWag9N9xV5pWAvSFHDUUABUpbB-1hKeE5LHDmOO0w&oe=633B1411" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;