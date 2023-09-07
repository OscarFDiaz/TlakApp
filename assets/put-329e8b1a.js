const V="data:audio/mpeg;base64,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";export{V as default};