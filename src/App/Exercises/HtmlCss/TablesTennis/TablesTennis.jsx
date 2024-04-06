import './styles.css';
import '../../../Components/Icons/star';

export const TablesTennis = () => {
  return (
    <div>
      <h5>Ćwiczenie z tworzenia tabel</h5>
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td> icon</td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>icon</td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td>icon</td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td> icon</td>
        </tr>
        <tr>
          <td>United States of America</td>
          <td>#100128</td>
          <td>icon</td>
        </tr>
      </table>
    </div>
  );
};
