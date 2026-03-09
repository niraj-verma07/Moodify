import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Playlist from "../../home/components/Playlist";
import Player from "../../home/components/Player";
import "../styles/layout.scss";

const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-layout__body">
        <main className="app-layout__content">
          <Outlet />
        </main>
        <aside className="app-layout__sidebar">
          <Playlist />
        </aside>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
