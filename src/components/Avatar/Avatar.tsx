import style from "./styles.module.css"

export interface AvatarProps {
  src: string;
  alt?: string;
}

export function Avatar({ src, alt = "" }: AvatarProps) {
  return (
    <img className={style.avatar} src={src} alt={alt} />
  )
}
