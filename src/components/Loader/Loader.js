import { Rings } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBox>
      <Rings color="#22223b" />
    </LoaderBox>
  );
}