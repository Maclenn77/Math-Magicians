import MayanCalculator from '../components/MayanCalculator';
import './MayanCalculator.css';

const Mayan = () => (
  <section>
    <h2>Let&apos;s do some math!</h2>
    <p>
      The Maya developed a sophisticated mathematical system that was remarkably advanced
      for its time, including the concept of zero centuries before it appeared in Europe.
    </p>
    <MayanCalculator />
    <p>
      They used a base-20 (vigesimal) number system, represented by dots and bars, where a
      dot signified 1 and a bar represented 5. Zero was represented by a symbol that looked
      like a shell.
    </p>
    <p>
      <b>Try some math problems using the Mayan number system!</b>
    </p>
  </section>
);
export default Mayan;
