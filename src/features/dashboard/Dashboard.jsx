import React, { useEffect } from "react";
import { FaDownload, FaExclamationTriangle, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, Link } from "react-router-dom";
import { fetchDashboardData } from "../../redux/reducers/dashboard";
import DocumentProcessing from "./components/DocumentProcessing";
import FormUpload from "./components/FormUpload";
import FormUploadLoading from "./components/FormUploadLoading";
import LoadingTable from "./components/LoadingTable";

const Dashboard = () => {
  const jobStatus = useSelector((state) => state.dashboard.jobStatus);
  const fetchStatus = useSelector((state) => state.dashboard.fetchStatus);
  const data = useSelector((state) => state.dashboard.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <div className="container flex flex-col lg:flex-row gap-5 mx-auto px-5 py-10">
      <div className="basis-1/3">
        {jobStatus === "idle" ? (
          <FormUpload />
        ) : jobStatus === "loading" ? (
          <FormUploadLoading />
        ) : (
          <DocumentProcessing />
        )}
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
              {fetchStatus === "loading" ? (
                <tr>
                  <td colSpan={5} className="p-10">
                    <LoadingTable />
                    <p className="text-center">Sedang memuat data...</p>
                  </td>
                </tr>
              ) : fetchStatus === "success" ? (
                <React.Fragment>
                  {data.map((_, i) => (
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
                        <div className="btn-group">
                          <Link
                            className="btn btn-sm"
                            to={generatePath("/dashboard/viewer/:id", {
                              id: i,
                            })}
                          >
                            <FaEye />
                          </Link>
                          <button className="btn btn-primary btn-sm">
                            <FaDownload />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ) : (
                <tr>
                  <td colSpan={5} className=" text-center p-10">
                    <p className="mb-5">Terjadi kesalahan...</p>
                    <button
                      className="btn btn-ghost btn-sm gap-2"
                      onClick={() => dispatch(fetchDashboardData())}
                    >
                      <FaExclamationTriangle />
                      <span>Muat ulang</span>
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
