function expect(val) {
  return {
    toBe: function(expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function(expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
}



try {
  console.log({ value: expect(5).toBe(5) }); // { value: true }
} catch (error) {
  console.log({ error: error.message }); // No error expected here
}

try {
  console.log({ value: expect(5).toBe(null) }); // This will throw an error
} catch (error) {
  console.log({ error: error.message }); // { error: "Not Equal" }
}

try {
  console.log({ value: expect(5).notToBe(null) }); // { value: true }
} catch (error) {
  console.log({ error: error.message }); // No error expected here
}
