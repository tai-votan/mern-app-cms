import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Card, Space, Select, Form, Upload, message } from 'antd';
import { useIntl } from 'umi';
import { useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './index.less';

const { Option } = Select;

const CreateBlog = (props) => {
  console.log(`Func CreateBlog Line: 14, PARAMS: { props }`, { props });
  const { formatMessage } = useIntl();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUpLoading] = useState(false);
  const dispatch = useDispatch();

  function onFinish(value) {
    dispatch({
      type: 'blog/createBlog',
      payload: value,
    });
  }

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setUpLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imgUrl) => {
        setImageUrl(imgUrl);
        setUpLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <PageContainer header={{ title: false }}>
      <Form form={form} size={'large'} layout="vertical" onFinish={onFinish}>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col xs={18}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card title={formatMessage({ id: 'blogs.create.cards.information' })}>
                <Form.Item
                  label={formatMessage({ id: 'blogs.create.cards.information.title' })}
                  name={'title'}
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label={formatMessage({ id: 'blogs.create.cards.information.content' })}
                  name={'content'}
                  className={styles.blogEditor}
                >
                  <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      form.setFieldsValue({ content: data });
                      console.log({ event, editor, data });
                    }}
                  />
                </Form.Item>
              </Card>
              <Card title={formatMessage({ id: 'SEO.cardTitle' })}>
                <Form.Item
                  noStyle
                  shouldUpdate={({ metaTitle }, cur) => metaTitle !== cur.metaTitle}
                >
                  {({ getFieldValue }) => {
                    const titleLength = (getFieldValue('metaTitle') || '').length;
                    return (
                      <Form.Item
                        label={formatMessage({ id: 'SEO.title' })}
                        name={'metaTitle'}
                        extra={`${titleLength}/70 ${formatMessage({ id: 'SEO.characters' })}`}
                        rules={[
                          {
                            max: 70,
                            message: formatMessage(
                              { id: 'SEO.characters.max' },
                              { title: formatMessage({ id: 'SEO.title' }), limit: 320 },
                            ),
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={({ metaDescription }, curValues) =>
                    metaDescription !== curValues.metaDescription
                  }
                >
                  {({ getFieldValue }) => {
                    const descriptionLength = (getFieldValue('metaDescription') || '').length;
                    return (
                      <Form.Item
                        label={formatMessage({ id: 'SEO.description' })}
                        name={'metaDescription'}
                        extra={`${descriptionLength}/320 ${formatMessage({
                          id: 'SEO.characters',
                        })}`}
                        rules={[
                          {
                            max: 320,
                            message: formatMessage(
                              { id: 'SEO.characters.max' },
                              { title: formatMessage({ id: 'SEO.description' }), limit: 320 },
                            ),
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Form.Item label={formatMessage({ id: 'SEO.slug' })} name={'slug'}>
                  {/* eslint-disable-next-line no-restricted-globals */}
                  <Input prefix={`${location.origin}/`} />
                </Form.Item>
              </Card>
            </Space>
          </Col>
          <Col xs={6}>
            <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
              <Card title={'Hình đại diện'}>
                <Upload
                  style={{ width: '100%' }}
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Card>
              <Card title={'Tags'}>
                <Select
                  size={'large'}
                  defaultValue="lucy"
                  style={{ width: '100%' }}
                  loading={false}
                >
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Card>
              <Card title={'Giao diện'}>
                <Select
                  size={'large'}
                  defaultValue="lucy"
                  style={{ width: '100%' }}
                  loading={false}
                >
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
            <Button type={'primary'} htmlType="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </PageContainer>
  );
};

export default CreateBlog;
