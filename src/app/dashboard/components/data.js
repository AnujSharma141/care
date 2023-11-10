export const mock = {
    dataSource : [
    {
        key: 0,
        name: "Hello Knee",
        type: "Left Thigh Severe",
        reportedBy: "RC Gupta",
        date: '12 Nov 2023' // should be in utc 
    },
    {
        key: 1,
        name: "Knee Bruse",
        type: "Right Thigh Severe",
        reportedBy: "RC Gupta",
        date: '15 Nov 2023' // should be in utc 
    },
    ],
    columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Reported By',
          dataIndex: 'reportedBy',
          key: 'reportedBy',
        },
        {
            title: 'Date',
            dataIndex: 'reportedDate',
            key: 'reportedDate',
        },
    ],
}