import './styles.css';

const bands = [
  {
    band: 'The Clash',
    yearFormed: 1976,
    albums: 6,
    mostFameusSong: 'London Calling',
  },
  {
    band: 'Sex Pistols',
    yearFormed: 1975,
    albums: 1,
    mostFameusSong: 'Anarchy in the',
  },
  {
    band: 'Ramones',
    yearFormed: 1974,
    albums: 14,
    mostFameusSong: 'Blitzkrieg Bop',
  },
  {
    band: 'The Cure',
    yearFormed: 1976,
    albums: 13,
    mostFameusSong: 'Just Like Heaven',
  },
  {
    band: 'Joy Division',
    yearFormed: 1976,
    albums: 2,
    mostFameusSong: 'Love Will Tear Us Apart',
  },
  {
    band: 'Siouxsie and the Banshees',
    yearFormed: 1976,
    albums: 11,
    mostFameusSong: 'Hong Kong Garden',
  },
];

export const ArrayRenderToTable = () => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>band</th>
          <th>yearFormed</th>
          <th>albums</th>
          <th>mostFameusSong</th>
        </tr>
        {bands.map((item) => (
          <tr key={item.band}>
            <td className="band">{item.band}</td>
            <td className="yearFormed">{item.yearFormed}</td>
            <td className="albums">{item.albums}</td>
            <td className="mostFameusSong">{item.mostFameusSong}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
