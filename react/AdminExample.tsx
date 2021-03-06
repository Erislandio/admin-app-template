import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Layout, PageBlock, PageHeader } from "vtex.styleguide";
import UsersTable from "./UsersTable";

import "./styles.global.css";

class AdminExample extends Component {
  public render() {
    return (
      <Layout
        pageHeader={
          <PageHeader
            title={<FormattedMessage id="admin-example.hello-world" />}
          />
        }
      >
        <PageBlock variation="full">
          <UsersTable />
        </PageBlock>
      </Layout>
    );
  }
}

export default AdminExample;
