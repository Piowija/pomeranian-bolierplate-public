import './styles.css';

export const HTMLTables = () => {
  return (
    <div>
      <ol>
        <li>
          The foolowing data were collected by a group of students as they
          tested four different types of plastics.
        </li>
      </ol>

      <table>
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease color</th>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>none</td>
        </tr>
      </table>
      <p>
        Which plastic would be unsafe to use to store products that contain
        acetone?
      </p>
      <ol type="a">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ol>
    </div>
  );
};
