import Link from "next/link";
import cls from "classnames";

import styles from "./StatusBoard.module.scss";

const statusList = [
  { name: "planned", count: 1 },
  { name: "in-progress", count: 2 },
  { name: "live", count: 3 },
];
const StatusBoard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>RoadMap</h3>
        <Link href="/roadmap" passHref>
          <a className={styles.link}>View</a>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        {statusList.map(({ name, count }, index) => {
          return (
            <div key={name} className={styles.row}>
              <div className={styles.statusWrapper}>
                <div className={cls(styles.circle, styles[name])}></div>
                <span className={styles.name}>{name}</span>
              </div>
              <div className={styles.count}>{count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusBoard;
