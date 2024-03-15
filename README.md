<<<<<<< HEAD
# YPGOLD
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 7e55174 (first commit)
>>>>>>
>>>>>><NavLink
            to="/store"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" >Buy</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow   rounded-box w-52">
    <li><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="w-30 h-14" src="images/flipkartlogo.png" alt="" /></NavLink></li>
    <li><NavLink to={"https://blinkit.com/"}><img className="w-30 h-14" src="images/blinkit.svg" alt="" /></NavLink></li>
    <li><a><img className="w-30 h-14" src="images/meesho.svg" alt="" /></a></li>
  </ul>
</div>
          </NavLink>
