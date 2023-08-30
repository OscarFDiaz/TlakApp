const q="data:audio/mpeg;base64,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";export{q as default};
