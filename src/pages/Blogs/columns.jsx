import React from 'react';
import { Tag, Space } from 'antd';
import { DashOutlined } from '@ant-design/icons';
import { Link, FormattedMessage } from 'umi';

const columns = [
  {
    title: <FormattedMessage id={'blogs.title'} />,
    key: 'title',
    width: 200,
    render: ({ slug, title }) => <Link to={`/admin/blogs/${slug}`}>{title}</Link>,
  },
  {
    title: <FormattedMessage id={'blogs.tags'} />,
    key: 'tags',
    dataIndex: 'tags',
    render: (listTags = '') => {
      const sizeTags = 15;
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
];

export default columns;
