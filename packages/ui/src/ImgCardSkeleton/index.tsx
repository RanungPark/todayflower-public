import styles from './imgCardSkeleton.module.css';
import skeleton from '../shared/_skeleton.module.css';

export default function ImgCardSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.img} ${skeleton.skeleton}`} />
      <div className={styles.contents}>
        <div className={`${styles.name} ${skeleton.skeleton}`} />
        <div className={`${styles.price} ${skeleton.skeleton}`} />
      </div>
    </div>
  );
}
