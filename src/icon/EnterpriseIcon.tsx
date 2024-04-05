import { Icon } from '@components/icon/Icon';
import type { FunctionComponent } from 'react';

import styles from './EnterpriseIcon.module.scss';

export const EnterpriseIcon: FunctionComponent = () => {
    return (
        <span className={styles.enterpriseIcon}>
            (e)
            <Icon name="enterprise" />
        </span>
    );
};
