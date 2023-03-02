const { data } = require('../../../utils/lorem-data.json');
export function About() {
  return (
    <section>
      <h3 className="m-16">About</h3>
      <p>{data}</p>
    </section>
  );
}
  
  