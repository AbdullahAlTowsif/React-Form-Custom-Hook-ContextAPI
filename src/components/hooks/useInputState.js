import { useState } from "react"

const useInputState = (defaultValue=null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value);
    }
    // const hanldeChange = e => {
    //     setValue(e.target.value);
    // }
    // return [value, hanldeChange];
    return {
        value,
        onChange
    }
}

export default useInputState;