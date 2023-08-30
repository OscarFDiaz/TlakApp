const q="data:audio/mpeg;base64,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";export{q as default};