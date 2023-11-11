export default function data(showModal, setRow) {    
    return {columns: [
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
        },
    ]}
}


