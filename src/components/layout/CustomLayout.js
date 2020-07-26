import React from "react";
import { AppBar, UserMenu, Layout, crudGetOne } from "react-admin";
import ProfileMenu from "../profile/ProfileMenu";
import { connect } from "react-redux";

const UserMenuView = (props) => (
  <UserMenu {...props}>
    <ProfileMenu />
  </UserMenu>
);

const mapStateToProps = (state) => {
  const resource = "profile";
  const id = "profile";
  const profileState = state.admin.resources[resource];

  return {
    profile: profileState ? profileState.data[id] : null,
  };
};

const CustomUserMenu = connect(mapStateToProps, { crudGetOne })(UserMenuView);

const CustomAppBar = (props) => (
  <AppBar {...props} userMenu={<CustomUserMenu />} />
);

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;
