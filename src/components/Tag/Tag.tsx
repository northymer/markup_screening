import type { PropsWithChildren } from 'react'
import style from "./styles.module.css"

export interface TagProps extends PropsWithChildren {
  shape?: "base" | "pill";
  variant?: "grey" | "pink";
  size?: "small" | "medium";
}

export function Tag({shape = "base", variant = "grey", size = "small", children}: TagProps) {
  return (
    <div className={style.tag} data-shape={shape} data-variant={variant} data-size={size}>
      {children}
    </div>
  )
}
