import React, { forwardRef } from "react";
import { MenuItemLink } from "react-admin";
import FaceIcon from "@material-ui/icons/Face";

const ProfileMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink
    ref={ref}
    to="/profile"
    primaryText="Profile"
    leftIcon={<FaceIcon />}
    onClick={onClick}
  />
));

export default ProfileMenu;
