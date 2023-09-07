const q="data:audio/mpeg;base64,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";export{q as default};