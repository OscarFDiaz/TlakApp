const q="data:audio/mpeg;base64,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";export{q as default};