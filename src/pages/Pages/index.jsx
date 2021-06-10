import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Row, Col, Input, Button } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useIntl, connect, FormattedMessage } from 'umi';
import columnsTable from './colums';

const Articles = (props) => {
  const [limit, setLimit] = useState(20);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { formatMessage } = useIntl();
  const {
    dispatch,
    loading,
    page: { pages },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'page/fetchPage',
      payload: {
        page: 1,
        limit,
      },
    });
  }, []);

  const columns = useMemo(() => columnsTable, []);

  const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

  return (
    <PageContainer header={{ title: false }}>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col flex="auto">
          <Input
            size={'large'}
            placeholder={formatMessage({ id: 'pages.search' })}
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Button
            size={'large'}
            type="primary"
            icon={<PlusCircleOutlined style={{ marginRight: 8 }} />}
          >
            <FormattedMessage id={'pages.create'} />
          </Button>
        </Col>
      </Row>
      <Table
        loading={loading['page/fetchPage']}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={pages}
        pagination={{
          defaultPageSize: 20,
        }}
      />
    </PageContainer>
  );
};

export default connect(({ page, loading }) => ({ page, loading: loading.effects }))(Articles);
