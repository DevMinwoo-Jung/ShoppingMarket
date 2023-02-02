import { useCallback, useState } from 'react'

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: { target: { value: string } }) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
}

export default useInput