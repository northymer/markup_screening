import avatar1 from '../assets/avatars/avatar1.jpg';
import avatar2 from '../assets/avatars/avatar2.png';

export interface Participant {
  id: string;
  name: string;
  avatarSrc: string;
}

export const participants: Participant[] = [
  { id: '1', name: 'John Doe', avatarSrc: avatar1 },
  { id: '2', name: 'Jane Smith', avatarSrc: avatar2 },
];
