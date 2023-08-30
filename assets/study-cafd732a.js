const q="data:audio/mpeg;base64,//NExAARESYUAU8QAC5uRPBCAkAhhcFRTEB5Ep7w37yJrN733QDAzyEIygBG/IT85CVO//yAYfBA58SBiT4nPlwfD+9RzwfeD5RxMu///xIGFWL4BJ98JOzxywz3Y597//NExA4VMyJ4AZkoAf8FyudJfv6r/Yzsqv/R7pNd01+5qNuYjr/bkVyHK+2Wh2f/6yGZlGKyDinSOFRQMB2Ujf/+JMRzD2sRmE0w+USOUpykFI9tACEBdfq5ye7fv7f2//NExAwVcxKMAco4Af/v/7/+rIp9m9/3+vVT/NVLmfrV20RTypzUkxxSY6YYzjQaGFRvYgrjd2MWUY8mYI5McIDQwdLjgOGQaD58bnETh8bkHNPHCB49BXWV/bb///////NExAkUQxqcAGhQvf////NzP/////v//m//W7/jtO2q+6hYu3taexNRrniEQPsORosojip0qqC7EFlDgVsHGuNBuIZQc3jXcfBowGiyZkjbF0DiFADxKm///////7////NExAsUixqgADhQvf/P2x///////Ubdde/20+8xPa/ySlmzww1K3mVtCwjUs+DxHFYnE5JziGpQvSnh0GzMTiOYKHNAwSCGC9BxQhDjHguTBEHUKg9Hv///////kv////NExAsUYxqoAGhQvf5f////+9/+tb/8PE//Ev/evQyaXdFYQ6PmYsgOiEseN5NWdBEEajDkHA0BoDoRCOHZZAEw2HTOfBIVCosjqPShRRKQH7p6By0/////1//////5//NExAwRCw6wADgQuf/q6//5q3/7Z+K+BqwMK7m3mjh0dEMyHtFwWW3YyIcaOJCYAxNKIEq4PHB65Y8cNQ2HmX6NEkLt1QUk/+jf/+f//7/+r/+SB7/////cd/RXX6EI//NExBoRkxqsAFBKvM/KyCZyWYNEg4CoL3Q7Ryi4gRpjCZxA5hIOCpRAaImZSBpSoeoiYRUJiowqFQJG/Tv//nX//P///+phcjV////T+jL7UmU+0Pi7HMjnMxxzzVIJ//NExCYRCxasABBKubCzPYlnY1pWmEWKVzCweOKNDwdUxB7O7scrlGgUrCoNW/9H/////+///+u1////RHpyukrLSlzXTOZhQIiMqigIAYQGkFWGHDpmU0cLiyHMgukc//NExDQSkxqsAChKvSZBQynHR5Tw4V0RmA4gVXRxTRxgiPnq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";export{q as default};
