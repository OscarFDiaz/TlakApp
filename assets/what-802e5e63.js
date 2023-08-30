const V="data:audio/mpeg;base64,//NExAARuHoYAOPMSDio9NULoOSoMEAYDRAFAgIkQKCAIPQJOtQ7sc7e5hZSEEIb+sJkF3ENbyfD5zt4RPn3FzX/o1gR1nn8nIXO/65R31T6hp8gPMVQwufTFBGLAhMu//NExAwSkIpQAOPMTL3OrwsHJowWGWvCwCKCOhK2MdgpBB10xnWPscY5UFr12cmvJwIgSYDjYRMhBbLvQo5Kfb+t5oUd/vOf/p/6KjFg1brI31ACbPFmwxGBDAQRsGAQ//NExBQV4UZsAOZMcDhBXRoRzeELTD6E/OtologSh7t193ftXYvyXyy4BlS56xaUxQRe4g2bbq2Mz3+z/v3//vwYxDyno/ulNsVr//7vb/66M/GE/lSM8IWM+EsUtBI+//NExA8VAMZ4AN4McEw+YKhm/hhmwsjCoEYzgurDl4hAEt0zI27eduNQRG7cPS6pODUL6Csd07bU06IAggCCgAeKLjgGD4IRuZ6TKP//////6SIVFaRdRnJBuQyQy9wu//NExA4VmJ6IANbwTFjbLYVCko18CoKaAJBw40lBkuuZgRI4gYLcBhQAEhRAcYl7/2712HKTvMagZn8qge4QQqy1xQImm/UGCYDAqjlfieOd/////VWdsV4IKsJrkNsw//NExAoU8dqcANSOmG+NC2InmENNIMWGBfDUvEHA1MiyJMizQU8BgR9iMRZQGRBiQlo1BoMzE22ow9/+f1be+4WLcz/+h+ehPo3v00QaTg/////07j5lm/7YAoRMJarQ//NExAkTuSakAM5acPEH6vcr7WjK7dmBZQOghw1bm1U5yxfjhYGLUtRgFtAvwbg8CXHYIigokDXmbdfoe3m2YD0JWT3fgs9LvlHx3////+sRIDiJXqj4iGlftBAbkEt1//NExA0VQSKgAM6gcKgSC0E5yxjjr7foCrX+jMriC1Y3Kp2CFM68amIyAGiLE8KEC1AqjImyDjuLRutRONr+3X1lazj4rKvu/dR7N85D/////7lr6Ip+5KhJAV4HkC2D//NExAsUoSaoAMYecGTRHbm+rkqHIDU0ywgrMNPCCMMZ9EX0gd/2VQTBFp/5SczO3kmQ0aRRqcVxcmS5IevRInpnOL///X/vrd6UvJwpq///KZpBeq//qusKEXje66aJ//NExAsUQRqwAMYecHFIhxmjXMXuIjAb9SRqDOtAMAVa9NRymaqzMH2kQ0/WHCuUgpRpKpC4rF5/rEl41dYzjVdeuKRgeBNiXtTb9XfygiC8hehi/zZnGKBTnzuClqAi//NExA0RCOKwAH4ScIYeF0rOWilwUrGX0fNU0qnJfb//ppA2tK4POOFKxEJjLc5+luflT2ZEDxI0MVoMaO5mxLKH2/VVKz/GaKsEI5nXDvclqrB6b+xfuM0zpl0Zt/+q//NExBsRuTaoAH4QcGrT+GkqMQhVnmZJD8BQbCCahhc8quy/M+9ZRqQ4oFnvAfZ+xh2WTp54eqdUYTbys3H3fRuRRZg6Ya7FkyQugTIDixMqWaO14UzlvOMZxCniaayR//NExCcRuTKcAMPQcNdmEg4YAGCxtXFxM1r/W3/wLFmseQEWVfyuorrAT//TO3pXdWgf6Ps4U3M6k1TjTAMgM0uATmlu476JrBn1kENW6Wpaq541u48tPTXprj0LAkmA//NExDMRsOZsAM4YcAMPxy7lXWXbAUt88HQUPBIBf/iZPMgwcOKSdWXtdMIxxDSYi9BzBCQyVVFy9/pOEwiwm8BrKA6MCSCj4LIKAZcoQ2sFDxHY9L3BLFgMX0Vk391l//NExD8RkFpEANveJDo/RVkf03oVGx4WglCZFLLAGYoGoRlBwmSEhoLiw4kXUFBh85CRpoFGCMASA7FXsIkmJeu0WStlcqkmKJ1A95sTuEbZ8RDvGqWhTydIy3YdUkqq//NExEsSiEI8ANjEJDqugErajb5ZJBQeSUYkhsa4ZkCUJGoVDolJjwbWDQTGDtwCSScKJCSlHQNPKPWbBV51A9Ot0idFCh5znXy43y2+jMtDSFNaRXU4W2MnCWBXYzYT//NExFMSGGYwANDGKAyRxLe6rOAwSBpINXA08WHhJ4lDVYhh1IKh1glOqDsKnSMJQWHseWOksgDQ5q5KdOiJ4TddnXnvjXTtFmKu6zZXTHMgdbDmIkCbUbkVHC1spBnA//NExF0SQFYcANmGJEKGQkSBkSsWAiYKBUYBSpYqRCYCQKgIid/URa+KDwE0f9LR/FgKygKu9n/aPSEiLqQm7UlMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExGcSAE3gANMGJDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExHIAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";export{V as default};
