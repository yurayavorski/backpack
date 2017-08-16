import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M20.884 14.683l-5.667-4.562a4.985 4.985 0 0 0-.782-.51A5.215 5.215 0 0 0 15 7a3 3 0 0 0-6 0 1 1 0 0 0 2 0 1 1 0 0 1 2 0c0 2-.725 2-1 2a5.142 5.142 0 0 0-3.217 1.122l-5.667 4.561A2.988 2.988 0 0 0 4.983 20h14.033a2.988 2.988 0 0 0 1.867-5.317zM19.016 18H4.983a.988.988 0 0 1-.613-1.759l5.667-4.562A3.129 3.129 0 0 1 12 11a3.128 3.128 0 0 1 1.961.68l5.667 4.562A.988.988 0 0 1 19.016 18z" /></svg>;
  }

}