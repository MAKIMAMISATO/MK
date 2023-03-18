import {hot} from "react-hot-loader/root";
import * as React from "react";
import {Layout} from "./Layout";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import styles from "./header.css";
import "../main.global.css"

function HeaderComponent() {
  return (
    <Layout>
      <h2>Hello ^ ^</h2>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
}

export const Header = hot(HeaderComponent);
