import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transaction}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.tr}>
          <td className={styles.td}>{type}</td>
          <td className={styles.td}>{amount}</td>
          <td className={styles.td}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
