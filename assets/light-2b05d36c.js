const q="data:audio/mpeg;base64,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";export{q as default};