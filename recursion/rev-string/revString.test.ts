import { it, expect } from "vitest";
import { revString } from "./revString";

it("returns a reversed copy of the string", function () {
  expect(revString("")).toBe("");
  expect(revString("x")).toBe("x");
  expect(revString("cat")).toBe("tac");
  expect(revString("duck")).toBe("kcud");
});


// function revString(str: string): string {
//   // base case
//   if (str === "") return "";

//   return revString(str.slice(1)) + str[0];
// }


//t +      a
// at     + c
//cat

