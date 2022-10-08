import { useEffect, useState } from "react";
import Papa from "papaparse";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { promises as fs } from "fs";
import path from "path";
export default function CSVTable({ csvData }: { csvData: string }) {
  // State to store parsed data
  const [parsedData, setParsedData] = useState<any>([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState<any>([]);

  //State to store the values
  const [values, setValues] = useState<any>([]);
  useEffect(() => {
    changeHandler(csvData);
  }, [csvData]);
  const changeHandler = (file: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(file, {
      header: false,
      skipEmptyLines: 'greedy',
      
      complete: function (results: any) {
        console.log(results.data);
        const rowsArray: any[] = [];
        const valuesArray: any[] = [];
        // Iterating data to get column name and their values
        results.data.map((d: any) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
  return (
 
 
     <>
          {values.map((value: any, index: any) => {
            return (
              <tr key={index}>
                {value.map((val: any, i: any) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        
        </>
 
  );
}
