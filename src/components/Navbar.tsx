type Props = {
  navItems: NavItem[];
};

type NavItem = {
  name: string;
  link: string;
};

const Navbar = ({ navItems }: Props) => {
  return (
    <div className="flex justify-between items-center w-full font-clash font-bold py-8">
      <p className="text-4xl select-none flex-1">
        SHRED<span className="text-primary">.</span>
      </p>
      <div className="text-xl flex justify-center gap-4 flex-1">
        {navItems.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default Navbar;
