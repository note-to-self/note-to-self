import styles from 'style-components';
import community from '../../assets/images/community.jpg';
import { Header } from '../journal/JournalStyles';

export const CommunityHeader = styles(Header) `
  background-image: url(${community});
`;
