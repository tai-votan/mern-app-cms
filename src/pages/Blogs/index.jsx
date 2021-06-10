import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Row, Col, Input, Button } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useIntl, FormattedMessage, history } from 'umi';
import columnsTable from './colums';
import routesPath from '@/../config/routesPath';
import { useSelector, useDispatch } from 'react-redux';

const Articles = (props) => {
  const [limit, setLimit] = useState(20);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  // const {
  //   dispatch,
    // loading,
    // blog: { blogs },
  // } = props;

  const { blog: { blogs }, loading } = useSelector(state => ({ blog: state.blog, loading: state.loading.effects }))
  useEffect(() => {
    dispatch({
      type: 'blog/fetchBlog',
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
            placeholder={formatMessage({ id: 'blogs.search' })}
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Button
            size={'large'}
            type="primary"
            icon={<PlusCircleOutlined style={{ marginRight: 8 }} />}
            onClick={() => history.push(routesPath.CREATE_BLOGS)}
          >
            <FormattedMessage id={'blogs.create'} />
          </Button>
        </Col>
      </Row>
      <Table
        loading={loading['blog/fetchBlog']}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={blogs}
        pagination={{
          defaultPageSize: 20,
        }}
      />
    </PageContainer>
  );
};

export default Articles
