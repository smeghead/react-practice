import { getByLabelText } from "@testing-library/react";

class Letter {
    encoding: number;
    dwidth: number[];
    bbx: number[];
    bitmap: string[];
  
    constructor(encoding: number, dwidth: number[], bbx: number[], bitmap: string[]) {
        this.encoding = encoding
        this.dwidth = dwidth
        this.bbx = bbx
        this.bitmap = bitmap
    }
  }
  export default Letter;
  