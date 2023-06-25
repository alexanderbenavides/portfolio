const { data1, data2 } = require('../../../utils/about.json');
export function About() {
  return (
    <section>
      <h3 className="m-16">About</h3>
      <p>{data1}</p>
      <br />
      <p>{data2}</p>
    </section>
  );
}
  
  