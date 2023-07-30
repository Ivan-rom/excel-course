import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template.js";
import { resizeHandler } from "@/components/table/table.resize.js";
import { shouldResize } from "@/components/table/table.functions";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
