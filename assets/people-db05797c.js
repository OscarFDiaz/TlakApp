const q="data:audio/mpeg;base64,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";export{q as default};