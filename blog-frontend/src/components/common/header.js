import React, { useContext } from "react";
import AuthContext from "../../lib/contexts/auth.context";
import LogoIcon from "../icons/logo";

const Header = () => {
  const { authState } = useContext(AuthContext);
  const username = authState ? authState.user.username : undefined;

  return (
    <header className="flex-s-c w-full h-4 shadow-md px-2">
      <LogoIcon className="h-3" />
      {username && (
        <div className="flex-c-c">
          <span className="text-16 font-semibold text-gray-700">
            {username}
          </span>
          <img
            className="inline w-2_25 h-2_25 mx-1 rounded-full"
            src={`https://avatars.dicebear.com/api/initials/${username}.svg`}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
