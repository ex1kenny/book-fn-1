import css from "./NotFound.module.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CiFolderOff } from "react-icons/ci";

export default function NotFound() {
  return (
    <div className={css.container}>
      <CiFolderOff size={200} />
      <p className={css.text}>Oppsss,something wrong!!!</p>
      <NavLink to="/" className={css.link}>
        Visit home page....
      </NavLink>
      <Helmet>
        <title>Not found</title>
      </Helmet>
    </div>
  );
}
