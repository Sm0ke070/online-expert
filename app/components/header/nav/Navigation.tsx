import styles from './navigation.module.scss';
import Link from 'next/link';
import { NavRoute } from '../../../utils/const';

const navigationLink = [
    { title: 'EXPERTS', href: NavRoute.EXPERTS },
    { title: 'QUESTION', href: NavRoute.QUESTION },
    { title: 'SERVICES', href: NavRoute.SERVICES },
    { title: 'BLOGS', href: NavRoute.BLOGS },
    { title: 'FORUM', href: NavRoute.FORUM },
];

export default function Navigation() {
    console.log(navigationLink.map((el) => el.title.toLowerCase()));

    return (
        <div className={styles.root}>
            <div className={styles.navBlock}>
                {navigationLink.map((el, i) => (
                    <Link className={styles.link} key={i} href={el.href}>
                        {el.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
