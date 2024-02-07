import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { BsInstagram, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between flex-col md:flex-row">
      <Logo title="Bloggers" className="text-white mb-4" />
      <div className="text-gray-300 inline-flex items-center gap-7 mb-4">
        <Link
          href="https://www.linkedin.com/in/thiago-alves-010915274/"
          target="_blank"
        >
          <BsLinkedin className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href="https://github.com/Thiago87dev" target="_blank">
          <BsGithub className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link
          href="https://www.instagram.com/thiagopaulista87/"
          target="_blank"
        >
          <BsInstagram className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCgfRBiS95ojl8xsI6XtqjIw"
          target="_blank"
        >
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
      </div>
      <p className="text-sm inline-flex text-gray-300">
        © All rights reserved-
        <Link
          href="https://www.instagram.com/thiagopaulista87/"
          target="_blank"
          className="hover:text-white font-semibold duration-200"
        >
          @thiagopalista87
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
