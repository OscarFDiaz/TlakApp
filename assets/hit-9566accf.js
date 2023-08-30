const V="data:audio/mpeg;base64,//NExAAQsHIQAMhGSBdw4YUAzFZ7kQs9GwA4DEVkUOYQYQDhPFgiBBr+gVfa6oBsGgSOJB84ICand5Qu9+oAX58EBP1gQBl/CJ8gT+o59SEz4y7U7K3bjbD5PKH/dtnc//NExBASAbpUAMlKlF8Y2Bw+7kIRqSs9Rd553Wn+Rc9TumIDgIJmEQDF4m5xgAAQUOhOmm08hJz5z87qKRB0//uOeGInFnW7E3a7WkeXJfKXeilakscT6ewTRvX84Q/8//NExBsYSl50AMJQuP3/e//f8zLpOm6tRCKydI6No0iqAaeaP3BWPSQmBYZxuiULusfuXCcEPeHCTSJN6c/f8Vff/x/z/z5Z8nuBAfSGIRPtn8oqUMfZ7gXxjAOh4RD///NExAwVYk6QAHlOuELVDW7YNvuLGYTQquRXcm8//0kU9Jw+hRQYLDhcgkMA4iKXEcJBqaE6nkzVc9Ecw29KpP0MMHTjknoZVO3/1X/X1VioVeehafjae+nvRlG0K4DU//NExAkSqUKgAM4KcA7tKyl1zTZBx2/iTovhQ1Pu0kb1h2/lY53vHnql9e9uZyMgwYhw+AAgo8QAgcKKkeogsc419UDrLEy7NG35x/18daTHlSPheqrbFLHRDU5qEasr//NExBEWQUKsAMPYcOwcCqVFZ4DjDxjKGOVseHbPluOvdlJtl8iYj9eoPiyYnYThuev1TiWkb2pUHw8jffxmOA4A0APD5kcMFz5mBGhBTurb////6q43gswSDOpXz4DC//NExAsTOUK0AH4ScIO9XmAoRkMJpZuVrHkOXblLLdfnT63LUQw2oMNXq4XBZGygUQ/bva2pV/W9CqhWgVkQoEoC7kqYxN1bihaAw4Qd0JX3B4wLEM69kBrrNlgkTjSZ//NExBEWSdKoAMPOlRvIMF6L2hZgA9gkRTK9VoQcSi0pFLmPeSWskCWFaBJK+iQm0H4FBKF40ljEkzZxQsk1WSaUOaNyYknHF0fP9P9NfdCiopVJBtVxtSsVKTFeWViM//NExAoToTqkAMYWcGjwwRyhwxkODmlwS4byIrM5ZRDMCyvT80FHCO0u6TE65CLYdcqcOZKXKySCCJBAG0nW06q+J4maiv7eqWpDjdX/F3w0tU4IeXooKTYaIgNdcvKp//NExA4RcOKkAVhgAOZ8hYkcRIgFWCEK4iMP3n3s0Mg3SNE/V9b9Km8co9er/VLTxGWAVcQ7QWEIYYlSlKfBp5vT/9WtFJJkOCUL0I6AHjhhAJAMEV4JKbRiMYSU5V9W//NExBsZIdqoAY94AKtfIZdijX+YvY4WnsK0KsF7YlSij0UD21awhuyf4/8Cu8a3WDX2z61//j+98etm5/bdv///n/eqelM7t//m838zF5n/+q9ns/kVIxtOd6LSVoLD//NExAkRQb58AdhQAGhhmLOkoEWyUuty67Lf3jrPn75dq0pm1bnHD4BYAsF8THG/+6P7uahMYLVWav///6mj0NI//////W0WFjonhDSeg+ZcovcrFSRmpDoEMHj9Oq4j//NExBcQYSZQANrOcIPS13F33e/2Q00RQGiwbHmnUqraoddqsVOFQ0Sq/+6DQl/Ts////65VAdU4bJ2pG6eUzG7E1uklQROEhEjKjM9FslaoQ9DLo6XTb7jPW8OvYeFq//NExCgRoO5AAOlEcIURHKljLzNgshZVw+MQpqJH1JboaT9SrbLmwjUKupU4rEgcKkhnZiUpnaWKnrQqjF1S5aGtW+vMXQEChksw84cdQ3i5JCAVO3jmB2PIir+wWyVJ//NExDQRQLY0AODETNJvzr6iz+gVZsLUb1L7MUebNcpSbBDCJerLoqBTmpSqgJKokNA0WEqxE+s2CoiApZpkFTsSyp1yVLeecoKR5Gyw9+Pct2GlypX55vFEctUe9DVd//NExEIQ+EoYANpGJLgqM2ARpgogeHSZWs7uVYE5NSawmpNUYLSZYZMFcSGBoOJDBQaPQBWD2OQLEgqAgmGRiAq2gChQPD6k//qJAUV+z//4pUxBTUUzLjk5TEFNRTMu//NExFEQqL3IAMjGTDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExGEAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";export{V as default};