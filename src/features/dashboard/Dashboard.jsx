import React from "react";
import DocumentProcessing from "./components/DocumentProcessing";
import FormUpload from "./components/FormUpload";
import FormUploadLoading from "./components/FormUploadLoading";
import LoadingTable from "./components/LoadingTable";

const Dashboard = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-5 mx-auto px-5 py-10">
      <div className="basis-1/3">
        <FormUpload onClick={() => {}} />
        <br />
        <FormUploadLoading />
        <br />
        <DocumentProcessing />
      </div>
      <div className="basis-2/3">
        <h3 className="text-xl font-semibold mb-4">Riwayat Dokumen</h3>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>File</th>
                <th>Tanggal</th>
                <th>Hasil</th>
                <th align="center">Laporan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="p-10">
                  <LoadingTable />
                  <p className="text-center">Sedang memuat data...</p>
                </td>
              </tr>
              {[...Array(10)].map((_, i) => (
                <tr key={`document-${i}`}>
                  <td className="sticky left-0">{i + 1}</td>
                  <td>Skripsi Revisi II.pdf</td>
                  <td>13 September 2022 13:00</td>
                  <td>
                    <span className="badge badge-error badge-sm">
                      Tidak Lolos
                    </span>
                  </td>
                  <td align="center">
                    <button className="btn btn-ghost btn-sm">Unduh</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
