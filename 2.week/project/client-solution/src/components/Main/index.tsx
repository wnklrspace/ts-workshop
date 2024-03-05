import { FC } from 'react';
import type { MainProps } from '../../../types/components';
import styles from './index.module.css';

const Main: FC<MainProps> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
