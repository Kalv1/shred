type Props = {
  message: string;
  icon: string;
  className?: string;
  children?: React.ReactNode;
};

const Alert = ({ icon, className, children }: Props) => {
  return (
    <div
      className={
        "bg-[#0B0B0B] flex justify-between items-center px-4 py-2 w-fit gap-10 border border-[#161616] rounded font-inter font-bold " +
        className
      }
    >
      <img src={icon} />
      {children}
      <img src={icon} />
    </div>
  );
};

export default Alert;
