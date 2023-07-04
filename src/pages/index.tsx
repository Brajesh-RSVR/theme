import { MainLayout } from '@/components/Layout/MainLayout';
import { BorderBtn } from '@/components/Utility/Buttons/BorderBtn';
import { FlatBtn } from '@/components/Utility/Buttons/FlatBtn';
import { IconBtnText } from '@/components/Utility/Buttons/IconBtn';
import { NormalBtn } from '@/components/Utility/Buttons/NormalBtn';
// import { TextField } from '@/components/Utility/input/TextField';
import { AiFillAndroid } from 'react-icons/ai';
import { CardContainer } from '../components/Utility/Card/CardContainer';

export default function Home() {
  return (
    <MainLayout>
      <FlatBtn title="flat button" color="primary" />
      <br />
      <NormalBtn title="normal button" color="primary" />
      <br />
      <BorderBtn title="border button" color="primary" />
      <br />
      <IconBtnText title="border button" color="primary" spacing={3} iconPosition="start" textSize={1} loading={false}>
        <AiFillAndroid />
      </IconBtnText>
      <br />
      {/* <TextField /> */}
      <br />
      <CardContainer>test</CardContainer>
      <br />
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>test</p>
    </MainLayout>
  );
}
