import React, { useState } from "react";

import Tab from "./tab";
import Handle from "./handle";
import Content from "./content";
export { Tab, Handle, Content };

export default function Tabs({ children }) {
  const groups = React.Children.toArray(children).flatMap(
    (child) => child.props.id
  );

  const [activeGroupId, setActiveGroupId] = useState(groups[0]);

  const grandChildren = React.Children.toArray(children).flatMap((child) => {
    const groupId = child.props.id;
    return child.props.children.flatMap((gc) => {
      return React.cloneElement(gc, {
        groupId,
        activeGroupId: activeGroupId,

        onClick:
          gc.type.displayName === "Handle"
            ? () => setActiveGroupId(groupId)
            : null,
      });
    });
  });

  const handles = grandChildren.filter(
    (gc) => gc.type.displayName === "Handle"
  );
  const contents = grandChildren.filter(
    (gc) => gc.type.displayName === "Content"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        {handles}
      </div>

      <div
        style={{
          flex: 1,
          border: "1px solid lightgrey",
          padding: "1rem",
        }}
      >
        {contents}
      </div>
    </div>
  );
}