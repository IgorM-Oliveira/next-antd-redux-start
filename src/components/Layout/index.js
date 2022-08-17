import React from "react";
import { Layout } from 'antd';

const LayoutComponent = (props) => {
  return (
    <Layout className={'layout'}>
      {props.children}
    </Layout>
  )
}

export default LayoutComponent;