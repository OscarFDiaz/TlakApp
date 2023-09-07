const q="data:audio/mpeg;base64,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eaWq1X72vZufmuTWFh45V2j/0dv///////NExI4R6SqgAMYWcPpqU9RIMCZYqo8GjwfZXN92QwsNQ9netNKq7hqj52l5dsX89dWxcmRF4PgjPlGLJd/7N/1ZpEbkl3f/rLOq/////6fi1UNcBbk7ZdAnobZAdrxz//NExJkR0S6cAMYQcGc4xCLCIxa2OSr7IhXOIMLG2Xft+6f0nCjOdlOrMz///+5CKf7K/9s79G/nOshCMdtTnOf6n60CADIAAB6nQQwcWHAzwuijzSkjwCi3+0Sp/zsh//NExKQQmTaQAMYOcH0TheyUhEVEYSvNeX9aMO+coxyW/38//Wn8lLdrcl8rY/x8caj4y2mkEI/NQrkyU0l5/v9SbRKTLyrTKxDNfpUykjQNoiUQkQ0jOFgyqwhkAolM//NExLQVAwKQAHlEuIeXMrsjomIyMKiMZAsVox4HY2m////r///8/9f85f//////x1//1vf9RF77Xjdi1YbtLSlTM9XfC8RsT2OEdWhZPLPgg8YkDBcXmNRc9aRRQoHb//NExLMb+x6MADBSvZKdEBSIY84CH/9P//l//5Hv///n8F////VdO26n0/khxN1aVdCZdW91fZ1HpBLOh6SMWBgIpkG4sioWNOGwvHCIYuWHoxBUIEfOQOLxIYgGxC0B//NExJYSgyKUADhQvF///////73+X///////16LTqtv+aqN0o9LWZEQy/WpQsjNZ0Ijxso4SkgxHw3NJxoTEEgQuIgkBtIjCAfkYiAuwbBkAIBYUAOB+XGiq7Kr///////NExJ8SuyKUAChUvP//0052Yzoin/ffPnzDaMxO7TFmo5CYeZcw8kIyEtQ08hHgVgOhZAphRhbFUCQLpBUJEARC087//////+///0Xr0avtNZTc4jJTaljTGuphAYqs//NExKcSAx6cAChUvULDMoaQjIlHpwvPBeAuC/AEiGAoAhiqIEWRUGhVqgGjQ9G3///////9/f////////787a6aEdjHd0ZarV7Mm5qqXOQye5rnmERiVNUwwqhh6EYg//NExLIPux6gADgUvGhCImYRiEIQvhiF4DAhguQHgpSaAwtN/////6/1//stVbOmja9u6TVpVT55k1dlpau5xKpE1WmbmxcnDMaDhibMbj1JAxJMTMN0aC8ajhMDcgmS//NExMYPYxqgAFAUveoBtSq///v7kOV+yOyOcoTkf//7P9////806d3fNTDrmZnpvE8y6Oql1NpbQdE0fu3b6Wl/J1swePdqnoNZe06PQ9CHSRaeIMdo7h0jeOk0J65s//NExNsSMyKYADhUvFxCjUA9AelBOL1DUlAEiwsQWdUDi6P+t/58XL/P/+f/n/ni7j//i////4ml7+27tWlDpNiVVTV8qJrlY4i5JN1qF+G5mOaeIaPWo1GOOnhiRQGw//NExOUP0yKUADgavNFQVD4sYC4eC0ORYFwgjnD0pgkLvHCt/rooot/y8xn/lb//7/9ZgI0pf5f//X1ZDF6GlK/ZHoyGMY3ylQxjB4pStNUpnqX+yGMZTGMZ6GDzGMJB//NExPgZGyZ8AJBWvOFiqAoGFnEQKKlUOiwzEM3A19nZufax5vkqNX5NXLesia1DnCplpWAqxVVY3sUagJUBJV1WMKuUYU9Ei8FhHcO8rN52Xzf4UKO6ifSbCmm+F/H8//NExOYUwxZ0AGhQuRpvzTDePv+L4WX/L74W+P6DeFJaElE+IyTAt5kA2EBcmISiMwaAQwUGjjClDUUEhrpAQSFxGGQWFhURmf80KigsaCoqLX/4CFhcVMuFhVn8Wb////NExOYTOx5UAICKvOtMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOwWYRIEANJGcTk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOUQAGkkAHpGKDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};