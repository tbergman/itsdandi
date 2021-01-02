/** @jsx jsx */
import { jsx } from "theme-ui";
import SubMenuDesktop from "./navigation/submenudesktop";
import SubMenuMobile from "./navigation/submenumobile";

const SubMenu = ({ subPages, subMenuStyling, isDesktop }) => {
  console.log(isDesktop);
  if (isDesktop) {
    return (
      <SubMenuDesktop subMenuStyling={subMenuStyling} subPages={subPages} />
    );
  } else {
    return (
      <SubMenuMobile subMenuStyling={subMenuStyling} subPages={subPages} />
    );
  }
};

export default SubMenu;
