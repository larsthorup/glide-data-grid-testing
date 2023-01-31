import React from "react";
// import "@glideapps/glide-data-grid/dist/index.css";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import { act, render } from "@testing-library/react";

describe("render", () => {
  it("renders a component", async () => {
    const { debug } = render(
      <DataEditor
        getCellContent={() => ({
          kind: GridCellKind.Text,
          allowOverlay: false,
          displayData: "Lars",
          data: "Lars",
        })}
        columns={[{ title: "Name", id: "name", width: 100 }]}
        rows={1}
      />
    );
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    debug();
  });
});
