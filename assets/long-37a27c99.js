const q="data:audio/mpeg;base64,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";export{q as default};