export default function TaxInvoice() {
  return (
    <div className="w-full text-xs print:text-[10px] border border-black">
      {/* Header Section */}
      <div className="border-b border-black">
        <div className="flex">
          {/* Left Header */}
          <div className="w-1/2  p-1">
            <div className="flex flex-col">
              <div className="flex">
                <span className="font-bold">GSTN : 23AJBPS6285R1ZF</span>
                <span className="ml-2">BILL MADE BY SHUBHAM</span>
              </div>
              <div className="flex">
                <span className="font-bold">Subject to SEONI Jurisdiction</span>
              </div>
              <div className="flex">
                <span className="font-bold">FSSAI NO : 11417230000027</span>
              </div>
              <div className="flex">
                <span className="font-bold">
                  D.L. No.: 20B/807/54/2022 , 21B/808/54/2022 , 20/805/54/2022 ,
                  21/806/54/2022
                </span>
              </div>
            </div>
          </div>

          {/* Center Header */}
          <div className="w-1/3  p-1 flex flex-col items-center">
            <div className="text-center">
              <div className="text-sm font-bold">Tax Invoice</div>
              <div className="text-xl font-bold">EKTA ENTERPRISES</div>
              <div className="text-xs">BUDHWARI BAZAR,GN ROAD SEONI,</div>
            </div>
          </div>

          {/* Right Header */}
          <div className="w-1/6 p-1 flex flex-col">
            <div className="text-xs">
              <div className="font-bold">Ph : 9179174888 , 9826623188</div>
              <div className="flex justify-between ">
                <div>Office No. 07692-220897</div>
              </div>
              <div className="flex justify-between">
                <div>State Code: 23</div>
              </div>
            </div>
          </div>

          {/* Far Right Header */}
          <div className="w-1/6 border-l border-black p-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-bold">EKTA ENTERPRISES</div>
              <div className="text-xs">BILL MADE BY : SHUBHAM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info Section */}
      <div className="flex border-b  ">
        {/* Left Customer Info */}
        <div className="w-2/4 k p-1">
          <div className="flex">
            <div className="w-1/6 font-bold">Party</div>
            <div className="w-5/6">HEERA TRADERS</div>
          </div>
          <div className="flex">
            <div className="w-1/6 font-bold">Address</div>
            <div className="w-5/6">
              NAINPUR
              <br />
              NAINPUR
            </div>
          </div>
          <div className="flex">
            <div className="w-1/6 font-bold">GSTN No.</div>
            <div className="w-5/6">23HKDPK5985E1ZY</div>
          </div>
          <div className="flex">
            <div className="w-1/6 font-bold">Mobile No.</div>
            <div className="w-5/6">9074762399</div>
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <div className=" p-4 pt-10 text-xs w-2/4 justify-left">
          {/* Empty space for alignment */}
          <div className="h-4"></div>

          {/* Row 1: State Code and FSSAI No. */}
          <div className="flex justify-left gap-4">
            <p>
              <strong>State Code:</strong> <span className="font-bold">23</span>
            </p>
            <p>
              <strong>FSSAI No.:</strong>
            </p>
          </div>

          {/* Row 2: Balance and D/L No. */}
          <div className="flex justify-left gap-4 mt-2">
            <p>
              <strong>Balance:</strong> Bal: 48996.00 Dr
            </p>
            <p>
              <strong>D/L No.:</strong>
            </p>
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* Center QR Code */}
        <div className="w-1/12 border-r border-black p-1 flex items-center justify-center">
          <div className="bg-gray-300 w-16 h-16"></div>
        </div>

        {/* Right Invoice Details */}
        <div className="w-1/4 border-r border-black p-1">
          <div className="flex justify-left gap-2">
            <div className="font-bold">Inv. No :</div>
            <div>N-12036</div>
            <div className="font-bold">Mode :</div>
            <div>CREDIT</div>
          </div>
          <div className="flex justify-left gap-2">
            <div className="font-bold">Date :</div>
            <div>15.02.2024</div>
            <div>04:06:55 PM</div>
          </div>
          <div className="font-bold">Due Date 22.02.2024</div>
          <div className="font-bold">Ref. No : </div>
        </div>

        {/* Far Right Mode */}
        <div className="w-1/6 p-1">
          <div className="flex justify-between">
            <div className="font-bold">Invoice No : </div>
            <div>N-12036</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Date : </div>
            <div>15.02.2024</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Party : </div>
            <div>HEERA TARDERS</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">MODE : </div>
            <div>CREDIT</div>
          </div>
          
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="flex border-b border-black">
        {/* Left Additional Info */}
        <div className="flex flex-col  p-1">
          {/* Ack. No. and Ack. Date in the same row */}
          <div className="flex justify-between gap-20">
            <div className="">Ack. No: 81733333333333333333352</div>
            <div className="">Ack. Date: 2024/02/15 04:07:00</div>
            <div>
              <strong>IRN No.:</strong>{" "}
              afbe11b68d1c303dc8757459442ba324b8d97dacf599876b73952dda2d1a3b1
            </div>
          </div>
        </div>

        {/* IRN No. in a new row */}

        {/* Right Invoice Details */}
        <div className="w-1/10 p-1"></div>
      </div>

      {/* Item Table Section */}
      <div className="flex border-b border-black">
        {/* Left Table */}
        <div className="w-2/3 border-r border-black">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black">
                <th className="border-r border-black p-1 text-left">
                  Particulars/HSN
                </th>
                <th className="border-r border-black p-1 text-center">Pack</th>
                <th className="border-r border-black p-1 text-center">
                  M.R.P.
                </th>
                <th className="border-r border-black p-1 text-center">GST %</th>
                <th className="border-r border-black p-1 text-center">
                  Rate
                  <br />
                  (incl of Tax)
                </th>
                <th className="border-r border-black p-1 text-center">Unit</th>
                <th className="border-r border-black p-1 text-center">Qty</th>
                <th className="border-r border-black p-1 text-center">Free</th>
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
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  NO1 SANDAL TURMERIC 57G PO4 M4
                  <br />
                  34011190
                </td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center">40.00</td>
                <td className="border-r border-black p-1 text-center">18.00</td>
                <td className="border-r border-black p-1 text-center">
                  1755.00
                </td>
                <td className="border-r border-black p-1 text-center">
                  Box - 54
                </td>
                <td className="border-r border-black p-1 text-center">15</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">26325.00</td>
              </tr>
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  NO1 LIME&AV 57G PO4 M40 P54 N<br />
                  34011190
                </td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center">40.00</td>
                <td className="border-r border-black p-1 text-center">18.00</td>
                <td className="border-r border-black p-1 text-center">
                  1755.00
                </td>
                <td className="border-r border-black p-1 text-center">
                  Box - 54
                </td>
                <td className="border-r border-black p-1 text-center">5</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">8775.00</td>
              </tr>
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  RIN BAR SAPPHIRE FW 160G (30G
                  <br />
                  34011930
                </td>
                <td className="border-r border-black p-1 text-center">160</td>
                <td className="border-r border-black p-1 text-center">10.00</td>
                <td className="border-r border-black p-1 text-center">18.00</td>
                <td className="border-r border-black p-1 text-center">
                  690.00
                </td>
                <td className="border-r border-black p-1 text-center">
                  Box - 84
                </td>
                <td className="border-r border-black p-1 text-center">20</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">13800.00</td>
              </tr>
              {/* Empty rows */}
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="border-b border-black">
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

        {/* Right Table */}
        <div className="w-1/3">
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
                <th className="border-r border-black p-1 text-center">Free</th>
                <th className="p-1 text-center">Qty</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  NO1 SANDAL TURMERIC 57G
                  <br />
                  Box - 54
                </td>
                <td className="border-r border-black p-1 text-center">40.00</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">15</td>
              </tr>
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  NO1 LIME&AV 57G PO4 M40 P54
                  <br />
                  Box - 54
                </td>
                <td className="border-r border-black p-1 text-center">40.00</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">5</td>
              </tr>
              <tr className="border-b border-black">
                <td className="border-r border-black p-1">
                  RIN BAR SAPPHIRE FW 160G
                  <br />
                  Box - 84
                </td>
                <td className="border-r border-black p-1 text-center">10.00</td>
                <td className="border-r border-black p-1 text-center"></td>
                <td className="p-1 text-center">20</td>
              </tr>
              {/* Empty rows */}
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="border-b border-black">
                  <td className="border-r border-black p-1">&nbsp;</td>
                  <td className="border-r border-black p-1">&nbsp;</td>
                  <td className="border-r border-black p-1">&nbsp;</td>
                  <td className="p-1">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex border-b border-black">
        {/* Left Footer - Items in Bill */}
        <div className="w-1/6 border-r border-black p-1">
          <div className="flex">
            <div className="font-bold">Items in Bill</div>
            <div className="ml-1">3</div>
          </div>
          <div className="flex">
            <div className="font-bold">Cases in Bill</div>
            <div className="ml-1">40.0</div>
          </div>
          <div className="flex">
            <div className="font-bold">Loose Items in Bill</div>
            <div className="ml-1">0</div>
          </div>
        </div>

        {/* Center Footer - Terms & Conditions */}
        <div className="w-1/3 border-r border-black p-1">
          <div className="font-bold underline">Terms & Conditions</div>
          <div className="text-[8px]">
            1. We herby certify that articles of food mentioned in the invoice
            are
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
                <div className="w-1/5 px-1 border-l border-black">SGST%</div>
                <div className="w-1/5 px-1 border-l border-black">Value</div>
                <div className="w-1/5 px-1 border-l border-black">CGST%</div>
                <div className="w-1/5 px-1 border-l border-black">Value</div>
              </div>
              <div className="flex text-[8px] text-center">
                <div className="w-1/5 px-1">41440.68</div>
                <div className="w-1/5 px-1 border-l border-black">9.00%</div>
                <div className="w-1/5 px-1 border-l border-black">3729.660</div>
                <div className="w-1/5 px-1 border-l border-black">9.00%</div>
                <div className="w-1/5 px-1 border-l border-black">3729.660</div>
              </div>
              <div className="flex text-[8px] text-center border-t border-black">
                <div className="w-1/5 px-1">41440.68</div>
                <div className="w-1/5 px-1 border-l border-black"></div>
                <div className="w-1/5 px-1 border-l border-black">3729.66</div>
                <div className="w-1/5 px-1 border-l border-black"></div>
                <div className="w-1/5 px-1 border-l border-black">3729.66</div>
              </div>
            </div>
            <div className="w-2/5">
              <div className="flex justify-between px-1 font-bold">
                <div>Gross Amt</div>
                <div>48900.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>Less Sch.</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>Less CD</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>R.Off</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1 font-bold border-t border-black">
                <div>Net Amt.</div>
                <div>48900.00</div>
              </div>
            </div>

            <div className="w-2/5 border-l-2 ">
              <div className="flex justify-between px-1 font-bold">
                <div>Gross Amt</div>
                <div>48900.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>Less Sch.</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>Less CD</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1">
                <div>R.Off</div>
                <div>0.00</div>
              </div>
              <div className="flex justify-between px-1 font-bold border-t border-black">
                <div>Net Amt.</div>
                <div>48900.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex">
        {/* Left Summary */}
        <div className=" p-1">
          <div className="font-bold">
            This is computer generated Bill, No signature required.. Bank:PUNJAB
            NATIONAL BANK SEONI 0490008700003292 PUNB0049000
          </div>
        </div>
      </div>
    </div>
  );}