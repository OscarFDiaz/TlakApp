const V="data:audio/mpeg;base64,//NExAAREDH0AVgYACz5jWcanWpvOhW2BMRplaxm9b/wfB8oD5QMQTB94IHNQIFDgnD/UcKAhwQ/9TigIO1Ag7KAhUD7/4Pg+H/ygYWH1g+H1TLAIyNvZMaIeza/9/7M//NExA4VOxZ4AZo4ALf/vu3P/g8B4Q/wCxLPP/88wHgPC3/4PyRASwFhP//jQSGUoJAl///jcmQGjKTQH////43JjQye5hM8mQ/////zGTG4+TwwjkDRFHRbtyGi8EGw//NExAwTeS6wAdhIAKRlEnuJD8JZPeqQA/FqZlGt2IYqSZPK1zU5Cg90gQdABz04KR9ZfuXvZZ8vfk5oCCpLiZbzwCQRc7qDF3fd666E00oa02BUt7m9CRdJiIZwNVgo//NExBEVySKoAMYecMxkkqRLdBWK0snbWzNuPFcnDiVrKhjYUiCcXhoN65PUcaEsyvhRo2bWxutdetaZkhatGnkYrEmf+gYQt6P/DiBdv//934uqSYztDWLWFMRrk88U//NExAwU0ZKkAMYElEYelKbhRJ+poYuryvEkSZD2TUeNOsy9m6EazuOPTTKqT8bgNhkqqx+rxQI1GzPiWUDWHccgGFdH1X/v3z0Dmu84ptAszUpyakIbfBc05moeLmrS//NExAsU+ZKgAMYKlMMqn4jb7jYo1JABxWG80R4c6RWS/I480nOw0adtwSu6JxBCe2smuvry9Q69w7paWiDljhMwWHkctb/v3206K41mt6zaGKCf99Eum/WQLrzhK0o3//NExAoUgZKcAMZOlLpDFmKZlUI8ay+4uE/VIh4t7CqsexK14L+/FpdiPohwLPzraW8KCLb+x3yhLeiO09o/MIANMMMOzH3/T5h2tDR6j1nkxFb/6RZ63kJjSLQwOUNY//NExAsSUYqYAM4OlEGm+BC5ouok1UVnCaUcOipohUgl3tVEbpixpQu6+7CKueEHa5Gv/l7/Jfvo9y1QsccY71b6fpr3dSj/79HllR4iv0bsgS010bHzgMjtbNIySpfE//NExBQRAK6QAM5eTGV8GEa0KhaupFwYwyVmMHeaLMPQB6gwS2uNYUXXezQBcy5UqBQuVBu5P8uBLP1UGmS0VMA93+khjRB1zBiAQBTz4wGCx2gv6tAHLOq0oQAsFdJi//NExCMRSIqMAM5eTCMJoIhDHYXhYnz9gSqetrPucFQk5INVfhEeS/7P/3f///UqEi65UBNCB0WxHDMt1g5KWHsUSCwE4hJyY8QgIP9WYmHZ0igNqOEBHZvNGcXuNFvV//NExDAR8J6EAM6wTNvc6/VxYGTQz/teaX/hsD/puXZZ///HIhY81tnxvE6QiahjJaRqY4geKYosYCR2VyeIwNDEqLBCJUcYQvaLS8vfVpZVSAwG516v/kRcPqf/SASR//NExDsRWH58ANZwSB/0mv/su//6b8RVFoCjrPD6rgKGMCGGDcBs1jBkRiAoy0MohZV65AMSVMw5xIeetuiVqOicjsW6OkvKS5f///6ejBTsf/WNO/6hdCoBGUQiQefh//NExEgQCSJ0ANYEcKiIG+wUJwa1mqiq5L7ICofYeXYuwxBXyDliSQupwg0wtMRDtstLz6vApjVb79PlnpnFIx9dK7mLEI3/9FRBT3frQeRVN+xR9UhqtJRtAc+pRymg//NExFoSiXpkANPElMQtJqwViKzRiABzF7P6h3BXAGpXsXTOdnnCb+1N2z5Ph/nLZHFOt0ECLxy/iZpkKVivliwb/1I6ANVc03CGJlcMWuK5SJMl2XGWyVWzsJAfIXg4//NExGIRaOZgAMvMcDyAhKPdiqPr0CJ9fztpyu1yMIGwyF0ESYRDIgozla42nbf//////RUDryzVFB8Jb1H2HbMZfinHy1RcxWGzmN45zJHycLgZSuOmG8a1agOLjcci//NExG8Q2LpkANvYTI7jS2+ZayOgEMiwOlbyILUKY1K7GnQnJDMzqfthTJalOP4DLroXVA1A5T/OVOxJyh2ee1o+k5KQEgBgqhouWlZW79VLhszMwq1VVVhhQIwUDrlP//NExH4SoN5UANPMcCwNFrtp0lpIlj2/WCv9XZK///lVNhTFHxmzICaDSMoGpRNWfsJxI9M6lDZq9ZUP/81aGUyZQUArBlRICiop/QFDQVIgsIwy7+3/4oSAor4FFA8+//NExIYRoOI0AMsGcLb+gKt/hJVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJIRULnMANIGTDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJ8AAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";export{V as default};