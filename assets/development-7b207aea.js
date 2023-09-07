const q="data:audio/mpeg;base64,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jgALgwyAZM6GCy5DLH4Kg8Do0WL/S69f//NExHESmKKUAMYeTFWIk8FAJiPY4LaybU6iyKd8lCM9yCFcinZCMc///6eScW1VQJv0SDwR/Bc5uJawLZDFggUNIB5mwirFBlMi2o2LIq4Ud/itXLNW2SImBvQUtZ3q//NExHkSCYJ4ANMElfbMnh6puRFU4p2HUqCbIpUY3//+cDUOiVOmAtiNOngcfJ8LPMONU1mhkouUFDivI4SonuUUSO8ZNeX7rrOHaGYYoV7TQvGliSZs0BCQTHRQimKy//NExIMR8XqAANPElSzuX//92KFceL4qa/PLsNPSBzxfCYhhTCsDho6mqCAGAmCVaGw5BX3NTnWr8QHkTHvfNwbdaZiCmIBQKOoKDDoZLId13eSh/6y57CCOc12962rL//NExI4RSXKEANvElZBzq8uC01NVRoucPPXVaCQKkEQCBDIZVi5QgpymOoJeeTM3KiNHcnCaG/dvm+JuI2OlK4P35/r1R32P+CThp0P88nb/PoFrX6JIqbfKH934bvuG//NExJsSQTqUANPScCathGFgw//f+zX//1V8QijjFaTrczG6Fx0x1SZtjBC6NRfYbOdvsrabKo60y7MtapqOV44bpO531mR7rES146Gm8PpAx2dXssVxeyw8b3PWtv80//NExKUY2X6YANPSlNxp8/DjO0pbQYBckbeq2HguGy7lr+HPraLW///9V61LGflhPWES8OzItDIm0rFRIGhS5t5OZKOwLhBMhxu1O6lOP4n9L5PYqXnBUPALCQPFDqMV//NExJQX8T6gAMYecH5bxadfW718RTzxIeBXizBy2JpJB0Kvu9P1NT///676FUh5Owo1y5PKADA1yRL6KHPdg6AXy2/UtwUdkP5xXXI/hh893MhMq/PuUugXhwSwNcgv//NExIcVEUKkAMYQcLVOY5j+7Wva8oXKMOFTplqpiNakMgWlT/+JUMIv//9bqXBUKMeUJha6HkdzHakSjpjzpQS5MgMlp2kB1c7cgKayTMrPLG1iC4+PC3prm+K+8LMO//NExIUWOUacAM5QcFZZUWUrKUTRu9W+ay6sjhiIGY3t/+qGR1QEMx/t/OqcZ//o/cKKMuBErBQDB4ongIxc0paYLCSqhonq1FVInGrw1G4TBqmro1aCvu5GsbstpeRI//NExH8UgbaUAMvElOzr9VyFQ0HRFDoezP50bJzX/8c8xcioKu/8DSjiP/4FOlv/6P601TkGS/IQGBXo1x41AYGky44kcCrdC0uUOQ0Dya2wvtVAtJaGwR6R3KJajlFO//NExIAUyTp8AN5QcPVGs5TlUKKpV5qOzNOV2dnuLzY2d2WmF0LCoJmTJg0DIqKiwsokkylTRUVFc0aeuprf/9P0qjgIIMNhYteYeGo8TDIpEMliYteYKBaAcwcBzBQB//NExH8YST54ANPMcBKVE6WDcOkwJzzWv1ahfarv/uNWd/dFWj/+/NQXBMd/+UBe//////+uNQQIxEJUUmmwYuF638bMXfWiqYqkJlbnl5sO70xfWPvFdbdF19zFU5Fc//NExHARcT5gAOLOcMh2RndzX1XVnkCYUYPdCLb+gf/6Uf0fs/Qk03T01T00pReSvcKRdry1mQKkuJCXj5rVsW2sX0tCurzJto5uCHPVg0eRehyJQHTMXU9SVpYoXtS6//NExH0RyTZMAOPKcPdWoWe4wwzU32Iu3TNuViWQAiYpMVI7vGDKI+ZytZ1Y1S1vHWGVIunhVUEzmS0sjJTjCqAiwNHQ68kEw5HhoViVaRFQWoW0lTSp+9x4WHzxK5F5//NExIgSqLJAAOPETOzu4BuVQJXrX6vnrq40VDzchZMAgAAhQ4uMZQ1CqoVRKAgVdjQEJQE8Knb4lYJQVeRLB1oBEXBXHAUFTpXrCR6VCYNSJY9u9NT6w71uyp7to/Yo//NExJAScKowAODGTPA0ugvRPh7kgJ2cCPWHNcnGnGlAYgEDBAwQMEDBAgYRxjCXFRXBYWFxUVFRUWFg9/gUVFBZqhYVZFRQW/9YqLahcVpMQU1FMy45OS41TEFNRTMu//NExJkSIDoMAOPGBDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKMP4IU4AHmGSDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};