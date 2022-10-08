import CSVTable from "../../components/table";

export default function TableSection({ csvData }: { csvData: any }) {
  const table2020 = [...csvData.values()].find((item: any) => {
    return item.filename === "2020-21.csv";
  });
  const table2021 = [...csvData.values()].find((item: any) => {
    return item.filename === "2021-22.csv";
  });
  const tableHistorial = [...csvData.values()].find((item: any) => {
    return item.filename === "historial.csv";
  });
  return (
    <div >
      {/* BALANCE TOTAL */}
      <table className="vasekTable">
        <caption>BALANCE TOTAL</caption>
        <tbody>
          <tr>
            <th rowSpan={2}>VASEK 2020-2022</th>
            <th>OPERACIONES</th>
            <th>✓</th>
            <th>X</th>
            <th>CUOTA MEDIA</th>
            <th>ACIERTO</th>
            <th>PROFIT</th>
            <th>YIELD</th>
          </tr>
          <tr>
            <td>171</td>
            <td>159</td>
            <td>12</td>
            <td>1,229</td>
            <td>92,98%</td>
            <td>2714,26%</td>
            <td>15,87</td>
          </tr>
        </tbody>
      </table>
      {/* 2020/21 */}
      <table className="vasekTable">
        <tbody>
          <tr>
            <th rowSpan={2}>2020/21</th>
            <th>ENE</th>
            <th>FEB</th>
            <th>MAR</th>
            <th>ABR</th>
            <th>MAY</th>
            <th>JUN</th>
            <th>JUL</th>
            <th>AGO</th>
            <th>SEP</th>
            <th>OCT</th>
            <th>NOV</th>
            <th>DIC</th>
            <th>TOTAL</th>
          </tr>
          <CSVTable csvData={table2020.content} />
        </tbody>
      </table>

      {/* 2021/22 */}
      <table className="vasekTable">
        <tbody>
          <tr>
            <th rowSpan={2}>2021/22</th>
            <th>ENE</th>
            <th>FEB</th>
            <th>MAR</th>
            <th>ABR</th>
            <th>MAY</th>
            <th>JUN</th>
            <th>JUL</th>
            <th>AGO</th>
            <th>SEP</th>
            <th>OCT</th>
            <th>NOV</th>
            <th>DIC</th>
            <th>TOTAL</th>
          </tr>

          <CSVTable csvData={table2021.content} />
        </tbody>
      </table>
      {/* Historial */}
      <table className="vasekTable">
        <caption>HISTORIAL DE OPERACIONES</caption>
        <tbody>
          <tr>
            <th>DÍA</th>
            <th>MES</th>
            <th>LIGA</th>
            <th>PARTIDO</th>
            <th>LIVE</th>
            <th>MIN</th>
            <th>PICK</th>
            <th>CUOTA</th>
            <th>CROSSOVER</th>
            <th>MIN</th>
            <th>MARK</th>
            <th>PROFIT</th>
            <th>W-L</th>
          </tr>
          {<CSVTable csvData={tableHistorial.content} />}
        </tbody>
      </table>
    </div>
  );
}
