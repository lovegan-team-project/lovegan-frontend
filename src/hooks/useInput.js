import { useState } from "react";
import React from "react";

const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue)
    const onchangeValue = (e) => {
        setValue(e.target.value);
    }
    return [value,onchangeValue,setValue]
}

export default useInput;