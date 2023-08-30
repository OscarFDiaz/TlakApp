const q="data:audio/mpeg;base64,//NExAASaNYYANjMcDqyU15yImARBRMAMYX5chyX56IDA3dygiuacMIDFoV3F/L/h9v2UMBzlA+KgRQnbzjoYfWfLgdj4fD7vJz/7f0H/U7/6ZNjC7yaAwKYLCS8WTyj//NExAkQ+rZkAKCEuNqTSW6F5X87kfRTnz/3zghpmfOnam3vWRqEJ9T/q/6N7//0Y70a1LyE29vzt58+d0JO4tATIecNROshBSTjq22UiZt7X8e5Zrl/EcUpp7z3m8xN//NExBgWyyKEAGhQvC/x///rf18f//Ff2n08X1Hzfwt/Cj0MsUIlyJdjJFBElyxiECkLCC48yWiJBo7uH4oCsF4+RcSAEp3EAdBYucHAeEIqACDQmHJhkvZEc/+X/+v///NExA8Vgx6cAFhWvP//3/uX//////9/zN/x/8Tz98fzsOQzvh/dUfayovfezUOILOHYc1U0z0PXJxuokWEtNc0JBWak6D6RtYOERsK2EgyclJqeAA6GNQ3//////y/n//NExAwUMyKkAChUvLL/9Pz///+1vR9261XzNERJFuhKQL86pQ6YSEk01qnnEqEY+FceE5OaLZQkGAsDYxhNJjwnCICwF6LQrEY8GgiBZE8jOgFP/p/////9ow1j///2//NExA4U2x6kAChWvAP////////9cQ7+v72zdPnua3VMKcPhkRXvqt/LN9slp1a2Qek6TUw+AjD4SzNAreNgIBDlrxQAcDw0fybqDvL5Olh40ZUIan/////9f7Nn9//+//NExA0T2xqoABBavWfbq/+vV1L/1q/V3s662qskpSq2QZFTOpZoXT5qgibLd0Ul3NnONOmajAYYcxLF4T0gg2haFg6GiY4CAeKy+s8YvOoKsdeZtVf/RdaE2Qjz38gR//NExBAWow6kADiUucjMyUW9N0tb5pxBduydu2nMz3r51fdtk12si9KoTq9mu2eeVPOMPJFPTZDCFSAWCMqWGQtnmyI8oPCgsiUKggwxElSMTRNIAugiemSPe8isU5Bz//NExAgTAuKwAHqEuS2tXzieACQNCC/2cBIBUJDNsyts+8wy60HhILBk9a2u/+2+QZvNbqv//+////l//6l/UremmZ8xjSlKGAgIVFYfkN4mrX6tLemgD5xsqWMw6iEe//NExA8TaSasAMZWcGC3sagCq/KSSEOGOWHwBZ5+8sT1/UkE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";export{q as default};
