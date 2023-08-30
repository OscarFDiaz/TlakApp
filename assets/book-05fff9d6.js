const q="data:audio/mpeg;base64,//NExAAQmO4kANDEcAGOOUwMChDgSibjPjFrMsxuACKacQv4lEU0/+dGPWyuTorgAwEBcmQJkCjucHOLvgiFgH5H917i7zjhpDtOez+3fWo+qqTAZHMRgUFAN9qSTSOV//NExBASqOpMAVwQAONi3nXlcvp86SxhhzuWHDsZVWjaZl6K3u6gnDYFKvQ9F3GEKYodELNEhf2Jctjrl/eh7jNUIs9aBnC9ObGIFDn9apnh4anM1s2Tv+RU50bXW7b4//NExBgWqkpsAZugADyE8lUvoIAMCgMQGE0ovQ4G2NB5i4KU9XybcnywVP/xmCNHGT6zf//N1GhoiT5n//+buzoJMm3///5m5k4QR///4JouLCYJKiIG6U2YcYUQBNMk//NExBAWaRaYAdl4AABohqPGLOLQMNQTt2XMoepe9jtMwbM9y0UjwaJYgJEI2EWXRTKhKxG6BXw84+fj0+a7+6/VZL7zJv7lUA1K3qCaxUuwWMN/qi1FX/jJDAROKll4//NExAkSiRagAMYKcG7l1QQQA7lNsEIUDo63cmJT0jDGz2OqrsVfBIwSKCnWocCwUOCxWQpkZ9n7dmolzIzjkFiItujaixYNB483/D4MqmfWYiHnT2AhdB73YmZti/sJ//NExBEUCSKUAM5KcOPkKmcBCBTWNRgiKwgwtwr6NsoTibgluXPfkEFAZ1A4qRna7N7PpRjOtrOomLUkqFuhhKSQRO/i9ZUJB5zf9dUiZkMODfN55gY+LzSpBAfD64UM//NExBMWWSqMAM4WcI2cEvROMC8pU0oGMUlH05F9zsOIfcnS94GJKlxdbzdDeVTXfxzH7vhrdu22yXlln1WsPCyiy2NeC7uzVxI8Jqt/z1yv//0qIh7nNGNqLaFHDAQC//NExAwU+X6IANPElCRM2FUQYfamzwaxMCyLoGWrRzDvR0wsSuhjQHjM0iEjpbRyq+BFd072Xf1v/99mlYjHlqHEgzs7/+vNOEMeD/6bJlbP////0VrRJooWghl4DLQR//NExAsR6QaIAM4WcMGhiMQe6b50RZj+yRpTnXqZE7OU0kZ07Tq2a1aBoyAiOthqRqZDuY/+G/1265fUoCwNPaJHe2Of3DvXFVKq6kpMruVOIYiYlLA7dgEE76QG6pOu//NExBYRURJ8AMvWcIyo6tIKmsQZHkrmyySu7h5FLJTyqETiLfmP/hvM09tHycqx506dV5X4lgyPdv2kKh/RQwLiAYpJVdBjjTrvCk9ZwNKwmhKspkrlUOYqykKlxSFQ//NExCMQmLJcAMpSTDJwzYVdGCJ9CX5UiWDZ2eZp+nXU+LiVQUeHT3////11OUNwCFgYBcqGGnv5Nz03LKfLCvrlvHLdbDPDmZGMDBbCAYl0p9AsIoaJVB9jEVPZ1xTv//NExDMRmLZEAVsYAMB730Y3YW0yST/lb+hV9vpxuzNqNNF1ajYQR0gWJ1n8pntpZdIbudep2nsXDweaPOD4ZI0Ox41LmgjCMGR6iIzioqUXALgoSofE01QoyBljbFFP//NExD8gMyI8AZtAAD0G0lSc5s3qPtdp52VEa63ibuVHXUXU3xMXb11GMWetK4UyqZ+Ko9niKHCtczufHLuNV/SHp5l4sam/zKUPe3hbOjfw4suek8hUPlpY43dFY/5M//NExBEV0eKkAYxYADUdqrTtPtx9wbEw6i5E0r8RR9UM0CgnmaJqxlP97Hw2lHVX/9dw6Pib///7Yxj+ncbkX/LWzCVB854fFgx1/y+nxgm8qqYqOgrmFWxXs0JTOLUe//NExAwSGP6YAc9IAEzp9hizUevcbkfRtp00qy6PSJtaJmqsKgiCwmUJmpeMc+RjuyljK2xSzb/+gu6kOMeEw6nb///2kWpFfXWqTGuhrT7NCswWIZFWfPDy8kWl531z//NExBYQWeaIAGGEmHJkwiUBkCdmsJRw7raMUAMcZNOnRlT9qs62fq/dWqvslNnMCFsa5////20KGESbf8F7rD16X0AqJ6uLneri76zaBdba1jTVarAiFRNohBImki3y//NExCcSeQJoAHsScEW+poc1VChRA0eEttU6oOkZUFZLlQV1BUNhpAqCs7///+WTNWRmgNOW8RHV4zd5IvT3MS8zLzIz7UrrNZaQkQhGg+HyAnMNMoipxJeBoChUWFjQ//NExDAQuOWwAMBScDIoJDX//1ioqJA8aWKEn////i5MQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExEAAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExJMAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};