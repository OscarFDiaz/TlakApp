const q="data:audio/mpeg;base64,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";export{q as default};
