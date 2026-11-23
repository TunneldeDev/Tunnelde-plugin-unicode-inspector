import assert from "node:assert/strict";
import { test } from "node:test";
import { calculate as unicode } from "../tool.mjs";

test("Unicode reports graphemes separately from code points and never renders raw direction controls", () => {
  const r = unicode("e\u0301🙂\u202e", {});
  assert.match(r.text, /Graphemes: 3 · Code points: 4 · UTF-8 bytes: 10/);
  assert.match(r.text, /U\+202E/);
  assert.ok(!r.text.includes("\u202e"));
  assert.match(unicode("中".repeat(200), {}, true).text, /仅显示前 128/);
  assert.equal(unicode("x".repeat(4097), {}).error, true);
});
