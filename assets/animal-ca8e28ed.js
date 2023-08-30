const q="data:audio/mpeg;base64,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";export{q as default};
