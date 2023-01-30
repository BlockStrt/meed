import React from "react";
import { convertToRaw, EditorState } from "draft-js";


export default ({ data, reset, setValue }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
              DraftJS: convertToRaw(data.DraftJS.getCurrentContent()).blocks[0]
                .text
            },
            null,
            2
          )}
        </pre>
      )}
      <div className="mt-4 justify-between flex group">
      <button
        className=" border border-black p-2  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white "
        type="button"
        onClick={() => {
          reset({
            
           
            ReactSelect: { value: "1", label: "1" },
           
            ReactDatepicker: new Date(),
            AntdSelect: "",
            DraftJS: EditorState.createEmpty(),
            MUIPicker: new Date("2020-08-01T00:00:00"),
            country: { code: "AF", label: "Afghanistan", phone: "93" },
           
          });
        }}
      >
        Reset
      </button>
      <button className="border border-black p-2 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white">Purchase</button>
      </div>
    </>
  );
};
