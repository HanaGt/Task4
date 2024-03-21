import React from "react";
import attributes from "@/info/atributes.json";
function AttributesList() {
  return (
    <>
      <ul className="text-dark-500 list-disc list-inside dark:text-400">
        {attributes.map((attribute: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
          <li key={index}>
            <span className="font-bold">{attribute.label}</span>:{" "}
            {attribute.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AttributesList;