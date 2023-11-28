'use client';

import clsx from 'clsx';
import styles from './navigation.module.scss';
import Link from 'next/link';
import { NavRoute } from '../../../utils/const';
import { usePathname } from 'next/navigation';

const navigationLink = [
    { title: 'EXPERTS', href: NavRoute.EXPERTS },
    { title: 'QUESTION', href: NavRoute.QUESTION },
    { title: 'SERVICES', href: NavRoute.SERVICES },
    { title: 'BLOGS', href: NavRoute.BLOGS },
    { title: 'FORUM', href: NavRoute.FORUM },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.root}>
            <div className={styles.navBlock}>
                {navigationLink.map((el, i) => (
                    <Link
                        key={i}
                        href={el.href}
                        className={clsx(styles.link, {
                            [styles.activeLink]: pathname === el.href,
                        })}
                    >
                        {el.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
