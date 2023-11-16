import styles from './toolbar.module.scss';
import Account from '../account-block/account';

export default function Toolbar() {
    return (
        <div className={styles.root}>
            <div className={styles.toolbarBlock}>
                <div>LOGO</div>
                <Account />
            </div>
        </div>
    );
}
