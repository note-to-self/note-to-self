import styles from 'styled-components';
import community from '../../../assets/images/community2.jpg';
import { Header } from '../journal/JournalStyles';

export const CommunityHeader = styles(Header) `
  background-image: url(${community});
`;
