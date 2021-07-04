import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Row, Col, Input, Button, Popover } from 'antd';
import { SearchOutlined, PlusCircleOutlined, FilterOutlined } from '@ant-design/icons';
import { useIntl, connect, FormattedMessage } from 'umi';
import columnsTable from './columns';

const Articles = (props) => {
  const [limit, setLimit] = useState(20);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { formatMessage } = useIntl();
  const {
    dispatch,
    loading,
    article: { articles },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'article/fetchArticle',
      payload: {
        page: 1,
        limit,
      },
    });
    setLimit(1);
  }, []);

  const columns = useMemo(() => columnsTable, []);

  const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

  return (
    <PageContainer header={{ title: false }}>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Popover content={<a>Close</a>} trigger="click" placement={'bottomLeft'}>
            <Button size={'large'} icon={<FilterOutlined style={{ marginRight: 8 }} />}>
              <FormattedMessage id={'articles.filter'} />
            </Button>
          </Popover>
        </Col>
        <Col flex="auto">
          <Input
            size={'large'}
            placeholder={formatMessage({ id: 'articles.search' })}
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Button
            size={'large'}
            type="primary"
            icon={<PlusCircleOutlined style={{ marginRight: 8 }} />}
          >
            <FormattedMessage id={'articles.create'} />
          </Button>
        </Col>
      </Row>
      <Table
        rowKey={'_id'}
        loading={loading['article/fetchArticle']}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={articles}
        pagination={{
          defaultPageSize: 20,
        }}
      />
    </PageContainer>
  );
};

export default connect(({ article, loading }) => ({ article, loading: loading.effects }))(Articles);
