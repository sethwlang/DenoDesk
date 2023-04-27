
export function Header() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Writing", href: "/write" },
    { name: "Editing", href: "/edit" },
    { name: "Coaching", href: "/coach" },
    { name: "About", href: "/about" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a href={menu.href}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
