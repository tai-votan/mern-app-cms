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
    render: ({ id, title, imageUrl }) => (
      <Link to={`/admin/articles/${id}`}>
        <Space className={styles.spaceImage}>
          <Image
            width={48}
            height={48}
            src={imageUrl}
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
        <Link to={`/admin/blogs/${blogId}`}>{blogTitle}</Link>
      </Tooltip>
    ),
  },
  {
    title: <FormattedMessage id={'articles.tags'} />,
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => {
      const sizeTags = 5;
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
    key: 'authorName',
    dataIndex: 'authorName',
    width: 140,
    ellipsis: {
      showTitle: false,
    },
    render: (text) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  },
  {
    title: <FormattedMessage id={'articles.date'} />,
    key: 'published_at',
    dataIndex: 'published_at',
    width: 130,
    render: (date) => moment(date).format('DD/MM/YYYY'),
  },
];

export default columns;
