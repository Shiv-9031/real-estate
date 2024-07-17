import Header from "../Header/Header";
import style from "./style.module.css";

function Layout({ children }) {
  return (
    <div className={style.Layout}>
      <Header />
      <div className={style.body}>{children}</div>
    </div>
  );
}

export default Layout;
