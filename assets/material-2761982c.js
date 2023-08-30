const q="data:audio/mpeg;base64,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";export{q as default};