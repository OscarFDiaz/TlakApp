const q="data:audio/mpeg;base64,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";export{q as default};