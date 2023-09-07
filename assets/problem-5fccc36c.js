const q="data:audio/mpeg;base64,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";export{q as default};