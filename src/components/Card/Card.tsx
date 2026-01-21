import type { PropsWithChildren } from 'react'
import style from "./styles.module.css"
import { Tag } from '../Tag/Tag';
import { Avatar } from '../Avatar/Avatar';
import type { Participant } from '../../data/dummy_data';

export interface CardProps extends PropsWithChildren {
  title: string;
  tags?: string[];
  participants?: Participant[];
}

export function Card({title, tags = [], participants = [], children}: CardProps) {
  return (
    <div aria-labelledby={`Card-${title}`} className={style.card}>
      {participants.length !== 0 && <div className={style.participants}>
        {participants.map((participant) => (<Avatar key={participant.id} src={participant.avatarSrc} alt={participant.name} />))}
      </div>}
      <span className={style.title} id={`Card-${title}`}>{title}</span>
      {children && <span className={style.content}>
        {children}
      </span>}
      {tags.length !== 0 && <div className={style.tags}>
        {tags.map(tag => (<Tag variant='pink' key={tag}>{tag}</Tag>))}
      </div>}
    </div>
  )
}
