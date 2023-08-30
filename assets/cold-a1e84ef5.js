const q="data:audio/mpeg;base64,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";export{q as default};
