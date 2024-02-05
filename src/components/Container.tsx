interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
