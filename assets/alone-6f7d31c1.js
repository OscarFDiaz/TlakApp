const q="data:audio/mpeg;base64,//NExAAQaJ38AVgwAFN2qAAxsgcGGYCVkUqRuNyuNxunz7vD8889YYcYwECEDwGF0Dhd///1QQd9PKAhLn8EIPh8uH1Ag78uH4P8oc1ggncwzgqx5nNeOTxHCbHZijAi//NExBEWcdKsAY+AAMXIGaeM3Eel8WMRiKAKyRqbl8LZByozxPCAwj0jiMU3KyKDS8jRb+nspG6lt260js86zpofLyKkf+6DKXXWgs2NVFgX/OM8yFact/HULLPIwRAo//NExAoUWaasAdiIAD6cOf9WFFq31v8Sab2xcZe3s4XAaYUQtEoNUljRY+iitqaKpX5zptWz9taHXqRdToouXibqdrrdqSdCjWpzS91KmtHFjVl9dYTl90iby4h0Vbc2//NExAsVAOaoAMYOcDJ0ku0I6ESNfwbGNJiuETSBncUtFTxXKYjI1McCw2cqmUJrKLq2VOexwhMJpBo0ssWKB00hCBriK2xSQtnaOmmjsttsst+imiie7ig2TZzsCEBM//NExAoVGV6cAMYKlIiEuBEyY8plxwc1KQ5FSaltymFBxmSqzHuDjWsJTh2acG1/0X7+ey5rpnUpY11oj2bbn0XkoU1RgEEtpwRTzTTL+79nQ1kj///9Ki6GM2OoRYLK//NExAgT+X6UANYKlKMmBWq5jbxGCnMOpUOgl+/F2wkooGpJWGGdd9xTwL62aWTNT/eiLc129/0lr/uflbJ34t31985fQoMALIzuwtUYWHVGF1f/00E7+QCYmSTEmUkI//NExAsSGI6UANZwTADpq/1HQC4dxo0DDzdULp6laSgBilO0dvZW2gjYEFt2ITvlqmNlToNGirgaNCGDXI/pgGs7j+BXf/////1qMKDF+tfMeXwdfuqSgxn9YZsEKaAw//NExBUSgVKEANvElAjSyNAHNLJBcKiMulH6hCUe7YAYwv3cR/T5cf86/z/86/37///91dAzVs9UhwAc/6kf//+XTBmZIiAEq4gvktUe4ciU6xgDoKVmJCtsJ6nCwJxi//NExB4SaU6UANPElFcZC5IKDnHWZBpMw9CtV/f2gR74p/m/ze6df25O//q5DjlHPv5d/tyH0bddn5+YWmPbou+q0AulZ1A0BBWGEEi/yBECSESr5txJTkSHkphgEOGc//NExCcWEVakANZKlLjUSM1cs260y+lz+0l/96sa79jVXWlqK//2/VGYoMUNEVl3ooURqdf1dbSadv//7OZVns6yspcyl+VDuG/7pE0evYvkKFlw3FnwMZYfyfUKJXvX//NExCESeU6wAMYElL4iakVP1q0fv7ypuf93n/rHUnV+///RZQYGolAdlNYQ67t7P////+soinM4gCwznbwJq4Vm5TDe6PCJB40OVL6Yir/rPCUH0thn5FDhrr0SPf7k//NExCoSkZqwAMZElBz90vf+t0O+3v169Og6qcE+h3y8p6mG89Z1f////9TaKscsZ8bvIrENgyqBLt4ZGN2tZVifMfxqlQw1o2CjFwzFaAAM8pKdiCrfb//wHqfZZbVW//NExDIPiLKwAMYeTOgxMyNEobhhbOW/9VW/u4z0xAq/AAE86tNJR3JFKirtGExyuelJbqm7H0q164PApgJpx+hZ1f+5Ytf9TsHnidynlHfFXCA8s9fIgcCxKp/G+loH//NExEYQKLKwAMYwTIsgp03ASDA9HKDZRV16UCBCI1X1D2CzkrQFs1svQCFBYK3a1ZxaXCVy7LudbIDkoeh9QZKfvWDwuERRmLvFn///T////1WEd8ksRp50UQJepa7D//NExFgSqK6sAM4wTIH5ilKgwuYEJWi1P4RZoctNQPQW0xD/EzJa4Q4zNvEPP8OvxQzoxp0zp//5YhbHm2M+WIAqKf/+hZD2yW2I00cZBumJYqOAzqBtZ6hJLi/AJfqL//NExGARYX6oAMPElFyELWn3oTAQdfleCMsC2QgB6D1x853PR6Z6Z6WMU1U//3Y4ePFT622CP//+sYp36zYQbLSRrLIMkJbNeIAQOpQNJS0a9dwAWAN9nKE1oeuIeU1E//NExG0R2UKkAMYOcLBhVgkK1DAuOoEeIbrWupRfQ/NVn///LnUAoQtWGSYLBz//+PMVgC7ARxIJ5TKwQmPIniBFA0dMygrVXvukNBy0tiFe4CgMsgMQxRgpLsPSgxTq//NExHgSmUKcANYGcB2nDPVJzd6nZTv/74M6WUm0VGgR1f//////62oa4TvpZqDQktDLMw8nDEbLAoWG02RI57Jc9CzdT6YWUMJtiyIvCXdzx1Ce4WP397/qZbpeDtor//NExIASATKcAM4EcFQe0//yhhBXWyvmKkIUSFnH31pofaQTq0NGssfBymHQOgpbt4IhzgA+4kU9hm32HLWAMkVOJSVUooK6ifXN8f8m1Dcjb4OhdMWDh1cs8mDX93////NExIsSqWqMANYGlf///66aHgKVw8ciBqu2BBYSdmbBccMfFVsGwDtJrIkxcvYQtYyuEKcnpZuqQCWylQjEhTzKlTbmvY27IalTbf6snU9ZQPrDSDv///////qqZJBi//NExJMRIPaIANPQcDacYeKaJ7GBqA8PFUDC4gTWyjayOGPZrHS5YG6y7p6xbwaxX0Z1FTCradEn1JaiIRiJ5E6I0ooE4Ust/Fv1/////5hVJgtiZYLjLYseCmbpBt2Z//NExKESkUKAANvOcBtuZqEQYeg9TVWV6yRCSOa1B3eSmvXOlsFO5maRDiWg9EFn1kHUFtvy3EwIYaQwScd/gBX5WS////+ZEn7NS2R73g0ajCTbAVAVqLAuIFyHGbLl//NExKkRqUJ8ANvKcMJNEZurSb7ca8fTXQQpWU9y3uaeYfIRSt9r/P3z7/ul4kLhrkPtEJn9IxUT6zgyFAQhmtGDgz+X1N2CvwXUbedXB6YPkpOJUveSd4xTDoKDxYsY//NExLUSgUZwANvKcCe03XmVS3Z4qih8yn/1/8YmU0c/pjiyR6kolSTpNTjXYk9I4Cvyq4sRlbfPk31qrs0tOA0afdJVv9x31tblVFNll3+Zddmtg0xUS6LSyP6AhYaj//NExL4QkT5wANJMcKs1VL//dGYqKR+9HYoUahvi6gUlQuVOzRQ/KKeKu7BEDSm11clKnwsikbhP+qlK4esTFKGDRC6VVcc/9eMNUI7Rs//7yqGYGWxkGq+v///JqoKr//NExM4RYT5kANJQcFVLVcgECBcWX/jqSjHwJNDrWoeoYrASgTEXdsIlSElwQmuRCYq5Fq2SltxmW9b3kiRz/684cDEc1gYKuf//XlqnGrnJcQgqkl1PZLKDpYe4rUBQ//NExNsRme5cAMpEmNajwKgtRLfI/Pfz3kYL0WYgZKCXmoeShVyeXK8u2BjAAMIEdBxIYKCDvPrWA7Khkf/2WWf/ZZLHI//I1ay2WWWUGCEhoGRQWFhYWFRGZ5oGRUWE//NExOcTIdpEAMJGmYa5kJCwqzFBY0DIqLN/+oWqTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExO0U8UIUAMJMcDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOwVkXEsAHjGlDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
