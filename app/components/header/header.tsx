import Link from 'next/link';
import { PageRoute } from '../../utils/const';
import Navigation from './nav/navigation';
import styles from './header.module.scss';
import Toolbar from './toolbar/toolbar';

export default function Header() {
    return (
        <header className={styles.root}>
            <Toolbar />
            <Navigation />
            <Link href={PageRoute.HOME}>home</Link>
            <Link href={PageRoute.SIGN_IN}>logIn</Link>
            <Link href={PageRoute.SIGN_UP}>register</Link>
        </header>
    );
}
