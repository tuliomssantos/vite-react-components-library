import styles from "./styles.module.css";

import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <div className={styles.button}>{children}</div>;
}
