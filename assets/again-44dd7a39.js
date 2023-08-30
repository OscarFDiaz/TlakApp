const q="data:audio/mpeg;base64,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";export{q as default};
