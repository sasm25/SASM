import ImpDates from "./ImpDates";

export default function Registration() {
  return (
    <main className="">
      <ImpDates />
      <div className="bg-black bg-opacity-15 p-6 min-h-[calc(100vh)] rounded-lg shadow-lg w-[90%] md:w-[65%] mx-auto text-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-300">
          Conference Registration Details
        </h2>

        <div className="mb-2">
          <p className="text-gray-200">
            <strong>Submission of Extended Abstract:</strong> The extended
            abstracts are to be submitted in editable MS-Word format to the mail
            id sasm25@bitsindri.ac.in. The subject line should mention "Extended
            Abstract: Name of the corresponding Author"
            <br />
            The formatting instructions for abstract submission is provided
            below.
          </p>
          <br />
          <p className="text-gray-200 mt-2">
            <strong>
              Registration Fee: 500/- (for students and research scholars),
              1000/- (for faculty members)
            </strong>
          </p>
          <br />
          <p className="text-gray-200 mt-2">
            <strong>Publication:</strong> A Book of Abstracts based on the
            expert talks and the research presentations will be published during
            the seminar.
          </p>
          <br />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-300">
          Registration Fees
        </h2>
        <table className="w-full table-auto border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-100 px-4 py-2 text-left">
                Category
              </th>
              <th className="border border-gray-100 px-4 py-2 text-left">
                Indian Participants
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-100 px-4 py-2">
                Students and PhD Scholars
              </td>
              <td className="border border-gray-100 px-4 py-2">INR 500/-</td>
            </tr>
            <tr>
              <td className="border border-gray-100 px-4 py-2">
                Faculty Members and Researchers from R&D Labs
              </td>
              <td className="border border-gray-100 px-4 py-2">INR 1000/-</td>
            </tr>
            <tr>
              <td className="border border-gray-100 px-4 py-2">
                Industry Participants
              </td>
              <td className="border border-gray-100 px-4 py-2">INR 1000/-</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-300 text-sm">
          *Registration Fee amounts are excluding applicable taxes
        </p>
        <p className="text-gray-300 text-sm mb-4">
          **Participants with Indian affiliations.
        </p>

        <div className="bg-black bg-opacity-20 p-4 rounded-lg text-gray-200 mb-6">
          <h3 className="text-xl font-semibold mb-2">Note:</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>
              Conference Registration Fees do not include accommodation charges
            </li>
            <li>
              On-campus accommodation can be arranged on payment basis, subject
              to availability
            </li>
          </ul>
        </div>

        {/* Bank Account Details Table */}
      </div>
      <div className="bg-black bg-opacity-15 p-6 rounded-lg shadow-lg w-[90%] md:w-[65%] mx-auto m-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-300">
          Bank Account Details for Payment
        </h2>
        <table className="w-full table-auto text-white border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-100 px-4 py-2 text-left">
                A/C Holder Name
              </th>
              <th className="border border-gray-100 px-4 py-2 text-left">
                A/C Number
              </th>
              <th className="border border-gray-100 px-4 py-2 text-left">
                Branch
              </th>
              <th className="border border-gray-100 px-4 py-2 text-left">
                IFSC Code
              </th>
              <th className="border border-gray-100 px-4 py-2 text-left">
                MICR Code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-100 px-4 py-2">
                Director, BIT SINDRI, Dhanbad
              </td>
              <td className="border border-gray-100 px-4 py-2">10635508859</td>
              <td className="border border-gray-100 px-4 py-2">BIT Dhanbad</td>
              <td className="border border-gray-100 px-4 py-2">SBIN0011812</td>
              <td className="border border-gray-100 px-4 py-2">826002516</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-300 mb-6">
          *Please ensure you mention your name and paper title in the payment
          remark/details during the transaction.
        </p>
      </div>
    </main>
  );
}
