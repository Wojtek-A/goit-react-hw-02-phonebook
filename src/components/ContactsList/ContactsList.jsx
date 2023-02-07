import css from './ContactList.module.css';

export const ContactList = ({ contacts, removeContact, children }) => {
  return (
    <div>
      {children}
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.contactsList}>
              {contact.name}: {contact.number}
              <button
                onClick={() => {
                  removeContact(contact.id);
                }}
                className={css.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
