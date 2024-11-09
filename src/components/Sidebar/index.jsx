import {NavLink } from "react-router-dom";

export const Sidebar = () => {

    const getStyles = ({isActive}) =>{

        const styles = 'flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'

        return isActive ? `text-slate-50 bg-indigo-800 ${styles}` : `hover:text-slate-50 hover:bg-indigo-800 ${styles} `
    }

  return (
    <aside className="hidden sm:flex flex-col gap-3 border-r-2 border-gray-100 w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-screen p-3">
  <NavLink className={getStyles} to="/">
    <span className="material-icons">home</span>
    <span className="hidden md:inline">Home</span> {/* Show label only on medium and larger screens */}
  </NavLink>
  
  <NavLink className={getStyles} to="/archive">
    <span className="material-icons-outlined">archive</span>
    <span className="hidden md:inline">Archived</span> {/* Show label only on medium and larger screens */}
  </NavLink>

  <NavLink className={getStyles} to="/important">
    <span className="material-icons-outlined">label_important</span>
    <span className="hidden md:inline">Important</span> {/* Show label only on medium and larger screens */}
  </NavLink>
  
  <NavLink className={getStyles} to="/bin">
    <span className="material-icons-outlined">delete</span>
    <span className="hidden md:inline">Bin</span> {/* Show label only on medium and larger screens */}
  </NavLink>
</aside>
  );
};
