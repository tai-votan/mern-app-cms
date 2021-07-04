import React from 'react';
import { Table } from 'antd';
import { history } from 'umi';

function DataTable(props) {
  const {
    loading,
    selectedRowKeys,
    rowSelectionChange,
    columns,
    dataSource,
    pageSize,
    currentPage,
    setCurrentPage,
    setPageSize,
  } = props;

  return (
    <Table
      loading={loading}
      rowSelection={{
        selectedRowKeys,
        onChange: rowSelectionChange,
      }}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSizeOptions: [10, 20, 50],
        showSizeChanger: true,
        pageSize,
        current: currentPage,
        onChange: (page, size) => {
          const newPage = pageSize === size ? page : 1;
          setCurrentPage(newPage);
          history.push({ query: { page: newPage, pageSize: size } });
        },
        onShowSizeChange: (current, size) => setPageSize(size),
      }}
    />
  );
}

export default DataTable;
