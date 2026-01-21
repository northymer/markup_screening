import type { PropsWithChildren } from "react";
import { Tag } from "../Tag/Tag";
import style from "./styles.module.css"

export interface ColumnProps extends PropsWithChildren {
  title: string;
}
export function Column({title, children}: ColumnProps) {
  return (
    <section aria-labelledby={`Column-${title}`} className={style.column}>
      <div className={style.title} id={`Column-${title}`}>
        <Tag shape="pill" size="medium">{title}</Tag>
      </div>
      {children}
    </section> 
  )
}
