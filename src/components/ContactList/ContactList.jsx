import styles from './ContactList.module.css';
const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul className={styles.containerList}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
