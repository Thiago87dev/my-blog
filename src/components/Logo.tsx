import Link from "next/link";

interface LogoProps {
  title?: string;
  className?: string;
}

const Logo = ({ title = "Bloggers", className }: LogoProps) => {
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title}
      </h1>
    </Link>
  );
};

export default Logo;
