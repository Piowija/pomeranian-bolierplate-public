import './styles.css';
import '../../../Components/Icons/star';

export const TablesTennis = () => {
  return (
    <div>
      <h5>Ćwiczenie z tworzenia tabel</h5>
      <table className="table-2">
        <tr>
          <th className="table-header-2">Location</th>
          <th className="table-header-2">PLAYER_ID</th>
          <th className="table-header-2">Rating</th>
        </tr>
        <tr>
          <td className="lacation">Cape Verde Islands</td>
          <td className="player_id">#100120</td>
          <td className="rating">icon</td>
        </tr>
        <tr>
          <td className="lacation">Cape Verde Islands</td>
          <td className="player_id">#100122</td>
          <td className="rating">icon</td>
        </tr>
        <tr>
          <td className="lacation">Cape Verde Islands</td>
          <td className="player_id">#100124</td>
          <td className="rating">icon</td>
        </tr>
        <tr>
          <td className="lacation">United States of America</td>
          <td className="player_id">#100126</td>
          <td className="rating">icon</td>
        </tr>
        <tr>
          <td className="lacation">United States of America</td>
          <td className="player_id">#100128</td>
          <td className="rating">icon</td>
        </tr>
      </table>
    </div>
  );
};
