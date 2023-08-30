const q="data:audio/mpeg;base64,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";export{q as default};
