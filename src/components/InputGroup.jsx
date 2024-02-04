import { useState } from "react";
import Input from "./Input";

export default function InputGroup() {
  return (
    <>
      <div className="input-group">
        <Input labelName="Initial investment" />
        <Input labelName="Annual investment" />
      </div>
      <div className="input-group">
        <Input labelName="Expected return" />
        <Input labelName="Duration" />
      </div>
    </>
  );
}
