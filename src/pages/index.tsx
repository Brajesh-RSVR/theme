import { MainLayout } from '@/components/Layout/MainLayout';
import { FlatBtn } from '@/components/Utility/Buttons/FlatBtn';

export default function Home() {
  return (
    <MainLayout>
      <FlatBtn title="test" color="primary" />
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
