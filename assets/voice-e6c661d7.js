const q="data:audio/mpeg;base64,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yW5SG0QQQo9QXxKRBiULhRUKKv////////NExEkQYyKkADgavP//5/////////+6p6etlNNNs7TGYyUHUu10uSKu+hxlh2hYbi8CAOACwDwGioBpMoNhFEYdA0XAOHgPEIBowUGqCcJzBuYimPT////////+dt7d//NExFoR2x6oAIBOvW/sq2VzXSXLLJz2ZR4bDUF4klRoNzCYijY4mPk2IiQYTJjIOAGHnDxgigHMfS//////9/5////////////+gzaq9Stq13dSaKrulWb51M2TUZLl//NExGUO4xqoADgOvbNDc+eYmsSaQ2EoMQly0mGBOGSCfD4OcfBnL5YcXgykA2KCa1Lur////////+y06n926VNc5XmnuiqadV5rIYPKaWOMC5eAOXALFojCSDhwdIRG//NExHwRsx6kAGhavcDoeB6cXWoA9WMdVf1////+v/////////////9/1o7uznHtNVHMZamI5pKlzldGYaj4hOPOcKgBYeCU4hRNIwqiYDYIsBciCQIUbBdBPLITtQAx//NExIgO0xqkAGgOvMLjUxWOdLf////X/9f+s25qTDlb2ztGNPVTJpymnHKxiDQhJDQoODpMVDQqcJQmLjhNgQGgiBMGhJEQeHgnFAsHGQG8Ih/1f////+Xv//+R//3///NExJ8SayagAFBUvP/////o9PbN7uqOajsc1TWNnOhxIbA+Gw2Gw2aPElZB0IR8gNwWjUakAWg9FIBKDUalRaIpglUDUY/GgXXX9JaSSO+YS5v/80R+fPfNVvPFU/////NExKgQ8yKcADgOvP/9v+u//dfbK3qUpWoblLTKYxnVkfQz6GV0dQoCMKXKGFBUFKo1ZDjFwda83GHpu1uoJDASiCIiWKhmsqOmxnE+AgLiYUHgIGZFzGUhsKvNLWxB//NExLcR0xqQAJBOvQFlST2r3LqKntiaEpU9tfvtsZ6GX2s6tVU4JYUuSIJDpMYAkDg0kEQSNsMiIKCU6giDQGIiVwKsvQJBY0IjxppR1mMq0E7pQddLKBlEJP1gEQ1s//NExMIQGxpsAKhEvEVPaWNGLUwl4SHvkdLqVTe+QpOjPgsSDgUEu8DIFJQkioChhQEVmjfOCkpIK/UoLB6b5vPm6TBmjsnYm/bIK1LCf/+Cm///FRHf/4/50LJsn+Rv//NExNQRiKpEAODETLB0bX8O/wXxnGwXI3puIMlBfGowHCqCA4oIveigpevRm73P7HhGKCdA2oknCeSjV3V1GQMEDBgqhkf8MmUMDBAgYRzLuFRUWFhYW/oHigsLeAgk//NExOASECIwAOJGAC4qIzP/FhVJkWbioqLCxrxYWkxBTUUzLjk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOoVqFIEANpGJTk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExOYUcOksAMJGcDk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
