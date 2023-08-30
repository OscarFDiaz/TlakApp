const q="data:audio/mpeg;base64,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";export{q as default};
