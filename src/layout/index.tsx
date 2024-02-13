import type { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
};

const Layout = (props: IProps) => {
  return <div>{props.children}</div>;
};

export default Layout;
