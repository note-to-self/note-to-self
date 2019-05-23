import styles from 'styled-components';

export const Label = styles.label`
display: none;
`;

export const Input = styles.input`
@media (min-width: 375px) {
  width: 90%;
  padding: 0.4rem;
  vertical-align: 10px;
  border-bottom: 1pt solid #568697;
  display: block;
  color: #568697;
  background-color: rgba(255,255,255,0.9);
  border-radius: 10px;
  box-shadow: 1pt 1pt grey;
}
`;
