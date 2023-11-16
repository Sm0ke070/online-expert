import Image from 'next/image';
import { userData } from '../../../utils/mockData';
import styles from './account.module.scss';

export default function Account() {
    return (
        <div className={styles.root}>
            <p>{userData.name}</p>
            <Image
                src={userData.avatar}
                alt={'user avatar'}
                height={50}
                width={50}
                quality={100}
            />
        </div>
    );
}
