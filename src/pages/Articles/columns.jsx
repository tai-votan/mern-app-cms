import React from 'react';
import { Tag, Tooltip, Space, Image } from 'antd';
import { DashOutlined } from '@ant-design/icons';
import { Link, FormattedMessage } from 'umi';
import moment from 'moment';
import styles from './index.less';

const columns = [
  {
    title: <FormattedMessage id={'articles.title'} />,
    key: 'title',
    width: 450,
    render: ({ slug, title, featuredImage }) => (
      <Link to={`/admin/articles/${slug}`}>
        <Space className={styles.spaceImage}>
          <Image
            width={48}
            height={48}
            src={featuredImage || '/static/logo.f0355d39.svg'}
            preview={false}
            alt={title}
            className={styles.articleImage}
          />
          {title}
        </Space>
      </Link>
    ),
  },
  {
    title: <FormattedMessage id={'articles.category'} />,
    key: 'blogTitle',
    width: 200,
    ellipsis: {
      showTitle: false,
    },
    render: ({ blogId, blogTitle }) => (
      <Tooltip placement="topLeft" title={blogTitle}>
        <Link to={`/admin/blogs/${blogId}`}>{blogTitle || <DashOutlined />}</Link>
      </Tooltip>
    ),
  },
  {
    title: <FormattedMessage id={'articles.tags'} />,
    key: 'tags',
    dataIndex: 'tags',
    render: (listTags = '') => {
      const sizeTags = 5;
      const tags = listTags.split(',');
      return (
        <Space size={8} wrap>
          {tags.slice(0, sizeTags).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {tags.length > sizeTags && (
            <Tag>
              <DashOutlined />
            </Tag>
          )}
        </Space>
      );
    },
  },
  {
    title: <FormattedMessage id={'articles.author'} />,
    key: 'author',
    dataIndex: 'author',
    width: 140,
    ellipsis: {
      showTitle: false,
    },
    render: (author) => (
      <Tooltip placement="topLeft" title={author}>
        {author || <DashOutlined />}
      </Tooltip>
    ),
  },
  {
    title: <FormattedMessage id={'articles.date'} />,
    key: 'updatedAt',
    dataIndex: 'updatedAt',
    width: 130,
    render: (date) => moment(date).format('DD/MM/YYYY'),
  },
];

export default columns;
