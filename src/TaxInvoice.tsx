/**
 * TaxInvoice Component
 *
 * This component renders a tax invoice with a detachable customer receipt on the right side.
 * The invoice is designed to be printed with the right side easily cut off along the vertical line.
 *
 * Features:
 * - Main invoice on the left (75% width)
 * - Detachable customer receipt on the right (25% width)
 * - Horizontally aligned sections for clean cutting
 * - Responsive design for print and screen viewing
 */
export default function TaxInvoice() {
  // Sample data - replace with dynamic data in production
  const invoiceData = {
    company: {
      name: "EKTA ENTERPRISES",
      gstn: "23AJBPS6285R1ZF",
      fssai: "11417230000027",
      dlNo: "20B/807/54/2022 , 21B/808/54/2022 , 20/805/54/2022 , 21/806/54/2022",
      address: "BUDHWARI BAZAR,GN ROAD SEONI,",
      phone: "9179174888 , 9826623188",
      officeNo: "07692-220897",
      stateCode: "23",
      bankDetails: "PUNJAB NATIONAL BANK SEONI 0490008700003292 PUNB0049000",
    },
    customer: {
      name: "HEERA TRADERS",
      address: "NAINPUR",
      gstn: "23HKDPK5985E1ZY",
      mobile: "9074762399",
      balance: "48996.00 Dr",
    },
    invoice: {
      number: "N-12036",
      date: "15.02.2024",
      time: "04:06:55 PM",
      dueDate: "22.02.2024",
      mode: "CREDIT",
      refNo: "123",
      ackNo: "81733333333333333333352",
      ackDate: "2024/02/15 04:07:00",
      irnNo: "afbe11b68d1c303dc8757459442ba324b8d97dacf599876b73952dda2d1a3b1",
    },
    items: [
      {
        name: "NO1 SANDAL TURMERIC 57G PO4 M4",
        hsn: "34011190",
        pack: "",
        mrp: "40.00",
        gst: "18.00",
        rate: "1755.00",
        unit: "Box - 54",
        qty: "15",
        free: "",
        schRs: "",
        coSch: "",
        netAmt: "26325.00",
      },
      {
        name: "NO1 LIME&AV 57G PO4 M40 P54 N",
        hsn: "34011190",
        pack: "",
        mrp: "40.00",
        gst: "18.00",
        rate: "1755.00",
        unit: "Box - 54",
        qty: "5",
        free: "",
        schRs: "",
        coSch: "",
        netAmt: "8775.00",
      },
      {
        name: "RIN BAR SAPPHIRE FW 160G (30G",
        hsn: "34011930",
        pack: "160",
        mrp: "10.00",
        gst: "18.00",
        rate: "690.00",
        unit: "Box - 84",
        qty: "20",
        free: "",
        schRs: "",
        coSch: "",
        netAmt: "13800.00",
      },
    ],
    summary: {
      itemsInBill: "3",
      casesInBill: "40.0",
      looseItemsInBill: "0",
      goods: "41440.68",
      sgst: "9.00%",
      sgstValue: "3729.66",
      cgst: "9.00%",
      cgstValue: "3729.66",
      grossAmt: "48900.00",
      lessSch: "0.00",
      lessCD: "0.00",
      rOff: "0.00",
      netAmt: "48900.00",
    },
  };

  return (
    <div className="w-full text-xs print:text-[10px] border border-black">
      {/* Main container with left and right sections */}
      <div className="flex">
        {/* ===== LEFT SIDE - MAIN INVOICE ===== */}
        <div className="w-3/4 border-r-2 border-black">
          {/* Header Section */}
          <div className="border-b border-black h-[80px] flex">
            {/* Left Header */}
            <div className="w-3/5 p-1">
              <div className="flex flex-col">
                <div className="flex">
                  <span className="font-bold">
                    GSTN : {invoiceData.company.gstn}
                  </span>
                  <span className="ml-2">BILL MADE BY SHUBHAM</span>
                </div>
                <div className="flex">
                  <span className="font-bold">
                    Subject to SEONI Jurisdiction
                  </span>
                </div>
                <div className="flex">
                  <span className="font-bold">
                    FSSAI NO : {invoiceData.company.fssai}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-bold">
                    D.L. No.: {invoiceData.company.dlNo}
                  </span>
                </div>
              </div>
            </div>

            {/* Center Header */}
            <div className="w-2/5 p-1 flex flex-col items-center">
              <div className="text-center">
                <div className="text-sm font-bold">Tax Invoice</div>
                <div className="text-xl font-bold">
                  {invoiceData.company.name}
                </div>
                <div className="text-xs">{invoiceData.company.address}</div>
              </div>
            </div>
          </div>

          {/* Customer Info Section */}
          <div className="flex border-b border-black h-[80px]">
            {/* Customer Details */}
            <div className="w-1/3 p-1 border-r border-black">
              <div className="flex">
                <div className="w-1/4 font-bold">Party</div>
                <div className="w-3/4">{invoiceData.customer.name}</div>
              </div>
              <div className="flex">
                <div className="w-1/4 font-bold">Address</div>
                <div className="w-3/4">{invoiceData.customer.address}</div>
              </div>
              <div className="flex">
                <div className="w-1/4 font-bold">GSTN No.</div>
                <div className="w-3/4">{invoiceData.customer.gstn}</div>
              </div>
              <div className="flex">
                <div className="w-1/4 font-bold">Mobile No.</div>
                <div className="w-3/4">{invoiceData.customer.mobile}</div>
              </div>
            </div>

            {/* Additional Customer Info */}
            <div className="w-1/3 p-1  flex border-black items-end">
              <div className="flex flex-row justify-left gap-2 items-end">
                <div className="gap-2">
                  <div>State Code: {invoiceData.company.stateCode}</div>
                  <div> FSSAI No.:</div>
                </div>
              </div>
              <div className="flex flex-row ml-2   gap-2 mt-2">
                <div>
                  <div> Balance : {invoiceData.customer.balance}</div>
                  <div>D/L No.:</div>
                </div>
              </div>
            </div>
            {/* QR Code */}
            <div className="flex justify-center mt-2">
              <div className="bg-gray-300 w-16 h-16"></div>
            </div>

            {/* Invoice Details */}
            <div className="w-1/3 p-1 border-l border-black ml-2">
              <div className="flex justify-left gap-2">
                <div className="font-bold">Inv. No:</div>
                <div>{invoiceData.invoice.number}</div>
                <div className="font-bold ml-2">Mode:</div>
                <div>{invoiceData.invoice.mode}</div>
              </div>
              <div className="flex justify-left gap-2">
                <div className="font-bold">Date:</div>
                <div>{invoiceData.invoice.date}</div>
                <div>{invoiceData.invoice.time}</div>
              </div>
              <div className="flex justify-left gap-2">
                <div className="font-bold">Due Date:</div>
                <div>{invoiceData.invoice.dueDate}</div>
              </div>
              <div className="flex justify-left gap-2">
                <div className="font-bold">Ref. No:</div>
                <div>{invoiceData.invoice.refNo}</div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="border-b border-black p-1">
            <div className="flex justify-between gap-4">
              <div>Ack. No: {invoiceData.invoice.ackNo}</div>
              <div>Ack. Date: {invoiceData.invoice.ackDate}</div>
            </div>
            <div>
              <strong>IRN No.:</strong> {invoiceData.invoice.irnNo}
            </div>
          </div>

          {/* Item Table Section */}
          <div className="border-b border-black">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left">
                    Particulars/HSN
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Pack
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    M.R.P.
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    GST %
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Rate
                    <br />
                    (incl of Tax)
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Unit
                  </th>
                  <th className="border-r border-black p-1 text-center">Qty</th>
                  <th className="border-r border-black p-1 text-center">
                    Free
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Sch Rs.
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Co. Sch%
                    <br />
                    Cash Disc%
                  </th>
                  <th className="p-1 text-center">Net Amt.</th>
                </tr>
              </thead>
              <tbody>
                {/* Render invoice items */}
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-b border-black">
                    <td className="border-r border-black p-1">
                      {item.name}
                      <br />
                      {item.hsn}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.pack}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.mrp}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.gst}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.rate}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.unit}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.qty}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.free}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.schRs}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.coSch}
                    </td>
                    <td className="p-1 text-center">{item.netAmt}</td>
                  </tr>
                ))}

                {/* Empty rows for additional items */}
                {[...Array(7)].map((_, i) => (
                  <tr key={`empty-${i}`} className="border-b border-black">
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="p-1">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <div className="flex border-b border-black">
            {/* Left Footer - Items in Bill */}
            <div className="w-1/6 border-r border-black p-1">
              <div className="flex">
                <div className="font-bold">Items in Bill</div>
                <div className="ml-1">{invoiceData.summary.itemsInBill}</div>
              </div>
              <div className="flex">
                <div className="font-bold">Cases in Bill</div>
                <div className="ml-1">{invoiceData.summary.casesInBill}</div>
              </div>
              <div className="flex">
                <div className="font-bold">Loose Items in Bill</div>
                <div className="ml-1">
                  {invoiceData.summary.looseItemsInBill}
                </div>
              </div>
            </div>

            {/* Center Footer - Terms & Conditions */}
            <div className="w-1/3 border-r border-black p-1">
              <div className="font-bold underline">Terms & Conditions</div>
              <div className="text-[8px]">
                1. We herby certify that articles of food mentioned in the
                invoice are
                <br />
                warranted to be of the nature and quality which
                <br />
                they purport to be as per the Food Safety and Standards Act
                <br />
                and Rules.
                <br />
                Goods once sold will not be taken back. E & OE.
              </div>
            </div>

            {/* Right Footer - Tax Details */}
            <div className="w-1/2 p-0">
              <div className="flex">
                <div className="w-3/5 border-r border-black">
                  <div className="flex border-b border-black text-center text-[8px]">
                    <div className="w-1/5 px-1">Goods</div>
                    <div className="w-1/5 px-1 border-l border-black">
                      SGST%
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      Value
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      CGST%
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      Value
                    </div>
                  </div>
                  <div className="flex text-[8px] text-center">
                    <div className="w-1/5 px-1">
                      {invoiceData.summary.goods}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.sgst}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.sgstValue}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.cgst}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.cgstValue}
                    </div>
                  </div>
                  <div className="flex text-[8px] text-center border-t border-black">
                    <div className="w-1/5 px-1">
                      {invoiceData.summary.goods}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black"></div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.sgstValue}
                    </div>
                    <div className="w-1/5 px-1 border-l border-black"></div>
                    <div className="w-1/5 px-1 border-l border-black">
                      {invoiceData.summary.cgstValue}
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="flex justify-between px-1 font-bold">
                    <div>Gross Amt</div>
                    <div>{invoiceData.summary.grossAmt}</div>
                  </div>
                  <div className="flex justify-between px-1">
                    <div>Less Sch.</div>
                    <div>{invoiceData.summary.lessSch}</div>
                  </div>
                  <div className="flex justify-between px-1">
                    <div>Less CD</div>
                    <div>{invoiceData.summary.lessCD}</div>
                  </div>
                  <div className="flex justify-between px-1">
                    <div>R.Off</div>
                    <div>{invoiceData.summary.rOff}</div>
                  </div>
                  <div className="flex justify-between px-1 font-bold border-t border-black">
                    <div>Net Amt.</div>
                    <div>{invoiceData.summary.netAmt}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-1">
            <div className="font-bold">
              This is computer generated Bill, No signature required.. Bank:
              {invoiceData.company.bankDetails}
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE - CUSTOMER RECEIPT ===== */}
        <div className="w-1/4">
          {/* Header - Matches height with left header */}
          <div className="border-b border-black p-1 text-center h-[80px] flex flex-col justify-center">
            <div className="text-sm font-bold">{invoiceData.company.name}</div>
            <div className="text-xs">BILL MADE BY : SHUBHAM</div>
          </div>

          {/* Invoice Details - Matches height with customer info section */}
          <div className="border-b border-black p-1 h-[80px]">
            <div className="flex justify-between">
              <div className="font-bold">Invoice No : </div>
              <div>{invoiceData.invoice.number}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Date : </div>
              <div>{invoiceData.invoice.date}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Party : </div>
              <div>{invoiceData.customer.name}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">MODE : </div>
              <div>{invoiceData.invoice.mode}</div>
            </div>
          </div>

          {/* Empty space to align with IRN section */}
          <div className="border-b border-black p-1">&nbsp;</div>

          {/* Item Table - Matches rows with left table */}
          <div className="border-b border-black">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left">
                    Particulars
                    <br />
                    Unit
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    M.R.P.
                  </th>
                  <th className="border-r border-black p-1 text-center">
                    Free
                  </th>
                  <th className="p-1 text-center">Qty</th>
                </tr>
              </thead>
              <tbody>
                {/* Render simplified item list */}
                {invoiceData.items.map((item, index) => (
                  <tr key={`right-${index}`} className="border-b border-black">
                    <td className="border-r border-black p-1">
                      {item.name.split(" ").slice(0, 4).join(" ")}
                      <br />
                      {item.unit}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.mrp}
                    </td>
                    <td className="border-r border-black p-1 text-center">
                      {item.free}
                    </td>
                    <td className="p-1 text-center">{item.qty}</td>
                  </tr>
                ))}

                {/* Empty rows to match left side */}
                {[...Array(7)].map((_, i) => (
                  <tr
                    key={`right-empty-${i}`}
                    className="border-b border-black"
                  >
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="border-r border-black p-1">&nbsp;</td>
                    <td className="p-1">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary - Matches height with left footer */}
          <div className="p-1">
            <div className="flex justify-between px-1 font-bold">
              <div>Gross Amt</div>
              <div>{invoiceData.summary.grossAmt}</div>
            </div>
            <div className="flex justify-between px-1">
              <div>Less Sch.</div>
              <div>{invoiceData.summary.lessSch}</div>
            </div>
            <div className="flex justify-between px-1">
              <div>Less CD</div>
              <div>{invoiceData.summary.lessCD}</div>
            </div>
            <div className="flex justify-between px-1">
              <div>R.Off</div>
              <div>{invoiceData.summary.rOff}</div>
            </div>
            <div className="flex justify-between px-1 font-bold border-t border-black">
              <div>Net Amt.</div>
              <div>{invoiceData.summary.netAmt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
