import { useAuth } from "../../auth/hooks/useAuth";
import { Link } from "react-router";
import "../styles/navbar.scss";

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#dd4200">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <Link to="/" className="navbar__logo">
          Moodify
        </Link>
      </div>
      <div className="navbar__actions">
        {user && (
          <>
            <span className="navbar__user">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {user.username}
            </span>
            <button className="navbar__logout" onClick={handleLogout}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
