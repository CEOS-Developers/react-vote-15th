import React, { useCallback, useState } from "react";

export default (initValue: any) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  }, []);
  return [value, handler, setter];
};
