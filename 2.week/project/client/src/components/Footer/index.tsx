import styles from './index.module.css';

// TODO: Ersetze any durch den richtigen Typen
const Footer: any = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.listContainer}>
				<ul className={styles.footerList}>
					<li>
						<p>Resources</p>
					</li>
					<li>
						<a
							href='https://www.typescriptlang.org/docs/'
							target='_blank'
							rel='noopener'>
							Typescript Docs
						</a>
					</li>
					<li>
						<a
							href='https://www.typescriptlang.org/cheatsheets'
							target='_blank'
							rel='noopener'>
							Typescript Cheat Sheets
						</a>
					</li>
					<li>
						<a
							href='https://gitlab.mi.hdm-stuttgart.de/fw061/typescript-workshop'
							target='_blank'
							rel='noopener'>
							Gitlab Project
						</a>
					</li>
					<li>
						<a
							href='https://www.youtube.com/watch?v=BBJa32lCaaY'
							target='_blank'
							rel='noopener'>
							Motivational Boost
						</a>
					</li>
				</ul>
				<ul className={styles.imprintList}>
					<li>2024</li>
					<li>©2doit</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
