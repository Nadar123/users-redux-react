const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='py-12  pr-1 pl-1 text-center w-full mx-auto min-h-screen'>
      {children}
    </div>
  );
};

export default Layout;
