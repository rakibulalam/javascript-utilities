import numbertobanglawords from "../lib/numbertobanglawords";

/*
 * const data = [
 *     [0,             'শুন্য'],
 *     [8,             'আট'],
 *     [49,            'ঊনপঞ্চাশ'],
 *     [400,           'চারশো'],
 *     [704,           'সাতশো চার'],
 *     [939,           'নয়শো ঊনচল্লিশ'],
 *     [3204,          'তিন হাজার দুইশো চার'],
 *     [20001,         'বিশ হাজার এক'],
 *     [20308,         'বিশ হাজার তিনশো আট'],
 *     [50000,         'পঞ্চাশ হাজার'],
 *     [200007,        'দুই লাখ সাত'],
 *     [700000,        'সাত লাখ'],
 *     [2000603,       'বিশ লাখ ছয়শো তিন'],
 *     [5000000,       'পঞ্চাশ লাখ'],
 *     [1923908,       'ঊনিশ লাখ তেইশ হাজার নয়শো আট'],
 *     [83641705,      'আট কোটি ছত্রিশ লাখ একচল্লিশ হাজার সাতশো পাঁচ'],
 *     [80000000,      'আট কোটি'],
 *     [80000002,      'আট কোটি দুই'],
 *     [500000000,     'পঞ্চাশ কোটি'],
 *     [501619500,     'পঞ্চাশ কোটি ষোল লাখ ঊনিশ হাজার পাঁচশো'],
 *     [900000000,     'নব্বই কোটি'],
 *     [987654321,     'আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার তিনশো একুশ'],
 *     [990000000,     'নিরানব্বই কোটি'],
 *     [990000001,     'নিরানব্বই কোটি এক'],
 *     [999999999,     'নিরানব্বই কোটি নিরানব্বই লাখ নিরানব্বই হাজার নয়শো নিরানব্বই'],
 *     [9999999999,    'নয়শো নিরানব্বই কোটি নিরানব্বই লাখ নিরানব্বই হাজার নয়শো নিরানব্বই'],
 *     [99999999999,   'নয় হাজার নয়শো নিরানব্বই কোটি নিরানব্বই লাখ নিরানব্বই হাজার নয়শো নিরানব্বই'],
 *     [999999999999,  'নিরানব্বই হাজার নয়শো নিরানব্বই কোটি নিরানব্বই লাখ নিরানব্বই হাজার নয়শো নিরানব্বই']
 * ];
 */

/*
 *  আট কোটি ছত্রিশ লাখ একচল্লিশ হাজার সাতশো পাঁচ
 *  "নয়শো ঊনচল্লিশ""
 * এক হাজার দুইশো পঁয়ত্রিশ টাকা এবং পঁচিশ পয়সা"
 */
test("এক হাজার দুইশো পঁয়ত্রিশ টাকা এবং পঁচিশ পয়সা", () => {
    expect(numbertobanglawords(1235.25)).toBe(
        "এক হাজার দুইশো পঁয়ত্রিশ টাকা এবং পঁচিশ পয়সা"
    );
});

test("পঁচিশ পয়সা", () => {
    expect(numbertobanglawords(0.25)).toBe("পঁচিশ পয়সা");
});
test("শূন্য পাঁচ পয়সা if decimale places three it will contain sunno before the digit is not fullfill", () => {
    expect(numbertobanglawords(0.05, 3, false)).toBe("শূন্য পাঁচ পয়সা");
});
test("ছয় পয়সা when precission is round and decimale place 2", () => {
    expect(numbertobanglawords(0.059, 2, true)).toBe("ছয় পয়সা");
});
test("শূন্য ঊনষাট পয়সা when precission is not round and decimale place 3", () => {
    expect(numbertobanglawords(0.059, 3, true)).toBe("শূন্য ঊনষাট পয়সা");
});
test("একশো ঊনষাট পয়সা when precission is round and decimale place 3", () => {
    expect(numbertobanglawords(0.159, 3, true)).toBe("একশো ঊনষাট পয়সা");
});
test("ষোল পয়সা when precission is round and decimale place 2", () => {
    expect(numbertobanglawords(0.159, 2, true)).toBe("ষোল পয়সা");
});
test("ষোল পয়সা when precission is round and decimale place 3", () => {
    "parseFloat(0.1599.toFixed(3)), 0.16";

    expect(numbertobanglawords(0.1599, 3, true)).toBe("ষোল পয়সা");
});
test("এক টাকা এবং পাঁচ পয়সা when is round and decimale place 2", () => {
    // ""এক টাকা এবং পাঁচ পয়সা""
    expect(numbertobanglawords(1.05, 2, true)).toBe("এক টাকা এবং পাঁচ পয়সা");
});

test("এক টাকা এবং শূন্য পাঁচ পয়সা when is round and decimale place 3", () => {
    // ""এক টাকা এবং পাঁচ পয়সা""
    expect(numbertobanglawords(1.05, 3, true)).toBe(
        "এক টাকা এবং শূন্য পাঁচ পয়সা"
    );
});

test("আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার তিনশো একুশ টাকা এবং ঊনষাট পয়সা", () => {
    // ""আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার তিনশো একুশ টাকা এবং পঞ্চাশ পয়সা""
    expect(numbertobanglawords(987654321.591)).toBe(
        "আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার তিনশো একুশ টাকা এবং ঊনষাট পয়সা"
    );
});

test("আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার এবং তিনশো একুশ টাকা", () => {
    // "আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার এবং তিনশো একুশ টাকা"
    expect(numbertobanglawords(987654321)).toBe(
        "আটানব্বই কোটি ছিয়াত্তর লাখ চুয়ান্ন হাজার এবং তিনশো একুশ টাকা"
    );
});
