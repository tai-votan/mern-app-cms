import React, {
  useEffect, // useMemo
} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Input,
  Button,
  Card,
  DatePicker,
  Space,
  Select,
  Form,
  Radio,
  Skeleton,
} from 'antd';
import {
  // useIntl,
  connect, // FormattedMessage
} from 'umi';

const { Option } = Select;

const ArticlesDetails = (props) => {
  const {
    match: { params },
    dispatch,
    loading: { 'article/fetchArticleBySlug': loading },
    article: { articleDetails },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'article/fetchArticleBySlug',
      payload: {
        slug: params.articleId,
      },
    });
  }, []);

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  const handleSubmit = (values) => {
    console.log(`Func handleSubmit Line: 59, PARAMS: { values }`, { values });
  };

  if (loading) {
    return (
      <PageContainer header={{ title: false }}>
        <Row justify={'end'} style={{ marginBottom: 16 }}>
          <Col>
            <Space size={'middle'}>
              <Button loading={loading} icon={<EyeOutlined />}>
                View
              </Button>
              <Button loading={loading} type={'primary'}>
                Save
              </Button>
            </Space>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col xs={18}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
            </Space>
          </Col>
          <Col xs={6}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
              <Card>
                <Skeleton />
              </Card>
            </Space>
          </Col>
        </Row>
      </PageContainer>
    );
  }

  return (
    <PageContainer header={{ title: false }}>
      <Form
        size={'large'}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          ...articleDetails,
          publish: true,
        }}
      >
        <Row justify={'end'} style={{ marginBottom: 16 }}>
          <Col>
            <Space size={'middle'}>
              <Button icon={<EyeOutlined />}>View</Button>
              <Button type={'primary'}>Save</Button>
            </Space>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col xs={18}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card title={'1001385752'}>
                <Form.Item label="Ti??u ?????" name="title">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="N???i dung" name={'content'}>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Card>
              <Card title={'Tr??ch d???n'}>
                <Form.Item label="Field A" name={'excerpt'}>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Card>
              <Card title={'T???i ??u SEO'}>
                <Form.Item
                  label="Ti??u ????? trang"
                  name={'metaTitle'}
                  extra="We must make sure that your are a human."
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="M?? t??? trang"
                  name={'metaDescription'}
                  extra="We must make sure that your are a human."
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="???????ng d???n" name={'slug'}>
                  <Input
                    prefix={<strong>http://localhost:3000/categoryName/</strong>}
                    placeholder="input placeholder"
                  />
                </Form.Item>
              </Card>
            </Space>
          </Col>
          <Col xs={6}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card title={'Hi???n th???'}>
                <Form.Item name="publish">
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={true}>Hi???n th???</Radio>
                      <Radio value={false}>???n</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={'Thi???t l???p ng??y c??? th???'} name="publishTime">
                  <DatePicker
                    style={{ width: '100%' }}
                    fullWidth
                    showTime
                    onChange={onChange}
                    onOk={onOk}
                  />
                </Form.Item>
              </Card>
              <Card title={'H??nh ?????i di???n'} />
              <Card title={'Tags'} />
              <Card title={'Giao di???n'}>
                <Select defaultValue="lucy" style={{ width: '100%' }} loading={false}>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Card>
            </Space>
          </Col>
        </Row>
        <Row justify={'space-between'}>
          <Col>
            <Button type={'danger'} icon={<DeleteOutlined />}>
              X??a
            </Button>
          </Col>
          <Col>
            <Button htmlType="submit" type={'primary'}>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </PageContainer>
  );
};

export default connect(({ article, loading }) => ({
  article,
  loading: loading.effects,
}))(ArticlesDetails);
