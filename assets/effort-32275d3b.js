const q="data:audio/mpeg;base64,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";export{q as default};