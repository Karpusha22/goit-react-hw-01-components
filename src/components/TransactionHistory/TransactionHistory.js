import PropTypes from 'prop-types';
import transaction from './transaction.json';
import styles from './TransactionHistory.module.css';

const TransactionHistory = () => (
  <div>
    <table className={styles.history}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Type</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.tableData}>{type}</td>
            <td className={styles.tableData}>{amount}</td>
            <td className={styles.tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionHistory;

TransactionHistory.prototype = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};