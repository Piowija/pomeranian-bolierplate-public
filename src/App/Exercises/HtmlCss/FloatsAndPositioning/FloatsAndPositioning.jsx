import './styles.css';
import first from '../ImageFiles/asus.jpg';

export function FloatsAndPositioning() {
  return (
    <div className="container">
      <img src={first} />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
}
