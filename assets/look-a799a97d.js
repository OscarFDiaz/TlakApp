const q="data:audio/mpeg;base64,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";export{q as default};
