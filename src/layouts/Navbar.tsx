import {
  Navbar as NavbarNext,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { IconLogout } from '@tabler/icons-react';
import { useAuthStore } from '../zustand/useAuthStore';

export const Navbar = () => {
  const handleOnClick = () => {
    logout();
  };

  const { photoURL, displayName, email, logout } = useAuthStore();

  return (
    <NavbarNext className="py-8 w-screen">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-t from-cyan-500 to-blue-500">
            Tlak!
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Palabra del día
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="cursor-pointer">
        <Dropdown showArrow>
          <DropdownTrigger>
            <User
              className="hover:bg-slate-800 p-2 rounded-full text-ellipsis"
              name={displayName || 'Not logged'}
              description={email}
              avatarProps={{
                src: photoURL,
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
            <DropdownItem
              key="logout"
              startContent={<IconLogout />}
              description="Cierra tu sesión"
              onClick={handleOnClick}
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NavbarNext>
  );
};
