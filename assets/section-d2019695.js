const q="data:audio/mpeg;base64,//NExAARiOYIAU8YACEK0OMA3AIwVY/1W/ePKUpT5u8eUp83v3OIn+7ucREoAAACUOBi4BizEFQPn1HP/+XD6gTB98oD4P/BBwILD/g+8H+Xfw+qWoFDSBUn2Q9/y9vz//NExAwT0yqQAZIoAOl11fxB+a/0W6MyVIv86bOqDtDH/9WehRchRNh8UOJhD/J4og0x3WVEOKiYfcDh5gHFnT//+jd0ycPkcao4XQeVlHEqAYIn2///////1p///+v///NExA8UUw6gAco4AW7bL1tPznXHFOU46RIsg2eO81mNNIlDkPKnLPSiGGkxeXHjBahhvbsKCDDcwbj5w0sxIcGg4QFBo3YcCc8uKDBq+eoBP//8v/l//5kv7n////////NExBAVgx6gAFBWvF81XN8X8VfsbO6YZHull1LJp0Ps5fqrn0z3XMwfUUbcSmd7adv9jlzQlu0yoaR7HeP7Gyqb20pKzEdTDUZGJUP4+B8OLQgC5TP7Jv//+f///5L///NExA0ViyKkAFBWvP/l/////j/+fjljfpjahn7/7qXOmPhrD7F0H27bGbNeclj5TXib/gfUCSuhSAeh/G0sG81gnvDMRgRA+Fw6DqIjSuSzMkoDca1VBSLZAPGd//////NExAkUMxqoAFBWvf///r///6////////45i//ma+OZ544qerqKpnNXFQ66OLsljFmsdD6o5nLopOnlpNEDYla8wbnWJFxgbD8P5OePQHRCMjU9GQFMIla3v/////////NExAsRuxqwAChOvPP////////TWv/85HfvYxOm9DEUxDkPNY1jJo+hMYJDokiOcOFS5xM8ZEUeLDhU8FUEkH4XAUNgci8V0ga2OwZFZwwQRkxNTN8/75f76R/n/3/y//NExBcRmxq0AEhKvUX/////XIU6MlOr3oZV/cm6/UiZHSlpX0xEUERQNHJXFla6CwKcOnCQsA4K4CistdRI1VMe4JiAaZeicluEawx7rym/TtLed/LeNShn5Rl+Oerr//NExCMSoTa8AH4ScFl53oISJOIzJc0zLKhc57Gcv/tZuZtIK3qMGVE2//iqnlFf/////qUluswC1kuVoEPAhguZlGBBQgoy5Fz7JDdE6DwrQJJXUQEm03pDGlc4cmCY//NExCsRgcbEAJRKlCChMosICjZj1mEUDhJQkJnvMn2///po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";export{q as default};