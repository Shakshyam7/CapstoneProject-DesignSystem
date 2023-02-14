export default function CodeSnippet(props) {
  return (
    <pre
      style={{ background: "rgba(0, 0, 0, 0.87)", width: "50%", margin: "8px" }}
    >
      <span style={{ color: "rgba(209, 81, 111, 0.87)", padding: "16px" }}>
        {props.codeLanguage}
      </span>
      <code
        style={{ color: "rgba(255, 255, 255, 0.87)", justifyContent: "center" }}
      >
        {props.code}
      </code>
    </pre>
  );
}
