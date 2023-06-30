import { MainLayout } from '@/components/Layout/MainLayout';
import { BorderBtn } from '@/components/Utility/Buttons/BorderBtn';
import { FlatBtn } from '@/components/Utility/Buttons/FlatBtn';
import { IconBtnText } from '@/components/Utility/Buttons/IconBtn';
import { NormalBtn } from '@/components/Utility/Buttons/NormalBtn';
import { AiFillAndroid } from 'react-icons/ai';

export default function Home() {
  return (
    <MainLayout>
      <FlatBtn title="flat button" color="primary" />
      <NormalBtn title="normal button" color="primary" />
      <BorderBtn title="border button" color="primary" />
      <IconBtnText title="border button" color="primary" iconColor="secondary" spacing={3} iconPosition='end'>
        <AiFillAndroid />
      </IconBtnText>
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
