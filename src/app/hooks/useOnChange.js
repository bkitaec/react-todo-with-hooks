
import { useState, useEffect, useCallback } from 'react';

const useOnChange = (value: any, refresh: ?boolean = true) => {
    const [val, setValue] = useState(value);
    refresh && useEffect(() => { // eslint-disable-line
        setValue(value);
    }, [value]);
    const onChange = useCallback((e: Object) => {
        setValue(e.target.value);
    }, [setValue]);
    return [val, onChange, setValue];
};

export default useOnChange;
