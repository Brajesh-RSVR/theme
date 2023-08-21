import { MainLayout } from '@/components/Layout/MainLayout';
import { BorderBtn } from '@/components/Utility/Buttons/BorderBtn';
import { FlatBtn } from '@/components/Utility/Buttons/FlatBtn';
import { IconBtnText } from '@/components/Utility/Buttons/IconBtn';
import { NormalBtn } from '@/components/Utility/Buttons/NormalBtn';
// import { TextField } from '@/components/Utility/input/TextField';
import { AiFillAndroid } from 'react-icons/ai';
import { CardContainer } from '../components/Utility/Card/CardContainer';
import { ToggleButton } from '@/components/Utility/Buttons/ToggleBtn';
import { TabContainer } from '@/components/Utility/TabContainer/GroupTabButton';
import { GroupTabButton } from '@/components/Utility/GroupTabButton/GroupTabButton';
import { ProblemShow } from '@/components/Utility/problem';

export default function Home() {
  const handleToggleChange = (checked: boolean) => {
    console.log('Toggle button checked:', checked);
  };
  return (
    <MainLayout>
      <FlatBtn title="flat button" color="primary" disable={false} />
      <br />
      <br />
      <NormalBtn title="normal button" color="primary" loading={false} disable={false} />
      <br />
      <BorderBtn title="border button" color="primary" loading={false} disable={false} />
      <br />
      <IconBtnText
        title="border button"
        color="primary"
        spacing={3}
        iconPosition="start"
        textSize={1}
        loading={false}
        disable={false}
      >
        <AiFillAndroid />
      </IconBtnText>
      <br />
      {/* <TextField /> */}
      <br />
      <CardContainer color="ebebeb" alphaValue={1} shadowColor="000000">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>test</p>
      </CardContainer>

      <br />
      <ToggleButton onChange={handleToggleChange} themeColor="primary-bg" isLabel />
      <br />
      <TabContainer primaryColor="ffffff" secColor="c9c9c9" activeBar="ff0000"
      // title={['test', 'test2', 'test3', 'test4', 'test5']}
      />
      <GroupTabButton tabRadius={4} />
      <div style={{padding: 25, marginTop: 50, marginBottom: 50}}>

      <ProblemShow />
      </div>
    </MainLayout>
  );
}
