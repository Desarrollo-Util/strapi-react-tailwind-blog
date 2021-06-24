import React, { useContext } from "react";
import AuthContext from "../../lib/contexts/auth.context";
import LogoIcon from "../icons/logo";

const Header = () => {
  const { authState } = useContext(AuthContext);
  const username = authState ? authState.user.username : undefined;

  return (
    <header className="w-full h-16 flex justify-between items-center shadow-md px-2">
      <LogoIcon className="h-10" />
      {username && (
        <div className="flex justify-center items-center">
          <span className="text-lg font-semibold text-gray-700">
            {username}
          </span>
          <img
            className="inline w-8 h-8 mx-2 rounded-full"
            src={`https://avatars.dicebear.com/api/initials/${username}.svg`}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
