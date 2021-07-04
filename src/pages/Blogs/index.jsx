import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Input, Button } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useIntl, FormattedMessage, history } from 'umi';
import { useSelector, useDispatch } from 'react-redux';
import columnsTable from './columns';
import routesPath from '@/../config/routesPath';
import { toNumber } from '@/utils/utils';
import DataTable from '@/components/data-table';

const Articles = () => {
  const { query } = history.location;
  const [pageSize, setPageSize] = useState(toNumber(query.pageSize) || 20);
  const [currentPage, setCurrentPage] = useState(toNumber(query.page) || 1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const {
    blog: { blogs },
    loading,
  } = useSelector((state) => ({ blog: state.blog, loading: state.loading.effects }));

  useEffect(() => {
    dispatch({
      type: 'blog/fetchBlog',
      payload: {
        page: currentPage,
        limit: pageSize,
      },
    });
  }, [pageSize, currentPage]);

  const columns = useMemo(() => columnsTable, []);

  const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

  const handleChangeUrl = (params) => history.push(params);

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
            onClick={() => handleChangeUrl({ pathname: routesPath.CREATE_BLOGS })}
          >
            <FormattedMessage id={'blogs.create'} />
          </Button>
        </Col>
      </Row>
      <DataTable
        loading={loading['blog/fetchBlog']}
        selectedRowKeys={selectedRowKeys}
        rowSelectionChange={onSelectChange}
        columns={columns}
        dataSource={blogs}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
      />
    </PageContainer>
  );
};

export default Articles;
