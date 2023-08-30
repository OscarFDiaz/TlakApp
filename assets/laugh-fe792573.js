const q="data:audio/mpeg;base64,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";export{q as default};
