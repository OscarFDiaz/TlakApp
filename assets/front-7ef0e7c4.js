const q="data:audio/mpeg;base64,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";export{q as default};
