const q="data:audio/mpeg;base64,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";export{q as default};