import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, NavBar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";


const DashbordContext = createContext()

const DashboardLayout = () => {
  // temp
  const user = { name: "Chan" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = async () => {
    console.log('logout user');
  }

  return (
    <DashbordContext.Provider value={{user, showSidebar, isDarkTheme, toggleDarkTheme, logoutUser}}>
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashbordContext.Provider>
  );
};
export const useDashbordContext = () => useContext (DashbordContext);
export default DashboardLayout;
