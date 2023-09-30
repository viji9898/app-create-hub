export const Hosting = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>About our hosting service</h1>
      <p>
        {
          "We build & run dynamic, high performance web applications at global scale—without requiring servers, DevOps, or costly infrastructure."
        }
      </p>
      <div style={{ textAlign: "center" }}>
        <p>{"Hosting solutions start from USD12.50 per month"}</p>
      </div>
      <h2>
        {
          "We create fast, scalable web applications using Netlify’s global platform for serverless and edge technologies."
        }
      </h2>
      <p>
        {
          "We develop fast, scable web application for serverless and edge technologies"
        }
      </p>

      <ul>
        <li>{"Never setup, configure, or manage any infrastructure"}</li>
        <li>A complete git-powered workflow</li>
        <li>Use any modern framework, language, and build tools</li>
        <li>Built-in CI/CD</li>
        <li>Serverless functions based on AWS Lambda</li>
        <li>Programmable edge logic</li>
        <li>Powerful build plugins to automate worfklows</li>
        <li>JWT-based identity and authorization</li>
      </ul>
      <h3>Why traditional web applications feel slow.</h3>
      <p>
        With traditional web applications, users are all served from a common
        set of origin servers where each request is authenticated, any data is
        retrieved, and the markup for the page is assembled and served. This
        process of building and delivering the complete application
        interface—every time, for every visitor—is computationally expensive,
        and the latency introduced makes your app slow to navigate and less
        responsive to clicks and interactions.
      </p>
      <h3>We use Jamstack architecture</h3>
      <p>
        We employing{" "}
        <a target={"_blank"} rel={"noreferrer"} href="https://jamstack.org/">
          {"Jamstack architecture"}
        </a>
        {
          " or a modern, serverless way to deliver web applications that perform at near-native speed. On the Jamstack, web applications feel instant and can easily scale to millions of global users thanks to the benefits inherent to this distributed global architecture. Jamstack applications provide users a precompiled frontend that loads instantly and then retrieves data from backend services via APIs."
        }
      </p>
      <div style={{ textAlign: "center" }}>
        <p>{"Hosting solutions start from USD12.50 per month"}</p>
      </div>
    </div>
  );
};
