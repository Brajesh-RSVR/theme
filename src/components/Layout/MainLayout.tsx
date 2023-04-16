export interface props {
  children?: React.ReactNode;
}
export const MainLayout = ({ children }: props) => {
  return <div className="container m-auto">{children}</div>;
};
