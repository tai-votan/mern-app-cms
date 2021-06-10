import React, { useState, useEffect, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Card, DatePicker, Space, Select, Form, Radio } from 'antd';
import { useIntl, connect, FormattedMessage } from 'umi';

const { Option } = Select;

const ArticlesDetails = (props) => {
  const { formatMessage } = useIntl();
  const {
    dispatch,
    loading,
    page: { pages },
  } = props;

  useEffect(() => {}, []);

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  return (
    <PageContainer header={{ title: false }}>
      <Form size={'large'} layout="vertical">
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
                <Form.Item label="Field A">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Card>
              <Card title={'Trích dẫn'}>
                <Form.Item label="Field A" extra="We must make sure that your are a human.">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B" extra="We must make sure that your are a human.">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Card>
              <Card title={'Tối ưu SEO'}>
                <Form.Item label="Field A" extra="We must make sure that your are a human.">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B" extra="We must make sure that your are a human.">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Card>
            </Space>
          </Col>
          <Col xs={6}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card title={'Hiển thị'}>
                <Form.Item name="radio-group">
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value="a">Hiển thị</Radio>
                      <Radio value="b">Ẩn</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <DatePicker
                  style={{ width: '100%' }}
                  fullWidth
                  showTime
                  onChange={onChange}
                  onOk={onOk}
                />
              </Card>
              <Card title={'Hình đại diện'}></Card>
              <Card title={'Tags'}></Card>
              <Card title={'Giao diện'}>
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
              Xóa
            </Button>
          </Col>
          <Col>
            <Button type={'primary'}>Save</Button>
          </Col>
        </Row>
      </Form>
    </PageContainer>
  );
};

export default connect(({ page, loading }) => ({ page, loading: loading.effects }))(
  ArticlesDetails,
);
