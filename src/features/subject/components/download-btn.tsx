import * as XLSX from 'xlsx';

import { DownloadIcon } from '@/assets/icons/icons';

const DownloadBtn = ({ data = [], fileName }: any) => {
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : 'data.xlsx');
      }}
    >
      <DownloadIcon />
      Download
    </button>
  );
};

export default DownloadBtn;
