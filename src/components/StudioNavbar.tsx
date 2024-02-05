import { IoReturnDownBack } from "react-icons/io5";
import styles from "@/components/StudioNavbar.module.css";
import Link from "next/link";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className={styles.studio}>
        <Link className={styles.link} href="/">
          <IoReturnDownBack className={styles.icon}/>
          Go to Website
        </Link>
        <h1 className={styles.logo}>Bloggers Studio</h1>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
