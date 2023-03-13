export default function CodeSnippet(props) {
  return (
    <pre
      style={{ background: "rgba(0, 0, 0, 0.87)", width: "50%", height: "100vh", margin: "8px", padding: "16px"  }}
    >
      <span style={{ color: "rgba(209, 81, 111, 0.87)", }}>
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
