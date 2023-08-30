const q="data:audio/mpeg;base64,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";export{q as default};
