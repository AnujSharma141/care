"use client"
import React, {useEffect, useState, useRef} from 'react'
import { Table, Button, Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

function InjuryTable({data}) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

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

    useEffect(() => {
        for(let i in data.columns){
            if(data.columns[i].dataIndex === 'name'){
                data.columns[i] = {...data.columns[i], ...getColumnSearchProps(data.columns[i].dataIndex)}
            }else if(data.columns[i].dataIndex === 'date'){
                data.columns[i] = {...data.columns[i], 
                    ...getColumnSearchProps(data.columns[i].dataIndex),
                    sorter: (a, b) => 
                        new Date(a.date) - new Date(b.date),
                    sortDirections: ['descend', 'ascend'], 
                    }
            }
            
        }
    },[])


  return (
    <div>
      <Table pagination={{position: ['none']}} dataSource={data.dataSource} columns={data.columns} />
    </div>
  )
}

export default InjuryTable