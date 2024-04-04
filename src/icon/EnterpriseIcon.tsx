import { Icon } from '@components/icon/Icon';
import styles from './EnterpriseIcon.module.scss';
import type { FunctionComponent } from 'react';

export const EnterpriseIcon: FunctionComponent = () => {
    return (
        <span className={styles.enterpriseIcon}>
            (e)
            <Icon name="enterprise" />
        </span>
    );
};
