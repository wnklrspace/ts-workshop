import styles from './index.module.css';
import {FC} from "react";


//TODO: Importiere den richtigen Typen für die main properties aus dem ordner '/types' und weise sie unten statt any zu.
const Main: FC<any> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
