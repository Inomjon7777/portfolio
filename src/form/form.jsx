import React, { useState } from "react";
import styles from "./form.module.scss";

function Form() {
  const [site, setSite] = useState("");
  const [prefix, setPrefix] = useState();
  const [domain, setDomain] = useState();

  const handleChange = (e) => {
    setSite(e.target.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.firstInput}>
        <input
          className={styles.inputChild}
          type="text"
          value={prefix + site + domain}
        />
        <a href={prefix + site + domain}>Search</a>
      </div>
      <div className={styles.secondInput} value={prefix}>
        <select onChange={(e) => setPrefix(e.target.value)}>
          <option value="http://">http://</option>
          <option value="https://">https://</option>
        </select>
        <input type="text" value={site} onChange={handleChange} />
        <select onChange={(e) => setDomain(e.target.value)}>
          <option value=".org">.org</option>
          <option value=".com">.com</option>
          <option value=".io">.io</option>
          <option value=".cn">.cn</option>
          <option value=".uz">.uz</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
