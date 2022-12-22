import React, { useState } from "react";

const useForm = (initalObj = {}) => {
  const [form, setForm] = useState(initalObj);
  
  const changed = ({ target }) => {
    const {name, value} = target;

    setForm({
        ...form,
        [name]:value
    })
};

  return {
    form,
    changed
  };
};

export default useForm;
