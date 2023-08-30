const q="data:audio/mpeg;base64,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";export{q as default};