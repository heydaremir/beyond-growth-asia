import NavItem from "./NavItem";

function NavBar() {
  const navItems = [
    { name: "Opportunity", path: "/opportunity" },
    { name: "What We Do", path: "/whatwedo" },
    { name: "Who We Are", path: "/whoweare" },
    { name: "Why Choose Us", path: "/whychooseus" },
  ];

  return (
    <>
      <ul className="flex list-none p-0 gap-5">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item.name} path={item.path} />
        ))}
      </ul>
    </>
  );
}

export default NavBar;
