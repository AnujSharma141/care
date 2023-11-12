"use client"
import React, {useEffect, useState, useRef} from 'react'
import { Table, Button, Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';


function InjuryTable({showModal, setRow ,stats}) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    stats = stats.map(item=>{
      return{...item, key: stats.indexOf(item)}
    })

    const handleSearch = (
        selectedKeys,
        confirm,
        dataIndex,
      ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
    
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  setSearchText((selectedKeys )[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes((value).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
      });
      
    const column = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onCell: (record, rowIndex) => {
          return {
              onClick: (ev) => {
                  showModal()
                  setRow(record)
              },
          };
      },
      ...getColumnSearchProps('name')
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        onCell: (record, rowIndex) => {
          return {
              onClick: (ev) => {
                  showModal()
                  setRow(record)
              },
          };
      },
      },
      {
        title: 'Reported By',
        dataIndex: 'reportedBy',
        key: 'reportedBy',
        onCell: (record, rowIndex) => {
          return {
              onClick: (ev) => {
                  showModal()
                  setRow(record)
              },
          };
      },
      },
      {
          title: 'Date',
          dataIndex: 'reportedDate',
          key: 'reportedDate',
          onCell: (record, rowIndex) => {
            return {
                onClick: (ev) => {
                    showModal()
                    setRow(record)
                },
            };
        },
        ...getColumnSearchProps('reportedDate'),
        sorter: (a, b) => new Date(a.reportedDate) - new Date(b.reportedDate  ),
        sortDirections: ['descend', 'ascend'], 
      },
  ]
  return (
    <div>
      <Table pagination={{position: ['none']}} dataSource={stats? stats: []} columns={column} />
    </div>
  )
}

export default InjuryTable