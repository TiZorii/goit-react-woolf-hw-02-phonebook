import styles from './Filter.module.css';
const Filter = ({ onChangeFilter, filter }) => {
  return (
    <div className={styles.containerFilter}>
      <label>
        <p className={styles.titleFilter}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={filter}
          placeholder=" "
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
