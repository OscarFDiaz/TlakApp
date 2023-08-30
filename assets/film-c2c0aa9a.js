const q="data:audio/mpeg;base64,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";export{q as default};