const q="data:audio/mpeg;base64,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FoaDOghSbBsDDBYASA5Q1egn2XaMuOMu//NExIoRwJJMAVoQAAARwAhhgtN61v21w+QPgGQDYwEGAUYDeNdv/q5JzAih4cwXIOwg////5fNy4XJogyablz////b5o3cI5DY+AoJ21X0aRmpFxK6huN2GApm943uo//NExJYgMvpkAZqYAWobob1duS2rXhOLeqY7K+rCvd6zqnLLmuvCrCjty3ZyuwsDKuHictAi5N8uaSSiHofZeR5VJjkWXBFnuXB8r1uPd+/n9IlK3h4iKOPPmeHPqkfe//NExGge6e6QAc94ADUPZS1qBcYCCz4Z8e/KdVxPL6CFC42/S/19VP36dRX/N1rvfMPS62owgPCXuThwfhYfJDeh7HWQn6dMgfwN0Wysi5Xa8jx0jKGOypQOWGjGJ5AV//NExD8g8wqYADoeufO2MysiWmZ1qA8Z/Ciyq6B+rojyHFj21rOKyyXf5zuNCzRxvApJvX+/vWN4tTO6+uMz73avkiQtenvaJN72pfd9y5vArQIT///////SnOHW2/23//NExA4VEhaoAChYmG8L9ab60rtjyfHLgyLaZlE/Zm1kZXZbP1ZmsWWbpi+ka6uwx9u0taXrV3N7bX6ey1XpAoXDx2ztjGCh5IfXa9EoCRuJUVLVBe/+3////99f88vX//NExAwTKcKsADhSlJ/Zw8undtPuJDiwsiFaIJmZf25JEUkeWcdZJp1cYSyPqVb+1YiFB8iJhMwGApPhM6HBoflUP75xcglTFve+865aDwaRf//////1qupi636NNuoO//NExBIRKcaoAChWlHVxSr1qNHalPPv10ixoCJc41yeeedgz2rwxdCe9qkDDguMChpYlEJVqRt7atO//rcvfXQ3D3+tX///9rnmFf/1/sPkcal7vwRQylERsdELEp3as//NExCARcY6cAGhSlGSSI+iikjxl5Vks8ErAmg4lgNFwiGg6IRVV66xVjm+q9T/W78kpCrcK7+Pu+GyBHxZqVbr/9aGdqggEj38f+1v7YNpqJJKx54fQGSIPxNUPX7Wx//NExC0SAY6AAHiWlMsJRQQxqk5I2JQ7gFDQNPiUBFX6zpY9////kjowloxq7hnKr+NZ0mDOi9sa9SSokFbm/98++cN8trEknIpUDX2vLWtRdc9ZI4WvJsHQhiTZr//m//NExDgR+X5MANGQlAWEIRlFTaRFEtv6P7/s/9Y4A2V9jwGeyVV8rmdbtWBQEqVJjjchfnH6O6UdVK3s1zOpfLT8KdbKna2ni3RahpWRsqWSeRbnhUFT1ziEq7tix5w4//NExEMRySosAODEcH+YJIVVNKxw3GODFQZTGZqpc5NNWBAQ8FVVX+l8DEzaw9lKhVERUCuDRJgllS0Nf8jCfKlcrEoKuJWAqk78qMPdR4NB3qHuEUYBRF1gKoOqTEFN//NExE4SmKX8AODGTEUzLjk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExFYAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKkAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";export{q as default};
