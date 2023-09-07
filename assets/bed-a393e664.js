const q="data:audio/mpeg;base64,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";export{q as default};