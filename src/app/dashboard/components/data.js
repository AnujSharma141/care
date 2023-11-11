export default function data(showModal, setRow) {    
return {
    dataSource : [
        {
            key: 0,
            name: "Hello Knee",
            location: "Left Thigh Severe",
            reportedBy: "RC Gupta",
            reportedDate: '12 Nov 2023' // should be in utc 
        },
        {
            key: 1,
            name: "Knee Bruse",
            location: "Right Thigh Severe",
            reportedBy: "RC Gupta",
            reportedDate: '15 Nov 2023' // should be in utc 
        },
        ],
    columns: [
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
    ],
}
}

