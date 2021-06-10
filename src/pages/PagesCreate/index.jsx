import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Row, Col, Input, Button } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useIntl, connect, FormattedMessage } from 'umi';

const Articles = (props) => {
  const { formatMessage } = useIntl();
  const {
    dispatch,
    loading,
    page: { pages },
  } = props;

  useEffect(() => {}, []);

  return (
    <PageContainer header={{ title: false }}>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col></Col>
        <Col></Col>
      </Row>
    </PageContainer>
  );
};

export default connect(({ page, loading }) => ({ page, loading: loading.effects }))(Articles);
