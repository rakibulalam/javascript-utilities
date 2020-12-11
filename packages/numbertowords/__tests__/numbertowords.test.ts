import englishwords from "../src/numbertowords";

describe("english word translation", () => {
    test("check south asia number format", () => {
        const data: [number, string][] = [
            [undefined, ""],
            [1.05, "one taka and five poisha"],
            [1.5, "one taka and fifty poisha"],
            [1.555, "one taka and fifty-five poisha"],

            [1, "one taka"],
            [10, "ten taka"],
            [100, "one hundred taka"],
            [102, "one hundred and two taka"],
            [1023, "one thousand and twenty-three taka"],
            [12345, "twelve thousand three hundred and forty-five taka"],
            [
                12345678,
                "one core twenty-three lakh forty-five thousand six hundred and seventy-eight taka",
            ],
            [
                123456788,
                "twelve core thirty-four lakh fifty-six thousand seven hundred and eighty-eight taka",
            ],
            [
                1234567889,
                "one hundred twenty-three core forty-five lakh sixty-seven thousand eight hundred and eighty-nine taka",
            ],
            [
                12345678899,
                "one thousand two hundred thirty-four core fifty-six lakh seventy-eight thousand eight hundred and ninety-nine taka",
            ],
            [
                123456788999,
                "twelve thousand three hundred forty-five core sixty-seven lakh eighty-eight thousand nine hundred and ninety-nine taka",
            ],
            [
                1234567889991,
                "one lakh twenty-three thousand four hundred fifty-six core seventy-eight lakh eighty-nine thousand nine hundred and ninety-one taka",
            ],
            [
                12345678899915,
                "one hundred two lakh thirty-four thousand five hundred sixty-seven core eighty-eight lakh ninety-nine thousand nine hundred and fifteen taka",
            ],
            [
                123456788999158,
                "twelve hundred three lakh forty-five thousand six hundred seventy-eight core eighty-nine lakh ninety-nine thousand one hundred and fifty-eight taka",
            ],

            [1000000000000000, "one quadrillion taka"],
            [10000000000000, "one hundred lakh core taka"],
            [1000000000000, "one lakh core taka"],
            [10000000000, "one thousand core taka"],
            [1000000000, "one hundred core taka"],
            [10000000, "one core taka"],
            [100000, "one lakh taka"],
            [1000, "one thousand taka"],
            [100, "one hundred taka"],
            [1, "one taka"],
        ];

        data.forEach(([value, eqvalue]) => {
            expect(englishwords(value)).toBe(eqvalue);
        });
    });
    test("check global number format", () => {
        const data: [number, string][] = [
            [undefined, ""],
            [1.05, "one taka and five poisha"],
            [1.5, "one taka and fifty poisha"],
            [1.555, "one taka and fifty-five poisha"],
            [1, "one taka"],
            [10, "ten taka"],
            [100, "one hundred taka"],
            [102, "one hundred and two taka"],
            [1023, "one thousand and twenty-three taka"],
            [12345, "twelve thousand three hundred and forty-five taka"],
            [
                12345678,
                "twelve million three hundred forty-five thousand six hundred and seventy-eight taka",
            ],
            [
                123456788,
                "one hundred twenty-three million four hundred fifty-six thousand seven hundred and eighty-eight taka",
            ],
            [
                1234567889,
                "one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred and eighty-nine taka",
            ],
            [
                12345678899,
                "twelve billion three hundred forty-five million six hundred seventy-eight thousand eight hundred and ninety-nine taka",
            ],
            [
                123456788999,
                "one hundred twenty-three billion four hundred fifty-six million seven hundred eighty-eight thousand nine hundred and ninety-nine taka",
            ],
            [
                1234567889991,
                "one trillion two hundred thirty-four billion five hundred sixty-seven million eight hundred eighty-nine thousand nine hundred and ninety-one taka",
            ],
            [
                12345678899915,
                "twelve trillion three hundred forty-five billion six hundred seventy-eight million eight hundred ninety-nine thousand nine hundred and fifteen taka",
            ],
            [
                123456788999158,
                "one hundred twenty-three trillion four hundred fifty-six billion seven hundred eighty-eight million nine hundred ninety-nine thousand one hundred and fifty-eight taka",
            ],

            [1000000000000000, "one quadrillion taka"],
            [10000000000000, "ten trillion taka"],
            [1000000000000, "one trillion taka"],
            [10000000000, "ten billion taka"],
            [1000000000, "one billion taka"],
            [10000000, "ten million taka"],
            [100000, "one hundred  thousand taka"],
            [1000, "one thousand taka"],
            [100, "one hundred taka"],
            [1, "one taka"],
        ];

        data.forEach(([value, eqvalue]) => {
            expect(englishwords(value, false)).toBe(eqvalue);
        });
    });
});
