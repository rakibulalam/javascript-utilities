import numbertowords from "../lib/numbertowords";

test("@rakibulalam/numbertowords return one only", () => {
    expect(numbertowords(1)).toBe("one one only");
});

// /*
//  * test("@rakibulalam/numbertowords return one hundred and twenty three only", () => {
//  *     expect(numbertowords(123)).toBe('one hundred and twenty three only');
//  * });
//  */

// /*
//  * test("@rakibulalam/numbertowords return one hundred twenty three only and fifty cent only", () => {
//  *     expect(numbertowords(123.5)).toBe('one hundred twenty three only and fifty cent only');
//  * });
//  */

// /*
//  * test("@rakibulalam/numbertowords return one hundred twenty three only and fifty one cent only", () => {
//  *     expect(numbertowords(123.51)).toBe('one hundred twenty three only and fifty one cent only');
//  * });
//  */

/*
 * test("@rakibulalam/numbertowords return", () => {
 *     expect(numbertowords(23412341234012.01)).toBe(
 *         "one hundred twenty three only and fifty one cent only"
 *     );
 * });
 */
