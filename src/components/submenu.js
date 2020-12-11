/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const SubMenu = ({ subPages }) => {
  return (
    <div
      sx={{
        variant: "components.submenu",
      }}
    >
      <div className="container">
        {subPages.map((page, i) => (
          <Link href={page.url} key={i}>
            <a className={page.current ? "item current" : "item"}>
              <Styled.p>{page.name}</Styled.p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
